"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { packs, type PackId } from "@/lib/content";

export type CartItem = {
  packId: PackId;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (packId: PackId, qty?: number, opts?: { announce?: boolean }) => void;
  removeItem: (packId: PackId) => void;
  setQty: (packId: PackId, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  checkoutPackId: PackId;
  setCheckoutPackId: (id: PackId) => void;
  deliverPin: string;
  setDeliverPin: (pin: string) => void;
  justAdded: PackId | null;
  dismissAdded: () => void;
};

const CART_KEY = "ls-cart-v1";
const PIN_KEY = "ls-deliver-pin";

const CartContext = createContext<CartContextValue | null>(null);

function isPackId(id: string): id is PackId {
  return packs.some((p) => p.id === id);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [checkoutPackId, setCheckoutPackId] = useState<PackId>("500");
  const [deliverPin, setDeliverPinState] = useState("");
  const [justAdded, setJustAdded] = useState<PackId | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { items?: CartItem[]; checkoutPackId?: string };
        const next = (parsed.items ?? []).filter((i) => isPackId(i.packId) && i.qty > 0);
        if (next.length) setItems(next);
        if (parsed.checkoutPackId && isPackId(parsed.checkoutPackId)) {
          setCheckoutPackId(parsed.checkoutPackId);
        }
      }
      const pin = localStorage.getItem(PIN_KEY);
      if (pin) setDeliverPinState(pin);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_KEY, JSON.stringify({ items, checkoutPackId }));
  }, [items, checkoutPackId, ready]);

  const setDeliverPin = (pin: string) => {
    setDeliverPinState(pin);
    localStorage.setItem(PIN_KEY, pin);
  };

  const addItem = (packId: PackId, qty = 1, opts?: { announce?: boolean }) => {
    const safe = Math.min(5, Math.max(1, qty));
    setItems((prev) => {
      const hit = prev.find((i) => i.packId === packId);
      if (hit) {
        return prev.map((i) => (i.packId === packId ? { ...i, qty: Math.min(5, i.qty + safe) } : i));
      }
      return [...prev, { packId, qty: safe }];
    });
    setCheckoutPackId(packId);
    if (opts?.announce !== false) setJustAdded(packId);
  };

  const removeItem = (packId: PackId) => {
    setItems((prev) => prev.filter((i) => i.packId !== packId));
  };

  const setQty = (packId: PackId, qty: number) => {
    if (qty < 1) {
      removeItem(packId);
      return;
    }
    setItems((prev) => prev.map((i) => (i.packId === packId ? { ...i, qty: Math.min(5, qty) } : i)));
  };

  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => {
    const pack = packs.find((p) => p.id === i.packId);
    return sum + (pack ? pack.price * i.qty : 0);
  }, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      setQty,
      clear,
      count,
      subtotal,
      checkoutPackId,
      setCheckoutPackId,
      deliverPin,
      setDeliverPin,
      justAdded,
      dismissAdded: () => setJustAdded(null),
    }),
    [items, count, subtotal, checkoutPackId, deliverPin, justAdded],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
