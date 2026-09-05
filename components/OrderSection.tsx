"use client";

import { useEffect, useMemo, useState } from "react";
import { packs } from "@/lib/content";
import { TRANSPORT_FEE, isServiceablePincode } from "@/lib/zones";
import { deliveryMessage, LOCKED_CITY, LOCKED_STATE, parseOrderQty, validateOrder, withLockedRegion } from "@/lib/nagpur";
import { formatInr } from "@/lib/product";
import { useCart } from "@/lib/cart";

type Status =
  | { kind: "idle" }
  | { kind: "busy" }
  | { kind: "error"; text: string }
  | { kind: "ok"; ref: string; amount: number; pack: string; preview?: boolean };

declare global {
  interface Window {
    Razorpay?: new (opts: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function OrderSection({ razorpayKey }: { razorpayKey: string }) {
  const { checkoutPackId, setCheckoutPackId, items, removeItem, deliverPin } = useCart();
  const [packId, setPackId] = useState(checkoutPackId);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: deliverPin,
    city: LOCKED_CITY,
    state: LOCKED_STATE,
  });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    setPackId(checkoutPackId);
  }, [checkoutPackId]);

  useEffect(() => {
    if (deliverPin && !form.pincode) {
      setForm((f) => ({ ...f, pincode: deliverPin }));
    }
  }, [deliverPin, form.pincode]);

  const pack = packs.find((p) => p.id === packId) ?? packs[0];
  const delivery = useMemo(
    () => deliveryMessage(form.pincode, form.city, form.state),
    [form.pincode, form.city, form.state],
  );

  const pinReady = isServiceablePincode(form.pincode);
  const pinBlocked = /^\d{6}$/.test(form.pincode.replace(/\s/g, "")) && !pinReady;
  const transport = pinReady ? TRANSPORT_FEE : undefined;
  const cartQty = items.find((i) => i.packId === packId)?.qty ?? 0;
  const orderQty = parseOrderQty(cartQty || 1);
  const itemsTotal = pack.price * orderQty;
  const total = itemsTotal + (transport ?? 0);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  function pickPack(id: typeof pack.id) {
    setPackId(id);
    setCheckoutPackId(id);
  }

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    const payload = withLockedRegion({ ...form, packId, qty: orderQty });
    const err = validateOrder(payload);
    if (err) {
      setStatus({ kind: "error", text: err });
      return;
    }
    if (pinBlocked) {
      setStatus({ kind: "error", text: delivery.text });
      return;
    }
    setStatus({ kind: "busy" });

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");

      const paid = typeof data.total === "number" ? data.total : total;

      if (data.mode === "test") {
        removeItem(pack.id);
        setStatus({
          kind: "ok",
          ref: data.ref,
          amount: paid,
          pack: pack.weight,
          preview: true,
        });
        return;
      }

      const ready = await loadRazorpay();
      if (!ready || !window.Razorpay) throw new Error("Payment window could not open. Please try again.");

      const rzp = new window.Razorpay({
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "Lata Special",
        description: `Kala Massala · ${pack.weight} × ${orderQty}`,
        order_id: data.orderId,
        prefill: { name: form.name, contact: form.phone, email: form.email || undefined },
        theme: { color: "#ff9900" },
        notes: { pack: pack.weight, city: "Nagpur" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          const verify = await fetch("/api/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...response, ...payload, ref: data.ref }),
          });
          const out = await verify.json();
          if (!verify.ok) {
            setStatus({ kind: "error", text: out.error || "Payment could not be verified." });
            return;
          }
          removeItem(pack.id);
          setStatus({ kind: "ok", ref: out.ref, amount: paid, pack: pack.weight });
        },
        modal: {
          ondismiss: () => setStatus({ kind: "idle" }),
        },
      });
      rzp.open();
    } catch (error) {
      setStatus({
        kind: "error",
        text: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  const payLabel =
    transport == null
      ? `Pay ${formatInr(itemsTotal)} · add pin`
      : `Place order · ${formatInr(total)}`;

  return (
    <section id="order" className="px-3 py-4 md:px-4">
      <form onSubmit={placeOrder} className="mx-auto grid max-w-[1100px] gap-3 md:gap-5 lg:grid-cols-[1fr_340px]">
        <div className="order-2 space-y-3 md:space-y-4 lg:order-1">
          <div className="amz-card p-4 md:p-5">
            <h2 className="text-[18px] font-bold">1 · Delivery address</h2>
            <p className="mt-1 text-[13px] text-[#565959]">
              We deliver only in <strong className="text-[#0f1111]">Nagpur, Maharashtra</strong> · 6 days from the
              kitchen on Great Nag Road.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="field">Full name</label>
                <input className="input" value={form.name} onChange={set("name")} placeholder="Your name" required />
              </div>
              <div>
                <label className="field">Mobile number</label>
                <input
                  className="input"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="10-digit number"
                  inputMode="numeric"
                  required
                />
              </div>
              <div>
                <label className="field">Email (optional)</label>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="For the receipt"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="field">Address in Nagpur</label>
                <textarea
                  className="input min-h-[88px] resize-y"
                  value={form.address}
                  onChange={set("address")}
                  placeholder="House, street, landmark"
                  required
                />
              </div>
              <div>
                <label className="field">Pincode</label>
                <input
                  className="input"
                  value={form.pincode}
                  onChange={set("pincode")}
                  placeholder="440009"
                  inputMode="numeric"
                  maxLength={6}
                  required
                />
              </div>
              <div>
                <label className="field">City</label>
                <input className="input input-locked" value={LOCKED_CITY} readOnly tabIndex={-1} />
              </div>
              <div>
                <label className="field">State</label>
                <input className="input input-locked" value={LOCKED_STATE} readOnly tabIndex={-1} />
              </div>
            </div>
            <p className={`mt-3 text-[13px] ${delivery.ok ? "text-[#007600]" : "text-[#565959]"}`}>
              {delivery.text}
            </p>
          </div>

          <div className="amz-card p-4 md:p-5">
            <h2 className="text-[18px] font-bold">2 · Pack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {packs.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  data-on={packId === p.id}
                  onClick={() => pickPack(p.id)}
                  className="pack-chip"
                >
                  <span className="block text-[13px] font-bold">{p.weight}</span>
                  <span className="block text-[12px] text-[#565959]">{formatInr(p.price)}</span>
                </button>
              ))}
            </div>
            {items.length > 1 && (
              <p className="mt-3 text-[12px] text-[#565959]">
                Your cart has more than one pack. This order charges the selected size only.
              </p>
            )}
          </div>

          <div className="amz-card p-4 md:p-5">
            <h2 className="text-[18px] font-bold">3 · Payment</h2>
            <p className="mt-2 text-[14px]">
              {razorpayKey ? "Pay online with UPI, cards, or net banking (Razorpay)." : "Pay online · preview mode."}
            </p>
          </div>
        </div>

        <aside className="amz-card order-1 h-fit p-4 md:p-5 lg:order-2">
          <button type="submit" className="btn-buy min-w-0 whitespace-normal" disabled={status.kind === "busy" || pinBlocked}>
            {status.kind === "busy" ? "Opening Razorpay…" : payLabel}
          </button>
          <p className="mt-2 text-center text-[11px] text-[#565959]">
            By placing your order you agree to a 6-day Nagpur delivery.
          </p>
          {status.kind === "error" && <p className="mt-3 text-[13px] text-warn">{status.text}</p>}

          <h3 className="mt-5 border-t border-[#d5d9d9] pt-4 text-[18px] font-bold">Order summary</h3>
          <div className="mt-3 flex gap-3">
            <img src={pack.image} alt="" className="h-16 w-16 object-cover" />
            <div>
              <p className="text-[13px] font-medium">
                Kala Massala · {pack.weight}
                {orderQty > 1 ? ` × ${orderQty}` : ""}
              </p>
              <p className="text-[12px] text-[#565959]">{pack.note}</p>
            </div>
          </div>
          <div className="mt-4 space-y-1 text-[13px]">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{formatInr(itemsTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Transport</span>
              <span>{transport != null ? formatInr(transport) : "—"}</span>
            </div>
            <div className="flex justify-between border-t border-[#d5d9d9] pt-2 text-[18px] font-bold text-price">
              <span>Order total</span>
              <span>{formatInr(total)}</span>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-[#565959]">
            Flat ₹{TRANSPORT_FEE} transport on every Nagpur order.
          </p>
        </aside>
      </form>

      {status.kind === "ok" && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4">
          <div className="amz-card max-w-md p-6 md:p-8 text-center">
            <p className="text-[13px] font-bold text-[#067d62]">Order placed</p>
            <h3 className="mt-2 text-[28px] font-medium">Thank you.</h3>
            <p className="mt-3 text-[14px] leading-6 text-[#565959]">
              {status.preview
                ? "This is a preview checkout — Razorpay keys are not connected, so no money was taken."
                : "Payment is complete. Your masala is next in the kitchen queue."}
            </p>
            <p className="mt-4 text-[13px] font-bold">
              {status.ref} · {status.pack} · {formatInr(status.amount)}
            </p>
            <p className="mt-2 text-[13px] text-[#565959]">Expected at your Nagpur address within 6 days.</p>
            <a href="/" className="btn-cart mt-6" onClick={() => setStatus({ kind: "idle" })}>
              Continue shopping
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
