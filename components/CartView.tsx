"use client";

import { useRouter } from "next/navigation";
import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";

export default function CartView() {
  const router = useRouter();
  const { items, setQty, removeItem, subtotal, count, setCheckoutPackId } = useCart();

  function proceed() {
    if (!items[0]) return;
    setCheckoutPackId(items[0].packId);
    router.push("/checkout");
  }

  if (!items.length) {
    return (
      <div className="amz-card p-5 md:p-8">
        <h1 className="text-[22px] font-medium md:text-[28px]">Your Cart is empty</h1>
        <p className="mt-2 text-[14px] text-[#565959]">
          Browse Lata Special Kala Massala and add a pack to get started.
        </p>
        <a href="/#product" className="btn-cart mt-5">
          Continue shopping
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-3 md:gap-5 lg:grid-cols-[1fr_300px]">
      <aside className="amz-card order-1 h-fit p-4 md:p-5 lg:order-2">
        <p className="text-[16px] md:text-[18px]">
          Subtotal ({count} {count === 1 ? "item" : "items"}): <span className="font-bold">{formatInr(subtotal)}</span>
        </p>
        <p className="mt-2 text-[12px] text-[#565959]">Transport is a flat ₹20 at checkout. Nagpur pincodes only.</p>
        <button type="button" className="btn-cart mt-4" onClick={proceed}>
          Proceed to Buy
        </button>
      </aside>

      <div className="amz-card order-2 p-3 md:p-5 lg:order-1">
        <div className="flex items-end justify-between border-b border-[#d5d9d9] pb-3">
          <h1 className="text-[22px] font-medium md:text-[28px]">Shopping Cart</h1>
          <p className="hidden text-[14px] text-[#565959] sm:block">Price</p>
        </div>
        <ul>
          {items.map((line) => {
            const pack = packs.find((p) => p.id === line.packId);
            if (!pack) return null;
            return (
              <li key={line.packId} className="flex gap-3 border-b border-[#d5d9d9] py-4 sm:grid sm:grid-cols-[96px_1fr_auto] sm:gap-4">
                <a href="/#product" className="shrink-0">
                  <img src={pack.image} alt="" className="h-20 w-20 object-cover sm:h-24 sm:w-24" />
                </a>
                <div className="min-w-0 flex-1">
                  <a href="/#product" className="text-[15px] leading-snug hover:text-link-hover hover:underline sm:text-[18px]">
                    Lata Special Kala Massala · {pack.weight}
                  </a>
                  <p className="mt-1 text-[16px] font-bold sm:hidden">{formatInr(pack.price)}</p>
                  <p className="mt-1 text-[12px] font-bold text-[#007600]">In stock</p>
                  <p className="text-[12px] text-[#565959]">{pack.note}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px]">
                    <label>
                      Qty:
                      <select
                        className="qty-select ml-1"
                        value={line.qty}
                        onChange={(e) => setQty(line.packId, Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button type="button" className="link" onClick={() => removeItem(line.packId)}>
                      Delete
                    </button>
                  </div>
                </div>
                <p className="hidden text-right text-[18px] font-bold sm:block">{formatInr(pack.price)}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-right text-[16px] md:text-[18px]">
          Subtotal ({count} {count === 1 ? "item" : "items"}): <span className="font-bold">{formatInr(subtotal)}</span>
        </p>
      </div>
    </div>
  );
}
