import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  saoji: "https://en.wikipedia.org/wiki/Saoji_cuisine",
  nagpur: "https://en.wikipedia.org/wiki/Nagpur",
  vidarbha: "https://en.wikipedia.org/wiki/Vidarbha",
  maharashtrian: "https://en.wikipedia.org/wiki/Maharashtrian_cuisine",
  masala: "https://en.wikipedia.org/wiki/Masala",
  spice: "https://en.wikipedia.org/wiki/List_of_Indian_spices",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  poppy: "https://en.wikipedia.org/wiki/Poppy_seed",
  stoneFlower: "https://en.wikipedia.org/wiki/Parmotrema_perlatum",
  chickpea: "https://en.wikipedia.org/wiki/Chickpea",
  sorghum: "https://en.wikipedia.org/wiki/Sorghum",
  wheat: "https://en.wikipedia.org/wiki/Wheat",
  rice: "https://en.wikipedia.org/wiki/Rice",
  cumin: "https://en.wikipedia.org/wiki/Cumin",
  fennel: "https://en.wikipedia.org/wiki/Fennel",
  blackPepper: "https://en.wikipedia.org/wiki/Black_pepper",
  starAnise: "https://en.wikipedia.org/wiki/Illicium_verum",
  blackCardamom: "https://en.wikipedia.org/wiki/Black_cardamom",
  clove: "https://en.wikipedia.org/wiki/Clove",
  cinnamon: "https://en.wikipedia.org/wiki/Cinnamon",
  nutmeg: "https://en.wikipedia.org/wiki/Nutmeg",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  salt: "https://en.wikipedia.org/wiki/Salt",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  onionPowder: "https://en.wikipedia.org/wiki/Onion_powder",
  garlicPowder: "https://en.wikipedia.org/wiki/Garlic_powder",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  oil: "https://en.wikipedia.org/wiki/Cooking_oil",
  karahi: "https://en.wikipedia.org/wiki/Karahi",
  bhuna: "https://en.wikipedia.org/wiki/Bhuna",
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

