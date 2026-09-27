import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogFaq } from "@/lib/blogs";
import BlogMasalaAd from "@/components/blogs/BlogMasalaAd";

const W = {
  saoji: "https://en.wikipedia.org/wiki/Saoji_cuisine",
  nagpur: "https://en.wikipedia.org/wiki/Nagpur",
  vidarbha: "https://en.wikipedia.org/wiki/Vidarbha",
  maharashtrian: "https://en.wikipedia.org/wiki/Maharashtrian_cuisine",
  maharashtra: "https://en.wikipedia.org/wiki/Maharashtra",
  restaurant: "https://en.wikipedia.org/wiki/Restaurant",
  mutton: "https://en.wikipedia.org/wiki/Lamb_and_mutton",
  chicken: "https://en.wikipedia.org/wiki/Chicken_as_food",
  hyderabadi: "https://en.wikipedia.org/wiki/Hyderabadi_cuisine",
  gravy: "https://en.wikipedia.org/wiki/Gravy",
  mumbai: "https://en.wikipedia.org/wiki/Mumbai",
  pune: "https://en.wikipedia.org/wiki/Pune",
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

export default function SaojiRestaurantsPost({ faqs = [] }: { faqs?: BlogFaq[] }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      <p>
        Namaskar. Today we are taking you to Golibar Chowk in{" "}
        <Wiki href={W.nagpur}>Nagpur</Wiki> — the heart of{" "}
        <Wiki href={W.saoji}>Saoji</Wiki> food. In{" "}
        <Wiki href={W.maharashtra}>Maharashtra</Wiki>, people often call these old-style eateries a
        bhojnalay. Around this chowk, three <Wiki href={W.restaurant}>restaurants</Wiki> keep coming
        up in every talk of real <Wiki href={W.vidarbha}>Vidarbha</Wiki> heat.
      </p>
      <p>
        All three are best in their own way. We are not ranking them as bad-to-good. We are showing
        you the top three Saoji bhojnalay people actually stand in line for.
      </p>
      <ol className="list-decimal space-y-1.5 pl-5 marker:text-[#565959]">
        <li>Ashok Saoji Bhojnalay</li>
        <li>Anand Saoji Restaurant</li>
        <li>Hotel Chaman Saoji</li>
      </ol>
      <p className="text-[13px] leading-6 text-[#565959]">
        Prices below are from this visit and can change. Blue words open Wikipedia. For the same
        dark, thin Saoji gravy at home, see our{" "}
        <Link href="/blogs/saoji-masala-recipe" className="text-link hover:text-link-hover hover:underline">
          homemade Saoji masala recipe
        </Link>{" "}
        and{" "}
        <Link href="/blogs/saoji-mutton-nagpur-recipe" className="text-link hover:text-link-hover hover:underline">
          Saoji mutton Nagpur recipe
        </Link>
        .
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        1. Ashok Saoji Bhojnalay
      </h2>
      <p>
        First stop is Ashok Saoji Bhojnalay. This is one of the older Saoji places in Nagpur. The
        non-veg here is strong — the kind of plate that makes people come back. You will almost
        always find a crowd and regulars talking about the food.
      </p>
      <p>
        A full plate was about <strong>₹200</strong>. Half was about <strong>₹100</strong>. Some
        special plates were around ₹300. A couple of items were also in the ₹130 range (about ₹260
        for two). The cuts on the ₹200 plate were crisp — that kurrkura bite people wait for.
      </p>
      <p>
        If you want classic <Wiki href={W.maharashtrian}>Maharashtrian</Wiki> Saoji{" "}
        <Wiki href={W.mutton}>mutton</Wiki> or chicken with a dark, spicy gravy, Ashok Saoji is a
        safe first plate at Golibar Chowk.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        2. Anand Saoji Restaurant
      </h2>
      <p>
        Second is Anand Saoji Restaurant. The place is small. Do not go looking for a big hall. Go
        for the taste. In that little room, the Saoji flavour holds up well — spicy, filling, and
        honest.
      </p>
      <p>
        At lunch time the crowd is heavy. People squeeze in, eat, and leave. That rush is a good
        sign. When a small Nagpur bhojnalay stays packed at peak hours, the kitchen is doing
        something right.
      </p>
      <p>
        If you like sitting close, eating fast, and tasting real Saoji without fuss, Anand Saoji
        belongs on this list.
      </p>

      <BlogMasalaAd
        packId="250"
        headline="Want this Saoji taste at home? Start with ₹200 masala"
        note="Lata Special Saoji Masala, 250 g for ₹200 — the starter pack from our Nagpur kitchen. Same dark, spicy gravy you look for in a bhojnalay. Add to cart and cook usal, bhaji or mutton at home."
      />

      <p>
        After a restaurant plate, many families keep{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>{" "}
        at home so weekday gravy still tastes like Nagpur. The{" "}
        <a href="/#deals" className="text-link hover:text-link-hover hover:underline">
          250 g pack is ₹200
        </a>
        .{" "}
        <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
          Lata Linge
        </Link>{" "}
        roasts it in a Nagpur kitchen.{" "}
        <a href="/#use" className="text-link hover:text-link-hover hover:underline">
          See how to use it
        </a>{" "}
        in dry sabzi and rasedar gravy.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        3. Hotel Chaman Saoji
      </h2>
      <p>
        Third and last is Hotel Chaman Saoji. This is also an old restaurant, and these days it is
        very much in trend. Big food bloggers come here to shoot videos. In Marathi, people still
        call a place like this a bhojnalay — old name, new cameras.
      </p>
      <p>
        Demand is highest here because everything feels unique — from the{" "}
        <Wiki href={W.gravy}>gravy</Wiki> to the rest of the plate. Saoji already has a special
        taste. At Chaman, that taste is sharp and clear.
      </p>
      <p>
        A full plate was about <strong>₹250</strong>. Half was about <strong>₹200</strong>. They
        also serve <Wiki href={W.hyderabadi}>Hyderabadi</Wiki>{" "}
        <Wiki href={W.chicken}>chicken</Wiki>, a homestyle (gharguti) plate, and a dry powder-style
        plate. Half portions are easy to share. You will also see a garden-colour{" "}
        <Wiki href={W.mutton}>mutton</Wiki> — a greener look on the plate.
      </p>
      <p>
        This Saoji fame is not only a Nagpur secret. People from{" "}
        <Wiki href={W.mumbai}>Mumbai</Wiki> and <Wiki href={W.pune}>Pune</Wiki> look for the same
        plate when they talk about Vidarbha food.
      </p>

      <h2 className="!mt-8 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
        Which one should you try first?
      </h2>
      <p>
        If you want an old, trusted plate with crisp meat and a ₹200 full plate, start at{" "}
        <strong>Ashok Saoji</strong>. If you want big taste in a small room, go to{" "}
        <strong>Anand Saoji</strong> at lunch. If you want the trending bhojnalay that bloggers
        film, sit at <strong>Hotel Chaman Saoji</strong>.
      </p>
      <p>
        All three are in the Golibar Chowk belt. Eat one today. Cook the same Saoji heat at home
        tomorrow with{" "}
        <a href="/#product" className="text-link hover:text-link-hover hover:underline">
          Lata Special Saoji Masala
        </a>
        .
      </p>

      <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
        <p className="font-bold text-[#0f1111]">Kitchen tip from Lata Special</p>
        <p className="mt-1">
          A bhojnalay plate is a treat. Weeknight Saoji can still be yours: keep the 250 g pack
          (₹200) ready, follow the{" "}
          <Link href="/blogs/saoji-mutton-nagpur-recipe" className="text-link hover:text-link-hover hover:underline">
            mutton recipe
          </Link>
          , and store the packet{" "}
          <a href="/#store" className="text-link hover:text-link-hover hover:underline">
            airtight and dry
          </a>
          . Nagpur delivery only.
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
