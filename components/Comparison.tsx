import { comparisons } from "@/lib/content";

export default function Comparison() {
  return (
    <section id="compare" className="section-pad bg-ink-2">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">The difference</p>
        <h2 className="display mt-5 max-w-3xl text-4xl text-cream md:text-6xl">
          Homemade massala, against the other kind.
        </h2>
        <p className="mt-5 max-w-2xl font-light leading-7 text-cream/62">
          Packet masala is built to look the same on every shelf, for years. Ours is built to taste like the week it
          was roasted. That is the entire argument.
        </p>

        <div className="mt-14 overflow-hidden border border-[rgba(196,163,90,0.22)]">
          <div className="grid grid-cols-2 bg-ink-3">
            <div className="border-r border-[rgba(196,163,90,0.22)] px-5 py-5 md:px-10">
              <p className="font-mark text-[0.62rem] tracking-[0.28em] text-gold uppercase">Lata Special</p>
              <p className="font-display mt-2 text-2xl text-cream md:text-3xl">Homemade</p>
            </div>
            <div className="px-5 py-5 md:px-10">
              <p className="font-mark text-[0.62rem] tracking-[0.28em] text-cream/35 uppercase">Typical packet</p>
              <p className="font-display mt-2 text-2xl text-cream/45 md:text-3xl">Other masala</p>
            </div>
          </div>
          {comparisons.map((row) => (
            <div
              key={row.us}
              className="grid grid-cols-2 border-t border-[rgba(196,163,90,0.14)] text-sm md:text-base"
            >
              <p className="border-r border-[rgba(196,163,90,0.14)] px-5 py-5 font-light leading-6 text-cream/88 md:px-10 md:py-6">
                {row.us}
              </p>
              <p className="px-5 py-5 font-light leading-6 text-cream/42 md:px-10 md:py-6">{row.them}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
