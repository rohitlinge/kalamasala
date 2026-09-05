import { TRANSPORT_FEE, type DeliveryQuote, cleanPin, isServiceablePincode } from "./zones";

export type { DeliveryQuote } from "./zones";
export { KITCHEN_ORIGIN, TRANSPORT_FEE, isServiceablePincode } from "./zones";

export async function quoteDelivery(input: { pincode: string; address?: string }): Promise<DeliveryQuote> {
  const pin = cleanPin(input.pincode);
  if (!isServiceablePincode(pin)) {
    return {
      ok: false,
      text: "We deliver only to Nagpur pins 440xxx and 441xxx.",
      source: "pincode",
    };
  }

  return {
    ok: true,
    text: `Yes — we deliver to this Nagpur pin. Transport is ₹${TRANSPORT_FEE}.`,
    fee: TRANSPORT_FEE,
    zoneLabel: "Nagpur",
    source: "pincode",
  };
}
