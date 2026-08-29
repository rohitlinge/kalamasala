/** Kitchen origin — 16 A Great Nag Road, Nagpur. */
export const KITCHEN_ORIGIN = "16 A Great Nag Road, Nagpur, Maharashtra 440009";
/** OpenRouteService uses [longitude, latitude]. */
export const KITCHEN_COORD: [number, number] = [79.0982, 21.1458];

export type ZoneId = "inner" | "city" | "outer";

export type Zone = {
  id: ZoneId;
  label: string;
  fee: number;
  hint: string;
};

export const ZONES: Record<ZoneId, Zone> = {
  inner: {
    id: "inner",
    label: "Inner city",
    fee: 99,
    hint: "440001–440012 · around Great Nag Road",
  },
  city: {
    id: "city",
    label: "Nagpur city",
    fee: 179,
    hint: "Other 440xxx pins",
  },
  outer: {
    id: "outer",
    label: "Greater Nagpur",
    fee: 210,
    hint: "441xxx · Koradi, MIHAN, Kamptee",
  },
};

const INNER_PIN_MIN = 440001;
const INNER_PIN_MAX = 440012;

export type DeliveryQuote = {
  ok: boolean;
  text: string;
  zoneId?: ZoneId;
  zoneLabel?: string;
  fee?: number;
  distanceKm?: number;
  durationText?: string;
  source: "ors" | "pincode";
};

export function cleanPin(pin: string): string {
  return pin.replace(/\s/g, "");
}

export function isServiceablePincode(pin: string): boolean {
  const p = cleanPin(pin);
  if (!/^\d{6}$/.test(p)) return false;
  return p.startsWith("440") || p.startsWith("441");
}

export function zoneFromPincode(pin: string): Zone | null {
  const p = cleanPin(pin);
  if (!isServiceablePincode(p)) return null;
  const n = Number(p);
  if (n >= INNER_PIN_MIN && n <= INNER_PIN_MAX) return ZONES.inner;
  if (p.startsWith("440")) return ZONES.city;
  return ZONES.outer;
}

export function zoneFromDistanceKm(km: number): Zone {
  if (km <= 12) return ZONES.inner;
  if (km <= 18) return ZONES.city;
  return ZONES.outer;
}

export function zoneByFee(fee: number): Zone {
  if (fee >= ZONES.outer.fee) return ZONES.outer;
  if (fee >= ZONES.city.fee) return ZONES.city;
  return ZONES.inner;
}
