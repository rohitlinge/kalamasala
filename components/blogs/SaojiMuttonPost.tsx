import type { ReactNode } from "react";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  nagpur: "https://en.wikipedia.org/wiki/Nagpur",
  maharashtrian: "https://en.wikipedia.org/wiki/Maharashtrian_cuisine",
  vidarbha: "https://en.wikipedia.org/wiki/Vidarbha",
  mutton: "https://en.wikipedia.org/wiki/Lamb_and_mutton",
  bayLeaf: "https://en.wikipedia.org/wiki/Bay_leaf",
  tejpatta: "https://en.wikipedia.org/wiki/Cinnamomum_tamala",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  cinnamon: "https://en.wikipedia.org/wiki/Cinnamon",
  clove: "https://en.wikipedia.org/wiki/Clove",
  blackPepper: "https://en.wikipedia.org/wiki/Black_pepper",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  blackCardamom: "https://en.wikipedia.org/wiki/Black_cardamom",
  onion: "https://en.wikipedia.org/wiki/Onion",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  garlic: "https://en.wikipedia.org/wiki/Garlic",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  pressureCooking: "https://en.wikipedia.org/wiki/Pressure_cooking",
  starAnise: "https://en.wikipedia.org/wiki/Illicium_verum",
  nutmeg: "https://en.wikipedia.org/wiki/Nutmeg",
  fennel: "https://en.wikipedia.org/wiki/Fennel",
  stoneFlower: "https://en.wikipedia.org/wiki/Parmotrema_perlatum",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  coconut: "https://en.wikipedia.org/wiki/Coconut",
  poppy: "https://en.wikipedia.org/wiki/Poppy_seed",
  sorghum: "https://en.wikipedia.org/wiki/Sorghum",
  chickpea: "https://en.wikipedia.org/wiki/Chickpea",
  rice: "https://en.wikipedia.org/wiki/Rice",
  lemon: "https://en.wikipedia.org/wiki/Lemon",
  bhakri: "https://en.wikipedia.org/wiki/Bhakri",
  roti: "https://en.wikipedia.org/wiki/Roti",
  spice: "https://en.wikipedia.org/wiki/List_of_Indian_spices",
  oil: "https://en.wikipedia.org/wiki/Cooking_oil",
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

