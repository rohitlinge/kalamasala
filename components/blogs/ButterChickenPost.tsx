import type { ReactNode } from "react";
import type { BlogFaq } from "@/lib/blogs";

/** English Wikipedia pages for ingredients & techniques in this recipe. */
const W = {
  butterChicken: "https://en.wikipedia.org/wiki/Butter_chicken",
  tandooriChicken: "https://en.wikipedia.org/wiki/Tandoori_chicken",
  spice: "https://en.wikipedia.org/wiki/List_of_Indian_spices",
  garlic: "https://en.wikipedia.org/wiki/Garlic",
  onion: "https://en.wikipedia.org/wiki/Onion",
  tomato: "https://en.wikipedia.org/wiki/Tomato",
  salt: "https://en.wikipedia.org/wiki/Salt",
  sugar: "https://en.wikipedia.org/wiki/Sugar",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  cashew: "https://en.wikipedia.org/wiki/Cashew",
  chicken: "https://en.wikipedia.org/wiki/Chicken_as_food",
  butter: "https://en.wikipedia.org/wiki/Butter",
  karahi: "https://en.wikipedia.org/wiki/Karahi",
  bhuna: "https://en.wikipedia.org/wiki/Bhuna",
  gelatin: "https://en.wikipedia.org/wiki/Gelatin",
  blackCardamom: "https://en.wikipedia.org/wiki/Black_cardamom",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  tejpatta: "https://en.wikipedia.org/wiki/Cinnamomum_tamala",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  garamMasala: "https://en.wikipedia.org/wiki/Garam_masala",
  fenugreek: "https://en.wikipedia.org/wiki/Fenugreek",
  honey: "https://en.wikipedia.org/wiki/Honey",
  ketchup: "https://en.wikipedia.org/wiki/Ketchup",
  cream: "https://en.wikipedia.org/wiki/Cream",
  malai: "https://en.wikipedia.org/wiki/Malai",
  mustardOil: "https://en.wikipedia.org/wiki/Mustard_oil",
  cinnamon: "https://en.wikipedia.org/wiki/Cinnamon",
  ghee: "https://en.wikipedia.org/wiki/Ghee",
  smoking: "https://en.wikipedia.org/wiki/Smoking_(cooking)",
  saag: "https://en.wikipedia.org/wiki/Saag",
  spinach: "https://en.wikipedia.org/wiki/Spinach",
  handi: "https://en.wikipedia.org/wiki/Handi",
} as const;

function Wiki({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link hover:text-link-hover hover:underline"
      title="Read on Wikipedia"
    >
      {children}
    </a>
  );
}

