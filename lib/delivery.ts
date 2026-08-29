import {
  KITCHEN_COORD,
  KITCHEN_ORIGIN,
  type DeliveryQuote,
  cleanPin,
  zoneByFee,
  zoneFromDistanceKm,
  zoneFromPincode,
} from "./zones";
import { workerEnv } from "./env";

export type { DeliveryQuote, Zone, ZoneId } from "./zones";
export { KITCHEN_ORIGIN, ZONES, isServiceablePincode, zoneFromPincode, zoneFromDistanceKm } from "./zones";

/** Beyond this, even 441xxx is treated as outside the local Porter run. */
const MAX_DELIVERY_KM = 45;
const ORS_BASE = "https://api.openrouteservice.org";

type LngLat = [number, number];

type RoadHit = {
  km: number;
  durationText: string;
};

const roadCache = new Map<string, { at: number; hit: RoadHit | null }>();
const geocodeCache = new Map<string, { at: number; coord: LngLat | null }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

function orsKey(): string | undefined {
  return workerEnv("ORS_API_KEY");
}

function formatDuration(seconds: number): string {
  const minutes = Math.max(1, Math.round(seconds / 60));
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
}

async function geocodeDestination(key: string, address: string | undefined, pin: string): Promise<LngLat | null> {
  const text = [address?.trim(), pin, "Nagpur", "Maharashtra", "India"].filter(Boolean).join(", ");
  const cached = geocodeCache.get(text);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.coord;

  const url = new URL(`${ORS_BASE}/geocode/search`);
  url.searchParams.set("api_key", key);
  url.searchParams.set("text", text);
  url.searchParams.set("boundary.country", "IN");
  url.searchParams.set("focus.point.lon", String(KITCHEN_COORD[0]));
  url.searchParams.set("focus.point.lat", String(KITCHEN_COORD[1]));
  url.searchParams.set("boundary.circle.lon", String(KITCHEN_COORD[0]));
  url.searchParams.set("boundary.circle.lat", String(KITCHEN_COORD[1]));
  url.searchParams.set("boundary.circle.radius", "50");
  url.searchParams.set("size", "1");

  try {
    const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
    if (!res.ok) {
      geocodeCache.set(text, { at: Date.now(), coord: null });
      return null;
    }
    const data = (await res.json()) as { features?: { geometry?: { coordinates?: number[] } }[] };
    const pair = data.features?.[0]?.geometry?.coordinates;
    if (!pair || pair.length < 2 || !Number.isFinite(pair[0]) || !Number.isFinite(pair[1])) {
      geocodeCache.set(text, { at: Date.now(), coord: null });
      return null;
    }
    const coord: LngLat = [pair[0], pair[1]];
    geocodeCache.set(text, { at: Date.now(), coord });
    return coord;
  } catch {
    return null;
  }
}

async function drivingDistance(key: string, destination: LngLat): Promise<RoadHit | null> {
  try {
    const res = await fetch(`${ORS_BASE}/v2/directions/driving-car`, {
      method: "POST",
      headers: {
        Authorization: key,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coordinates: [KITCHEN_COORD, destination] }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      routes?: { summary?: { distance?: number; duration?: number } }[];
    };
    const summary = data.routes?.[0]?.summary;
    if (summary?.distance == null) return null;
    return {
      km: Math.round((summary.distance / 1000) * 10) / 10,
      durationText: summary.duration != null ? formatDuration(summary.duration) : "",
    };
  } catch {
    return null;
  }
}

async function fetchRoadDistance(address: string | undefined, pin: string): Promise<RoadHit | null> {
  const key = orsKey();
  if (!key) return null;

  const cacheKey = [address?.trim(), pin].filter(Boolean).join("|");
  const cached = roadCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.hit;

  const dest = await geocodeDestination(key, address, pin);
  if (!dest) {
    roadCache.set(cacheKey, { at: Date.now(), hit: null });
    return null;
  }

  const hit = await drivingDistance(key, dest);
  roadCache.set(cacheKey, { at: Date.now(), hit });
  return hit;
}

export async function quoteDelivery(input: { pincode: string; address?: string }): Promise<DeliveryQuote> {
  const pin = cleanPin(input.pincode);
  const pinZone = zoneFromPincode(pin);
  if (!pinZone) {
    return {
      ok: false,
      text: "We deliver only to Nagpur pins 440xxx and 441xxx.",
      source: "pincode",
    };
  }

  const road = await fetchRoadDistance(input.address, pin);

  if (road && road.km > MAX_DELIVERY_KM) {
    return {
      ok: false,
      text: `This address is about ${road.km} km from Great Nag Road — outside our local delivery run.`,
      distanceKm: road.km,
      durationText: road.durationText,
      source: "ors",
    };
  }

  if (road) {
    const distZone = zoneFromDistanceKm(road.km);
    const fee = Math.max(pinZone.fee, distZone.fee);
    const zone = zoneByFee(fee);
    const drive = road.durationText ? ` · ${road.durationText}` : "";
    return {
      ok: true,
      text: `${road.km} km from Great Nag Road${drive}. ${zone.label} transport ₹${fee}.`,
      zoneId: zone.id,
      zoneLabel: zone.label,
      fee,
      distanceKm: road.km,
      durationText: road.durationText,
      source: "ors",
    };
  }

  return {
    ok: true,
    text: `${pinZone.label} transport ₹${pinZone.fee} · ${pinZone.hint}.`,
    zoneId: pinZone.id,
    zoneLabel: pinZone.label,
    fee: pinZone.fee,
    source: "pincode",
  };
}
