import { ingredients } from "@/lib/content";

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-full">
          <img
            src="/images/ingredients-spices.png"
            alt="Whole spices for Kala Massala"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="section-pad bg-ink-2">
          <p className="kicker">Inside the jar</p>
          <h2 className="display mt-5 text-4xl text-cream md:text-5xl">Fourteen notes. One family proportion.</h2>
          <p className="mt-5 max-w-lg font-light leading-7 text-cream/65">
            Nothing proprietary is hidden behind a mystery powder. These are the spices. The secret is only how long
            each one sits in the kadai — and Lata’s hand on the blend.
          </p>
          <ol className="mt-10 columns-1 gap-x-12 sm:columns-2">
            {ingredients.map((item, i) => (
              <li key={item.name} className="mb-6 break-inside-avoid border-b border-[rgba(196,163,90,0.14)] pb-4">
                <p className="font-mark text-[0.62rem] tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display mt-1 text-2xl text-cream">{item.name}</p>
                <p className="mt-1 text-sm font-light text-cream/55">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
