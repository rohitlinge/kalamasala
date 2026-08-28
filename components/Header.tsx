"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#masala", label: "The masala" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#craft", label: "Craft" },
  { href: "#compare", label: "Why homemade" },
  { href: "#use", label: "How to use" },
  { href: "#store", label: "Keep it well" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "bg-[#100c0a]/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-[rgba(196,163,90,0.45)]">
            <span className="font-mark text-[0.55rem] tracking-[0.2em] text-gold">LS</span>
          </span>
          <span>
            <span className="font-mark block text-[0.62rem] tracking-[0.32em] text-gold">Lata Special</span>
            <span className="block text-[0.68rem] tracking-[0.18em] text-cream/70 uppercase">Kala Massala</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#order" className="btn-gold !px-4 !py-2.5 !text-[0.62rem]">
            Order
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-[rgba(196,163,90,0.35)] lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-4 bg-gold" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[rgba(196,163,90,0.18)] bg-ink/95 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