export default function SaojiMuttonPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Today we&apos;re making a spicy, savoury mutton curry that comes straight from the{" "}
        <Wiki href={W.nagpur}>Nagpur</Wiki> kitchen tradition — yes, that{" "}
        <Wiki href={W.vidarbha}>Vidarbha</Wiki> heat people call Saoji. Nagpur and Saoji go together,
        and that&apos;s why this <Wiki href={W.mutton}>mutton</Wiki> gravy tastes so bold.
      </p>
      <p>
        This is the <Wiki href={W.maharashtrian}>Maharashtrian</Wiki> Saoji-style mutton curry we
        cook at home with Lata Special{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Kala Massala
        </a>
        . Watch carefully, follow the steps, and you&apos;ll get that dark, oily, aromatic Nagpur
        gravy everyone asks for.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        New to Indian spices? Blue words open Wikipedia so you can see what each ingredient is.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">For the mutton</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          ½ kg <Wiki href={W.mutton}>mutton</Wiki>
        </li>
        <li>
          2–3 tbsp <Wiki href={W.oil}>oil</Wiki>
        </li>
        <li>
          1 small <Wiki href={W.tejpatta}>bay leaf / tejpatta</Wiki>
        </li>
        <li>
          1 slit green <Wiki href={W.chili}>chilli</Wiki>
        </li>
        <li>
          1 small stick of <Wiki href={W.cinnamon}>cinnamon</Wiki>
        </li>
        <li>
          2 <Wiki href={W.clove}>cloves</Wiki>
        </li>
        <li>
          5 <Wiki href={W.blackPepper}>black peppercorns</Wiki>
        </li>
        <li>
          1 small green <Wiki href={W.cardamom}>cardamom</Wiki>
        </li>
        <li>
          About 1 tbsp chopped <Wiki href={W.onion}>onion</Wiki>
        </li>
        <li>
          ½ tsp <Wiki href={W.ginger}>ginger</Wiki>–<Wiki href={W.garlic}>garlic</Wiki> paste
        </li>
        <li>
          A pinch of <Wiki href={W.turmeric}>turmeric</Wiki>
        </li>
        <li>Salt, about 1 cup water (added in batches)</li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">
        For the dry roast (Saoji-style spice base)
      </h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          1 <Wiki href={W.starAnise}>star anise</Wiki>, 1 <Wiki href={W.nutmeg}>nutmeg</Wiki>, 1
          green cardamom, 4–5 cloves, 1 small <Wiki href={W.blackCardamom}>black cardamom</Wiki>
        </li>
        <li>15–16 black peppercorns</li>
        <li>5–6 small cinnamon sticks</li>
        <li>
          ½ tsp <Wiki href={W.fennel}>fennel seeds</Wiki>
        </li>
        <li>
          About 1½ pieces <Wiki href={W.stoneFlower}>stone flower</Wiki> (dagad phool)
        </li>
        <li>1 bay leaf</li>
        <li>
          ¼ cup <Wiki href={W.coriander}>coriander seeds</Wiki>
        </li>
        <li>
          ¼ cup grated dry <Wiki href={W.coconut}>coconut</Wiki>
        </li>
        <li>
          1 tbsp <Wiki href={W.poppy}>poppy seeds</Wiki> (khuskhus)
        </li>
        <li>5–6 dry red chillies</li>
        <li>
          1 tbsp <Wiki href={W.sorghum}>sorghum</Wiki> flour (jowar atta)
        </li>
        <li>
          ½ tsp split <Wiki href={W.chickpea}>chickpea</Wiki> lentils (chana dal) + ½ tsp{" "}
          <Wiki href={W.rice}>rice</Wiki>
        </li>
        <li>2 medium whole onions (for open-flame roasting)</li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">To grind &amp; finish</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>1 cup cleaned coriander leaves</li>
        <li>4–5 green chillies, 1-inch ginger, 10–15 garlic cloves</li>
        <li>
          Lata Special{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            Kala Massala
          </a>{" "}
          — this is the Saoji-style punch we use instead of buying random packet masala
        </li>
        <li>3–4 tbsp oil, 1 bay leaf, 1 medium finely chopped onion</li>
        <li>1½ tsp red chilli powder, ½ tsp turmeric</li>
        <li>5–6 medium garlic cloves (whole — optional Nagpur touch)</li>
        <li>
          Juice of half a <Wiki href={W.lemon}>lemon</Wiki> (optional), fresh coriander to garnish
        </li>
      </ul>

      <BlogMasalaAd
        headline="Skip the packet guesswork — use Lata Special Kala Massala"
        note="For true Nagpur Saoji-style heat in this mutton, we cook with our homemade Kala Massala. Add a pack to cart and keep it ready before you start the gravy."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Temper and pressure-cook the mutton
      </h2>
      <p>
        Put a cooker on the flame. Add 2–3 tbsp oil. When it&apos;s hot, drop in one small bay leaf,
        one slit green chilli, a small cinnamon stick, two cloves, five black peppercorns, and one
        small green cardamom.
      </p>
      <p>
        Add about one tablespoon chopped onion and half a teaspoon ginger-garlic paste. Mix well,
        then add a little turmeric. Put in half a kilogram of mutton and mix for two to three
        minutes so the spices cling to the meat. Add salt, mix again, then pour water in batches —
        about one cup for now.
      </p>
      <p>
        Close the lid and cook on{" "}
        <Wiki href={W.pressureCooking}>pressure</Wiki> for about six to seven whistles (seven to
        eight is also fine). Keep the flame steady.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Roast whole onions on the flame
      </h2>
      <p>
        While the mutton cooks, roast two medium whole onions (skin removed) directly on a low gas
        flame — keep a net or grate if you use one. Low flame matters. You want smoky flavour and
        soft centres. When a spoon goes straight through, they&apos;re done. Keep aside.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — Dry-roast spices separately
      </h2>
      <p>
        In a pan, add a little oil for dry roasting. First roast the whole spices: star anise,
        nutmeg, green cardamom, cloves, black cardamom, 15–16 black peppercorns, small cinnamon
        sticks, fennel seeds, stone flower, and one bay leaf. Mix till fragrant, then plate them.
      </p>
      <p>
        Next roast a quarter cup coriander seeds till the aroma comes up — plate them. Then roast a
        quarter cup grated coconut — plate. Roast one tablespoon poppy seeds properly; if you
        under-roast them they stay raw in the gravy — plate. Finally dry-roast five to six dry red
        chillies.
      </p>
      <p>
        Why separately? Small spices roast fast; big ones stay raw if you dump everything together.
        Separate roasting is the better way for Saoji-style flavour.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — Sorghum flour, chana dal and rice
      </h2>
      <p>
        Roast one tablespoon sorghum (jowar) flour for two to three minutes — don&apos;t wait for a
        pink colour, just a light roast. Then dry-roast half a teaspoon chana dal with half a
        teaspoon rice till lightly brown. Plate everything and switch off the flame.
      </p>
      <p>
        By now the cooker should have whistled about seven times. Turn it off. Open and check — the
        mutton should be soft and cooked through.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Grind the fresh masala paste
      </h2>
      <p>
        Once the roasted spices cool, put them in a mixer with the smoked onions, one cup coriander
        leaves, four to five green chillies, one-inch ginger, and ten to fifteen garlic cloves.
        Grind to a fine paste / powder-paste. This green-aromatic mix is what gives the gravy body.
      </p>
      <p>
        For the real Saoji-Nagpur punch in the finished gravy, we don&apos;t rely on random shop
        &quot;Saoji masala&quot; packets. We finish with Lata Special Kala Massala — our homemade
        Nagpuri roast that matches this kitchen style.
      </p>

      <BlogMasalaAd
        headline="This is where Kala Massala makes the gravy"
        note="When the fresh paste is ready, stir in Lata Special Kala Massala for that dark Saoji-style Nagpur taste. Add to cart now so you don't pause mid-recipe."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 6 — Build the gravy
      </h2>
      <p>
        Heat a pan with a little more oil than usual — Saoji gravy likes oil (three to four
        tablespoons; adjust to taste). Add one bay leaf, then one medium finely chopped onion.
        Roast till pink.
      </p>
      <p>
        Add 1½ tsp red chilli powder (Saoji is meant to be a bit spicy) and ½ tsp turmeric. Roast
        briefly. Add the ground spice paste and mix — it&apos;s already roasted, so you don&apos;t
        need a long bhunao. Now add Lata Special Kala Massala generously so the gravy gets that
        Nagpur Saoji character.
      </p>
      <p>
        Drop in five to six medium garlic cloves (whole). In Nagpur some kitchens use whole garlic
        like this — delicious, but optional. A little fresh coriander leaves too. When the masala
        releases oil, add the cooked mutton and mix for two to three minutes so every piece is
        coated.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 7 — Water, salt, lemon, and steam
      </h2>
      <p>
        Add water carefully. Because of sorghum flour, rice and lentils, the gravy soaks liquid —
        add slowly. Saoji mutton gravy is usually on the thinner-to-medium side, not a thick korma.
        Salt was already added in the cooker, so taste and adjust.
      </p>
      <p>
        Optional: squeeze half a lemon now, or serve lemon on the side. Mix well. If the gravy
        reduces too much, loosen with about half a cup more water. Garnish with coriander, cover,
        and steam for three to four minutes on low.
      </p>
      <p>
        Open the lid — oil should have released, aroma should hit you. Serve hot.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        How to enjoy it
      </h2>
      <p>
        Best with <Wiki href={W.bhakri}>bhakri</Wiki>, <Wiki href={W.roti}>poli / fulka</Wiki>, or
        steaming hot rice. Keep Lata Special Kala Massala on the table if anyone wants an extra
        spicy pinch.
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          Homemade Kala Massala is roasted for Nagpuri and Saoji-style gravies like this one. Shop
          packs on{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            kalamassala.online
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
