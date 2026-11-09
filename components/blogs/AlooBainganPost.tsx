import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";
import {
  BlogFaqSection,
  Bullets,
  H2,
  H3,
  KitchenTip,
  Note,
  Numbered,
  PostLink,
  Prose,
  QuickFacts,
  RelatedPosts,
  SiteLink,
  Table,
  WIKI,
  Wiki,
} from "@/components/blogs/BlogParts";

export default function AlooBainganPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. If there is one sabzi that is cooked in almost every{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki> home every week, it is <strong>aloo baingan sabji</strong>{" "}
        — in Marathi we call it <strong>vangi batata bhaji</strong>. Soft brinjal, potato that holds
        its shape, and a dark, spicy coat of masala. It goes in the tiffin, it goes with dal-rice, and
        it is the first sabzi most of our customers try with{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink>.
      </p>
      <p>
        Today we make it two ways. First the everyday <strong>dry (sukhi)</strong> version, where the
        Saoji Masala goes in near the end. Then a <strong>rasedar</strong> version with a roasted
        ginger-garlic-onion paste, for days you want gravy with rice or bhakri. Both use the same
        method we print on our <SiteLink href="/#use">how to use the masala</SiteLink> section.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "10 min" },
          { label: "Cook", value: "25 min" },
          { label: "Serves", value: "3–4" },
          { label: "Heat", value: "Medium 🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. This is a simple <Wiki href={WIKI.maharashtrian}>Maharashtrian</Wiki>{" "}
        home sabzi made with <Wiki href={WIKI.eggplant}>brinjal</Wiki> and{" "}
        <Wiki href={WIKI.potato}>potato</Wiki>.
      </Note>

      <H2 id="ingredients">Ingredients for dry aloo baingan sabji</H2>
      <H3>Vegetables</H3>
      <Bullets>
        <li>250 g small brinjals (vangi) — purple or green, the small round kind</li>
        <li>2 medium potatoes, about 250 g</li>
        <li>
          1 medium <Wiki href={WIKI.onion}>onion</Wiki>, sliced
        </li>
        <li>
          Optional: 1 small <Wiki href={WIKI.tomato}>tomato</Wiki>, chopped, for a little tang
        </li>
      </Bullets>
      <H3>Phodni and masala</H3>
      <Bullets>
        <li>
          3 tbsp <Wiki href={WIKI.oil}>oil</Wiki>
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.mustard}>mustard seeds</Wiki>, ½ tsp{" "}
          <Wiki href={WIKI.cumin}>cumin</Wiki>, a pinch of <Wiki href={WIKI.asafoetida}>hing</Wiki>
        </li>
        <li>
          6–8 <Wiki href={WIKI.curryLeaf}>curry leaves</Wiki>
        </li>
        <li>
          ¼ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki> and salt to taste
        </li>
        <li>1½–2 tsp Lata Special Saoji Masala</li>
        <li>Chopped coriander to finish</li>
      </Bullets>

      <H2 id="step-1">Step 1 — Cut and soak the vegetables</H2>
      <p>
        Wash the brinjals. Cut each one into 4 pieces (or 8 if they are bigger), keeping a little of
        the stem end if you like the look. Drop the pieces straight into a bowl of water with a pinch
        of salt — this stops them from turning black.
      </p>
      <p>
        Peel the potatoes and cut them into pieces a little <strong>smaller</strong> than the brinjal.
        Potato takes longer to cook, so smaller pieces help both finish at the same time.
      </p>

      <H2 id="step-2">Step 2 — Make the phodni</H2>
      <p>
        Heat 3 tbsp oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Add mustard seeds and wait till
        they crackle. Add cumin, hing and curry leaves. Now add the sliced onion and fry on medium flame
        till it is soft and light pink — no need to brown it for the dry sabzi.
      </p>

      <H2 id="step-3">Step 3 — Cook the potatoes first</H2>
      <p>
        Add the potato pieces, turmeric and a little salt. Mix so every piece is coated with oil. Cover
        and cook on low-medium flame for 5 minutes. This head start is the secret to aloo baingan where
        the potato is soft and the brinjal is not mushy.
      </p>

      <H2 id="step-4">Step 4 — Add the brinjal and let it steam</H2>
      <p>
        Drain the brinjal well — extra water makes the sabzi soggy. Add it to the kadhai with the tomato
        if you use it. Mix gently, from the bottom up, so the brinjal does not break. Cover and cook for
        10–12 minutes. Check once or twice. If it sticks, sprinkle just 1–2 tbsp water and cover again.
        The vegetables cook in their own steam.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="The masala for your weekly aloo baingan — ₹200"
        note="Two teaspoons of Lata Special Saoji Masala turn a plain vangi batata into a Nagpur-style sabzi. The 250 g starter pack lasts many weeks of everyday sukhi and rasedar bhaji."
      />

      <H2 id="step-5">Step 5 — Add Saoji Masala near the end</H2>
      <p>
        When a knife goes easily through the potato, it is time for the masala. Sprinkle 1½–2 tsp
        Saoji Masala over the sabzi. Adjust salt. Mix gently and cook <strong>uncovered</strong> for
        2–3 minutes. The masala will darken a little and stick to every piece, and the kitchen will
        smell roasted.
      </p>
      <p>
        Why at the end? Saoji Masala is already slow-roasted. In a dry sabzi with little oil, adding it
        at the start can burn it on the bottom of the pan. Added at the end, it stays fresh and bold.
        Finish with coriander. Serve with chapati, or with hot dal-rice.
      </p>

      <H2 id="rasedar">Rasedar aloo baingan — the gravy version</H2>
      <p>
        For a thin, spicy gravy to eat with rice or <Wiki href={WIKI.bhakri}>bhakri</Wiki>, use the
        same vegetables and change the base. This is the rasedar method from our kitchen:
      </p>
      <Numbered>
        <li>
          Roast 1 sliced onion, 6–8 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves and a 1-inch piece
          of <Wiki href={WIKI.ginger}>ginger</Wiki> in 1 tsp oil till brown. Cool and grind to a paste.
        </li>
        <li>Mix 2–2½ tsp Saoji Masala into the paste.</li>
        <li>
          Heat 4 tbsp oil and fry the paste on medium flame till the oil comes up on the sides. This is
          the sign the masala is cooked.
        </li>
        <li>Add a little red or green chilli if you want more heat.</li>
        <li>
          Add the potato pieces, fry 2 minutes, then add the brinjal and 1½–2 cups hot water with salt.
          Cover and simmer 12–15 minutes till both are soft.
        </li>
      </Numbered>
      <p>
        The gravy should be thin, with a red-brown layer of oil on top — just like a small, vegetarian
        cousin of our <PostLink slug="saoji-chicken-recipe">Saoji chicken rassa</PostLink>.
      </p>

      <H2 id="dry-vs-rasedar">Dry vs rasedar — which to make?</H2>
      <Table
        head={["", "Dry (sukhi)", "Rasedar"]}
        rows={[
          ["Saoji Masala (500 g veg)", "1½–2 tsp, at the end", "2–2½ tsp, fried in the paste"],
          ["Oil", "3 tbsp", "4 tbsp"],
          ["Water", "Only a sprinkle", "1½–2 cups hot water"],
          ["Best with", "Chapati, tiffin, dal-rice", "Rice, jowar bhakri"],
          ["Time", "About 35 min", "About 40 min"],
        ]}
      />

      <H2 id="mistakes">Common mistakes</H2>
      <Bullets>
        <li>
          <strong>Brinjal and potato in together.</strong> The brinjal turns to mush before the potato
          cooks. Give the potato 5 minutes first.
        </li>
        <li>
          <strong>Too much water in the dry sabzi.</strong> It becomes soggy. Steam with the lid, not
          with water.
        </li>
        <li>
          <strong>Stirring hard.</strong> Turn the vegetables gently with a flat spatula.
        </li>
        <li>
          <strong>Big bharit brinjals.</strong> They fall apart. Keep those for{" "}
          <PostLink slug="varhadi-vangyache-bharit-recipe">Varhadi vangyache bharit</PostLink>.
        </li>
      </Bullets>

      <p>
        Want another quick sabzi with the same masala? Try our{" "}
        <PostLink slug="patodi-sabji-recipe">patodi sabji</PostLink> or a sprouted{" "}
        <PostLink slug="matki-usal-recipe">matki usal</PostLink>.
      </p>

      <KitchenTip>
        <p>
          For the tiffin, make the dry version a little less soft — it softens more as it sits. Keep the{" "}
          <SiteLink href="/#deals">Saoji Masala packet</SiteLink> sealed and use a dry spoon so it does
          not cake. Delivery is in Nagpur only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["varhadi-vangyache-bharit-recipe", "matki-usal-recipe", "patodi-sabji-recipe", "zunka-recipe"]}
      />
    </Prose>
  );
}
