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
  RelatedPosts,
  SiteLink,
  Table,
  WIKI,
  Wiki,
} from "@/components/blogs/BlogParts";

export default function MasalaDifferencePost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. The question we hear most from people who call us is simple: &quot;What is Saoji
        masala, and is it not the same as Kolhapuri masala?&quot; Or, &quot;I have garam masala at
        home — why do I need another one?&quot; This guide answers <strong>Saoji masala vs
        Kolhapuri masala vs garam masala vs kala masala</strong> in plain words, from our kitchen in{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki>.
      </p>
      <p>
        All four are good. They are just made for different pots. Use the wrong one and your mutton
        tastes like pulao, or your amti tastes like a dhaba gravy. Once you know the difference, you
        will always pick right.
      </p>
      <Note>
        Blue words open Wikipedia. Every home and every brand has its own recipe, so read these as
        the usual style of each masala, not a fixed rule.
      </Note>

      <H2 id="comparison">Saoji vs Kolhapuri vs kala vs garam masala — side by side</H2>
      <Table
        head={["", "Saoji masala", "Kolhapuri masala", "Kala / goda masala", "Garam masala"]}
        rows={[
          [
            "Region",
            "Nagpur and Vidarbha",
            "Kolhapur, southern Maharashtra",
            "All over Maharashtra (Pune, Marathwada, homes)",
            "North India, now everywhere",
          ],
          ["Colour", "Dark brown to black", "Bright red", "Kala: dark brown · Goda: light brown", "Brown"],
          ["Heat", "High, slow and lingering", "Very high, sharp chilli", "Kala: medium · Goda: mild", "Low (warm, not hot)"],
          [
            "Key spices",
            "Coriander, khobra, black pepper, clove, dagad phool, tej patta, karan phool, nutmeg, mace, both cardamoms",
            "Lots of red chilli, coriander, khobra, sesame, cloves, pepper",
            "Coriander, khobra, sesame, dagad phool, cloves; goda is sweeter and less roasted",
            "Cumin, coriander, pepper, cardamom, cinnamon, clove, bay leaf",
          ],
          [
            "How it's used",
            "Fried in oil with onion-coconut paste at the start",
            "Fried in oil at the start, often a lot",
            "In the bhunao or tadka of daily food",
            "A pinch at the end to finish",
          ],
          [
            "Famous dishes",
            "Saoji mutton, Saoji chicken, anda rassa, patodi",
            "Tambda rassa, pandhra rassa, Kolhapuri chicken",
            "Usal, amti, masale bhaat, bharli vangi",
            "Butter chicken, chole, biryani, paneer",
          ],
        ]}
      />

      <H2 id="what-is-saoji-masala">What is Saoji masala?</H2>
      <p>
        <Wiki href={WIKI.saoji}>Saoji</Wiki> food comes from Nagpur and the{" "}
        <Wiki href={WIKI.vidarbha}>Vidarbha</Wiki> region. It is known for thin, oily, dark rassa and
        a heat that keeps building after every bite. Saoji masala is the spice blend behind that taste.
      </p>
      <p>
        In <SiteLink href="/#ingredients">our Saoji Masala</SiteLink>, the main spices are{" "}
        <Wiki href={WIKI.coriander}>dhaniya</Wiki>, dry <Wiki href={WIKI.coconut}>coconut</Wiki>{" "}
        (khobra), <Wiki href={WIKI.blackPepper}>kali mirch</Wiki>, <Wiki href={WIKI.clove}>laung</Wiki>,{" "}
        <Wiki href={WIKI.stoneFlower}>dagad phool</Wiki>, <Wiki href={WIKI.bayLeaf}>tej patta</Wiki>,
        karan phool, jaiphal, javitri, badi elaichi and elaichi. Each one is roasted separately, slowly,
        till it is dark. That long roast is why the masala — and the gravy — turns almost black, and
        why it smells smoky instead of raw.
      </p>
      <H3>What Saoji masala tastes like</H3>
      <Bullets>
        <li>Deep, roasted and a little smoky</li>
        <li>Heat from pepper and chilli together, so it lingers rather than burns</li>
        <li>Nutty body from roasted khobra</li>
        <li>A forest-like note from dagad phool</li>
      </Bullets>
      <p>
        Want to make it yourself? Our{" "}
        <PostLink slug="saoji-masala-recipe">homemade Saoji masala recipe</PostLink> shows the full
        roast step by step.
      </p>

      <H2 id="kolhapuri-masala">What is Kolhapuri masala?</H2>
      <p>
        Kolhapuri masala comes from <Wiki href={WIKI.kolhapur}>Kolhapur</Wiki> in southern{" "}
        <Wiki href={WIKI.maharashtra}>Maharashtra</Wiki>. Its big feature is{" "}
        <Wiki href={WIKI.chilli}>red chilli</Wiki> — a lot of it. That makes the masala and the gravy
        bright red, and the heat hits fast on the tongue. It is used for the famous red tambda rassa
        and Kolhapuri chicken and mutton.
      </p>
      <p>
        <strong>Saoji vs Kolhapuri in one line:</strong> Kolhapuri is red and sharp; Saoji is dark and
        deep. Both are hot, but a Nagpur person and a Kolhapur person will tell them apart from one
        spoon.
      </p>

      <H2 id="kala-goda-masala">What is kala masala and goda masala?</H2>
      <p>
        These are the everyday masalas of <Wiki href={WIKI.maharashtrian}>Maharashtrian</Wiki> homes.
        Recipes change from family to family, but in general:
      </p>
      <Bullets>
        <li>
          <strong>Kala masala</strong> (&quot;black masala&quot;) is roasted dark, often with dry
          coconut and <Wiki href={WIKI.sesame}>sesame</Wiki>. It goes into usal, sabzi and non-veg
          gravies. Many Nagpur homes used kala masala before ready Saoji masala — in our{" "}
          <PostLink slug="patodi-sabji-recipe">patodi sabji recipe</PostLink> we use Saoji Masala in
          its place.
        </li>
        <li>
          <strong>Goda masala</strong> (&quot;sweet masala&quot;) is less roasted, milder and slightly
          sweet. It is used in amti, masale bhaat and festive vegetarian food.
        </li>
      </Bullets>

      <H2 id="garam-masala">What is garam masala?</H2>
      <p>
        <Wiki href={WIKI.garamMasala}>Garam masala</Wiki> is a North Indian blend of whole warm spices
        — <Wiki href={WIKI.cumin}>cumin</Wiki>, coriander, pepper, cardamom, cinnamon, clove and bay
        leaf. &quot;Garam&quot; means warming, not chilli-hot. It has no coconut and very little chilli.
        It is used in small amounts, usually at the end, to give aroma — about one teaspoon for a kilo
        of sabzi. Our{" "}
        <PostLink slug="how-to-make-garam-masala-at-home">homemade garam masala recipe</PostLink>{" "}
        shows the shahi version we keep at home.
      </p>
      <p>
        <strong>Kala masala vs garam masala:</strong> kala masala is a base masala you cook into the
        gravy; garam masala is a finishing masala you sprinkle on top. They are not substitutes.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="Taste the difference yourself — 250 g Saoji Masala, ₹200"
        note="The easiest way to understand Saoji masala is to cook one pot with it. The 250 g starter pack is enough for a few kilos of chicken or many weeks of sabzi. Homemade in Nagpur."
      />

      <H2 id="which-masala-for-which-dish">Which masala should I use for which dish?</H2>
      <Table
        head={["Dish", "Best masala", "Why"]}
        rows={[
          [
            <PostLink key="m" slug="saoji-mutton-nagpur-recipe">Mutton rassa (Nagpur style)</PostLink>,
            "Saoji masala",
            "Dark, oily, slow heat",
          ],
          [
            <PostLink key="c" slug="saoji-chicken-recipe">Chicken rassa</PostLink>,
            "Saoji or Kolhapuri",
            "Saoji for dark gravy, Kolhapuri for red tambda rassa",
          ],
          [<PostLink key="e" slug="saoji-egg-curry-recipe">Egg curry</PostLink>, "Saoji masala", "Gives a quick egg curry depth"],
          [<PostLink key="u" slug="matki-usal-recipe">Matki usal / misal</PostLink>, "Saoji or kala masala", "Needs a spicy base masala"],
          [
            <PostLink key="a" slug="aloo-baingan-sabji-recipe">Aloo-baingan sabzi</PostLink>,
            "Saoji or kala masala",
            "Sprinkled in dry sabzi or fried in rasedar sabzi",
          ],
          ["Amti, masale bhaat", "Goda masala", "Mild and slightly sweet"],
          [
            <PostLink key="b" slug="butter-chicken-recipe">Butter chicken, paneer</PostLink>,
            "Garam masala",
            "A gentle finishing aroma",
          ],
          [
            <PostLink key="br" slug="chicken-biryani-recipe">Biryani</PostLink>,
            "Garam / biryani masala",
            "Whole-spice aroma in the rice",
          ],
        ]}
      />

      <H2 id="substitutes">Can I substitute one masala for another?</H2>
      <Bullets>
        <li>
          <strong>Kolhapuri instead of Saoji:</strong> works for heat, but the gravy will be red, not
          dark. Roast your onion and khobra darker and add a pinch of black pepper.
        </li>
        <li>
          <strong>Kala masala instead of Saoji:</strong> the closest swap. Use a little more, and add
          extra black pepper for Saoji heat.
        </li>
        <li>
          <strong>Garam masala instead of Saoji:</strong> not recommended. If you must, use 1 tsp
          garam masala plus 1 tsp red chilli and 2 tbsp roasted khobra for every 1 tbsp Saoji masala.
        </li>
        <li>
          <strong>Saoji instead of garam masala:</strong> do not swap in butter chicken or biryani — it
          is too strong. A pinch at the end of a sabzi is fine.
        </li>
      </Bullets>

      <H2 id="use-them-together">Using two masalas together</H2>
      <p>
        You do not have to choose only one. In our kitchen we often cook the bhunao with Saoji Masala
        and finish a vegetable gravy with a small pinch of garam masala. The base masala gives body
        and heat; the finishing masala gives smell. Just do not stack two hot base masalas like Saoji
        and Kolhapuri in one pot — the flavours fight.
      </p>

      <KitchenTip>
        <p>
          Base masalas like Saoji and Kolhapuri must be <strong>fried in oil till the oil
          separates</strong>. Finishing masalas like garam masala go in at the end, with the flame
          off. Mix up that order and even the best masala tastes raw or bitter. Read our{" "}
          <SiteLink href="/#use">how to use Saoji Masala</SiteLink> steps before your first pot.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={[
          "saoji-masala-recipe",
          "how-to-make-garam-masala-at-home",
          "saoji-chicken-recipe",
          "famous-food-of-nagpur",
        ]}
      />
    </Prose>
  );
}
