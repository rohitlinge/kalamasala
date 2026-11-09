import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";
import {
  BlogFaqSection,
  Bullets,
  H2,
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

export default function ZunkaPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. Some dishes are not fancy, but they fill the stomach and the heart. In{" "}
        <Wiki href={WIKI.maharashtra}>Maharashtra</Wiki> that dish is <strong>zunka bhakar</strong> —
        dry, crumbly besan cooked with onion, garlic and green chilli, eaten with a hot jowar bhakri.
        This is our <strong>zunka recipe</strong>, the <strong>kanda zunka</strong> we make when there
        is no vegetable at home and everyone is hungry. It is ready in about 20 minutes.
      </p>
      <p>
        The method is simple: a strong garlic–chilli phodni, plenty of onion, besan sprinkled in slowly,
        and a few sprinkles of water with the lid on. At the end, we also show a small Vidarbha twist
        with a pinch of <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink>.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "10 min" },
          { label: "Cook", value: "15 min" },
          { label: "Serves", value: "3–4" },
          { label: "Heat", value: "Medium-hot 🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. Zunka is made from <Wiki href={WIKI.gramFlour}>besan</Wiki> (gram
        flour from <Wiki href={WIKI.chickpea}>chickpea</Wiki>) and belongs to everyday{" "}
        <Wiki href={WIKI.maharashtrian}>Maharashtrian cooking</Wiki>.
      </Note>

      <H2 id="zunka-vs-pithla">Zunka vs pithla — what is the difference?</H2>
      <p>
        People often mix these two up. Both are besan dishes, both are farm food, and both go with
        bhakri. But the texture is completely different.
      </p>
      <Table
        head={["", "Zunka", "Pithla"]}
        rows={[
          ["Texture", "Dry, crumbly, like soft crumbs", "Wet, thick, pourable"],
          ["How besan goes in", "Sprinkled dry over the onion", "Mixed with water first, then poured"],
          ["Water", "About ¼ cup, sprinkled", "2–3 cups"],
          ["Best with", "Jowar bhakri", "Rice or bhakri"],
          ["Onion", "Lots — it is the main body", "Some, or none"],
        ]}
      />
      <p>
        If you want the soft, pourable version, that is <Wiki href={WIKI.pithla}>pithla</Wiki>. If you
        want something you can pick up with a piece of bhakri, that is zunka. And if you want besan
        cooked, cut into strips and dropped into a spicy gravy, try our{" "}
        <PostLink slug="patodi-sabji-recipe">patodi sabji</PostLink>.
      </p>

      <H2 id="ingredients">Ingredients for kanda zunka</H2>
      <Bullets>
        <li>1 cup besan, about 100 g</li>
        <li>
          2 medium <Wiki href={WIKI.onion}>onions</Wiki>, finely chopped (use 3 for a softer, sweeter
          zunka)
        </li>
        <li>
          8–10 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves, crushed
        </li>
        <li>
          3–4 green <Wiki href={WIKI.chilli}>chillies</Wiki>, crushed
        </li>
        <li>
          4 tbsp <Wiki href={WIKI.oil}>oil</Wiki> — groundnut oil is traditional
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.mustard}>mustard seeds</Wiki>, ½ tsp{" "}
          <Wiki href={WIKI.cumin}>cumin</Wiki>, a pinch of <Wiki href={WIKI.asafoetida}>hing</Wiki>
        </li>
        <li>
          8 <Wiki href={WIKI.curryLeaf}>curry leaves</Wiki>
        </li>
        <li>
          ¼ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki> and salt to taste
        </li>
        <li>About ¼ cup water, to sprinkle</li>
        <li>Chopped coriander</li>
        <li>Optional: ½ tsp Lata Special Saoji Masala</li>
      </Bullets>

      <H2 id="step-1">Step 1 — Dry-roast the besan</H2>
      <p>
        Put the besan in a dry pan on a <strong>low</strong> flame. Stir for 3–4 minutes till it
        smells nutty. It should not change colour much. Many homes skip this, but this small roast
        takes away the raw besan taste and keeps the zunka from turning into lumps. Tip it onto a plate.
      </p>

      <H2 id="step-2">Step 2 — Make the garlic–chilli phodni</H2>
      <p>
        Heat 4 tbsp oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Add mustard seeds and let them
        crackle, then cumin, hing and curry leaves. Add the crushed garlic and green chillies. Fry on
        medium flame till the garlic is light golden. This phodni is the soul of zunka — be generous
        with the garlic.
      </p>

      <H2 id="step-3">Step 3 — Soften the onion</H2>
      <p>
        Add the chopped onion, turmeric and salt. Fry 3–4 minutes till the onion is soft and
        translucent. You do not need to brown it — soft onion gives zunka its sweet, juicy bite.
      </p>
      <p>
        <strong>Vidarbha style:</strong> add ½ tsp Saoji Masala now and fry 20 seconds. The zunka
        turns a shade darker with a deep roasted taste. Use one green chilli less, because the masala
        brings its own heat.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="A pinch of Saoji Masala, and plain zunka tastes like Vidarbha"
        note="Half a teaspoon is enough for a pan of zunka. The 250 g starter pack (₹200) is homemade in Nagpur — and the same packet cooks your aloo-baingan, usal and Sunday chicken."
      />

      <H2 id="step-4">Step 4 — Sprinkle in the besan slowly</H2>
      <p>
        Lower the flame. Now sprinkle the roasted besan over the onion with one hand while you stir with
        the other. Go slowly. The besan will soak up the oil and the onion juice and turn into coarse,
        yellow crumbs. When all the onion is coated, stop adding besan.
      </p>

      <H2 id="step-5">Step 5 — Sprinkle water and steam</H2>
      <p>
        Sprinkle about 2 tbsp water over the zunka — do not pour. Mix, cover with a lid, and cook 2
        minutes on low flame. Open, stir, sprinkle 1–2 tbsp more water, and cover again. Repeat once more
        if needed. In 6–8 minutes the besan will be cooked: soft, crumbly, and no longer raw in taste.
      </p>
      <p>
        Want it a little moist? Add one more sprinkle. Want it really dry, like the zunka sold at
        roadside stalls? Skip the last sprinkle and cook uncovered a minute longer.
      </p>

      <H2 id="step-6">Step 6 — Finish and serve with bhakri</H2>
      <p>
        Uncover and cook one minute to dry any extra moisture. Add lots of chopped coriander. Serve hot
        with <Wiki href={WIKI.jowar}>jowar</Wiki> <Wiki href={WIKI.bhakri}>bhakri</Wiki>, a raw onion
        smashed with the fist, and a spoon of green chilli thecha. That is the full zunka bhakar plate. It
        also goes well with chapati and a bowl of dal.
      </p>

      <H2 id="tips">Tips for perfect zunka</H2>
      <Bullets>
        <li>
          <strong>Low flame for the besan.</strong> High flame burns the bottom before the besan cooks.
        </li>
        <li>
          <strong>Sprinkle, never pour.</strong> Pouring water turns zunka into pithla.
        </li>
        <li>
          <strong>Enough oil.</strong> Too little oil and the besan feels dry and dusty in the mouth.
        </li>
        <li>
          <strong>More onion, softer zunka.</strong> Onion gives moisture; with 3 onions you will need
          less water.
        </li>
      </Bullets>

      <p>
        Making a full Maharashtrian thali? Pair zunka with our smoky{" "}
        <PostLink slug="varhadi-vangyache-bharit-recipe">Varhadi vangyache bharit</PostLink> and a
        sprouted <PostLink slug="matki-usal-recipe">matki usal</PostLink>.
      </p>

      <KitchenTip>
        <p>
          Leftover zunka? Warm it in a pan with a spoon of oil — it gets a light crisp at the bottom that
          tastes even better. For the Saoji twist, see{" "}
          <SiteLink href="/#use">how to use Saoji Masala</SiteLink>. Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["patodi-sabji-recipe", "varhadi-vangyache-bharit-recipe", "aloo-baingan-sabji-recipe", "famous-food-of-nagpur"]}
      />
    </Prose>
  );
}
