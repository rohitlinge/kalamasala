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

export default function SambarVadiPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. Tell someone outside <Wiki href={WIKI.vidarbha}>Vidarbha</Wiki> that you are making
        sambar vadi and they will ask, &quot;sambar with vada?&quot; No! In{" "}
        <Wiki href={WIKI.nagpur}>Nagpur</Wiki> we call fresh <Wiki href={WIKI.coriander}>coriander</Wiki>{" "}
        <strong>sambar</strong>. So <strong>sambar vadi</strong> is a crisp, flaky roll of dough filled
        with a big handful of coriander, dry coconut, khaskhas and til. This sambar vadi recipe is the
        way we make it at home for tea time and for guests — with a small pinch of{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink> in the stuffing.
      </p>
      <p>
        A good Nagpuri sambar vadi has three things: a thin outer layer that cracks when you bite, a
        loose, green, slightly sweet-sour filling, and no oil soaking inside. It is not the steamed{" "}
        kothimbir vadi most recipe sites show. It is folded, sealed and fried slowly.
      </p>

      <QuickFacts
        items={[
          { label: "Prep", value: "40 min" },
          { label: "Fry", value: "30 min" },
          { label: "Makes", value: "20–24 pieces" },
          { label: "Heat", value: "Mild-medium 🌶" },
        ]}
      />

      <Note>
        Blue words open Wikipedia. Wash the coriander the morning before and spread it on a cloth to
        dry. Dry coriander is the biggest secret of crisp sambar vadi.
      </Note>

      <H2 id="ingredients">Ingredients for Nagpuri sambar vadi</H2>
      <H3>For the outer dough</H3>
      <Bullets>
        <li>1 cup maida (all-purpose flour)</li>
        <li>
          ¼ cup <Wiki href={WIKI.gramFlour}>besan</Wiki> — gives colour and a nutty bite
        </li>
        <li>2 tbsp hot oil (moyan), salt and a pinch of ajwain</li>
        <li>Water to knead a stiff dough</li>
      </Bullets>

      <H3>For the sambar (coriander) stuffing</H3>
      <Bullets>
        <li>2 big bunches of coriander — about 3 cups finely chopped, fully dry</li>
        <li>
          ¼ cup grated dry <Wiki href={WIKI.coconut}>coconut</Wiki> (khobra)
        </li>
        <li>
          2 tbsp <Wiki href={WIKI.poppy}>khaskhas</Wiki> (poppy seeds) and 2 tbsp{" "}
          <Wiki href={WIKI.sesame}>til</Wiki> (sesame)
        </li>
        <li>
          8–10 <Wiki href={WIKI.garlic}>garlic</Wiki> cloves and 3–4 green chillies, crushed
        </li>
        <li>½ tsp red chilli powder, ½ tsp amchur (or 1 tsp lemon juice), 1 tsp sugar, salt</li>
        <li>¼–½ tsp Lata Special Saoji Masala</li>
      </Bullets>

      <H3>To seal and fry</H3>
      <Bullets>
        <li>1 tbsp maida mixed with 2 tbsp water (sealing paste)</li>
        <li>
          <Wiki href={WIKI.oil}>Oil</Wiki> for deep frying
        </li>
      </Bullets>

      <BlogMasalaAd
        packId="250"
        headline="The pinch that makes the stuffing taste Nagpuri — 250 g at ₹200"
        note="Just ¼ to ½ teaspoon of Lata Special Saoji Masala lifts the coriander filling with a roasted, smoky note. The same pack cooks your patodi, usal and Sunday mutton."
      />

      <H2 id="step-1">Step 1 — Knead a stiff dough</H2>
      <p>
        Mix maida, besan, salt and a pinch of ajwain in a big plate. Pour 2 tbsp of hot oil and rub it
        into the flour with your fingers. When you press a fistful and it holds its shape, the moyan
        is right. Add water little by little and knead a <strong>stiff</strong> dough — stiffer than
        chapati dough. Cover and rest 20 minutes. Soft dough soaks oil and turns chewy.
      </p>

      <H2 id="step-2">Step 2 — Dry roast coconut, khaskhas and til</H2>
      <p>
        In a dry pan roast the dry coconut on a low flame till it is light brown. Take it out. Roast
        khaskhas and til together till the til starts to pop. Cool and crush coarsely in a mixer —
        just two short pulses. These roasted seeds keep the filling dry and give a nutty crunch.
      </p>

      <H2 id="step-3">Step 3 — Make the coriander stuffing</H2>
      <p>
        Heat one teaspoon of oil. Add crushed garlic and green chilli and stir 30 seconds. Add the
        chopped coriander and cook for <strong>only one minute</strong> — just till it wilts. If you
        cook longer, it releases water and the vadi will not stay crisp.
      </p>
      <p>
        Switch off. Mix in the roasted coconut-seed mix, red chilli, amchur, sugar, salt and the Saoji
        Masala. Taste: it should be a little sweet, a little sour, gently hot. Let it cool fully
        before filling.
      </p>

      <H2 id="step-4">Step 4 — Roll and fill</H2>
      <p>
        Take a lemon-size ball of dough and roll a thin circle, about 6 inches wide. Spread 2 tbsp of
        stuffing in the centre in a square. Fold the left and right sides over the filling, then the
        top and bottom, to make a neat square parcel. Some homes roll it into a long log instead and
        cut pieces — both are correct.
      </p>

      <H2 id="step-5">Step 5 — Seal the edges well</H2>
      <p>
        Brush the open edges with maida paste and press firmly. If you made a log, cut it into
        2-inch pieces and press each cut end closed. Any gap lets oil inside and stuffing out. Keep
        the ready vadis under a cloth while you roll the rest.
      </p>

      <H2 id="step-6">Step 6 — Fry slowly till crisp</H2>
      <p>
        Heat oil in a <Wiki href={WIKI.karahi}>kadhai</Wiki>. Drop a small piece of dough — it should
        rise slowly, not at once. Fry 4–5 vadis at a time on a <strong>medium-low</strong> flame for
        6–8 minutes, turning, till golden brown and hard when tapped. High flame browns the outside
        but leaves the inner folds raw and soft.
      </p>
      <p>
        Drain on paper. Serve hot with tea and green chutney. In many Nagpur homes sambar vadi also
        sits next to a plate of <PostLink slug="tarri-poha-recipe">tarri poha</PostLink> on a Sunday
        morning.
      </p>

      <H2 id="troubleshoot">Sambar vadi problems and fixes</H2>
      <Table
        head={["Problem", "Why it happens", "Fix"]}
        rows={[
          ["Soft after frying", "Wet coriander or soft dough", "Dry coriander fully; knead stiff"],
          ["Vadi opens in oil", "Edges not sealed", "Use maida paste, press hard"],
          ["Oily inside", "Oil not hot enough or too much moyan", "Test oil; keep moyan to 2 tbsp"],
          ["Raw dough inside folds", "Flame too high", "Fry medium-low for 6–8 minutes"],
          ["Bitter filling", "Coconut or khaskhas over-roasted", "Roast on low, stop at light brown"],
        ]}
      />

      <p>
        Want another besan dish from the Nagpur kitchen? Try our{" "}
        <PostLink slug="patodi-sabji-recipe">patodi sabji</PostLink> — soft besan strips in a rasedar
        Saoji gravy. Or see the full list of dishes in our{" "}
        <PostLink slug="famous-food-of-nagpur">famous food of Nagpur</PostLink> guide.
      </p>

      <KitchenTip>
        <p>
          Make the stuffing a day ahead and keep it in the fridge in a dry box — it gets drier and
          easier to fill. Fried sambar vadi stays crisp 2–3 days in an airtight tin. Keep your{" "}
          <SiteLink href="/#store">masala stored dry</SiteLink> too — a dry spoon only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={["tarri-poha-recipe", "patodi-sabji-recipe", "zunka-recipe", "famous-food-of-nagpur"]}
      />
    </Prose>
  );
}