export default function SaojiMasalaPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Namaskar. Welcome.{" "}
        <Wiki href={W.saoji}>Saoji</Wiki> is the special identity of{" "}
        <Wiki href={W.nagpur}>Nagpur</Wiki>. When we cook Saoji food, we use a mix of many{" "}
        <Wiki href={W.spice}>spices</Wiki>. After this{" "}
        <Wiki href={W.masala}>masala</Wiki> goes in, the gravy turns a little dark, stays thin, and
        feels spicy — that classic <Wiki href={W.vidarbha}>Vidarbha</Wiki> taste.
      </p>
      <p>
        Before we cook the gravy, we must know what Saoji masala is. Today we will make it at home,
        the slow way. This is not one spice, not two, not three. About{" "}
        <strong>18 kinds of spices</strong> go into this roast. We roast every one on a very low
        flame.
      </p>
      <p>
        If you later want to cook with this masala, try our{" "}
        <Link href="/blogs/saoji-mutton-nagpur-recipe" className="text-link hover:text-link-hover hover:underline">
          Saoji mutton Nagpur recipe
        </Link>
        . You can also{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          see how we use Lata Special Saoji Masala
        </a>{" "}
        in everyday bhaji and gravy.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        New to Indian spices? Blue words open Wikipedia. Shop links stay on this site — tap{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Saoji Masala
        </a>{" "}
        if you want the ready pack from{" "}
        <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
          Lata Linge
        </Link>
        &apos;s Nagpur kitchen.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">Dry roast (slow flame)</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          300 g whole <Wiki href={W.coriander}>coriander</Wiki> seeds (khada dhaniya)
        </li>
        <li>
          50 g <Wiki href={W.poppy}>poppy seeds</Wiki> (khuskhus)
        </li>
        <li>
          <Wiki href={W.stoneFlower}>Stone flower</Wiki> (dagad phool / patthar ka phool) — a small
          handful; do not roast too long
        </li>
        <li>
          2–3 tbsp split <Wiki href={W.chickpea}>chickpea</Wiki> lentils (chana dal)
        </li>
        <li>
          2–3 tbsp <Wiki href={W.sorghum}>sorghum</Wiki> (jowar)
        </li>
        <li>
          2–3 tbsp <Wiki href={W.wheat}>wheat</Wiki> (gehun)
        </li>
        <li>
          2–3 tbsp <Wiki href={W.rice}>rice</Wiki>
        </li>
        <li>
          <Wiki href={W.cumin}>Cumin</Wiki> (jeera)
        </li>
        <li>
          <Wiki href={W.fennel}>Fennel</Wiki> seeds (saunf / badi saunf)
        </li>
        <li>
          <Wiki href={W.blackPepper}>Black peppercorns</Wiki> (kali mirch)
        </li>
        <li>
          <Wiki href={W.starAnise}>Star anise</Wiki> (star flower / karan phool)
        </li>
        <li>
          <Wiki href={W.blackCardamom}>Black cardamom</Wiki> (badi elaichi)
        </li>
        <li>
          <Wiki href={W.clove}>Cloves</Wiki> (laung)
        </li>
        <li>
          <Wiki href={W.cinnamon}>Cinnamon</Wiki> (dalchini)
        </li>
        <li>
          <Wiki href={W.nutmeg}>Nutmeg</Wiki> (jaiphal)
        </li>
        <li>
          Green <Wiki href={W.cardamom}>cardamom</Wiki> (hari elaichi)
        </li>
        <li>
          <Wiki href={W.salt}>Salt</Wiki>
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">
        Cook in oil (the dry-gravy part)
      </h3>
      <p>
        After the whole spices are roasted, this mix is still a dry Saoji masala. The next part
        needs oil: onion powder, garlic powder, turmeric, ginger, and red chilli. That is what
        gives the masala its dark colour and cooked taste.
      </p>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          <Wiki href={W.oil}>Oil</Wiki>, enough to fry the powders
        </li>
        <li>
          Dry <Wiki href={W.turmeric}>turmeric</Wiki> — in Marathi this dry turmeric is often
          called <em>halak</em>
        </li>
        <li>
          Red <Wiki href={W.chili}>chilli</Wiki> powder
        </li>
        <li>
          <Wiki href={W.onionPowder}>Onion powder</Wiki>
        </li>
        <li>
          <Wiki href={W.garlicPowder}>Garlic powder</Wiki>
        </li>
        <li>
          <Wiki href={W.ginger}>Ginger</Wiki> powder
        </li>
      </ul>

      <BlogMasalaAd
        headline="Don't want to roast 18 spices today?"
        note="Lata Special Saoji Masala is the same Nagpur kitchen roast — packed and ready for usal, bhaji, mutton and gravies. Add a 500 g pack and skip the long roast."
      />

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        The one rule: slow flame only
      </h2>
      <p>
        Take a <Wiki href={W.karahi}>kadhai</Wiki>. Keep the flame very low. Fast heat burns spice
        and makes the masala bitter. Slow heat brings a slightly dark colour and a deep smell. That
        is the Saoji way.
      </p>
      <p>
        Roast one spice after another. Small spices cook fast. Big seeds need more time. Do not dump
        everything in at once.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Roast the coriander
      </h2>
      <p>
        First take 300 g whole coriander. Roast it on a very low flame until it turns a little dark.
        Stir so it does not burn. When the colour deepens and the kitchen smells warm, it is ready.
        Take it out.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Poppy seeds
      </h2>
      <p>
        Next, 50 g poppy seeds. Same slow flame. Roast till they smell nutty. Poppy seeds burn
        quickly, so stay with the pan. Plate them with the coriander.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — Stone flower
      </h2>
      <p>
        Now stone flower — dagad phool, also called patthar ka phool. This is the forest note in{" "}
        <Wiki href={W.maharashtrian}>Maharashtrian</Wiki> Saoji cooking. Roast it on a low flame,
        but not for long. Too much heat spoils its smell. A short roast is enough. Take it out.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — Chana dal, jowar, wheat and rice
      </h2>
      <p>
        Put chana dal, jowar, wheat and rice in the same pan — about two to three spoons of each.
        Roast them together on a low flame till they look lightly cooked. These grains give body to
        Saoji gravy later, so they should not stay raw. When done, plate them.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Cumin, fennel and black pepper
      </h2>
      <p>
        Cumin, fennel and black pepper do not need a long roast. A short, slow roast is enough.
        Pepper especially — if you cook it too long it turns harsh. A light <Wiki href={W.bhuna}>bhunao</Wiki>{" "}
        is all you want. Plate them.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 6 — The rest of the whole spices
      </h2>
      <p>
        Now add the remaining spices one by one, still on a low flame: star anise, black cardamom,
        cloves, cinnamon, nutmeg, green cardamom, and salt. Keep stirring. Let each one warm through
        and smell good. When the whole lot looks roasted and dry, this dry Saoji masala base is
        ready.
      </p>

      <BlogMasalaAd
        headline="This is the Saoji Masala we pack at Lata Special"
        note="Same slow roast, same Nagpur taste — without standing at the kadhai for 18 spices. Add Lata Special Saoji Masala to cart and keep it ready for mutton, usal and gravy."
      />

      <p>
        Making this full batch at home is a labour of love. If you cook Saoji often, keep{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        in the kitchen. It is homemade in Nagpur, packed in{" "}
        <a href="/#deals" className="text-link hover:text-link-hover hover:underline">
          250 g, 500 g, 1 kg and 2 kg packs
        </a>
        , and made for the same dark, thin, spicy gravy this roast is aiming for. See what goes{" "}
        <a href="/#ingredients" className="text-link hover:text-link-hover hover:underline">
          inside the blend
        </a>{" "}
        and how we{" "}
        <a href="/#craft" className="text-link hover:text-link-hover hover:underline">
          roast each spice on its own clock
        </a>
        .
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 7 — Turmeric, chilli and powders in oil
      </h2>
      <p>
        The dry roast is only half the story. For a true Saoji dry-gravy masala, we still cook
        onion powder, garlic powder, turmeric and ginger in oil.
      </p>
      <p>
        Heat oil in the pan. First add dry turmeric — the kind Marathi kitchens call <em>halak</em>.
        Then add red chilli. Let the chilli go a little dark, then take this mix off if it starts to
        catch. Next add onion powder, ginger powder and garlic powder. Roast on a low flame till the
        raw smell leaves and the powders look cooked. Do not rush this step.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 8 — Pound or grind
      </h2>
      <p>
        In the old way, this roasted mix is pounded by hand. That gives a slightly coarse, oily
        powder. If you do not have a pounding stone, a mixer is fine — that is what we use in the
        kitchen now. Cool the spices fully, then grind. Do not grind while they are hot, or the
        masala can turn bitter.
      </p>
      <p>
        When it is a fine, dark powder, your homemade Saoji masala is ready. Store it airtight, in a
        cool dry place.{" "}
        <a href="/#store" className="text-link hover:text-link-hover hover:underline">
          Our storage tips
        </a>{" "}
        are the same for this jar and for a shop pack: dry spoon only, no fridge.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        How to use this masala
      </h2>
      <p>
        This masala is ready to cook with. Saoji gravy should stay a little dark, a little thin, and
        spicy. For a full plate, follow our{" "}
        <Link href="/blogs/saoji-mutton-nagpur-recipe" className="text-link hover:text-link-hover hover:underline">
          best Saoji mutton Nagpur recipe
        </Link>
        . For everyday vegetables,{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          use Saoji Masala
        </a>{" "}
        the simple way: roast a little ginger, garlic and onion, make a paste, mix in the masala,
        fry in oil till the oil rises, then add water and your sabzi.
      </p>
      <p>
        Short on time? Skip the 18-spice roast and cook with{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        — the same Nagpur flavour, already roasted and packed. Delivery is Nagpur only.
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          Slow flame is the whole secret. Dark colour should come from patience, not from burnt
          spice. If you want that taste without the long roast, keep{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            Lata Special Saoji Masala
          </a>{" "}
          on the shelf — homemade in Nagpur by{" "}
          <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
            Lata Linge
          </Link>
          .
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
