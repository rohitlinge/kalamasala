import type { ReactNode } from "react";
import type { BlogFaq } from "@/lib/blogs";

/** Only verified English Wikipedia pages that match the linked phrase. */
const W = {
  chickenTikkaMasala: "https://en.wikipedia.org/wiki/Chicken_tikka_masala",
  chickenTikka: "https://en.wikipedia.org/wiki/Chicken_tikka",
  paneer: "https://en.wikipedia.org/wiki/Paneer",
  dahi: "https://en.wikipedia.org/wiki/Dahi_(curd)",
  onion: "https://en.wikipedia.org/wiki/Onion",
  cashew: "https://en.wikipedia.org/wiki/Cashew",
  ghee: "https://en.wikipedia.org/wiki/Ghee",
  butter: "https://en.wikipedia.org/wiki/Butter",
  alum: "https://en.wikipedia.org/wiki/Alum",
  garlic: "https://en.wikipedia.org/wiki/Garlic",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  tejpatta: "https://en.wikipedia.org/wiki/Cinnamomum_tamala",
  cardamom: "https://en.wikipedia.org/wiki/Cardamom",
  blackCardamom: "https://en.wikipedia.org/wiki/Black_cardamom",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  chili: "https://en.wikipedia.org/wiki/Chili_pepper",
  blackPepper: "https://en.wikipedia.org/wiki/Black_pepper",
  tomato: "https://en.wikipedia.org/wiki/Tomato",
  fenugreek: "https://en.wikipedia.org/wiki/Fenugreek",
  handi: "https://en.wikipedia.org/wiki/Handi",
  chicken: "https://en.wikipedia.org/wiki/Chicken_as_food",
  lemon: "https://en.wikipedia.org/wiki/Lemon",
  mughlai: "https://en.wikipedia.org/wiki/Mughlai_cuisine",
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

export default function ChickenTikkaMasalaPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Namaskar. Today we&apos;re making a soft, melt-in-the-mouth boneless gravy — call it{" "}
        <Wiki href={W.chickenTikkaMasala}>chicken tikka masala</Wiki>, murg tikka lajeez, or murg{" "}
        <Wiki href={W.handi}>handi</Wiki> lajeez. Mild, balanced, and not that &quot;too spicy&quot;
        curry people complain about.
      </p>
      <p>
        Two kitchen problems, one recipe: first, a proper boneless chicken gravy; second, a curry
        that stays delicious without shouting heat. Vegetarian friends can follow the same gravy
        with <Wiki href={W.paneer}>paneer</Wiki> tikka — just start the marinade early so nobody
        walks away hungry.
      </p>
      <p className="text-[13px] leading-6 text-[#565959]">
        Blue words open Wikipedia only where the name matches the page — tap if you want to know the
        ingredient.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        What you&apos;ll need
      </h2>
      <h3 className="text-[16px] font-bold text-[#0f1111]">For the chicken</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          About 1 kg boneless <Wiki href={W.chicken}>chicken</Wiki> breast, cut into small pieces
          (leg boneless also works)
        </li>
        <li>
          <Wiki href={W.dahi}>Dahi</Wiki> (curd) for marinade — optional squeeze of{" "}
          <Wiki href={W.lemon}>lemon</Wiki>
        </li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">For the onion–cashew paste</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>
          3 <Wiki href={W.onion}>onions</Wiki>, thick sliced
        </li>
        <li>
          4–5 <Wiki href={W.cashew}>cashews</Wiki>
        </li>
        <li>
          A little <Wiki href={W.ghee}>ghee</Wiki>, salt, water to boil
        </li>
        <li>½ tsp sugar once the onions are half-boiled (cheat for sweetness)</li>
      </ul>

      <h3 className="!mt-6 text-[16px] font-bold text-[#0f1111]">For the gravy</h3>
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">
        <li>Oil + ghee</li>
        <li>
          Whole spices: 2 <Wiki href={W.tejpatta}>tejpatta</Wiki>, badi{" "}
          <Wiki href={W.blackCardamom}>elaichi</Wiki>, chhoti{" "}
          <Wiki href={W.cardamom}>elaichi</Wiki>
        </li>
        <li>
          <Wiki href={W.ginger}>Ginger</Wiki>–<Wiki href={W.garlic}>garlic</Wiki> paste
        </li>
        <li>
          Mild powders: a little <Wiki href={W.coriander}>coriander</Wiki> powder, a pinch of{" "}
          <Wiki href={W.turmeric}>turmeric</Wiki>, a pinch of red{" "}
          <Wiki href={W.chili}>chilli</Wiki>
        </li>
        <li>
          About ½ cup dahi for 1 kg chicken
        </li>
        <li>
          Fresh <Wiki href={W.tomato}>tomato</Wiki> paste from about 1½ tomatoes
        </li>
        <li>
          Crushed <Wiki href={W.blackPepper}>black pepper</Wiki> (or a pepper mill if you like)
        </li>
        <li>Coriander stems (danthein)</li>
        <li>
          A little <Wiki href={W.fenugreek}>kasuri methi</Wiki>, a pinch of sugar to balance
        </li>
        <li>
          A small cube of <Wiki href={W.butter}>butter</Wiki> to finish — no cream needed
        </li>
      </ul>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 1 — Cut and marinate the chicken
      </h2>
      <p>
        Cut breast into small pieces. Marinate in dahi (a little lemon is fine too) and leave it.
        Boneless dries out faster than with-bone, so marinade matters — the dahi keeps it soft. If
        you were using with-bone chicken, you could go straighter into gravy; here we protect the
        meat first.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 2 — Boil onions and cashews for a sweet, mild paste
      </h2>
      <p>
        Slice three onions thick. Bring water to a boil with salt, a little ghee, the onions, and
        four–five cashews. Ghee and butter are old relatives of onion — ghee softens the onion and
        slips into it. Pull out as much sharpness as you can from onion, green chilli, and garlic;
        pull as much sweetness as you can into them. That&apos;s the whole story of this mild gravy.
      </p>
      <p>
        Cheat tip: when the onions are half-boiled, add half a teaspoon sugar. Soft sweetness, less
        bite.
      </p>
      <p>
        Old kitchens used a pinch of <Wiki href={W.alum}>fitkari (alum)</Wiki> in very red water to
        pull colour and sharp flavour. Same idea here — we&apos;re pulling heat down and sweetness
        up. When soft, grind to a fine paste.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 3 — Cook the chicken only to 80–90%
      </h2>
      <p>
        Cook the marinated chicken separately till about 80% done (90% is also fine) — keep the
        colour light gold, not dark. We&apos;ll marry chicken and gravy at the end.
      </p>
      <p>
        Why separate? With-bone chicken grows flavour into the gravy; boneless doesn&apos;t feed the
        gravy the same way, and breast overcooks in a flash. So for boneless, cook meat aside, finish
        gravy to 90%, then combine. Don&apos;t do a long bhunao with breast sitting in the pan —
        pull chicken off around 50–60% if it&apos;s cooking very fast; residual heat finishes it.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 4 — Start the gravy: whole spices, paste, mild powders
      </h2>
      <p>
        Heat oil and ghee. Add whole spices — two tejpatta, badi and chhoti elaichi — then
        ginger-garlic paste and your onion–cashew paste. Bhunao only enough to kill the raw
        ginger-garlic smell. Keep masalas mild: a little coriander powder, a pinch of turmeric, a
        pinch of red chilli. A spoon more ghee helps the roast without drying.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 5 — Dahi, pepper, tomato — and patience on the bhunao
      </h2>
      <p>
        Keep dahi ready. For 1 kg chicken, about half a cup. The few cashews plus the onion hold the
        gravy together so dahi doesn&apos;t split the way it often does in thin gravies. Add crushed
        black pepper.
      </p>
      <p>
        Add fresh tomato paste from about one and a half tomatoes. Want a quiet extra kick? Slip in
        one whole green chilli while it cooks and fish it out later — nobody needs to know. Cover
        and cook about five minutes.
      </p>
      <p>
        Add coriander stems: they don&apos;t muddy the colour like leaves, they hold flavour longer,
        and they bring a sweetness leaves don&apos;t. Keep the tomato bhunao going — some steps
        don&apos;t have a shortcut. First finish roasting tomato and dahi; water comes only in the
        last few minutes, and even then you keep cooking.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Step 6 — Chicken in, balance, butter finish
      </h2>
      <p>
        When the gravy is ready, add the chicken. Taste. If onion sweetness is a little low, a
        pinch of sugar balances dahi and tomato sourness. Add a little kasuri methi. That&apos;s
        your murg handi lajeez / chicken tikka gravy.
      </p>
      <p>
        Call it Lucknow, Hyderabad, Delhi, Mumbai — names don&apos;t matter. What matters is the
        velvet texture. Finish with a small cube of butter stirred in slowly. Watch the sheen. No
        cream in this dish — creaminess comes from technique: boiled onion, cashew, proper bhunao,
        and butter at the end.
      </p>
      <p>
        The chicken should be soft enough to pull apart — not overcooked in the pan, not overcooked
        in the gravy. Breast goes wrong fast; that&apos;s why we stopped early.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Extra ideas
      </h2>
      <p>
        Same light gravy works with mild fish tikka (maahi lajeez style), leftover malai tikka or
        Afghani tikka next day, or paneer tikka for a vegetarian plate. Keep flavours soft — this is
        a sweet, <Wiki href={W.mughlai}>Mughlai</Wiki>-leaning handi vibe, not a chilli blast.
      </p>
      <p>
        Boneless leg also works if you prefer it over breast. Soft gravy, soft chicken, mild spice —
        that&apos;s the win.
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          For a Nagpuri side kick with milder curries, keep{" "}
          <a href="/#product" className="text-link hover:text-link-hover hover:underline">
            Lata Special Kala Massala
          </a>{" "}
          on the table — a small pinch is enough. Nagpur delivery only.
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
