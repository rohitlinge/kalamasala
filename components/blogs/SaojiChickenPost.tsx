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

export default function SaojiChickenPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. If you have eaten at a <Wiki href={WIKI.saoji}>Saoji</Wiki> bhojnalay in{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki>, you know the plate: a steel bowl of thin, almost black
        chicken rassa, a shine of red oil on top, and a heat that builds slowly. That is{" "}
        <strong>Saoji chicken</strong>. Today we make it at home — the same way we cook it in our
        kitchen — with{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink>.
      </p>
      <p>
        The secret is not a long list of spices on the day. The spices are already roasted inside the
        masala. What you do at home is three things: roast a dark onion-coconut paste, fry the Saoji
        Masala in enough oil till it floats, and let the chicken simmer in a thin rassa. Do these
        three well and the gravy will taste like Golibar Chowk.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "30 min" },
          { label: "Cook", value: "45 min" },
          { label: "Serves", value: "4–5" },
          { label: "Heat", value: "Hot 🌶🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. This recipe is for 1 kg chicken with bone. For mutton, follow our{" "}
        <PostLink slug="saoji-mutton-nagpur-recipe">Saoji mutton recipe</PostLink> — the cooking time
        is longer.
      </Note>

      <H2 id="ingredients">Ingredients for 1 kg Saoji chicken</H2>
      <H3>For the marinade</H3>
      <Bullets>
        <li>
          1 kg <Wiki href={WIKI.chicken}>chicken</Wiki>, curry cut with bone (bone gives the rassa body)
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki> and salt to taste
        </li>
        <li>1 tsp ginger-garlic paste</li>
        <li>1 tsp Lata Special Saoji Masala</li>
      </Bullets>

      <H3>For the roasted wet paste (vatan)</H3>
      <Bullets>
        <li>
          2 large <Wiki href={WIKI.onion}>onions</Wiki>, sliced
        </li>
        <li>
          ¼ cup grated dry <Wiki href={WIKI.coconut}>coconut</Wiki> (khobra)
        </li>
        <li>
          15–18 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves and a 2-inch piece of{" "}
          <Wiki href={WIKI.ginger}>ginger</Wiki>
        </li>
        <li>A small handful of coriander leaves with stems</li>
      </Bullets>

      <H3>For the gravy</H3>
      <Bullets>
        <li>
          6–7 tbsp <Wiki href={WIKI.oil}>oil</Wiki> — Saoji needs oil, do not cut it too much
        </li>
        <li>
          2 <Wiki href={WIKI.bayLeaf}>tej patta</Wiki>
        </li>
        <li>3–4 tbsp Lata Special Saoji Masala (3 for medium, 4 for full Nagpur heat)</li>
        <li>3–4 cups hot water and salt</li>
      </Bullets>

      <BlogMasalaAd
        packId="500"
        headline="Two Saoji chicken nights in one 500 g pack — ₹400"
        note="One kilo of chicken takes 3–4 tablespoons. The 500 g family pack covers many Sunday pots of chicken, mutton and egg rassa. Homemade in Nagpur, slow-roasted, no colour."
      />

      <H2 id="step-1">Step 1 — Marinate the chicken</H2>
      <p>
        Wash the chicken and drain it well. Water on the chicken makes the masala slide off. Rub in
        turmeric, salt, ginger-garlic paste and one teaspoon of Saoji Masala. Keep it covered for 20–30
        minutes while you make the paste. Even this short rest helps the masala go inside the meat.
      </p>

      <H2 id="step-2">Step 2 — Roast the onion-coconut paste dark</H2>
      <p>
        Heat one spoon of oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Add the sliced onions and
        roast on medium flame. Do not stop at golden — Saoji needs <strong>deep brown</strong> onion.
        This takes 10–12 minutes. Then add garlic and ginger and roast two minutes more. Add the dry
        coconut last and stir till it turns dark golden and smells nutty.
      </p>
      <p>
        Let it cool. Grind with the coriander and a few spoons of water to a smooth, thick paste. The
        paste will look brown-black. That colour is the base of the black Saoji rassa — not food
        colour.
      </p>

      <H2 id="step-3">Step 3 — Fry the paste and Saoji Masala till the oil floats</H2>
      <p>
        Heat 5–6 tbsp oil in the same kadhai. Add tej patta. Add the ground paste and fry 5–7 minutes,
        scraping the bottom. Now add 3–4 tablespoons of Saoji Masala with a small splash of water. The
        water stops the masala from burning in hot oil.
      </p>
      <p>
        Keep frying on a <strong>medium</strong> flame. In a few minutes the masala darkens, smells
        roasted, and the oil comes out on the sides. This is the most important step — the same rule
        we write on our <SiteLink href="/#use">how to use Saoji Masala</SiteLink> section: when the oil
        rises, the masala is cooked. If you add water before this, the rassa tastes raw.
      </p>

      <H2 id="step-4">Step 4 — Fry the chicken in the masala</H2>
      <p>
        Add the marinated chicken. Turn the flame high and stir for 8–10 minutes. The chicken should
        turn colour and the masala should stick to every piece. This bhunao gives the meat its own
        taste, so the gravy and chicken do not feel separate.
      </p>

      <H2 id="step-5">Step 5 — Make the thin rassa</H2>
      <p>
        Saoji chicken is not a thick gravy. Pour 3–4 cups of <strong>hot</strong> water (cold water
        makes the chicken tight). Add salt, cover, and simmer on low-medium flame for 20–25 minutes.
        Stir once or twice.
      </p>
      <p>
        When it is ready, the chicken is soft at the bone and a red-black layer of oil — the{" "}
        <strong>tarri</strong> — floats on top. Taste now. Want more heat? Add a pinch of red chilli or
        one slit green chilli and simmer two minutes. Want it milder next time? Use less Saoji Masala,
        not less roasting.
      </p>

      <H2 id="step-6">Step 6 — Rest and serve</H2>
      <p>
        Switch off and rest five minutes so the tarri settles. Finish with chopped coriander. Serve
        with jowar <Wiki href={WIKI.bhakri}>bhakri</Wiki>, <Wiki href={WIKI.chapati}>chapati</Wiki> or
        hot <Wiki href={WIKI.rice}>rice</Wiki>, sliced onion and lemon. In Nagpur we ladle extra tarri
        over the rice.
      </p>

      <H2 id="heat-guide">How much Saoji Masala? A simple heat guide</H2>
      <Table
        head={["Chicken", "Mild", "Medium", "Full Nagpur heat"]}
        rows={[
          ["500 g", "1 tbsp", "1½ tbsp", "2 tbsp"],
          ["1 kg", "2 tbsp", "3 tbsp", "4 tbsp"],
          ["1.5 kg", "3 tbsp", "4½ tbsp", "6 tbsp"],
        ]}
      />
      <Note>
        Plus 1 tsp in the marinade per kilo. Measures are level tablespoons of Lata Special Saoji
        Masala.
      </Note>

      <H2 id="mistakes">Common mistakes</H2>
      <Bullets>
        <li>
          <strong>Golden onion instead of brown.</strong> The rassa comes out sweet and light. Roast
          longer.
        </li>
        <li>
          <strong>Too little oil.</strong> No oil, no tarri. Saoji is a festive, rich dish — keep 6–7
          tbsp for 1 kg.
        </li>
        <li>
          <strong>Water before the oil separates.</strong> This is the number one reason home Saoji
          tastes raw.
        </li>
        <li>
          <strong>Boneless chicken.</strong> It works, but bone-in chicken gives the thin rassa its
          body.
        </li>
      </Bullets>

      <p>
        Not sure how Saoji Masala is different from your regular garam masala? Read our{" "}
        <PostLink slug="saoji-masala-vs-kolhapuri-vs-garam-masala">
          Saoji vs Kolhapuri vs garam masala guide
        </PostLink>
        . If you want to roast the masala yourself from whole spices, the full method is in our{" "}
        <PostLink slug="saoji-masala-recipe">homemade Saoji masala recipe</PostLink>.
      </p>

      <KitchenTip>
        <p>
          Make the onion-coconut paste a day before and keep it in the fridge. On the day, the whole
          Saoji chicken is ready in under 45 minutes. Keep the{" "}
          <SiteLink href="/#deals">Saoji Masala packet</SiteLink> sealed and use a dry spoon — Nagpur
          delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={[
          "saoji-mutton-nagpur-recipe",
          "saoji-egg-curry-recipe",
          "top-3-saoji-restaurants-bhojnalay-nagpur",
          "famous-food-of-nagpur",
        ]}
      />
    </Prose>
  );
}
