export default function Story() {
  return (
    <section id="masala" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="kicker">The masala</p>
          <h2 className="display mt-5 text-4xl text-cream md:text-6xl">
            Dark as Sunday
            <br />
            gravy. Honest
            <br />
            as a home jar.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-10">
          <p className="text-lg font-light leading-8 text-cream/78 md:text-[1.2rem] md:leading-9">
            Kala Massala is the Maharashtrian black blend — coconut toasted until it turns, sesame, coriander, stone
            flower, and the quiet heat of pepper.{" "}
            <em className="font-display not-italic text-gold-soft">Lata Special</em> is our kitchen name for it: the
            measure Lata kept, the roast she would not rush.
          </p>
          <p className="mt-6 text-[1.02rem] font-light leading-8 text-cream/65">
            We do not mill for warehouses. Each batch is small enough to smell as it cools. You will notice the colour
            first — a true kala, not a dyed grey — and then the finish: nutty, warm, and clean, the way a Nagpur
            usal should taste.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[rgba(196,163,90,0.22)] pt-8">
            {[
              ["6 days", "Door to door"],
              ["440xxx", "Nagpur pins only"],
              ["90 days", "Best after opening"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-gold">{n}</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-cream/50 uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
