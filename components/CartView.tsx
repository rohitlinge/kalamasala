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
      <div className="amz-card p-8">
        <h1 className="text-[28px] font-medium">Your Cart is empty</h1>
        <p className="mt-2 text-[14px] text-[#565959]">
          Browse Lata Special Kala Massala and add a pack to get started.
        </p>
        <a href="/#deals" className="btn-cart mt-5 !w-auto px-8">
          Continue shopping
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
      <div className="amz-card p-5">
        <div className="flex items-end justify-between border-b border-[#d5d9d9] pb-3">
          <h1 className="text-[28px] font-medium">Shopping Cart</h1>
          <p className="text-[14px] text-[#565959]">Price</p>
        </div>
        <ul>
          {items.map((line) => {
            const pack = packs.find((p) => p.id === line.packId);
            if (!pack) return null;
            return (
              <li key={line.packId} className="grid grid-cols-[96px_1fr_auto] gap-4 border-b border-[#d5d9d9] py-5">
                <a href="/#product">
                  <img
                    src="/images/hero-kala-masala2.png"
                    alt=""
                    className="h-24 w-24 object-cover"
                  />
                </a>
                <div>
                  <a href="/#product" className="text-[18px] leading-snug hover:text-link-hover hover:underline">
                    Lata Special Kala Massala · {pack.weight}
                  </a>
                  <p className="mt-1 text-[12px] font-bold text-[#007600]">In stock</p>
                  <p className="text-[12px] text-[#565959]">{pack.note}</p>
                  <p className="mt-1 text-[12px] text-[#565959]">
                    One pack is charged per checkout. Extra quantity stays in the cart for the next order.
                  </p>
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
                    <a href="/#product" className="link">
                      See more like this
                    </a>
                  </div>
                </div>
                <p className="text-right text-[18px] font-bold">{formatInr(pack.price)}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-right text-[18px]">
          Subtotal ({count} {count === 1 ? "item" : "items"}): <span className="font-bold">{formatInr(subtotal)}</span>
        </p>
      </div>

      <aside className="amz-card h-fit p-5">
        <p className="text-[18px]">
          Subtotal ({count} {count === 1 ? "item" : "items"}): <span className="font-bold">{formatInr(subtotal)}</span>
        </p>
        <p className="mt-2 text-[12px] text-[#565959]">
          Transport is calculated at checkout from your Nagpur pincode.
        </p>
        <button type="button" className="btn-cart mt-4" onClick={proceed}>
          Proceed to Buy
        </button>
      </aside>
    </div>
  );
}
