"use client";

import { useLayoutEffect, useState } from "react";
import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";

export default function AddedToCart() {
  const { justAdded, dismissAdded, count, subtotal } = useCart();
  const [top, setTop] = useState(64);

  useLayoutEffect(() => {
    function place() {
      const header = document.querySelector("header");
      const headerH = header ? header.getBoundingClientRect().height : 56;
      const next = Math.round(headerH + 8);
      setTop(next);
    }
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [justAdded]);

  if (!justAdded) return null;
  const pack = packs.find((p) => p.id === justAdded);
  if (!pack) return null;

  return (
    <div data-added-banner className="fixed inset-x-0 z-50 px-3 md:px-6" style={{ top }}>
      <div className="amz-card mx-auto flex max-w-[900px] flex-col gap-3 border border-[#067d62] p-3 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#067d62] text-white">✓</span>
          <div>
            <p className="text-[16px] font-bold text-[#067d62]">Added to Cart</p>
            <p className="text-[13px] text-[#0f1111]">
              Lata Special Kala Massala · {pack.weight} · {formatInr(pack.price)}
            </p>
            <p className="text-[12px] text-[#565959]">
              Cart subtotal ({count} {count === 1 ? "item" : "items"}): {formatInr(subtotal)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" className="btn-primary !rounded-full sm:!w-auto sm:px-5" onClick={dismissAdded}>
            Continue shopping
          </button>
          <a href="/cart" className="btn-buy sm:!w-auto sm:px-5" onClick={dismissAdded}>
            Go to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
