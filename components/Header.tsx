"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { isServiceablePincode } from "@/lib/zones";

export default function Header() {
  const { count, deliverPin, setDeliverPin } = useCart();
  const [pinDraft, setPinDraft] = useState(deliverPin);
  const [locOpen, setLocOpen] = useState(false);
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPinDraft(deliverPin);
  }, [deliverPin]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (locRef.current && !locRef.current.contains(e.target as Node)) setLocOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const shownPin = deliverPin.length === 6 ? deliverPin : "440001";
  const pinOk = isServiceablePincode(deliverPin);

  function savePin() {
    setDeliverPin(pinDraft.replace(/\s/g, ""));
    setLocOpen(false);
  }

  const locPopover = locOpen && (
    <div className="absolute left-2 right-2 top-full z-50 mt-1 rounded-sm bg-white p-4 text-[#0f1111] shadow-xl sm:left-0 sm:right-auto sm:w-72">
      <p className="text-[13px] font-bold">Choose your location</p>
      <p className="mt-1 text-[12px] text-[#565959]">
        Delivery is Nagpur only (440xxx and 441xxx). Transport is a flat ₹20.
      </p>
      <label className="field mt-3">Pincode</label>
      <input
        className="input"
        value={pinDraft}
        maxLength={6}
        inputMode="numeric"
        placeholder="440009"
        onChange={(e) => setPinDraft(e.target.value)}
      />
      <button type="button" className="btn-primary mt-3 w-full" onClick={savePin}>
        Apply
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-40">
      <div className="relative bg-nav text-white" ref={locRef}>
        {locPopover}
        <div className="mx-auto max-w-[1500px] px-2 py-2 md:px-3">
          <div className="flex items-center gap-2 md:gap-3">
            <a href="/" className="min-w-0 shrink rounded-sm px-1 py-1 hover:outline hover:outline-1 hover:outline-white sm:px-2">
              <span className="block text-[10px] leading-none text-[#cccccc] sm:text-[11px]">Lata Special</span>
              <span className="block truncate text-[16px] font-bold leading-tight tracking-tight sm:text-[19px]">
                kalamassala<span className="text-[#febd69]">.online</span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setLocOpen((v) => !v)}
              className="flex min-w-0 flex-col rounded-sm px-2 py-1 text-left hover:outline hover:outline-1 hover:outline-white"
            >
              <span className="text-[12px] leading-none text-[#cccccc]">Deliver to Nagpur</span>
              <span className="flex items-center gap-1 text-[14px] font-bold leading-tight">
                <PinIcon />
                {shownPin}
                {deliverPin && !pinOk ? " · outside route" : ""}
              </span>
            </button>

            <a
              href="/cart"
              className="relative ml-auto flex items-end rounded-sm px-2 py-1 hover:outline hover:outline-1 hover:outline-white"
            >
              <span className="relative">
                <CartIcon />
                <span className="absolute -top-1 left-3 text-[16px] font-bold text-[#f08804]">{count}</span>
              </span>
              <span className="mb-0.5 hidden text-[14px] font-bold sm:inline">Cart</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="38" height="28" viewBox="0 0 40 32" fill="none" aria-hidden>
      <path
        d="M2 2h5l3.2 16.2a2 2 0 0 0 2 1.6h16.2a2 2 0 0 0 2-1.5L34 8H10"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="28" r="2.2" fill="#fff" />
      <circle cx="28" cy="28" r="2.2" fill="#fff" />
    </svg>
  );
}
