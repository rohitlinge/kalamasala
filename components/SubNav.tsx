"use client";

import { useEffect, useId, useRef, useState } from "react";
import { blogs } from "@/lib/blogs";

const links = [
  { href: "/#product", label: "Shop" },
  { href: "/#deals", label: "Deals" },
  { href: "/owner", label: "About owner", short: "Owner" },
  { href: "/#ingredients", label: "Ingredients", short: "Spices" },
  { href: "/#craft", label: "How it's made", hideOnMobile: true },
  { href: "/#use", label: "How to use", short: "Use" },
  { href: "/#store", label: "Storage", hideOnMobile: true },
  { href: "/#faq", label: "FAQ" },
  { href: "/cart", label: "Cart" },
];

export default function SubNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="overflow-x-hidden bg-nav-2 text-white">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-0.5 px-1 py-1 md:flex-nowrap md:overflow-x-auto md:px-3">
        {links.slice(0, 3).map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            className={`nav-link-amz ${l.hideOnMobile ? "max-md:hidden" : ""}`}
          >
            <span className="md:hidden">{l.short ?? l.label}</span>
            <span className="hidden md:inline">{l.label}</span>
          </a>
        ))}

        <div
          ref={wrapRef}
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            className="nav-link-amz inline-flex items-center gap-1"
            aria-expanded={open}
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={() => setOpen((v) => !v)}
          >
            Blogs
            <span className="text-[10px] leading-none opacity-80" aria-hidden>
              ▾
            </span>
          </button>
          <div
            id={menuId}
            role="menu"
            className={`absolute left-0 top-full z-50 min-w-[220px] border border-[#3a4553] bg-nav py-1 shadow-lg ${
              open ? "block" : "hidden"
            }`}
          >
            <a
              role="menuitem"
              href="/blogs"
              className="block px-3 py-2 text-[13px] text-white hover:bg-nav-3"
              onClick={() => setOpen(false)}
            >
              All blogs
            </a>
            {blogs.map((b) => (
              <a
                key={b.slug}
                role="menuitem"
                href={`/blogs/${b.slug}`}
                className="block px-3 py-2 text-[13px] text-[#ddd] hover:bg-nav-3 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {b.shortTitle}
              </a>
            ))}
          </div>
        </div>

        {links.slice(3).map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            className={`nav-link-amz ${l.hideOnMobile ? "max-md:hidden" : ""}`}
          >
            <span className="md:hidden">{l.short ?? l.label}</span>
            <span className="hidden md:inline">{l.label}</span>
          </a>
        ))}
        <span className="ml-auto hidden shrink-0 px-2 text-[13px] font-bold text-[#febd69] lg:block">
          Nagpur only · Arrives in 6 days
        </span>
      </div>
    </nav>
  );
}
