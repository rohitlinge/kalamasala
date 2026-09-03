"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { packs, gallery } from "@/lib/content";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";
import { isServiceablePincode } from "@/lib/zones";

export default function ProductDetail() {
  const router = useRouter();
  const { addItem, deliverPin, setDeliverPin } = useCart();
  const [packId, setPackId] = useState<(typeof packs)[number]["id"]>("500");
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(0);
  const [pinDraft, setPinDraft] = useState(deliverPin);
  const [dock, setDock] = useState(false);

  const pack = packs.find((p) => p.id === packId) ?? packs[0];
  const pinOk = isServiceablePincode(deliverPin || pinDraft);

  function onAdd() {
    addItem(pack.id, qty);
  }

  function onBuy() {
    addItem(pack.id, qty, { announce: false });
    router.push("/checkout");
  }

  useEffect(() => {
    setDock(true);
  }, []);

  return (
    <section id="product" className="w-full max-w-full px-3 py-3 md:px-4 md:py-4">
      <div className="amz-card mx-auto w-full min-w-0 max-w-[1500px] p-3 md:p-6">
        <p className="hidden text-[12px] text-[#565959] sm:block">
          <a href="/" className="link">
            Home
          </a>{" "}
          › Grocery &amp; Gourmet › Masala ›{" "}
          <span className="text-[#0f1111]">Kala Massala</span>
        </p>

        <div className="mt-0 grid w-full min-w-0 gap-4 lg:grid-cols-[1fr_1.15fr_300px] lg:gap-6">
          <div className="order-1 min-w-0 w-full lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="overflow-hidden rounded-sm bg-[#f7f7f7]">
              <img
                src={gallery[photo].src}
                alt={gallery[photo].alt}
                className="h-[240px] w-full object-contain sm:h-[320px] md:h-[460px]"
              />
            </div>
            <div
              data-thumbs
              className="mt-2 hidden md:block"
              style={{
                width: "100%",
                maxWidth: "100%",
                overflowX: "auto",
                overflowY: "hidden",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div style={{ display: "flex", gap: 8, width: "max-content" }}>
                {gallery.map((g, i) => (
                  <button
                    key={g.src}
                    type="button"
                    onMouseEnter={() => setPhoto(i)}
                    onClick={() => setPhoto(i)}
                    className={`h-14 w-14 shrink-0 overflow-hidden rounded-sm border ${photo === i ? "border-[#e77600]" : "border-[#888c8c]"}`}
                  >
                    <img src={g.src} alt="" className="h-full w-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="order-2 lg:col-start-2 lg:row-start-1">
            <h2 className="text-[18px] font-medium leading-snug md:text-[24px]">
              Lata Special Kala Massala — buy Nagpur homemade masala online ({pack.weight})
            </h2>
            <a href="#masala" className="link mt-1 inline-block text-[13px] md:text-[14px]">
              Visit the Lata Special Store
            </a>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[13px] md:text-[14px]">
              <span className="stars">★★★★☆</span>
              <span>Kitchen favourite</span>
            </div>
            <div className="mt-3 border-t border-[#d5d9d9] pt-3">
              <p className="text-[13px] text-[#565959]">
                Pack: <span className="font-bold text-[#0f1111]">{pack.label}</span>
              </p>
              <p className="mt-1">
                <span className="align-top text-[13px] text-price">₹</span>
                <span className="price text-[28px] leading-none">{pack.price}</span>
              </p>
              <p className="mt-1 text-[13px] text-[#565959]">Masala only · transport extra at checkout</p>
            </div>

            <div className="mt-4">
              <p className="text-[14px] font-bold">Size:</p>
              <div className="mt-2 flex w-full min-w-0 flex-wrap gap-2">
                {packs.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-on={packId === p.id}
                    onClick={() => {
                      setPackId(p.id);
                      const idx = gallery.findIndex((g) => g.src === p.image);
                      setPhoto(idx >= 0 ? idx : 0);
                    }}
                    className="pack-chip"
                  >
                    <span className="block text-[13px] font-bold">{p.weight}</span>
                    <span className="block text-[12px] text-[#565959]">{formatInr(p.price)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="order-3 h-fit rounded-md border border-[#d5d9d9] p-4 lg:col-start-3 lg:row-span-2 lg:row-start-1">
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
              <select className="qty-select ml-2" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <div data-buy-bar className="mt-3 hidden w-full min-w-0 grid-cols-1 gap-2 lg:grid">
              <button type="button" data-buy-cart className="btn-cart" onClick={onAdd}>
                Add to Cart
              </button>
              <button type="button" data-buy-now className="btn-buy" onClick={onBuy}>
                Buy Now
              </button>
            </div>

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

          <div className="order-4 border-t border-[#d5d9d9] pt-4 lg:col-start-2 lg:row-start-2">
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
      </div>
      <div className="h-28 lg:hidden" aria-hidden />
      {dock &&
        createPortal(
          <div
            data-buy-bar
            className="grid lg:hidden"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 45,
              boxSizing: "border-box",
              width: "auto",
              maxWidth: "100%",
              gridTemplateColumns: "1fr",
              gap: 8,
              paddingLeft: "max(12px, env(safe-area-inset-left, 0px))",
              paddingRight: "max(12px, env(safe-area-inset-right, 0px))",
              paddingTop: 8,
              paddingBottom: "max(8px, env(safe-area-inset-bottom, 0px))",
              background: "#fff",
              borderTop: "1px solid #d5d9d9",
            }}
          >
            <button type="button" data-buy-cart className="btn-cart" onClick={onAdd}>
              Add to Cart
            </button>
            <button type="button" data-buy-now className="btn-buy" onClick={onBuy}>
              Buy Now
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}
