import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="craft" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="kicker">How we created it</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-6xl">A small process. No shortcuts in it.</h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 font-light leading-7 text-cream/65">
            Kala Massala is not mixed from ready powders. It is built — spice by spice — so the coconut is dark, the
            coriander is sweet, and the chilli never scorches the rest.
          </p>
        </div>

        <div className="mt-14 overflow-hidden border border-[rgba(196,163,90,0.22)]">
          <img src="/images/process-roast.png" alt="Spices slow-roasting in a kadai" className="h-[360px] w-full object-cover md:h-[480px]" />
        </div>

        <ol className="mt-14 grid gap-px bg-[rgba(196,163,90,0.18)] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.n} className="bg-ink p-7 md:p-9">
              <p className="font-display text-4xl text-gold/80">{step.n}</p>
              <h3 className="font-display mt-4 text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm font-light leading-6 text-cream/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
