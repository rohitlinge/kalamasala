import type { ReactNode } from "react";
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
  RelatedPosts,
  SiteLink,
  Table,
  WIKI,
  Wiki,
} from "@/components/blogs/BlogParts";

const SHEGAON = "https://en.wikipedia.org/wiki/Shegaon";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="mr-2 inline-block rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#565959]">
      {children}
    </span>
  );
}

export default function NagpurFoodPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <Prose>
      <p>
        Namaskar. People know <Wiki href={WIKI.nagpur}>Nagpur</Wiki> as the Orange City, the centre of
        India, and the home of <Wiki href={WIKI.saoji}>Saoji</Wiki> heat. But ask anyone from here
        about the <strong>famous food of Nagpur</strong> and the list goes far beyond mutton. There
        is tarri poha at the tea stall, sambar vadi with evening chai, bharit and bhakri on a winter
        night, and santra barfi in every suitcase going out of the city.
      </p>
      <p>
        This is our home-kitchen list of 12 Nagpuri dishes you must try — what each one is, when we
        eat it, and how to cook it yourself. Where we have a full recipe on this blog, the dish name
        links to it. Most of these use the same dark{" "}
        <SiteLink href="/#product">Lata Special Saoji Masala</SiteLink> we make in our{" "}
        <Wiki href={WIKI.vidarbha}>Vidarbha</Wiki> kitchen.
      </p>

      <Note>
        Blue words open Wikipedia. We have not named shops or prices here — those change. For the
        eateries we love most, see our{" "}
        <PostLink slug="top-3-saoji-restaurants-bhojnalay-nagpur">
          top 3 Saoji bhojnalay in Nagpur
        </PostLink>
        .
      </Note>

      <H2 id="quick-list">Nagpur famous food list at a glance</H2>
      <Table
        head={["Dish", "Type", "When we eat it"]}
        rows={[
          ["Saoji Mutton", "Non-veg", "Sunday lunch, guests"],
          ["Saoji Chicken", "Non-veg", "Weekend dinner"],
          ["Saoji Egg Curry", "Egg", "Quick weeknight"],
          ["Tarri Poha", "Veg", "Breakfast"],
          ["Santra Barfi", "Sweet", "Gifts, festivals"],
          ["Sambar Vadi", "Veg snack", "Tea time"],
          ["Patodi Rassa", "Veg", "Lunch, functions"],
          ["Varhadi Bharit", "Veg", "Winter dinner"],
          ["Zunka Bhakar", "Veg", "Farm-style meal"],
          ["Vada Bhaat", "Veg", "Simple lunch"],
          ["Shegaon Kachori", "Veg snack", "Any time"],
          ["Matki Usal", "Veg", "Breakfast or dinner"],
        ]}
      />

      <H2 id="item-1">1. Saoji Mutton — the dish Nagpur is known for</H2>
      <p>
        <Tag>Non-veg</Tag>
        <Tag>Very hot</Tag>
      </p>
      <p>
        If there is one famous food of Nagpur, it is Saoji <Wiki href={WIKI.mutton}>mutton</Wiki>.
        The gravy is thin, almost black, and a layer of red oil — tarri — floats on top. The heat is
        not just chilli; it comes from slow-roasted spices, dry coconut and dagad phool. In a
        bhojnalay it comes with bhakri or roti, rice, onion and a bowl of extra rassa. Our full home
        method is in the{" "}
        <PostLink slug="saoji-mutton-nagpur-recipe">Saoji mutton Nagpur recipe</PostLink>.
      </p>

      <H2 id="item-2">2. Saoji Chicken</H2>
      <p>
        <Tag>Non-veg</Tag>
        <Tag>Hot</Tag>
      </p>
      <p>
        The same Saoji style, made with bone-in <Wiki href={WIKI.chicken}>chicken</Wiki>. It cooks
        faster than mutton, so it is the Saoji most families make on a weekend night. A dark
        onion-coconut paste, Saoji masala fried till the oil floats, and a thin rassa — see our{" "}
        <PostLink slug="saoji-chicken-recipe">Saoji chicken recipe</PostLink>, with a heat chart for
        1 kg.
      </p>

      <H2 id="item-3">3. Saoji Egg Curry (Anda Rassa)</H2>
      <p>
        <Tag>Egg</Tag>
        <Tag>Hot</Tag>
      </p>
      <p>
        When there is no time for meat, Nagpur homes make anda rassa: boiled{" "}
        <Wiki href={WIKI.egg}>eggs</Wiki>, lightly fried, in the same Saoji gravy. It is ready in
        about 30 minutes and tastes like the bhojnalay. Recipe:{" "}
        <PostLink slug="saoji-egg-curry-recipe">Saoji egg curry</PostLink>.
      </p>

      <H2 id="item-4">4. Tarri Poha — Nagpur&apos;s breakfast</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Breakfast</Tag>
      </p>
      <p>
        Soft kanda <Wiki href={WIKI.poha}>poha</Wiki> in a plate, a ladle of spicy kala chana tarri
        poured over it, then raw onion, sev and lemon. Mild poha plus hot tarri — that contrast is the
        whole dish. Tea stalls across the city serve it from early morning. Our{" "}
        <PostLink slug="tarri-poha-recipe">tarri poha recipe</PostLink> shows how to get the red oil
        layer on the chana.
      </p>

      <H2 id="item-5">5. Santra Barfi — the Orange City sweet</H2>
      <p>
        <Tag>Sweet</Tag>
        <Tag>Gift</Tag>
      </p>
      <p>
        <Wiki href={WIKI.orange}>Nagpur oranges</Wiki> give the city its name, and santra barfi is
        how the orange becomes a sweet. It is soft khoya barfi flavoured with orange pulp and zest,
        usually bright orange in colour. This is the box people carry home from Nagpur. In winter,
        when the oranges are in season, the flavour is at its best.
      </p>

      <H2 id="item-6">6. Sambar Vadi</H2>
      <p>
        <Tag>Veg snack</Tag>
        <Tag>Tea time</Tag>
      </p>
      <p>
        In Nagpur, <strong>sambar</strong> means fresh <Wiki href={WIKI.coriander}>coriander</Wiki>.
        Sambar vadi is a thin dough sheet folded around coriander, dry coconut,{" "}
        <Wiki href={WIKI.poppy}>khaskhas</Wiki> and <Wiki href={WIKI.sesame}>til</Wiki>, then fried
        till crisp. It is the snack visitors most often have never heard of — and then ask for again.
        Step-by-step: <PostLink slug="sambar-vadi-recipe">Nagpuri sambar vadi recipe</PostLink>.
      </p>

      <H2 id="item-7">7. Patodi Rassa</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Lunch</Tag>
      </p>
      <p>
        <Wiki href={WIKI.gramFlour}>Besan</Wiki> is cooked into a soft dough, set in a plate, cut
        into pieces and simmered in a spicy rasedar gravy. Patodi rassa is common at Vidarbha
        functions and home lunches, and it is one of the best ways to use Saoji masala in a veg dish.
        Our version: <PostLink slug="patodi-sabji-recipe">patodi sabji recipe</PostLink>.
      </p>

      <H2 id="item-8">8. Varhadi Vangyache Bharit</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Winter</Tag>
      </p>
      <p>
        Varhad is the old name of west Vidarbha, and Varhadi bharit is our way of making{" "}
        <Wiki href={WIKI.baingan}>baingan bharta</Wiki>: the <Wiki href={WIKI.eggplant}>brinjal</Wiki>{" "}
        is roasted directly on fire, mashed, and mixed into a hot tadka of green chilli, garlic,
        spring onion and <Wiki href={WIKI.peanut}>peanuts</Wiki>. It is smoky and hot, eaten with
        jowar bhakri. Recipe:{" "}
        <PostLink slug="varhadi-vangyache-bharit-recipe">Varhadi vangyache bharit</PostLink>.
      </p>

      <BlogMasalaAd
        packId="500"
        headline="One masala for half this list — 500 g family pack, ₹400"
        note="Saoji mutton, Saoji chicken, anda rassa, chana tarri, patodi rassa and matki usal all start with the same dark roast. Homemade in Nagpur by Lata Special, slow-roasted, no colour."
      />

      <H2 id="item-9">9. Zunka Bhakar</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Rustic</Tag>
      </p>
      <p>
        Zunka is a dry, crumbly besan dish cooked with onion, garlic and chilli. With hot{" "}
        <Wiki href={WIKI.jowar}>jowar</Wiki> <Wiki href={WIKI.bhakri}>bhakri</Wiki>, raw onion and
        green chilli, it is a full farmer&apos;s meal — cheap, filling and full of taste. Our method:{" "}
        <PostLink slug="zunka-recipe">zunka recipe</PostLink>.
      </p>

      <H2 id="item-10">10. Vada Bhaat</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Comfort food</Tag>
      </p>
      <p>
        A very Vidarbha dish. Dal vadas are fried, then crushed over a plate of hot{" "}
        <Wiki href={WIKI.rice}>rice</Wiki>, and a spoon of smoking hot oil tadka with chilli and
        garlic is poured on top. Some homes add kadhi or a thin rassa on the side. It is simple,
        filling, and very hard to stop eating.
      </p>

      <H2 id="item-11">11. Shegaon Kachori</H2>
      <p>
        <Tag>Veg snack</Tag>
        <Tag>Spicy</Tag>
      </p>
      <p>
        This kachori comes from <Wiki href={SHEGAON}>Shegaon</Wiki>, a temple town in Vidarbha, and
        you will find it all over Nagpur. It is round, crisp and flaky, stuffed with a spicy, dry
        besan-and-spice filling. People eat it plain, or broken into a plate with chutney and onion.
      </p>

      <H2 id="item-12">12. Matki Usal</H2>
      <p>
        <Tag>Veg</Tag>
        <Tag>Protein-rich</Tag>
      </p>
      <p>
        <Wiki href={WIKI.mothBean}>Matki</Wiki> (moth beans) are{" "}
        <Wiki href={WIKI.sprouting}>sprouted</Wiki> and cooked in a thin, spicy gravy. In Vidarbha we
        make it hotter and thinner than in Pune or Mumbai, and eat it with pav, bhakri or chapati. Our{" "}
        <PostLink slug="matki-usal-recipe">matki usal recipe</PostLink> uses Saoji masala for that
        roasted taste.
      </p>

      <H2 id="everyday">The everyday Nagpur home plate</H2>
      <p>
        Most days, of course, Nagpur homes are not cooking festival food. A normal lunch is dal,
        rice, chapati and one sabzi — very often a quick{" "}
        <PostLink slug="aloo-baingan-sabji-recipe">aloo baingan sabji</PostLink> finished with a
        spoon of Saoji masala. That one spoon is what makes everyday Nagpuri food taste different from
        the same sabzi in another city.
      </p>

      <H2 id="masala">Why Nagpur food tastes different: the masala</H2>
      <p>
        The common thread in this list is the masala. Vidarbha cooking uses a dark masala roasted
        with dry coconut, coriander seeds, black pepper, cloves, dagad phool and more. Each spice is
        roasted separately till deep brown. That is why Saoji rassa looks black and tastes roasted,
        not raw. To understand how it compares with Kolhapuri, kala and garam masala, read our{" "}
        <PostLink slug="saoji-masala-vs-kolhapuri-vs-garam-masala">masala difference guide</PostLink>
        . To make it from whole spices, see our{" "}
        <PostLink slug="saoji-masala-recipe">homemade Saoji masala recipe</PostLink>.
      </p>
      <Bullets>
        <li>
          <strong>Visiting Nagpur?</strong> Have tarri poha for breakfast, Saoji for lunch, and buy
          santra barfi on the way out.
        </li>
        <li>
          <strong>Living in Nagpur?</strong> Try cooking one new dish from this list each weekend —
          start with sambar vadi or matki usal.
        </li>
        <li>
          <strong>Vegetarian?</strong> Nine of these 12 dishes are vegetarian.
        </li>
      </Bullets>

      <KitchenTip>
        <p>
          You do not need twelve masalas for twelve dishes. One good Saoji masala, fried in oil till
          it floats, carries most of this list. See{" "}
          <SiteLink href="/#use">how to use Saoji Masala</SiteLink> for dry sabzi and gravy, and pick
          a <SiteLink href="/#deals">pack size</SiteLink> — Nagpur delivery only.
        </p>
      </KitchenTip>

      <BlogFaqSection faqs={faqs} />

      <RelatedPosts
        slugs={[
          "top-3-saoji-restaurants-bhojnalay-nagpur",
          "saoji-mutton-nagpur-recipe",
          "tarri-poha-recipe",
          "sambar-vadi-recipe",
        ]}
      />
    </Prose>
  );
}
