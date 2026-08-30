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

        <ol className="mt-16 flex flex-wrap justify-center gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-14">
          {ingredients.map((item, i) => (
            <li key={item.name} className="w-[calc(50%-0.5rem)] max-w-[13.5rem] text-center sm:w-[11rem] lg:w-[12.5rem]">
              <p className="font-mark text-[0.58rem] tracking-[0.28em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="spice-seal mx-auto mt-4">
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className="font-hindi-display mt-5 text-[1.2rem] leading-snug text-cream sm:text-[1.35rem]">
                {item.name}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
