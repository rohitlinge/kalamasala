import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  garamMasala: "https://en.wikipedia.org/wiki/Garam_masala",
  cumin: "https://en.wikipedia.org/wiki/Cumin",
  shahiJeera: "https://en.wikipedia.org/wiki/Bunium_persicum",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  blackPepper: "https://en.wikipedia.org/wiki/Black_pepper",
  blackCardamom: "https://en.wikipedia.org/wiki/Black_cardamom",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  fennel: "https://en.wikipedia.org/wiki/Fennel",
  clove: "https://en.wikipedia.org/wiki/Clove",
  mace: "https://en.wikipedia.org/wiki/Mace_(spice)",
  starAnise: "https://en.wikipedia.org/wiki/Illicium_verum",
  cinnamon: "https://en.wikipedia.org/wiki/Cinnamon",
  fenugreek: "https://en.wikipedia.org/wiki/Fenugreek",
  bayLeaf: "https://en.wikipedia.org/wiki/Cinnamomum_tamala",
  stoneFlower: "https://en.wikipedia.org/wiki/Parmotrema_perlatum",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  nutmeg: "https://en.wikipedia.org/wiki/Nutmeg",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  salt: "https://en.wikipedia.org/wiki/Salt",
  karahi: "https://en.wikipedia.org/wiki/Karahi",
  spice: "https://en.wikipedia.org/wiki/List_of_Indian_spices",
} as const;

function Wiki({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link hover:text-link-hover hover:underline"
      title="Read on Wikipedia"
    >
      {children}
    </a>
  );
}

