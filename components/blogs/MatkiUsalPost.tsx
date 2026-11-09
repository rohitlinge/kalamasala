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

export default function MatkiUsalPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. In a <Wiki href={WIKI.maharashtrian}>Maharashtrian</Wiki> home, a bowl of{" "}
        <strong>matki usal</strong> is never far away. Matki — <Wiki href={WIKI.mothBean}>moth beans</Wiki>{" "}
        — are small brown beans that sprout quickly and cook in minutes. This{" "}
        <strong>matki usal recipe</strong> shows you how to sprout matki at home and then cook it two
        ways: a dry <strong>sukhi usal</strong> for your tiffin, and a spicy{" "}
        <strong>rassa usal</strong> that can become misal.
      </p>
      <p>
        In <Wiki href={WIKI.nagpur}>Nagpur</Wiki> we like our usal hot. So instead of the usual kala
        masala, we cook <em>matki chi usal</em> with{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink>. It gives a darker colour, a
        roasted smell and heat that stays.
      </p>

      <QuickFacts
        items={[
          { label: "Sprouting", value: "1–1½ days" },
          { label: "Cook", value: "25 min" },
          { label: "Serves", value: "4" },
          { label: "Heat", value: "Medium 🌶🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. Start the soaking the night before. Sprouting is easy — it just
        needs time, not work.
      </Note>

      <H2 id="ingredients">Ingredients for matki usal</H2>
      <H3>For sprouting</H3>
      <Bullets>
        <li>1 cup matki (moth beans) — gives about 2½ cups of sprouts</li>
        <li>Plenty of water and a clean, damp cotton cloth</li>
      </Bullets>

      <H3>For the usal</H3>
      <Bullets>
        <li>
          3 tbsp <Wiki href={WIKI.oil}>oil</Wiki>
        </li>
        <li>
          ½ tsp <Wiki href={WIKI.mustard}>mustard seeds</Wiki>, 8–10{" "}
          <Wiki href={WIKI.curryLeaf}>curry leaves</Wiki>, a pinch of{" "}
          <Wiki href={WIKI.asafoetida}>hing</Wiki>
        </li>
        <li>
          1 large <Wiki href={WIKI.onion}>onion</Wiki>, finely chopped
        </li>
        <li>1 tsp ginger-garlic paste</li>
        <li>
          1 medium <Wiki href={WIKI.tomato}>tomato</Wiki>, chopped (optional)
        </li>
        <li>
          ¼ tsp <Wiki href={WIKI.turmeric}>turmeric</Wiki>
        </li>
        <li>1 tbsp Lata Special Saoji Masala for sukhi usal, 1½ tbsp for rassa usal</li>
        <li>
          2 tbsp grated dry <Wiki href={WIKI.coconut}>coconut</Wiki> (khobra), lightly roasted
        </li>
        <li>Salt, chopped coriander and lemon</li>
      </Bullets>

      <BlogMasalaAd
        packId="250"
        headline="Spicy usal every week — 250 g Saoji Masala for ₹200"
        note="One tablespoon makes a whole kadhai of matki usal. The 250 g starter pack is the easy way to try Nagpur Saoji taste in your everyday sprouts, usal and misal. Homemade, slow-roasted."
      />

      <H2 id="step-1">Step 1 — Soak the matki (how to sprout matki at home)</H2>
      <p>
        Pick out any small stones, then wash the matki two or three times. Soak it in a large bowl
        with water at least three times its height — the beans swell a lot. Leave it for{" "}
        <strong>8–10 hours</strong> or overnight.
      </p>

      <H2 id="step-2">Step 2 — Sprout the matki</H2>
      <p>
        Drain all the water. This is important: too much water and the beans rot instead of{" "}
        <Wiki href={WIKI.sprouting}>sprouting</Wiki>. Tie the beans loosely in a damp cotton cloth, or
        put them in a closed steel box. Keep in a warm corner of the kitchen for{" "}
        <strong>12–24 hours</strong>. In summer it is fast; in Nagpur winter it can take a full day.
      </p>
      <p>
        The matki is ready when you see small white tails, about 3–5 mm long. Do not wait for very
        long sprouts — they taste bitter and grassy. Sprouted matki keeps 2–3 days in the fridge in a
        closed box.
      </p>

      <H2 id="step-3">Step 3 — Make the tadka</H2>
      <p>
        Heat 3 tbsp oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Add mustard seeds and let them
        crackle. Add curry leaves and a pinch of hing. Add the chopped onion and fry on medium flame
        till light brown. Add ginger-garlic paste and fry till the raw smell goes. Add tomato, if
        using, and cook till soft.
      </p>

      <H2 id="step-4">Step 4 — Fry the Saoji Masala</H2>
      <p>
        Add turmeric, the roasted khobra and the Saoji Masala with a small splash of water. Fry on a{" "}
        <strong>medium</strong> flame, stirring, till the masala darkens and oil shows at the sides.
        This is the step from our <SiteLink href="/#use">how to use Saoji Masala</SiteLink> guide —
        never add the sprouts before the oil comes up, or the usal tastes of raw masala.
      </p>

      <H2 id="step-5">Step 5 — Cook the sprouts: sukhi or rassa</H2>
      <p>
        Add the sprouted matki and salt. Stir for 2 minutes so every bean gets coated. Now choose:
      </p>
      <Table
        head={["", "Sukhi usal (dry)", "Rassa usal (gravy)"]}
        rows={[
          ["Saoji Masala", "1 tbsp", "1½ tbsp"],
          ["Water", "½ cup", "2½ cups hot water"],
          ["Cook time", "10–12 min, then dry on open flame", "12–15 min, covered"],
          ["Serve with", "Chapati, tiffin, poli-bhaji", "Pav, bhakri, or as misal"],
        ]}
      />
      <p>
        Cover and cook till the matki is soft when pressed but still whole. Sprouted matki does not
        need a pressure cooker. If you use one, give only one whistle — more and the sprouts turn to
        mash.
      </p>

      <H2 id="step-6">Step 6 — Finish and serve</H2>
      <p>
        Switch off. Add chopped coriander and a squeeze of lemon. Sukhi usal goes well with chapati
        and a little curd. Rassa usal is best with soft pav or jowar{" "}
        <Wiki href={WIKI.bhakri}>bhakri</Wiki>.
      </p>

      <H2 id="matki-usal-for-misal">Turn matki usal into misal</H2>
      <p>
        <Wiki href={WIKI.misal}>Misal</Wiki> is usal with a spicy, oily topping. To make it, cook the
        rassa version with one extra spoon of oil and one extra cup of water. Let it simmer till a
        red-black tarri floats on top. In a bowl, put a ladle of usal, pour thin tarri over it, and
        top with farsan, chopped onion, coriander and lemon. Eat with pav.
      </p>
      <p>
        The same tarri method makes our <PostLink slug="tarri-poha-recipe">Nagpur tarri poha</PostLink>{" "}
        — another breakfast you can make with this Saoji masala.
      </p>

      <H2 id="tips">Tips for perfect matki usal</H2>
      <Bullets>
        <li>
          <strong>Do not salt early.</strong> Salt in the soaking water stops sprouting.
        </li>
        <li>
          <strong>Add potato for more.</strong> One small cubed potato with the sprouts makes the usal
          go further.
        </li>
        <li>
          <strong>Other sprouts work too.</strong> Use the same method for moong, chana or mixed
          sprouts. Kala chana needs a pressure cooker first.
        </li>
        <li>
          <strong>Taste before chilli.</strong> Saoji Masala is already hot — add green chilli only if
          you want more.
        </li>
      </Bullets>

      <p>
        Want to know why we use Saoji masala here instead of kala masala? Our{" "}
        <PostLink slug="saoji-masala-vs-kolhapuri-vs-garam-masala">masala difference guide</PostLink>{" "}
        explains. For another everyday vegetarian dish with Saoji Masala, try{" "}
        <PostLink slug="patodi-sabji-recipe">patodi sabji</PostLink>.
      </p>

      <KitchenTip>
        <p>
          Soak the matki at night, tie it in a cloth in the morning, and by the next evening you have
          sprouts ready. Keep a box of sprouts in the fridge and the{" "}
          <SiteLink href="/#deals">Saoji Masala packet</SiteLink> sealed — a hot usal is then only 20
          minutes away. Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["tarri-poha-recipe", "patodi-sabji-recipe", "zunka-recipe", "aloo-baingan-sabji-recipe"]}
      />
    </Prose>
  );
}
