"use client";

import { useRouter } from "next/navigation";
import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";

type Props = {
  headline?: string;
  note?: string;
};

export default function BlogMasalaAd({
  headline = "Cook this with Lata Special Kala Massala",
  note = "Nagpuri & Saoji-style heat in one homemade roast — ready for your mutton gravy.",
}: Props) {
  const router = useRouter();
  const { addItem } = useCart();
  const pack = packs.find((p) => p.id === "500") ?? packs[0];

  function onAdd() {
    addItem(pack.id, 1);
  }

  function onBuy() {
    addItem(pack.id, 1, { announce: false });
    router.push("/checkout");
  }

  return (
    <aside className="my-8 overflow-hidden rounded-sm border border-[#d5d9d9] bg-[#fffef8]">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5 md:p-5">
        <a href="/#product" className="mx-auto shrink-0 sm:mx-0">
          <img
            src={pack.image}
            alt={`Lata Special Kala Massala ${pack.weight}`}
            className="h-28 w-28 object-contain sm:h-32 sm:w-32"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#565959]">
            Lata Special · Nagpur kitchen
          </p>
          <p className="mt-1 text-[16px] font-bold text-[#0f1111] md:text-[18px]">{headline}</p>
          <p className="mt-1 text-[13px] leading-5 text-[#565959]">{note}</p>
          <p className="mt-2 text-[18px] font-bold text-price">
            {formatInr(pack.price)}{" "}
            <span className="text-[13px] font-normal text-[#565959]">· {pack.weight}</span>
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
            <button type="button" onClick={onAdd} className="btn-cart px-4 py-2 text-[13px] font-bold">
              Add to Cart
            </button>
            <button type="button" onClick={onBuy} className="btn-buy px-4 py-2 text-[13px] font-bold">
              Buy Now
            </button>
            <a
              href="/#deals"
              className="inline-flex items-center px-2 text-[13px] font-bold text-link hover:text-link-hover hover:underline"
            >
              See all packs
            </a>
          </div>
          <p className="mt-2 text-[11px] text-[#565959]">Nagpur delivery only · Arrives in 6 days</p>
        </div>
      </div>
    </aside>
  );
}
