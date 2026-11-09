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

export default function VangyacheBharitPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. In winter, when the big light-skinned brinjals come to the{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki> markets, every Varhadi home makes one dish again and
        again — <strong>vangyache bharit</strong>. This is our <strong>Varhadi bharit recipe</strong>:
        brinjal roasted on open fire till it is smoky and soft, then mixed into a hot phodni of crushed
        garlic, green chilli and peanuts. Simple, fiery, and ready in about 30 minutes.
      </p>
      <p>
        Varhad is the old name for the western part of <Wiki href={WIKI.vidarbha}>Vidarbha</Wiki>, and
        Varhadi food is known for being bold. This bharit is not a soft tomato gravy. It is smoky from
        the fire, sharp from raw-crushed garlic, and crunchy from groundnut. At the end, we also show a
        small <strong>Saoji style</strong> twist with{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink> for days you want it darker.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "10 min" },
          { label: "Cook", value: "25 min" },
          { label: "Serves", value: "4" },
          { label: "Heat", value: "Hot 🌶🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. This is a <Wiki href={WIKI.maharashtrian}>Maharashtrian</Wiki>{" "}
        bharit — the same family as <Wiki href={WIKI.baingan}>baingan bharta</Wiki>, but cooked the
        Vidarbha way.
      </Note>

      <H2 id="varhadi-vs-punjabi">Varhadi bharit vs Punjabi baingan bharta</H2>
      <p>
        People often ask if this is the same as the baingan bharta in restaurants. Both start with a
        roasted <Wiki href={WIKI.eggplant}>brinjal</Wiki>, but after that they go two different ways.
      </p>
      <Table
        head={["", "Varhadi vangyache bharit", "Punjabi baingan bharta"]}
        rows={[
          ["Base", "Smoky mashed brinjal, kept coarse", "Mashed brinjal cooked down soft"],
          ["Tomato", "None or very little", "A lot — it is the gravy"],
          ["Heat", "Green chilli and raw-crushed garlic", "Red chilli powder and garam masala"],
          ["Crunch", "Roasted peanuts, spring onion", "Usually none"],
          ["Fat", "Oil phodni with mustard, cumin, hing", "Often ghee, sometimes cream"],
          ["Eaten with", "Jowar bhakri, chapati, dal-rice", "Roti, naan, paratha"],
        ]}
      />
      <p>
        So if you want a <strong>baingan bharta Maharashtrian style</strong>, the rule is: less
        tomato, more garlic, more green chilli, and peanuts. That is the whole difference.
      </p>

      <H2 id="ingredients">Ingredients for vangyache bharit (serves 4)</H2>
      <H3>For roasting</H3>
      <Bullets>
        <li>
          2 large bharit brinjals, about 700–800 g total. Choose ones that feel <strong>light</strong>{" "}
          for their size — they have fewer seeds.
        </li>
        <li>A few drops of oil to rub on the skin</li>
      </Bullets>
      <H3>For the garlic–chilli–peanut thecha</H3>
      <Bullets>
        <li>
          12–15 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves — yes, this much
        </li>
        <li>
          5–7 green <Wiki href={WIKI.chilli}>chillies</Wiki> (use 3–4 for medium heat)
        </li>
        <li>
          3 tbsp roasted <Wiki href={WIKI.peanut}>peanuts</Wiki>, skins rubbed off
        </li>
      </Bullets>
      <H3>For the phodni</H3>
      <Bullets>
        <li>
          4 tbsp <Wiki href={WIKI.oil}>oil</Wiki> — groundnut oil tastes best here
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.mustard}>mustard seeds</Wiki>, ½ tsp{" "}
          <Wiki href={WIKI.cumin}>cumin</Wiki>, a pinch of <Wiki href={WIKI.asafoetida}>hing</Wiki>
        </li>
        <li>
          ¼ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki> and salt to taste
        </li>
        <li>
          3–4 spring onions with greens, or 1 chopped <Wiki href={WIKI.onion}>onion</Wiki>
        </li>
        <li>A big handful of chopped coriander</li>
        <li>Optional: ½ tsp Lata Special Saoji Masala</li>
      </Bullets>

      <H2 id="step-1">Step 1 — Fire-roast the brinjals</H2>
      <p>
        Wash and wipe the brinjals dry. Rub a few drops of oil on the skin. Some homes push 3–4 garlic
        cloves into small cuts in the brinjal before roasting — the garlic roasts inside and is lovely,
        but it is optional.
      </p>
      <p>
        Put the brinjal straight on the gas flame. Turn it every 2–3 minutes with tongs. In 12–15
        minutes the skin will be black and cracked, and the brinjal will go soft and slump. Press near
        the stem — if it is soft there too, it is done. A half-roasted stem end is the most common
        reason for hard, raw bits in the bharit.
      </p>

      <H2 id="step-2">Step 2 — Steam, peel and mash</H2>
      <p>
        Put the hot brinjals in a bowl and cover with a plate for 10 minutes. The steam loosens the
        skin. Now peel off the black skin with wet fingers — a few burnt flecks are fine, they add
        smoke. Remove the stem. Mash the flesh with a spoon or by hand. Keep it a little coarse; Varhadi
        bharit is not a smooth puree.
      </p>

      <H2 id="step-3">Step 3 — Crush garlic, green chilli and peanuts</H2>
      <p>
        In a khalbatta (mortar) or a small mixer jar, crush the garlic, green chillies and roasted
        peanuts together. Pulse only — you want a <strong>coarse thecha</strong> where you can still
        see peanut pieces. This coarse mix is what gives the bharit its bite.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="Make it Saoji style — ½ tsp is all the bharit needs"
        note="A small pinch of Lata Special Saoji Masala in the phodni turns Varhadi bharit darker and deeper. The 250 g starter pack (₹200) also covers your aloo-baingan, usal and Sunday chicken rassa."
      />

      <H2 id="step-4">Step 4 — Make the hot phodni</H2>
      <p>
        Heat 4 tbsp oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Add mustard seeds and let them
        crackle. Add cumin and a pinch of hing. Now add the garlic–chilli–peanut thecha. Fry on a{" "}
        <strong>medium</strong> flame for 2–3 minutes, stirring, till the garlic turns light golden and
        the kitchen smells of roasted garlic. Do not let it go dark brown — burnt garlic makes the
        bharit bitter.
      </p>

      <H2 id="step-5">Step 5 — Cook the brinjal in the phodni</H2>
      <p>
        Add the chopped spring onion whites (or onion) and turmeric. Fry one minute. Add the mashed
        brinjal and salt. Mix well and cook 5–7 minutes on medium flame, stirring now and then, till the
        oil coats the brinjal and the raw smell is gone.
      </p>
      <p>
        <strong>For Saoji style:</strong> add ½ tsp Saoji Masala to the oil just before the brinjal
        goes in and fry it for 20 seconds. The bharit turns a shade darker and gets a deep roasted
        taste — the same way we fry masala first in our{" "}
        <SiteLink href="/#use">rasedar sabzi method</SiteLink>.
      </p>

      <H2 id="step-6">Step 6 — Finish and serve</H2>
      <p>
        Switch off the gas. Fold in the spring onion greens and lots of coriander. Taste salt. Serve
        warm with jowar <Wiki href={WIKI.bhakri}>bhakri</Wiki>, a soft{" "}
        <Wiki href={WIKI.chapati}>chapati</Wiki>, or plain dal-rice. In Varhad we keep a raw onion and a
        green chilli on the side, and some people add a spoon of curd to their plate to cool the heat.
      </p>

      <H2 id="mistakes">Tips for the best bharit</H2>
      <Bullets>
        <li>
          <strong>Light brinjal, fewer seeds.</strong> Heavy brinjals are seedy and can taste bitter.
        </li>
        <li>
          <strong>Roast fully.</strong> The skin should be black all over, and the stem end soft.
        </li>
        <li>
          <strong>Coarse, not smooth.</strong> Both the brinjal and the garlic–peanut thecha should
          keep texture.
        </li>
        <li>
          <strong>Golden garlic, not brown.</strong> Pull the flame down the moment the garlic colours.
        </li>
        <li>
          <strong>No tomato needed.</strong> If you like a little tang, squeeze half a lemon at the end
          instead.
        </li>
      </Bullets>

      <p>
        Bharit is a winter favourite, but it is not the only spicy Vidarbha vegetable. Try our{" "}
        <PostLink slug="aloo-baingan-sabji-recipe">aloo baingan sabji with Saoji Masala</PostLink> on
        a weekday, and our <PostLink slug="zunka-recipe">zunka with jowar bhakri</PostLink> for a full
        Maharashtrian thali. Want to know more about Nagpur plates? Read{" "}
        <PostLink slug="famous-food-of-nagpur">famous food of Nagpur</PostLink>.
      </p>

      <KitchenTip>
        <p>
          Roast one extra brinjal. Mashed roasted brinjal keeps 2 days in the fridge, and with ready
          thecha the next bharit takes 10 minutes. Keep your{" "}
          <SiteLink href="/#deals">Saoji Masala packet</SiteLink> sealed and away from the stove so the
          aroma stays — Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["aloo-baingan-sabji-recipe", "zunka-recipe", "patodi-sabji-recipe", "famous-food-of-nagpur"]}
      />
    </Prose>
  );
}
