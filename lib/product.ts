import { packs, type PackId } from "./content";

export const TRIAL_PACK_ID = "10";

export function isTrialPack(id: string) {
  return id === TRIAL_PACK_ID;
}

export function getPack(id: string) {
  return packs.find((p) => p.id === id) ?? packs.find((p) => p.id === "500") ?? packs[0];
}

export function transportCharge(packId: string, zoneFee: number | undefined) {
  if (isTrialPack(packId)) return 0;
  return zoneFee;
}

export function rupeesToPaise(rupees: number) {
  return Math.round(rupees * 100);
}

export function formatInr(rupees: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(rupees);
}

export function orderRef() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `LS-${n}`;
}

export type Pack = (typeof packs)[number];
export type { PackId };
