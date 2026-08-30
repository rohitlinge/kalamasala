"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";
import { isServiceablePincode } from "@/lib/zones";

const gallery = [
  { src: "/images/hero-kala-masala2.png", alt: "Lata Special Kala Massala packet" },
  { src: "/images/process-roast2.png", alt: "Spices slow-roasting in a kadai" },
  { src: "/images/how-to-use2.png", alt: "Kala Massala in a Maharashtrian gravy" },
  { src: "/images/storage-jars.png", alt: "Airtight packets in a pantry" },
];

export default function ProductDetail() {
  const router = useRouter();
  const { addItem, deliverPin, setDeliverPin } = useCart();
  const [packId, setPackId] = useState<(typeof packs)[number]["id"]>("500");
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(0);
  const [pinDraft, setPinDraft] = useState(deliverPin);

  const pack = packs.find((p) => p.id === packId) ?? packs[0];
  const pinOk = isServiceablePincode(deliverPin || pinDraft);

  function onAdd() {
    addItem(pack.id, qty);
  }

  function onBuy() {
    addItem(pack.id, qty, { announce: false });
    router.push("/checkout");
  }

  return (
    <section id="product" className="px-3 py-4 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-4 md:p-6">
        <p className="text-[12px] text-[#565959]">
          <a href="/" className="link">
            Home
          </a>{" "}
          › Grocery &amp; Gourmet › Masala ›{" "}
          <span className="text-[#0f1111]">Kala Massala</span>
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1.15fr_340px]">
          <div>
            <div className="flex gap-3">
              <div className="hidden w-14 shrink-0 flex-col gap-2 sm:flex">
                {gallery.map((g, i) => (
                  <button
                    key={g.src}
                    type="button"
                    onMouseEnter={() => setPhoto(i)}
                    onClick={() => setPhoto(i)}
                    className={`overflow-hidden rounded-sm border ${photo === i ? "border-[#e77600]" : "border-[#888c8c]"}`}
                  >
                    <img src={g.src} alt="" className="h-14 w-14 object-cover" />
                  </button>
                ))}
              </div>
              <div className="min-w-0 flex-1 overflow-hidden rounded-sm bg-[#f7f7f7]">
                <img src={gallery[photo].src} alt={gallery[photo].alt} className="h-[320px] w-full object-cover md:h-[460px]" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-medium leading-snug">
              Lata Special Kala Massala Homemade Maharashtrian Black Masala, Slow-Roasted Small Batch, Nagpur (
              {pack.weight})
            </h2>
            <a href="#masala" className="link mt-1 inline-block text-[14px]">
              Visit the Lata Special Store
            </a>
            <div className="mt-1 flex items-center gap-2 text-[14px]">
              <span className="stars">★★★★☆</span>
              <span className="text-[#0f1111]">Kitchen favourite</span>
              <span className="text-[#565959]">· small-batch roast</span>
            </div>
            <div className="mt-3 border-t border-[#d5d9d9] pt-3">
              <p className="text-[13px] text-[#565959]">
                Pack: <span className="font-bold text-[#0f1111]">{pack.label}</span>
              </p>
              <p className="mt-1">
                <span className="align-top text-[13px] text-price">₹</span>
                <span className="price text-[28px] leading-none">{pack.price}</span>
                <span className="ml-2 text-[13px] text-[#565959]">Inclusive of masala only</span>
              </p>
              <p className="mt-1 text-[13px] text-[#565959]">Transport extra · shown at checkout from your pincode</p>
            </div>

            <div className="mt-4">
              <p className="text-[14px] font-bold">Size:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {packs.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-on={packId === p.id}
                    onClick={() => setPackId(p.id)}
                    className="pack-chip min-w-[7.5rem]"
                  >
                    <span className="block text-[13px] font-bold">{p.weight}</span>
                    <span className="block text-[12px] text-[#565959]">{formatInr(p.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-[#d5d9d9] pt-4">
              <p className="text-[16px] font-bold">About this item</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px] leading-5 text-[#0f1111]">
                <li>Homemade Maharashtrian kala massala — coconut, sesame, coriander, stone flower, pepper.</li>
                <li>Each spice roasted separately on a low flame, then ground in a small lot.</li>
                <li>No starch, no anti-caking powder, no dye. Packed within a day of grinding.</li>
                <li>You order — we shop, roast, grind, and parcel within one week.</li>
                <li>Delivery in 6 days. Nagpur pincodes 440xxx and 441xxx only.</li>
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-md border border-[#d5d9d9] p-4">
            <p>
              <span className="align-top text-[13px] text-price">₹</span>
              <span className="price text-[28px] leading-none">{pack.price}</span>
            </p>
            <p className="mt-2 text-[14px]">
              <span className="font-bold text-[#007600]">{pinOk ? "In stock" : "Check delivery"}</span>
            </p>
            <p className="mt-1 text-[14px]">
              Delivery <span className="font-bold">in 6 days</span>
              {deliverPin ? ` to ${deliverPin}` : " · Nagpur only"}
            </p>
            <p className="mt-1 text-[12px] text-[#565959]">Sold by Lata Special Kitchen · Ships from Nagpur</p>

            <label className="mt-3 block text-[13px]">
              Qty:
              <select
                className="qty-select ml-2"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="btn-cart mt-3" onClick={onAdd}>
              Add to Cart
            </button>
            <button type="button" className="btn-buy mt-2" onClick={onBuy}>
              Buy Now
            </button>

            <div className="mt-4 border-t border-[#d5d9d9] pt-3">
              <p className="text-[12px] font-bold">Check pincode</p>
              <div className="mt-1 flex gap-2">
                <input
                  className="input"
                  value={pinDraft}
                  maxLength={6}
                  inputMode="numeric"
                  placeholder="440009"
                  onChange={(e) => setPinDraft(e.target.value)}
                />
                <button
                  type="button"
                  className="btn-primary shrink-0"
                  onClick={() => setDeliverPin(pinDraft.replace(/\s/g, ""))}
                >
                  Apply
                </button>
              </div>
              {deliverPin && (
                <p className={`mt-2 text-[12px] ${pinOk ? "text-[#007600]" : "text-warn"}`}>
                  {pinOk
                    ? "We deliver to this Nagpur pin. Transport added at checkout."
                    : "We deliver only to 440xxx and 441xxx."}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
