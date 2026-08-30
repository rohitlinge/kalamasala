export default function Footer() {
  return (
    <footer className="border-t border-[rgba(196,163,90,0.18)] px-5 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mark text-[0.68rem] tracking-[0.32em] text-gold uppercase">Lata Special</p>
          <p className="display mt-2 text-4xl text-cream">Kala Massala</p>
          <p className="mt-3 max-w-sm text-sm font-light leading-6 text-cream/50">
            A Nagpur kitchen batch. We roast, grind, and pack — then we deliver within the city in six days. Nothing
            leaves Maharashtra’s orange city.
          </p>
        </div>
        <div className="text-sm font-light text-cream/45 md:text-right">
          <p>Nagpur, Maharashtra</p>
          <p className="mt-1">Orders · 440xxx and 441xxx</p>
          <p className="mt-6 text-[0.7rem] tracking-[0.16em] uppercase">© {new Date().getFullYear()} Lata Special</p>
        </div>
      </div>
    </footer>
  );
}
