"use client";

import { useEffect, useMemo, useState } from "react";
import { packs } from "@/lib/content";
import { type DeliveryQuote, zoneFromPincode } from "@/lib/zones";
import { deliveryMessage, LOCKED_CITY, LOCKED_STATE, validateOrder, withLockedRegion } from "@/lib/nagpur";
import { formatInr } from "@/lib/product";

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
  const [packId, setPackId] = useState("500");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: LOCKED_CITY,
    state: LOCKED_STATE,
  });
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [quote, setQuote] = useState<DeliveryQuote | null>(null);
  const [quoteBusy, setQuoteBusy] = useState(false);

  const pack = packs.find((p) => p.id === packId) ?? packs[0];
  const pinZone = useMemo(() => zoneFromPincode(form.pincode), [form.pincode]);
  const delivery = useMemo(
    () => deliveryMessage(form.pincode, form.city, form.state),
    [form.pincode, form.city, form.state],
  );

  const quoteBlocked = quote != null && !quote.ok;
  const transport = quoteBlocked ? undefined : (quote?.fee ?? pinZone?.fee);
  const total = pack.price + (transport ?? 0);

  useEffect(() => {
    const pin = form.pincode.replace(/\s/g, "");
    if (!/^\d{6}$/.test(pin)) {
      setQuote(null);
      setQuoteBusy(false);
      return;
    }

    const handle = window.setTimeout(async () => {
      setQuoteBusy(true);
      try {
        const res = await fetch("/api/delivery-quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pincode: pin, address: form.address }),
        });
        const data = (await res.json()) as DeliveryQuote;
        setQuote(data);
      } catch {
        setQuote(null);
      } finally {
        setQuoteBusy(false);
      }
    }, 450);

    return () => window.clearTimeout(handle);
  }, [form.pincode, form.address]);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    const payload = withLockedRegion({ ...form, packId });
    const err = validateOrder(payload);
    if (err) {
      setStatus({ kind: "error", text: err });
      return;
    }
    if (quote && !quote.ok) {
      setStatus({ kind: "error", text: quote.text });
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
        description: `Kala Massala · ${pack.weight}`,
        order_id: data.orderId,
        prefill: { name: form.name, contact: form.phone, email: form.email || undefined },
        theme: { color: "#1a1410" },
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
      ? `Masala ${formatInr(pack.price)} · add pincode`
      : `Pay ${formatInr(total)} · ${pack.weight}`;

  return (
    <section id="order" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">The packet</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-6xl">Order Kala Massala.</h2>
            <p className="mt-5 font-light leading-7 text-cream/65">
              We accept orders only if you live in <strong className="font-medium text-gold-soft">Nagpur, Maharashtra</strong>.
              After confirmation, delivery is{" "}
              <strong className="font-medium text-gold-soft">6 days</strong> — kitchen on Great Nag Road to your door.
              Packet price is masala only; transport is added from your pincode.
            </p>

            <div className="mt-10 space-y-4">
              {packs.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  data-on={packId === p.id}
                  onClick={() => setPackId(p.id)}
                  className="pack-card flex w-full items-center justify-between border border-[rgba(196,163,90,0.2)] px-5 py-5 text-left transition-colors"
                >
                  <span>
                    <span className="font-mark block text-[0.62rem] tracking-[0.22em] text-gold uppercase">
                      {p.label}
                      {p.featured ? " · preferred" : ""}
                    </span>
                    <span className="font-display mt-1 block text-2xl text-cream">{p.weight}</span>
                    <span className="text-xs text-cream/45">{p.note}</span>
                  </span>
                  <span className="text-right">
                    <span className="font-display block text-3xl text-gold">{formatInr(p.price)}</span>
                    <span className="text-[0.65rem] tracking-[0.08em] text-cream/40 uppercase">without transport</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 border border-[rgba(196,163,90,0.22)] p-5 text-sm font-light leading-6 text-cream/60">
              Transport to our destiny: inner city (440001–440012) ₹99 · other 440xxx ₹179 · 441xxx ₹210.
            </div>
          </div>

          <form onSubmit={placeOrder} className="border border-[rgba(196,163,90,0.22)] bg-ink-2 p-6 md:p-9 lg:col-span-7">
            <p className="font-mark text-[0.68rem] tracking-[0.28em] text-gold uppercase">Delivery · Nagpur only</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="field">Full name</label>
                <input className="input" value={form.name} onChange={set("name")} placeholder="Your name" required />
              </div>
              <div>
                <label className="field">Mobile</label>
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
                <label className="field">Email · optional</label>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="for the receipt"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="field">Address in Nagpur</label>
                <textarea
                  className="input min-h-[96px] resize-y"
                  value={form.address}
                  onChange={set("address")}
                  placeholder="House, street, landmark"
                  required
                />
              </div>
              <div className="sm:col-span-2">
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
                <label className="field">City · locked</label>
                <input
                  className="input input-locked"
                  value={LOCKED_CITY}
                  readOnly
                  tabIndex={-1}
                  aria-readonly="true"
                  title="City is fixed. We deliver in Nagpur only."
                />
              </div>
              <div>
                <label className="field">State · locked</label>
                <input
                  className="input input-locked"
                  value={LOCKED_STATE}
                  readOnly
                  tabIndex={-1}
                  aria-readonly="true"
                  title="State is fixed. We deliver in Nagpur only."
                />
              </div>
            </div>

            <p className={`mt-4 text-sm ${delivery.ok ? "text-gold-soft" : "text-cream/50"}`}>
              {quoteBusy ? "Checking road distance from Great Nag Road…" : quote?.text ?? delivery.text}
            </p>

            <div className="mt-6 border border-[rgba(196,163,90,0.22)] px-4 py-4 text-sm">
              <div className="flex justify-between text-cream/70">
                <span>{pack.weight} masala</span>
                <span>{formatInr(pack.price)}</span>
              </div>
              <div className="mt-2 flex justify-between text-cream/70">
                <span>
                  Transport
                  {quote?.distanceKm != null ? ` · ${quote.distanceKm} km` : pinZone ? ` · ${pinZone.label}` : ""}
                </span>
                <span>{transport != null ? formatInr(transport) : "—"}</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-[rgba(196,163,90,0.2)] pt-3 text-cream">
                <span className="font-mark text-[0.62rem] tracking-[0.2em] text-gold uppercase">To pay</span>
                <span className="font-display text-2xl text-gold">{formatInr(total)}</span>
              </div>
            </div>

            <div className="mt-8 border border-gold bg-[rgba(196,163,90,0.1)] px-4 py-4">
              <span className="font-mark block text-[0.58rem] tracking-[0.2em] text-gold uppercase">Razorpay</span>
              <span className="mt-1 block text-sm text-cream">
                {razorpayKey ? "Pay online · UPI, cards, net banking" : "Pay online · preview"}
              </span>
            </div>

            {status.kind === "error" && (
              <p className="mt-5 text-sm text-[#e8b4a4]">{status.text}</p>
            )}

            <button
              type="submit"
              className="btn-gold mt-8 w-full"
              disabled={status.kind === "busy" || quoteBlocked}
            >
              {status.kind === "busy" ? "Opening Razorpay…" : payLabel}
            </button>
            <p className="mt-4 text-center text-[0.7rem] tracking-[0.12em] text-cream/40 uppercase">
              Arrives within 6 days · Nagpur, Maharashtra
            </p>
          </form>
        </div>
      </div>

      {status.kind === "ok" && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/85 p-4 backdrop-blur-sm">
          <div className="frame max-w-md bg-ink-2 p-10 text-center">
            <p className="kicker">Order received</p>
            <h3 className="display mt-4 text-4xl text-cream">Thank you.</h3>
            <p className="mt-4 font-light leading-7 text-cream/70">
              {status.preview
                ? "This is a preview checkout — Razorpay keys are not connected, so no money was taken. Add keys in .env.local to accept UPI and cards."
                : "Payment is complete. Your masala is next in the kitchen queue."}
            </p>
            <p className="mt-6 font-mark text-[0.7rem] tracking-[0.22em] text-gold">
              {status.ref} · {status.pack} · {formatInr(status.amount)}
            </p>
            <p className="mt-3 text-sm text-cream/50">Expected at your Nagpur address within 6 days.</p>
            <button type="button" className="btn-gold mt-8" onClick={() => setStatus({ kind: "idle" })}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
