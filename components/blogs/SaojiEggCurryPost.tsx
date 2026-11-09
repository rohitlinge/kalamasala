import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";
import {
  BlogFaqSection,
  Bullets,
  H2,
  H3,
  KitchenTip,
  Note,
  PostLink,
  Prose,
  QuickFacts,
  RelatedPosts,
  SiteLink,
  Table,
  WIKI,
  Wiki,
} from "@/components/blogs/BlogParts";

export default function SaojiEggCurryPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. Not every day is a chicken or mutton day. On the busy days, our kitchen in{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki> makes <strong>Saoji egg curry</strong> — what we call{" "}
        <strong>anda rassa</strong>. Boiled <Wiki href={WIKI.egg}>eggs</Wiki> are fried with a little
        masala, then simmered in a thin, dark <Wiki href={WIKI.saoji}>Saoji</Wiki> rassa with red oil
        on top. It has the same taste as a bhojnalay plate, but it is ready in about 40 minutes.
      </p>
      <p>
        This is not the tomato-and-cream egg curry you see in restaurant menus. A Nagpur style egg
        curry gets its colour and depth from a roasted onion-coconut paste and{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink> fried in oil till it floats.
        If you have made our <PostLink slug="saoji-chicken-recipe">Saoji chicken</PostLink>, you
        already know the method — only the timing is shorter.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "15 min" },
          { label: "Cook", value: "25 min" },
          { label: "Serves", value: "3–4" },
          { label: "Heat", value: "Hot 🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. This recipe is for 6 eggs. For 10–12 eggs, double the paste and
        masala but use only 1½ times the water.
      </Note>

      <H2 id="ingredients">Ingredients for Saoji egg curry (6 eggs)</H2>
      <H3>For the eggs</H3>
      <Bullets>
        <li>6 eggs, hard-boiled and peeled</li>
        <li>
          ¼ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki>, a pinch of salt
        </li>
        <li>¼ tsp Lata Special Saoji Masala and 1 tbsp oil</li>
      </Bullets>

      <H3>For the roasted paste</H3>
      <Bullets>
        <li>
          2 medium <Wiki href={WIKI.onion}>onions</Wiki>, sliced
        </li>
        <li>
          3 tbsp grated dry <Wiki href={WIKI.coconut}>coconut</Wiki> (khobra)
        </li>
        <li>
          10–12 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves and a 1-inch piece of{" "}
          <Wiki href={WIKI.ginger}>ginger</Wiki>
        </li>
        <li>A few coriander stems</li>
      </Bullets>

      <H3>For the rassa</H3>
      <Bullets>
        <li>
          4 tbsp <Wiki href={WIKI.oil}>oil</Wiki> and 1 <Wiki href={WIKI.bayLeaf}>tej patta</Wiki>
        </li>
        <li>1½ tbsp Lata Special Saoji Masala (2 tbsp for full Nagpur heat)</li>
        <li>2½ cups hot water, salt, and chopped coriander</li>
      </Bullets>

      <BlogMasalaAd
        packId="250"
        headline="Anda rassa for the whole month — 250 g for ₹200"
        note="Six eggs need only 1½–2 tablespoons. One 250 g starter pack makes many quick Saoji egg curries on weekdays. Homemade and slow-roasted in Nagpur, with no colour added."
      />

      <H2 id="step-1">Step 1 — Boil, peel and slit the eggs</H2>
      <p>
        Put the eggs in a pot of cold water, bring to a boil, and cook 10 minutes. Move them to cold
        water right away — this makes peeling easy and keeps the yolk yellow, not grey. Peel and make
        3–4 shallow slits on each egg with a knife. Do not cut deep, or the egg will split in the
        gravy. The slits let the rassa go inside.
      </p>

      <H2 id="step-2">Step 2 — Fry the eggs with turmeric and Saoji Masala</H2>
      <p>
        Heat one spoon of oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki> on low flame. Add turmeric,
        a pinch of salt and a quarter teaspoon of Saoji Masala. Put in the eggs and roll them around
        for about 2 minutes. They get a light golden crust with red spots of masala. Keep the flame
        low — eggs can pop in hot oil. Take them out on a plate.
      </p>
      <p>
        This small step is what makes Saoji egg curry different. A plain boiled egg dropped in gravy
        tastes plain inside. A fried egg holds the masala.
      </p>

      <H2 id="step-3">Step 3 — Roast and grind the onion-coconut paste</H2>
      <p>
        In the same kadhai, add one more teaspoon of oil and the sliced onions. Roast on medium flame
        till they are <strong>deep brown</strong>, about 8–10 minutes. Add garlic and ginger and roast
        one minute. Add the dry coconut last and stir till it turns dark golden. Cool, then grind with
        coriander stems and a few spoons of water to a smooth paste.
      </p>

      <H2 id="step-4">Step 4 — Fry the paste and Saoji Masala till the oil separates</H2>
      <p>
        Heat 4 tbsp oil with tej patta. Add the paste and fry 4–5 minutes. Add 1½–2 tablespoons Saoji
        Masala with a small splash of water so it does not burn. Fry on a <strong>medium</strong>{" "}
        flame till the masala darkens and oil shows at the sides. This is the same rule from our{" "}
        <SiteLink href="/#use">how to use Saoji Masala</SiteLink> guide — oil up, masala cooked.
      </p>

      <H2 id="step-5">Step 5 — Make the thin anda rassa</H2>
      <p>
        Pour 2½ cups of hot water. Add salt — remember the eggs already have a little. Simmer 8–10
        minutes. The rassa should be thin enough to pour, and a red-black layer of oil (tarri) should
        float on top. Taste and adjust heat now, before the eggs go in.
      </p>

      <H2 id="step-6">Step 6 — Add the eggs and serve</H2>
      <p>
        Slide in the fried eggs, slit side down. Simmer 3–4 minutes on low flame only — boiling hard
        makes the egg white rubbery. Finish with chopped coriander. Serve hot with chapati, jowar{" "}
        <Wiki href={WIKI.bhakri}>bhakri</Wiki> or plain <Wiki href={WIKI.rice}>rice</Wiki>, with sliced
        onion and lemon on the side.
      </p>

      <H2 id="egg-curry-styles">Saoji egg curry vs other egg curries</H2>
      <Table
        head={["Style", "Gravy base", "Colour", "Texture"]}
        rows={[
          ["Saoji anda rassa (Nagpur)", "Roasted onion, dry coconut, Saoji Masala", "Dark brown-black", "Thin, oily, pourable"],
          ["Maharashtrian home anda curry", "Onion, tomato, kala or goda masala", "Brown-red", "Medium"],
          ["North Indian egg curry", "Onion, tomato, garam masala, sometimes cream", "Orange-red", "Thick"],
        ]}
      />
      <Note>
        Curious why the masalas taste so different? See our{" "}
        <PostLink slug="saoji-masala-vs-kolhapuri-vs-garam-masala">
          Saoji vs Kolhapuri vs garam masala guide
        </PostLink>
        .
      </Note>

      <H2 id="tips">Tips for the best anda rassa</H2>
      <Bullets>
        <li>
          <strong>Make it ahead, but add eggs later.</strong> The rassa tastes better after an hour.
          Make it early, and add the fried eggs only when you reheat to serve.
        </li>
        <li>
          <strong>Add a potato.</strong> Many Nagpur homes add one boiled, quartered potato with the
          eggs. It soaks up the tarri and stretches the curry for more people.
        </li>
        <li>
          <strong>Egg bhurji with leftover rassa.</strong> Leftover thick rassa makes a lovely
          Saoji-style anda bhurji the next morning.
        </li>
        <li>
          <strong>Do not skip the brown onion.</strong> Light onion gives a sweet, pale gravy — not
          Saoji.
        </li>
      </Bullets>

      <KitchenTip>
        <p>
          Boil the eggs and grind the paste in the morning. In the evening the whole Saoji egg curry
          takes 20 minutes. For a Sunday feast, serve it next to{" "}
          <PostLink slug="saoji-mutton-nagpur-recipe">Saoji mutton</PostLink> for the people who skip
          mutton. Keep the <SiteLink href="/#deals">Saoji Masala packet</SiteLink> sealed with a dry
          spoon — Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={[
          "saoji-chicken-recipe",
          "saoji-mutton-nagpur-recipe",
          "saoji-masala-vs-kolhapuri-vs-garam-masala",
          "famous-food-of-nagpur",
        ]}
      />
    </Prose>
  );
}
