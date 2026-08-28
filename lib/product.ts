import { packs, type PackId } from "./content";

export function getPack(id: string) {
  return packs.find((p) => p.id === id) ?? packs[1];
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
