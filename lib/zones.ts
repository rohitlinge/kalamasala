/** Kitchen origin — 16 A Great Nag Road, Nagpur. */
export const KITCHEN_ORIGIN = "16 A Great Nag Road, Nagpur, Maharashtra 440009";

/** Flat transport on every Nagpur order. */
export const TRANSPORT_FEE = 20;

export type DeliveryQuote = {
  ok: boolean;
  text: string;
  fee?: number;
  zoneLabel?: string;
  distanceKm?: number;
  durationText?: string;
  zoneId?: string;
  source: "pincode";
};

export function cleanPin(pin: string): string {
  return pin.replace(/\s/g, "");
}

export function isServiceablePincode(pin: string): boolean {
  const p = cleanPin(pin);
  if (!/^\d{6}$/.test(p)) return false;
  return p.startsWith("440") || p.startsWith("441");
}
