"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { packs } from "@/lib/content";
import { useCart } from "@/lib/cart";
import { isServiceablePincode } from "@/lib/zones";

const SUGGESTIONS = [
  { q: "kala massala", href: "/#product" },
  { q: "500 g pack", href: "/#product" },
  { q: "1 kg pantry tin", href: "/#product" },
  { q: "ingredients", href: "/#ingredients" },
  { q: "how to use", href: "/#use" },
  { q: "homemade masala nagpur", href: "/#product" },
];

export default function Header() {
  const router = useRouter();
  const { count, deliverPin, setDeliverPin } = useCart();
  const [query, setQuery] = useState("");
  const [pinDraft, setPinDraft] = useState(deliverPin);
  const [locOpen, setLocOpen] = useState(false);
  const [suggest, setSuggest] = useState(false);
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

  function goSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    const hit = SUGGESTIONS.find((s) => s.q.includes(q) || q.includes(s.q.split(" ")[0]));
    const packHit = packs.find((p) => p.weight.toLowerCase().includes(q) || p.label.toLowerCase().includes(q));
    setSuggest(false);
    if (packHit || hit) router.push("/#product");
    else if (q.includes("ingredient")) router.push("/#ingredients");
    else if (q.includes("use") || q.includes("recipe")) router.push("/#use");
    else router.push("/#deals");
  }

  function savePin() {
    setDeliverPin(pinDraft.replace(/\s/g, ""));
    setLocOpen(false);
  }

  const locPopover = locOpen && (
    <div className="absolute left-2 right-2 top-full z-50 mt-1 rounded-sm bg-white p-4 text-[#0f1111] shadow-xl sm:left-0 sm:right-auto sm:w-72">
      <p className="text-[13px] font-bold">Choose your location</p>
      <p className="mt-1 text-[12px] text-[#565959]">
        Delivery is Nagpur only (440xxx and 441xxx). Transport is added at checkout.
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

            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLocOpen((v) => !v)}
                className="flex min-w-[8.5rem] flex-col rounded-sm px-2 py-1 text-left hover:outline hover:outline-1 hover:outline-white"
              >
                <span className="text-[12px] leading-none text-[#cccccc]">Deliver to Nagpur</span>
                <span className="flex items-center gap-1 text-[14px] font-bold leading-tight">
                  <PinIcon />
                  {shownPin}
                </span>
              </button>
            </div>

            <form onSubmit={goSearch} className="relative hidden min-w-0 flex-1 md:flex">
              <SearchField
                query={query}
                setQuery={setQuery}
                suggest={suggest}
                setSuggest={setSuggest}
              />
            </form>

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

          <form onSubmit={goSearch} className="relative mt-2 flex md:hidden">
            <SearchField query={query} setQuery={setQuery} suggest={suggest} setSuggest={setSuggest} />
          </form>
        </div>
        <div className="bg-[#232f3e] px-3 py-1.5 text-[13px] text-white sm:hidden">
          <button type="button" className="flex items-center gap-1" onClick={() => setLocOpen((v) => !v)}>
            <PinIcon />
            Deliver to Nagpur {shownPin}
            {deliverPin && !pinOk ? " · outside route" : ""}
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchField({
  query,
  setQuery,
  suggest,
  setSuggest,
}: {
  query: string;
  setQuery: (v: string) => void;
  suggest: boolean;
  setSuggest: (v: boolean) => void;
}) {
  return (
    <>
      <span className="hidden items-center rounded-l-md bg-[#e6e6e6] px-3 text-[12px] text-[#555] md:flex">All</span>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSuggest(true);
        }}
        onFocus={() => setSuggest(true)}
        onBlur={() => window.setTimeout(() => setSuggest(false), 180)}
        placeholder="Search Kala Massala"
        className="h-10 min-w-0 flex-1 rounded-l-md border-0 bg-white px-3 text-[15px] text-[#0f1111] outline-none md:rounded-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="grid h-10 w-11 place-items-center rounded-r-md bg-search text-[#131921] hover:bg-search-hover"
      >
        <SearchIcon />
      </button>
      {suggest && query.trim() && (
        <ul className="absolute left-0 right-11 top-full z-50 mt-0.5 overflow-hidden rounded-b bg-white text-[#0f1111] shadow-lg">
          {SUGGESTIONS.filter((s) => s.q.includes(query.toLowerCase()) || query.length < 2)
            .slice(0, 5)
            .map((s) => (
              <li key={s.q}>
                <a href={s.href} className="block px-4 py-2 text-[14px] hover:bg-[#f7f7f7]">
                  {s.q}
                </a>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
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
