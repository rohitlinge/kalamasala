import { uses } from "@/lib/content";

export default function HowToUse() {
  return (
    <section id="use" className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="section-pad order-2 lg:order-1">
          <p className="kicker">How to use</p>
          <h2 className="display mt-5 text-4xl text-cream md:text-5xl">A spoon, hot oil, and a little restraint.</h2>
          <ul className="mt-10 space-y-8">
            {uses.map((u, i) => (
              <li key={u.title} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display text-2xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl text-cream">{u.title}</h3>
                  <p className="mt-2 max-w-md text-sm font-light leading-6 text-cream/60">{u.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md border-l border-gold/50 pl-5 text-sm font-light italic leading-6 text-cream/55">
            Start with less than you think. You can always add. Boiling the masala for long after it goes in steals
            the top notes we roasted so carefully.
          </p>
        </div>
        <div className="relative order-1 min-h-[380px] lg:order-2 lg:min-h-full">
          <img
            src="/images/how-to-use2.png"
            alt="Kala Massala served with a Maharashtrian gravy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
