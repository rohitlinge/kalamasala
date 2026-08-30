import { ingredients } from "@/lib/content";

export default function Ingredients() {
  return (
    <section id="ingredients" className="section-pad bg-ink-2">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="kicker">Inside the packet</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-6xl">Eleven notes. One family proportion.</h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 font-light leading-7 text-cream/65">
            Nothing proprietary is hidden behind a mystery powder. These are the spices. The secret is only how long
            each one sits in the kadai — and Lata’s hand on the blend.
          </p>
        </div>

        <div className="mt-14 overflow-hidden border border-[rgba(196,163,90,0.22)]">
          <img
            src="/images/ingredients-spices.png"
            alt="Whole spices for Kala Massala"
            className="h-[260px] w-full object-cover md:h-[400px]"
          />
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((item, i) => (
            <li
              key={item.name}
              className="relative min-h-[13.5rem] overflow-hidden border border-[rgba(196,163,90,0.16)] bg-[#211914] px-6 pb-6 pt-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-hindi-display max-w-[12rem] text-[1.35rem] leading-snug text-cream">{item.name}</h3>
                <span className="font-mark shrink-0 pt-1 text-[0.62rem] tracking-[0.2em] text-cream/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 max-w-[11.5rem] text-sm font-light leading-6 text-cream/50">{item.note}</p>
              <a
                href="#craft"
                className="relative z-10 mt-8 inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-soft"
              >
                Learn more
                <span aria-hidden className="text-base leading-none">
                  ›
                </span>
              </a>
              <div className="pointer-events-none absolute bottom-3 right-3 h-[5.75rem] w-[5.75rem] overflow-hidden rounded-full bg-[#f3eee4] sm:h-[6.25rem] sm:w-[6.25rem]">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
