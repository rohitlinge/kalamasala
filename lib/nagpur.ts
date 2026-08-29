/** Nagpur city / urban pincodes. 440xxx is the India Post series for Nagpur. */
const NAGPUR_PREFIX = "440";

export const LOCKED_CITY = "Nagpur";
export const LOCKED_STATE = "Maharashtra";

export function withLockedRegion<T extends { city?: string; state?: string }>(input: T): T & {
  city: string;
  state: string;
} {
  return { ...input, city: LOCKED_CITY, state: LOCKED_STATE };
}

export function isNagpurPincode(pin: string): boolean {
  const cleaned = pin.replace(/\s/g, "");
  if (!/^\d{6}$/.test(cleaned)) return false;
  return cleaned.startsWith(NAGPUR_PREFIX);
}

export function isNagpurCity(city: string): boolean {
  return city.trim().toLowerCase() === "nagpur";
}

export function isMaharashtra(state: string): boolean {
  const s = state.trim().toLowerCase();
  return s === "maharashtra" || s === "mh";
}

export function deliveryMessage(pin: string, city: string, state: string): {
  ok: boolean;
  text: string;
} {
  if (!pin && !city) {
    return { ok: false, text: "Enter your Nagpur pincode to check delivery." };
  }
  if (pin && !/^\d{6}$/.test(pin.replace(/\s/g, ""))) {
    return { ok: false, text: "Pincode must be 6 digits." };
  }
  if (pin && !isNagpurPincode(pin)) {
    return {
      ok: false,
      text: "We deliver only within Nagpur, Maharashtra. This pin is outside our 6-day route.",
    };
  }
  if (city && !isNagpurCity(city)) {
    return {
      ok: false,
      text: "Orders are accepted only if you live in Nagpur.",
    };
  }
  if (state && !isMaharashtra(state)) {
    return { ok: false, text: "Delivery is limited to Maharashtra — Nagpur city only." };
  }
  if (isNagpurPincode(pin) && (!city || isNagpurCity(city))) {
    return {
      ok: true,
      text: "Yes — we deliver to this Nagpur pin. Your jar leaves our kitchen and reaches you within 6 days.",
    };
  }
  return { ok: false, text: "Confirm city as Nagpur and a 440xxx pincode." };
}

export type OrderInput = {
  name: string;
  phone: string;
  email?: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  packId: string;
};

export function validateOrder(input: OrderInput): string | null {
  if (!input.name.trim() || input.name.trim().length < 2) {
    return "Please enter your full name.";
  }
  if (!/^[6-9]\d{9}$/.test(input.phone.replace(/\s/g, ""))) {
    return "Enter a valid 10-digit Indian mobile number.";
  }
  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return "Enter a valid email, or leave it blank.";
  }
  if (input.address.trim().length < 10) {
    return "Please enter a complete Nagpur delivery address.";
  }
  if (!isNagpurPincode(input.pincode)) {
    return "We accept orders only for Nagpur pincodes (440xxx).";
  }
  if (!isNagpurCity(input.city)) {
    return "City must be Nagpur.";
  }
  if (!isMaharashtra(input.state)) {
    return "State must be Maharashtra.";
  }
  return null;
}
