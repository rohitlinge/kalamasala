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
  WIKI,
  Wiki,
} from "@/components/blogs/BlogParts";

export default function TarriPohaPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. Walk through any <Wiki href={WIKI.nagpur}>Nagpur</Wiki> market at 8 in the morning
        and you will see the same thing — big kadhais of yellow poha, and next to them a pot of dark,
        oily chana gravy. One ladle of each on a plate, onion and sev on top. That is{" "}
        <strong>tarri poha</strong>, the breakfast Nagpur is known for. Today we make this tarri poha
        recipe at home, with the chana tarri cooked in{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink>.
      </p>
      <p>
        Tarri poha has two parts. The <strong>poha</strong> is simple kanda poha — soft, lightly
        sweet, a little sour with lemon. The <strong>tarri</strong> is the opposite: a thin, hot{" "}
        <Wiki href={WIKI.chickpea}>kala chana</Wiki> rassa with a red layer of spiced oil on top. You
        need both to be right. Soft poha with a watery, pale tarri is just poha with dal. A strong,
        roasted tarri over soft poha is Nagpur.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "20 min + soak" },
          { label: "Cook", value: "40 min" },
          { label: "Serves", value: "4 plates" },
          { label: "Heat", value: "Medium-hot 🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. Soak the chana the night before. If you forget, soak in hot water
        for 3–4 hours and give 2 extra whistles.
      </Note>

      <H2 id="ingredients">Ingredients for tarri poha</H2>
      <H3>For the chana tarri</H3>
      <Bullets>
        <li>1 cup kala chana (black chickpeas), soaked overnight</li>
        <li>
          1 large <Wiki href={WIKI.onion}>onion</Wiki>, sliced
        </li>
        <li>
          2 tbsp grated dry <Wiki href={WIKI.coconut}>coconut</Wiki> (khobra)
        </li>
        <li>
          8–10 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves and 1-inch{" "}
          <Wiki href={WIKI.ginger}>ginger</Wiki>
        </li>
        <li>
          5 tbsp <Wiki href={WIKI.oil}>oil</Wiki> and 1 <Wiki href={WIKI.bayLeaf}>tej patta</Wiki>
        </li>
        <li>2 tbsp Lata Special Saoji Masala (1½ tbsp for children at the table)</li>
        <li>Salt and 3–4 cups hot water</li>
      </Bullets>

      <H3>For the kanda poha</H3>
      <Bullets>
        <li>
          3 cups thick (jada) <Wiki href={WIKI.poha}>poha</Wiki>
        </li>
        <li>2 medium onions, chopped</li>
        <li>
          2 tbsp oil, 1 tsp <Wiki href={WIKI.mustard}>mustard seeds</Wiki>, 10–12{" "}
          <Wiki href={WIKI.curryLeaf}>curry leaves</Wiki>, 2 green chillies
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki>, salt and ½ tsp sugar
        </li>
      </Bullets>

      <H3>For the plate</H3>
      <Bullets>
        <li>1 onion, finely chopped</li>
        <li>Fine sev (nylon sev is best)</li>
        <li>Chopped coriander and lemon wedges</li>
      </Bullets>

      <BlogMasalaAd
        packId="250"
        headline="Tarri needs only 2 spoons — start with the 250 g pack at ₹200"
        note="One pot of chana tarri takes about 2 tablespoons of Lata Special Saoji Masala. The 250 g starter pack is enough for many Sunday poha mornings. Homemade in Nagpur, no colour."
      />

      <H2 id="step-1">Step 1 — Cook the kala chana</H2>
      <p>
        Drain the soaked chana. Put it in a <Wiki href={WIKI.pressureCooker}>pressure cooker</Wiki>{" "}
        with salt and 2 cups water. Cook 5–6 whistles on medium flame. The chana should press easily
        between two fingers but still hold its shape. Do not throw the cooking water — it is the body
        of the tarri.
      </p>

      <H2 id="step-2">Step 2 — Roast and grind the tarri paste</H2>
      <p>
        Heat one teaspoon of oil. Roast the sliced onion on medium flame till it turns{" "}
        <strong>deep brown</strong>, not just golden. Add garlic and ginger and roast one minute. Add
        dry coconut last and stir till it is dark golden and smells nutty. Cool, then grind with a
        few spoons of water to a smooth paste.
      </p>
      <p>
        This is the same dark paste we use for our{" "}
        <PostLink slug="saoji-chicken-recipe">Saoji chicken</PostLink>, just smaller. The brown onion
        and coconut give tarri its dark colour and roasted taste.
      </p>

      <H2 id="step-3">Step 3 — Make the chana tarri</H2>
      <p>
        Heat 5 tbsp oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki> with tej patta. Add the paste and
        fry 4–5 minutes. Now add 2 tablespoons of Saoji Masala with a small splash of water so it does
        not burn. Fry on a <strong>medium</strong> flame till the oil comes out at the sides — this is
        the step that makes the tarri. Our{" "}
        <SiteLink href="/#use">how to use Saoji Masala</SiteLink> section explains the same rule.
      </p>
      <p>
        Add the cooked chana with its water and 2–3 cups of hot water. Tarri is <strong>thin</strong>,
        like a rassa, not a thick usal. Simmer 15 minutes. Mash a few chana with the back of the
        ladle to give the gravy a little body. Switch off and rest 5 minutes — the red oil will rise
        to the top.
      </p>

      <H2 id="step-4">Step 4 — Rinse the poha</H2>
      <p>
        Put the thick poha in a strainer and rinse under running water for 10–15 seconds, turning it
        with your hand. Do not soak it in a bowl. Sprinkle salt, turmeric and sugar, mix lightly with
        fingers, and leave 5 minutes. Pinch a flake — it should be soft but not mushy.
      </p>

      <H2 id="step-5">Step 5 — Cook the kanda poha</H2>
      <p>
        Heat 2 tbsp oil. Add mustard seeds and let them splutter. Add curry leaves, slit green chilli
        and chopped onion. Cook till the onion is soft and see-through. Add the poha, mix gently with
        a flat spoon, cover and steam 2–3 minutes on a low flame. Fluffy, yellow, separate flakes —
        that is good poha.
      </p>

      <H2 id="step-6">Step 6 — Assemble the tarri poha plate</H2>
      <p>
        Boil the tarri once more just before serving. Put a mound of poha in a plate. Pour one full
        ladle of hot chana tarri on top, with plenty of the red oil. Add raw chopped onion, a handful
        of sev, coriander, and squeeze lemon. Eat right away, while the poha soaks up the tarri but
        the sev is still crisp.
      </p>

      <H2 id="tips">Tips for perfect Nagpur tarri poha</H2>
      <Bullets>
        <li>
          <strong>Thick poha only.</strong> Thin poha melts under hot tarri.
        </li>
        <li>
          <strong>Keep the poha mild.</strong> All the heat should come from the tarri. Two green
          chillies are enough in the poha.
        </li>
        <li>
          <strong>Sugar and lemon in the poha.</strong> The light sweet-sour poha is what balances
          the spicy tarri.
        </li>
        <li>
          <strong>Do not skip the oil.</strong> The tarri layer on top is the name of the dish.
        </li>
        <li>
          <strong>Serve tarri hot, poha warm.</strong> Very hot poha plus hot tarri becomes mushy.
        </li>
      </Bullets>

      <p>
        Left-over chana tarri? Use it next day with pav, or turn it into a quick usal. For a thicker
        sprout curry, try our <PostLink slug="matki-usal-recipe">matki usal recipe</PostLink>. And if
        you want to know what else Nagpur eats for breakfast and dinner, read our{" "}
        <PostLink slug="famous-food-of-nagpur">famous food of Nagpur guide</PostLink>.
      </p>

      <KitchenTip>
        <p>
          Make the chana tarri at night and keep it in the fridge. In the morning, poha takes only 15
          minutes, and the tarri tastes deeper after resting. Use a dry spoon in the{" "}
          <SiteLink href="/#deals">Saoji Masala packet</SiteLink> every time — Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["sambar-vadi-recipe", "matki-usal-recipe", "patodi-sabji-recipe", "famous-food-of-nagpur"]}
      />
    </Prose>
  );
}
