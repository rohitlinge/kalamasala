export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src="/images/hero-kala-masala.png"
        alt="Lata Special homemade Kala Massala"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
      <div className="vignette" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-20">
        <div className="max-w-xl rise">
          <p className="kicker">Nagpur &gt; Home made masala</p>
          <h1 className="display mt-6 text-5xl text-cream sm:text-6xl md:text-8xl">
            Kala
            <br />
            Massala
          </h1>
          <p className="font-mark mt-4 text-sm tracking-[0.28em] text-gold uppercase">Lata Special</p>
          <p className="mt-6 max-w-md text-[1.05rem] font-light leading-relaxed text-cream/78">
            You order. We go to the market, take every important ingredient, roast, grind, and parcel it within one
            week — using a third-party transport service.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#order" className="btn-gold">
              Order masala
            </a>
            <a href="#craft" className="btn-ghost">
              How we make it
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-[0.72rem] tracking-[0.16em] text-cream/55 uppercase">
            <span>Delivered in 6 days</span>
            <span>Nagpur only</span>
            <span>No fillers · No dye</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 hidden font-mark text-[0.58rem] tracking-[0.32em] text-gold/70 uppercase md:block">
        Est. family recipe
      </div>
    </section>
  );
}
