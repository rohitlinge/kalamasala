import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  biryani: "https://en.wikipedia.org/wiki/Biryani",
  chicken: "https://en.wikipedia.org/wiki/Chicken_as_food",
  basmati: "https://en.wikipedia.org/wiki/Basmati",
  garamMasala: "https://en.wikipedia.org/wiki/Garam_masala",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  cinnamon: "https://en.wikipedia.org/wiki/Cinnamon",
  clove: "https://en.wikipedia.org/wiki/Clove",
  caraway: "https://en.wikipedia.org/wiki/Caraway",
  mace: "https://en.wikipedia.org/wiki/Mace_(spice)",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  garlic: "https://en.wikipedia.org/wiki/Garlic",
  mint: "https://en.wikipedia.org/wiki/Mentha",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  ghee: "https://en.wikipedia.org/wiki/Ghee",
  oil: "https://en.wikipedia.org/wiki/Cooking_oil",
  onion: "https://en.wikipedia.org/wiki/Onion",
  dahi: "https://en.wikipedia.org/wiki/Dahi_(curd)",
  lemon: "https://en.wikipedia.org/wiki/Lemon",
  handi: "https://en.wikipedia.org/wiki/Handi",
  dum: "https://en.wikipedia.org/wiki/Dumpukht",
  salt: "https://en.wikipedia.org/wiki/Salt",
  foil: "https://en.wikipedia.org/wiki/Aluminium_foil",
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