export default function ButterChickenPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Friends, you must have seen hundreds of{" "}
        <Wiki href={W.butterChicken}>butter chicken</Wiki> recipes by now — instant butter
        chicken, restaurant-style butter chicken, the works. But this gravy recipe? Honestly, you
        won&apos;t find it floating around the internet. It&apos;s a proper special one. We use a
        small technique that completely changes how the gravy tastes. I can only say this much: this
        is one of the best butter chicken gravies I&apos;ve ever eaten. So if you make it even once,
        it&apos;s worth it.
      </p>

      <p>
        Usually in butter chicken, we mix <Wiki href={W.tandooriChicken}>tandoori chicken</Wiki>{" "}
        into makhani gravy. In this recipe, we&apos;re doing something different.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need for the makhani base
      </h2>
      <p className="text-[13px] leading-6 text-[#565959]">
        New to Indian cooking? Tap the blue words — they open the matching Wikipedia page so you can
        see what each ingredient is.
      </p>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          A few whole <Wiki href={W.spice}>spices</Wiki> (khade masale)
        </li>
        <li>
          <Wiki href={W.garlic}>Garlic</Wiki>
        </li>
        <li>
          1 <Wiki href={W.onion}>onion</Wiki>
        </li>
        <li>
          About 5 hybrid / salad <Wiki href={W.tomato}>tomatoes</Wiki> (don&apos;t use desi
          tomatoes)
        </li>
        <li>
          <Wiki href={W.salt}>Salt</Wiki>, a little <Wiki href={W.sugar}>sugar</Wiki>
        </li>
        <li>
          Kashmiri red <Wiki href={W.chili}>chilli</Wiki>
        </li>
        <li>
          <Wiki href={W.ginger}>Ginger</Wiki> + <Wiki href={W.coriander}>coriander</Wiki> stems
          (dhaniya ki danthein)
        </li>
        <li>
          2 green <Wiki href={W.chili}>chillies</Wiki> + dry red chillies
        </li>
        <li>
          50 g <Wiki href={W.cashew}>cashews</Wiki> (kaju) — without cashew, makhani gravy just
          doesn&apos;t come
        </li>
        <li>
          <Wiki href={W.chicken}>Chicken</Wiki> leg pieces (with deep cuts)
        </li>
        <li>
          A little <Wiki href={W.butter}>butter</Wiki>
        </li>
      </ul>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Light roast, nothing more
      </h2>
      <p>
        Take a <Wiki href={W.karahi}>kadhai</Wiki>. Add a few whole spices, garlic, and one onion.
        Just roast them lightly. Not a heavy <Wiki href={W.bhuna}>bhunao</Wiki> — only enough to
        take out the raw taste from the onion and garlic, and warm the spices a bit. That&apos;s
        it.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Tomatoes and the supporting cast
      </h2>
      <p>
        Now add the tomatoes — plenty of them, around five. One important note: in this recipe,
        please don&apos;t use desi tomatoes. Use hybrid ones — those salad-style tomatoes. With
        them, add salt, a little sugar, Kashmiri red chilli, ginger, and coriander stems.
      </p>
      <p>
        Butter chicken that&apos;s only sweet-sweet doesn&apos;t hit the same. A little chatpata
        spicy, and the whole thing comes alive. So drop in two green chillies and some dry red
        chillies as well. And yes — total 50 g cashews with all of this.
      </p>
      <p>
        If you don&apos;t want even a hint of rawness in the gravy, roasting the tomatoes well is
        non-negotiable. They should go lightly soft. That&apos;s when makhani gravy finds its
        balance. And why sugar? Only to balance the sourness of the tomatoes. That&apos;s also why
        I said — skip desi tomatoes here.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — The real twist: chicken goes into the gravy first
      </h2>
      <p>
        These are the basic ingredients for makhani gravy. But one thing is very important, and
        that&apos;s what makes this butter chicken taste different — the chicken itself.
      </p>
      <p>
        Basically, butter chicken flavours are makhani sauce plus tandoori chicken. I&apos;m not
        putting tandoori chicken in this recipe. I&apos;ll do something so you still get that butter
        chicken aroma and taste — without making tandoori chicken separately.
      </p>
      <p>
        Whatever leg pieces you have, please cut them properly — don&apos;t forget those cuts. When
        we cook in salt, the flavour goes right inside the chicken. At this stage, add a little
        butter with the chicken, and bhunao the chicken with the tomato-onion mix for about 3–4
        minutes. Tomatoes going lightly soft here is very important for the gravy taste.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — Slow cook for 10 minutes (set a timer)
      </h2>
      <p>
        Once tomatoes are a bit soft and chicken is lightly roasted, add up to one cup of water.
        Cover it, set a timer — yes, a proper timer — and let everything boil for 10 minutes on
        medium-low flame. High flame? Don&apos;t even think about it.
      </p>
      <p>
        This slow cooking is the important part. The chicken releases its{" "}
        <Wiki href={W.gelatin}>gelatin</Wiki>, and the spices leave all their flavour on a gentle
        flame. That&apos;s what makes the gravy taste totally different.
      </p>
      <p>
        After 10 minutes, when you open the lid, you&apos;ll see — chicken is cooked, onion and
        tomato have softened nicely.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Take the chicken out, keep the flavour in
      </h2>
      <p>
        Now the big step: take the chicken out of the gravy and keep it aside. If some onion or
        coriander is stuck on the chicken, put that back into the gravy. At this time, remove the
        whole spices like <Wiki href={W.blackCardamom}>badi elaichi</Wiki> and{" "}
        <Wiki href={W.tejpatta}>tejpatta</Wiki> — but leave the{" "}
        <Wiki href={W.cardamom}>chhoti elaichi</Wiki> in the gravy. We&apos;ll grind that with the
        makhani sauce.
      </p>
      <p>
        Look carefully at the gravy now. Tiny oil droplets have settled on top. We didn&apos;t pour
        that much oil — but still, those little beads are sitting there. That, friends, is chicken
        flavour and chicken fat. When that joins your gravy, butter chicken gravy becomes a proper
        &quot;wow.&quot;
      </p>
      <p>
        If you&apos;re in a rush, you can add ice to cool it. I&apos;d suggest skip the ice, let it
        cool calmly, then grind. But if you&apos;re in a hurry, ice is fine. And the chicken? In
        this recipe, it comes out soft and tender — that much is guaranteed.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 6 — Grind to a fine paste
      </h2>
      <p>
        Empty everything from the kadhai into a mixer and make a fine paste. Before we continue —
        I&apos;m not finishing this recipe in the kadhai. I&apos;m moving to a{" "}
        <Wiki href={W.handi}>lagan</Wiki>, because it looks lovely and you get that butter chicken
        feel.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 7 — Finish the gravy in the lagan
      </h2>
      <p>
        First add oil in the lagan — oil so the butter doesn&apos;t burn — then add butter
        generously. Add one big spoon of ginger-garlic paste and roast it properly. After a light
        roast, add one big spoon Kashmiri red chilli and just 1/4 teaspoon{" "}
        <Wiki href={W.turmeric}>turmeric</Wiki>. Very little turmeric — otherwise your butter
        chicken turns yellow-yellow.
      </p>
      <p>
        Now this step is must: strain the mixer paste well into the lagan. Straining is very
        important. If any cashew piece or grain is left, it shouldn&apos;t go into the gravy. We
        want silky smooth gravy. Put the masala straight in — and by mistake also, don&apos;t add
        water at this stage. That&apos;s why I said, if you can avoid ice earlier, avoid it. More
        water means more time to cook down.
      </p>
      <p>
        Cover and cook this gravy for 10 minutes on medium-low flame. Stir once in between — or it
        can catch at the bottom. After 10 minutes, you&apos;ll see a beautiful, thick-textured
        makhani gravy ready. Amazing, right?
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 8 — Chicken back in, and the final balance
      </h2>
      <p>
        Simple things left now — but I&apos;ll show you one last magic at the end. For now, add the
        chicken back. With it: <Wiki href={W.garamMasala}>garam masala</Wiki>, roasted{" "}
        <Wiki href={W.fenugreek}>kasuri methi</Wiki> (dried fenugreek leaves), and half a teaspoon
        of elaichi powder — this one is must.
      </p>
      <p>
        Many people add sugar at the end. Sugar gives too much sweetness, and overly sweet butter
        chicken is only okay-okay. Either add <Wiki href={W.honey}>honey</Wiki>, or do like me —
        put two teaspoons of tomato <Wiki href={W.ketchup}>ketchup</Wiki>. That balances the gravy
        beautifully.
      </p>
      <p>
        By now the gravy is quite thick, so loosen it with about one cup of hot water.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 9 — Cream, mustard oil, and cold smoke
      </h2>
      <p>
        Remember — butter chicken is basically makhani gravy plus that tandoori chicken flavour.
        Our makhani gravy is excellent, chicken is soft… but that tandoori flavour is still missing.
      </p>
      <p>
        Once the gravy is set, add <Wiki href={W.cream}>cream</Wiki> — or like me, the{" "}
        <Wiki href={W.malai}>malai</Wiki> that forms on top of milk. Mix it well. Then add one big
        spoon of raw <Wiki href={W.mustardOil}>mustard oil</Wiki> (sarson ka tel — raw). Trust me, a
        completely different flavour starts coming into this gravy.
      </p>
      <p>
        Now keep a small bowl in the centre of the lagan. Take a{" "}
        <Wiki href={W.cinnamon}>cinnamon</Wiki> stick, burn it well, place it on the bowl, and pour
        a little desi <Wiki href={W.ghee}>ghee</Wiki> on it. With this{" "}
        <Wiki href={W.smoking}>cold-smoke</Wiki> technique, a smoke flavour goes through the whole
        butter chicken gravy — and that tandoori taste balances out perfectly.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        That&apos;s it
      </h2>
      <p>
        I guarantee — when you make this butter chicken at home, everyone will be happy. Chicken
        soft, flavour right into the gravy. Make it once and see. Excellent recipe.
      </p>
      <p>
        In winters tomatoes get cheap, so butter chicken feels great — but winter{" "}
        <Wiki href={W.spinach}>spinach</Wiki> chicken (<Wiki href={W.saag}>saag</Wiki> wala chicken)
        tastes even better. We&apos;ll share that one soon on the blog.
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          Pair this gravy with a pinch of homemade Kala Massala on the side for a Nagpuri kick —
          shop packs on{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            kalamassala.online
          </a>
          .
        </p>
      </aside>

      {faqs.length > 0 ? (
        <section className="mt-10 border-t border-[#d5d9d9] pt-6" aria-labelledby="recipe-faq-heading">
          <h2 id="recipe-faq-heading" className="text-[20px] font-bold text-[#0f1111] md:text-[22px]">
            Frequently asked questions
          </h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.question}>
                <dt className="text-[15px] font-bold text-[#0f1111]">{f.question}</dt>
                <dd className="mt-1 text-[14px] leading-6 text-[#565959] md:text-[15px] md:leading-7">
                  {f.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </div>
  );
}