export default function GaramMasalaPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        This is homemade shahi <Wiki href={W.garamMasala}>garam masala</Wiki> from the Lata
        Special kitchen. One spoon in sabzi and the plate comes alive — restaurant-style colour
        and aroma. Look at the coarse grain. Smell it. Shop garam masala is often only ground{" "}
        <Wiki href={W.coriander}>dhaniya</Wiki>: no taste, no khushboo, a flat colour. Try this
        recipe once.
      </p>
      <p>
        Garam masala finishes a gravy. For the dark Nagpur roast we pack as{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>
        , see how we{" "}
        <Link href="/blogs/saoji-masala-recipe" className="text-link hover:text-link-hover hover:underline">
          make Saoji masala at home
        </Link>
        . Keep both: Saoji Masala in the bhunao, a spoon of this garam masala at the end.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        Blue words open Wikipedia. Measure with one big household tablespoon so the ratios stay
        the same. From{" "}
        <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
          Lata Linge
        </Link>
        , Nagpur.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">First roast (very low flame)</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          2–2½ tbsp <Wiki href={W.shahiJeera}>shahi jeera</Wiki> (black cumin)
        </li>
        <li>5–6 tbsp coriander seeds (the base — about 1 cup if you scale up)</li>
        <li>
          3–4 tbsp good <Wiki href={W.blackPepper}>black peppercorns</Wiki> (about ¾ of the
          coriander cup)
        </li>
        <li>
          ½ tsp regular whole <Wiki href={W.cumin}>jeera</Wiki> — only a pinch extra heat
        </li>
        <li>
          1 tbsp / 5–6 <Wiki href={W.blackCardamom}>black cardamom</Wiki> (badi elaichi)
        </li>
        <li>
          2 tbsp green <Wiki href={W.cardamom}>cardamom</Wiki>
        </li>
        <li>
          1 tsp <Wiki href={W.fennel}>saunf</Wiki> — not more, or the texture goes wrong
        </li>
        <li>
          Less than ½ tsp <Wiki href={W.clove}>cloves</Wiki>
        </li>
        <li>
          3 small <Wiki href={W.mace}>javitri</Wiki> (mace)
        </li>
        <li>
          4 <Wiki href={W.starAnise}>star anise</Wiki> (chakra phool)
        </li>
        <li>
          3–4 <Wiki href={W.cinnamon}>cinnamon</Wiki> sticks
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">After the first roast</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          2 tbsp <Wiki href={W.fenugreek}>kasuri methi</Wiki> — mix into the hot spices, do not
          pan-roast
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">Second roast (wiped pan)</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          10–12 <Wiki href={W.bayLeaf}>tej patta</Wiki>
        </li>
        <li>
          2–3 tbsp <Wiki href={W.stoneFlower}>stone flower</Wiki> (dagad phool)
        </li>
        <li>
          2 small pieces dry ginger / <Wiki href={W.ginger}>saunth</Wiki>
        </li>
        <li>
          ¾ of one <Wiki href={W.nutmeg}>nutmeg</Wiki> (jaiphal)
        </li>
        <li>
          3 dry red <Wiki href={W.chili}>chillies</Wiki>, seeds removed
        </li>
      </ul>
      <p>
        No <Wiki href={W.salt}>salt</Wiki> in this mix. Salt belongs in the sabzi, not in the
        masala jar.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="Garam masala at the end — Saoji Masala in the bhunao"
        note="This shahi garam masala is the finishing spoon. For the dark Nagpur gravy itself, keep Lata Special Saoji Masala — 250 g is ₹200. Add to cart for usal, patodi, mutton and rasedar sabzi."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Warm the pan, not scorch it
      </h2>
      <p>
        Put a pan on a very low flame for about half a minute so every side is warm. Test with a
        drop of water. If it vanishes at once, the pan is too hot. Switch off, wait one minute.
        Perfect heat: a very light smoke. That is the temperature for shahi garam masala.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Add spices in corners, then mix
      </h2>
      <p>
        Shahi jeera first — two to two-and-a-half big spoons. Aroma and taste both come from this.
        Then coriander seeds, five to six spoons. Coriander is the base of this garam masala.
      </p>
      <p>
        Black pepper next — three to four spoons of good quality. In summer this warmth is
        welcome; this is what gives the masala its heat. Add only half a teaspoon regular jeera.
        Shahi jeera is already strong. You want a little extra sharpness, not a jeera blast.
      </p>
      <p>
        Black cardamom — one big spoon, or five to six pods. This is the &quot;jaan&quot; in
        gravy, especially non-veg. Then two spoons green cardamom for flavour and a cooling note.
        One teaspoon fennel only. Half a teaspoon cloves or less. Three small mace blades — more
        mace fights the shahi jeera. Four star anise. Three to four cinnamon sticks.
      </p>
      <p>
        Mix on a low flame. Never raise the gas. If the pan feels too hot, switch it off. After
        about one minute of stirring the spices should look only lightly roasted.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — The hand test, then kasuri methi
      </h2>
      <p>
        Take a pinch in your palm. Warm is right. If it burns your hand, it is already too far —
        spices will smoke and go bitter. Tip everything into a cold bowl.
      </p>
      <p>
        While the spices are still hot, sprinkle two spoons kasuri methi and mix. Do not roast
        methi in the pan. It burns in seconds. The leftover heat is enough for a light toast.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — Leaves, stone flower, saunth, nutmeg, chilli
      </h2>
      <p>
        Wipe the same pan. On a low flame add 10–12 tej patta, 2–3 tablespoons stone flower, two
        small saunth pieces, three-quarters of a nutmeg, and three seeded dry red chillies. Roast
        these a little longer than the first batch — until the bay leaves turn crisp like papad.
      </p>
      <p>
        Break the tej patta. Fish out the saunth. Pound saunth and cinnamon on a silbatta first so
        the mixer jar does not suffer. Mix everything with your hands. Cool fully.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Grind in small lots
      </h2>
      <p>
        A silbatta is lovely. A blender is fine if you have no stone. Fill the jar no more than
        about half — leave a quarter empty. Pulse, stop, mix with a spoon, pulse again. For{" "}
        <Wiki href={W.karahi}>kadhai</Wiki> sabzi you can stop at about 80% — a little coarse. One
        more pulse if you want it finer. That near-perfect texture is what you want.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        How to use and store
      </h2>
      <p>
        One teaspoon in 1 kg sabzi. Veg or non-veg — the gravy should taste restaurant-style, not
        like a packet. Make a fresh batch about once a month. Store airtight one to two months.{" "}
        <a href="/#store" className="text-link hover:text-link-hover hover:underline">
          Dry spoon, cool cupboard
        </a>
        , never the fridge.
      </p>
      <p>
        Finish{" "}
        <Link href="/blogs/patodi-sabji-recipe" className="text-link hover:text-link-hover hover:underline">
          patodi sabji
        </Link>
        ,{" "}
        <Link href="/blogs/butter-chicken-recipe" className="text-link hover:text-link-hover hover:underline">
          butter chicken
        </Link>
        , or{" "}
        <Link href="/blogs/chicken-biryani-recipe" className="text-link hover:text-link-hover hover:underline">
          chicken biryani
        </Link>{" "}
        with this spoon. For Vidarbha heat in the base, cook with{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        the way we{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          use it in rasedar sabzi
        </a>
        , or follow the{" "}
        <Link href="/blogs/saoji-mutton-nagpur-recipe" className="text-link hover:text-link-hover hover:underline">
          Saoji mutton recipe
        </Link>
        .
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          Low flame is the whole secret — same as our{" "}
          <Link href="/blogs/saoji-masala-recipe" className="text-link hover:text-link-hover hover:underline">
            Saoji masala roast
          </Link>
          . Shop masala smells of dhaniya only. Homemade smells of the whole{" "}
          <Wiki href={W.spice}>spice box</Wiki>. Keep{" "}
          <a href="/#deals" className="text-link hover:text-link-hover hover:underline">
            Saoji Masala packs
          </a>{" "}
          for Nagpur delivery when you want the gravy already roasted.
        </p>
      </aside>

      {faqs.length > 0 ? (
        <section className="mt-10 border-t border-[#d5d9d9] pt-6" aria-labelledby="recipe-faq-heading">
          <h2 id="recipe-faq-heading" className="text-[20px] font-bold text-[#0f1111] md:text-[22px]">
            Frequently asked questions
          </h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.question}>
                <dt className="text-[15px] font-bold text-[#0f1111]">{f.question}</dt>
                <dd className="mt-1 text-[14px] leading-6 text-[#565959] md:text-[15px] md:leading-7">
                  {f.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </div>
  );
}
