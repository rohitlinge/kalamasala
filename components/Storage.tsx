import { storageRules } from "@/lib/content";

export default function Storage() {
  return (
    <section id="store" className="section-pad bg-ink-2">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Keep it from spoilage</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-5xl">Masala is an oil. Treat it like one.</h2>
            <p className="mt-5 font-light leading-7 text-cream/62">
              Homemade Kala Massala has no anti-caking dust to hide moisture. That is a virtue in the pan, and a
              responsibility in the cupboard. These six habits keep the jar honest until the last spoon.
            </p>
            <div className="mt-8 overflow-hidden border border-[rgba(196,163,90,0.22)]">
              <img src="/images/storage-jars.png" alt="Airtight jars stored in a dark pantry" className="h-64 w-full object-cover" />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {storageRules.map((rule) => (
              <article key={rule.title} className="border border-[rgba(196,163,90,0.18)] p-6">
                <h3 className="font-display text-2xl text-gold-soft">{rule.title}</h3>
                <p className="mt-3 text-sm font-light leading-6 text-cream/60">{rule.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