export default function ChickenBiryaniPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Namaskar. Today we are making a full <strong>1 kg chicken dum</strong>{" "}
        <Wiki href={W.biryani}>biryani</Wiki> — the home pot people keep asking for. Not a tiny
        trial batch. One kilo <Wiki href={W.chicken}>chicken</Wiki>, one kilo rice, step by step,
        so the dum comes out juicy, layered, and khila-khila.
      </p>
      <p>
        Rice and chicken stay the same weight here. If your family eats less rice, use 750–800 g.
        That is also a good measure. We use 1 kg because many plates want extra rice.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        Blue words open Wikipedia. For more chicken from this kitchen, see{" "}
        <Link href="/blogs/butter-chicken-recipe" className="text-link hover:text-link-hover hover:underline">
          butter chicken
        </Link>{" "}
        and{" "}
        <Link href="/blogs/chicken-tikka-masala-recipe" className="text-link hover:text-link-hover hover:underline">
          chicken tikka masala
        </Link>
        . After biryani, keep{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        for weekday gravy.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need (1 kg pot)
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">Rice and chicken</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          1 kg long-grain <Wiki href={W.basmati}>basmati</Wiki> rice (or 750–800 g)
        </li>
        <li>1 kg chicken, cut small — about 30–40 g pieces</li>
        <li>
          A <Wiki href={W.handi}>handi</Wiki> that can hold 2–3 kg, not a tight 1 kg pot
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">Fresh biryani garam masala</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          10 g green <Wiki href={W.cardamom}>cardamom</Wiki>
        </li>
        <li>
          2 pieces <Wiki href={W.cinnamon}>cinnamon</Wiki>
        </li>
        <li>
          10–12 <Wiki href={W.clove}>cloves</Wiki>
        </li>
        <li>
          5–6 g <Wiki href={W.caraway}>shahjeera</Wiki> (caraway)
        </li>
        <li>
          1 piece <Wiki href={W.mace}>javitri</Wiki> (mace)
        </li>
      </ul>
      <p>
        That is all for the powder. Do not add extra spices here. Light roast, cool, grind a little
        coarse so every bite still has masala flavour. If this{" "}
        <Wiki href={W.garamMasala}>garam masala</Wiki> is weak, the biryani will not stand.
      </p>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">Marinade</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          <Wiki href={W.salt}>Salt</Wiki> to taste
        </li>
        <li>
          Less than ½ tbsp <Wiki href={W.turmeric}>turmeric</Wiki>
        </li>
        <li>
          1½ tbsp deggi <Wiki href={W.chili}>chilli</Wiki> powder (colour)
        </li>
        <li>1 tsp spicy chilli powder (heat)</li>
        <li>
          About 50 g <Wiki href={W.ginger}>ginger</Wiki>–<Wiki href={W.garlic}>garlic</Wiki> paste
        </li>
        <li>
          Half bunch chopped <Wiki href={W.mint}>pudina</Wiki> + the same amount chopped{" "}
          <Wiki href={W.coriander}>coriander</Wiki>
        </li>
        <li>5–6 green chillies</li>
        <li>
          150 ml <Wiki href={W.oil}>oil</Wiki> + 150 ml <Wiki href={W.ghee}>ghee</Wiki>
        </li>
        <li>
          About 200 g fried <Wiki href={W.onion}>onion</Wiki> (birista)
        </li>
        <li>
          300 g beaten <Wiki href={W.dahi}>dahi</Wiki>
        </li>
        <li>
          Juice of 3–4 <Wiki href={W.lemon}>lemons</Wiki>
        </li>
        <li>About ½ litre water (to loosen the marinade before dum)</li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">Rice water</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>About 5 litres water for 1 kg rice</li>
        <li>4–5 green cardamom, 1 broken cinnamon, 1 javitri, 4–5 cloves, 5 g shahjeera</li>
        <li>Salt in the water — taste it; not too little, not too much</li>
        <li>A little oil, plus chopped coriander and pudina while the rice boils</li>
      </ul>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Wash and soak the rice
      </h2>
      <p>
        Put the raw rice in a bowl. Wash it two to three times till the dust leaves. This gives the
        grain shine and a clean white look when it soaks.
      </p>
      <p>
        Cover with fresh water. Soak at least 30 minutes. Forty-five minutes is better for long
        basmati. Do not skip the soak.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Roast and grind the masala
      </h2>
      <p>
        In a dry pan, add 10 g cardamom, two cinnamon sticks, 10–12 cloves, 5–6 g shahjeera and one
        javitri. Warm them till they just smell good — a light chatkara, not a dark roast. Cool,
        then grind. Keep it a bit coarse, not baby-fine dust.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — Cut the chicken small
      </h2>
      <p>
        For a home 1 kg pot, cut chicken into 30–40 g pieces. Big pieces stay doubtful on dum — one
        side soft, one side raw. Small pieces cook through with the rice.
      </p>
      <p>
        Use a 2–3 kg handi (about 2½ kg is perfect). A 1 kg handi for 1 kg chicken plus 1 kg rice
        leaves no room for steam. Half the pot will fill with marinade; rice sits on top; the extra
        space is for dum.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — First marinade
      </h2>
      <p>
        In the handi, add salt, less than ½ tbsp turmeric, 1½ tbsp deggi chilli, 1 tsp spicy
        chilli, 50 g ginger-garlic paste, half bunch pudina, the same coriander, and 5–6 green
        chillies.
      </p>
      <p>
        Pour 150 ml oil and 150 ml ghee. Some kitchens skip ghee in the marinade. We do not. Oil
        plus ghee makes the masala shine and the chicken stay juicy.
      </p>
      <p>
        Add about 200 g birista and the fresh garam masala. Coat every piece. Rest 10 minutes so
        the masala goes inside and the colour comes up.
      </p>

      <BlogMasalaAd
        headline="Biryani tonight, Saoji gravy tomorrow"
        note="While the chicken rests, add Lata Special Saoji Masala to cart — homemade Nagpur roast for usal, bhaji and mutton when you want that dark Vidarbha plate next to the biryani."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Dahi, lemon, then water
      </h2>
      <p>
        Whisk 300 g dahi first so there are no lumps. Mix it into the chicken. Squeeze 3–4 lemons.
        Taste. If salt or heat is low, fix it now.
      </p>
      <p>
        This is the last seasoning. After this we only add hot water and rice. Pour about ½ litre
        water into the marinade and mix. The mix should be medium — not a thick paste, not a thin
        soup. The chicken is still raw. That loose gravy is what cooks the meat under the rice.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 6 — Boil the rice in two layers
      </h2>
      <p>
        Heat about 5 litres water. When it is simmering, add 4–5 cardamom, one broken cinnamon, one
        javitri, 4–5 cloves and 5 g shahjeera. Salt the water. When it boils, drain the soaked rice
        and add it.
      </p>
      <p>
        Stir so the rice does not sit in one heap. A little oil on top stops sticking. Sprinkle
        chopped coriander and pudina.
      </p>
      <p>
        After about 5 minutes the rice is about 50% cooked — still firm. Lift this first layer out.
        Keep boiling the rest about 15 minutes till it is about 70% cooked. Do not wait till the
        grain is fully soft. The last 30% cooks on dum.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 7 — Layer and dum
      </h2>
      <p>
        The marinade in the handi should look shiny and loose. Spread the 50% rice as the first
        layer on the raw chicken. Then add the 70% rice as the top layer. Finish with birista and
        chopped coriander.
      </p>
      <p>
        Set the handi on a tawa. Seal with <Wiki href={W.foil}>silver foil</Wiki> — no extra lid
        needed. A damp cloth or atta seal also works.
      </p>
      <p>
        <Wiki href={W.dum}>Dum</Wiki> for 20 minutes: 10 minutes on high flame, then 10 minutes on
        a slow flame. Open. The rice should be long, soft and separate. The chicken should pull
        off the bone, layer by layer.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        How to serve it
      </h2>
      <p>
        Serve hot from the handi. The colour should be rich, the rice khila-khila, the masala
        balanced by dahi and lemon. Fried onion made ahead makes this pot much easier — birista can
        sit in a jar for weeks.
      </p>
      <p>
        Want a spicy Nagpur gravy on the side? Cook with{" "}
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
          Two things make this 1 kg pot work: a bigger handi for steam, and rice that is only
          half-to-70% boiled before dum. From{" "}
          <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
            Lata Linge
          </Link>
          &apos;s Nagpur kitchen — and keep{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            Saoji Masala
          </a>{" "}
          for the next gravy night.
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
