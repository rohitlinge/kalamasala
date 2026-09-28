import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  maharashtrian: "https://en.wikipedia.org/wiki/Maharashtrian_cuisine",
  maharashtra: "https://en.wikipedia.org/wiki/Maharashtra",
  nagpur: "https://en.wikipedia.org/wiki/Nagpur",
  gramFlour: "https://en.wikipedia.org/wiki/Gram_flour",
  chickpea: "https://en.wikipedia.org/wiki/Chickpea",
  garamMasala: "https://en.wikipedia.org/wiki/Garam_masala",
  salt: "https://en.wikipedia.org/wiki/Salt",
  water: "https://en.wikipedia.org/wiki/Water",
  karahi: "https://en.wikipedia.org/wiki/Karahi",
  oil: "https://en.wikipedia.org/wiki/Cooking_oil",
  bayLeaf: "https://en.wikipedia.org/wiki/Bay_leaf",
  tomato: "https://en.wikipedia.org/wiki/Tomato",
  vegetarian: "https://en.wikipedia.org/wiki/Vegetarianism",
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

export default function PatodiSabjiPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Namaskar. This is a simple <Wiki href={W.maharashtrian}>Marathi kitchen</Wiki> plate —{" "}
        <strong>patodi sabji</strong>. Soft <Wiki href={W.gramFlour}>besan</Wiki> strips in a
        rasedar gravy. In many homes the dry masala in this pot used to be gharacha kala masala. In
        this recipe we use{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        instead — the same Nagpur roast{" "}
        <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
          Lata Linge
        </Link>{" "}
        packs for bhaji, wadi, and gravy.
      </p>
      <p>
        The mix is easy: one glass besan, one glass cold water. That is the perfect measure. Dry
        masala goes into the batter. Then we cook it slow, cut the patodi, and finish the sabji in
        oil with more Saoji Masala on a medium flame.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        Blue words open Wikipedia. This is a <Wiki href={W.vegetarian}>vegetarian</Wiki> gravy
        from <Wiki href={W.maharashtra}>Maharashtra</Wiki> — the same family of rasedar sabzi we{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          cook with Saoji Masala
        </a>{" "}
        in <Wiki href={W.nagpur}>Nagpur</Wiki>.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">For the patodi (besan mix)</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          1 glass <Wiki href={W.chickpea}>besan</Wiki> (gram flour)
        </li>
        <li>
          1 glass cold <Wiki href={W.water}>water</Wiki> — not hot
        </li>
        <li>
          <Wiki href={W.salt}>Salt</Wiki> to taste
        </li>
        <li>
          A little more than ½ tsp <Wiki href={W.garamMasala}>garam masala</Wiki>
        </li>
        <li>
          ¼ tsp Lata Special{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            Saoji Masala
          </a>
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">For the sabji</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          3–4 tbsp <Wiki href={W.oil}>oil</Wiki>
        </li>
        <li>
          2 <Wiki href={W.bayLeaf}>tej patta</Wiki> (bay leaves)
        </li>
        <li>
          Optional: 1 chopped <Wiki href={W.tomato}>tomato</Wiki>
        </li>
        <li>
          Lata Special Saoji Masala — about 1–1½ tsp, or to taste
        </li>
        <li>Water for a thin-to-medium gravy</li>
      </ul>

      <BlogMasalaAd
        packId="250"
        headline="This sabji needs Lata Special Saoji Masala — ₹200 pack"
        note="Skip gharacha kala masala guesswork. The 250 g starter pack is ₹200 — homemade in Nagpur for patodi, wadi, aloo-baingan and rasedar gravy. Add to cart before you mix the besan."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Mix besan with cold water
      </h2>
      <p>
        Take one glass besan and one glass water. This 1:1 measure is perfect. The water must be
        cold. Hot water can spoil the mix and make lumps.
      </p>
      <p>
        Add salt, a little more than half a teaspoon garam masala, and a quarter teaspoon Lata
        Special Saoji Masala. These are the dry masalas. Mix well — no dry pockets of besan. Stir
        until the batter is smooth.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Cook on a low flame
      </h2>
      <p>
        Put the mix on the gas on a low flame. Keep stirring with a spoon so it does not stick.
        This is a slow process. Do not rush. The batter will thicken and come together like a
        soft dough. When it leaves the pan and holds shape, it is ready.
      </p>
      <p>
        Grease a thali or plate. Spread the hot mix in an even layer. Let it cool until you can
        cut it. Slice into strips or diamonds — that is your patodi.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — Sabji in the kadhai
      </h2>
      <p>
        Heat 3–4 thick spoons of oil in a <Wiki href={W.karahi}>kadhai</Wiki>. When the oil is
        hot, drop in two tej patta. Add tomato if you use it. Then add Lata Special Saoji Masala.
        Roast on a <strong>medium</strong> flame till the masala smells cooked and the oil starts
        to show.
      </p>
      <p>
        This is the same method we use for rasedar sabzi: fry the masala well, then add water.{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          See how to use Saoji Masala
        </a>{" "}
        if you want the full gravy steps with ginger, garlic and onion paste.
      </p>
      <p>
        Pour water for a light gravy. When it simmers, slide in the patodi pieces. Mix gently so
        the strips do not break. Cook a few minutes till the gravy clings. Taste salt and heat.
        Saoji Masala is already spicy — add green chilli only if you want more bite.
      </p>

      <p>
        Old packets of &quot;kala masala&quot; are not needed here. Keep{" "}
        <a href="/#deals" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        in the kitchen — 250 g is ₹200. Same dark Nagpur roast that goes in wadi sabzi, aloo
        bhaji, and this patodi.{" "}
        <Link href="/blogs/saoji-masala-recipe" className="text-link hover:text-link-hover hover:underline">
          How we roast Saoji masala
        </Link>{" "}
        is on the blog if you want the full spice story.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        How to serve it
      </h2>
      <p>
        Serve hot with bhakri, poli, or rice. The patodi should stay soft, not rubbery. If the
        gravy dries, loosen with a splash of hot water. Store leftover masala airtight —{" "}
        <a href="/#store" className="text-link hover:text-link-hover hover:underline">
          dry spoon only
        </a>
        .
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          Cold water in the besan, low flame while stirring, medium flame for the Saoji Masala in
          oil. That is the whole sabji. Shop the{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            250 g pack
          </a>{" "}
          — Nagpur delivery only.
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
