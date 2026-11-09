import type { ReactNode } from "react";
import Link from "next/link";
import { getBlog, type BlogFaq } from "@/lib/blogs";

/** Shared building blocks for blog post bodies, so every post looks and links the same. */

export const WIKI = {
  saoji: "https://en.wikipedia.org/wiki/Saoji_cuisine",
  nagpur: "https://en.wikipedia.org/wiki/Nagpur",
  vidarbha: "https://en.wikipedia.org/wiki/Vidarbha",
  maharashtra: "https://en.wikipedia.org/wiki/Maharashtra",
  maharashtrian: "https://en.wikipedia.org/wiki/Maharashtrian_cuisine",
  kolhapur: "https://en.wikipedia.org/wiki/Kolhapur",
  garamMasala: "https://en.wikipedia.org/wiki/Garam_masala",
  spice: "https://en.wikipedia.org/wiki/Spice",
  coriander: "https://en.wikipedia.org/wiki/Coriander",
  cumin: "https://en.wikipedia.org/wiki/Cumin",
  turmeric: "https://en.wikipedia.org/wiki/Turmeric",
  chilli: "https://en.wikipedia.org/wiki/Chili_pepper",
  blackPepper: "https://en.wikipedia.org/wiki/Black_pepper",
  clove: "https://en.wikipedia.org/wiki/Clove",
  bayLeaf: "https://en.wikipedia.org/wiki/Indian_bay_leaf",
  stoneFlower: "https://en.wikipedia.org/wiki/Parmotrema_perlatum",
  coconut: "https://en.wikipedia.org/wiki/Coconut",
  poppy: "https://en.wikipedia.org/wiki/Poppy_seed",
  sesame: "https://en.wikipedia.org/wiki/Sesame",
  mustard: "https://en.wikipedia.org/wiki/Mustard_seed",
  curryLeaf: "https://en.wikipedia.org/wiki/Curry_tree",
  asafoetida: "https://en.wikipedia.org/wiki/Asafoetida",
  ginger: "https://en.wikipedia.org/wiki/Ginger",
  garlic: "https://en.wikipedia.org/wiki/Garlic",
  onion: "https://en.wikipedia.org/wiki/Onion",
  tomato: "https://en.wikipedia.org/wiki/Tomato",
  oil: "https://en.wikipedia.org/wiki/Cooking_oil",
  karahi: "https://en.wikipedia.org/wiki/Karahi",
  pressureCooker: "https://en.wikipedia.org/wiki/Pressure_cooking",
  chicken: "https://en.wikipedia.org/wiki/Chicken_as_food",
  egg: "https://en.wikipedia.org/wiki/Egg_as_food",
  mutton: "https://en.wikipedia.org/wiki/Lamb_and_mutton",
  eggplant: "https://en.wikipedia.org/wiki/Eggplant",
  potato: "https://en.wikipedia.org/wiki/Potato",
  peanut: "https://en.wikipedia.org/wiki/Peanut",
  gramFlour: "https://en.wikipedia.org/wiki/Gram_flour",
  chickpea: "https://en.wikipedia.org/wiki/Chickpea",
  mothBean: "https://en.wikipedia.org/wiki/Vigna_aconitifolia",
  sprouting: "https://en.wikipedia.org/wiki/Sprouting",
  usal: "https://en.wikipedia.org/wiki/Misal",
  misal: "https://en.wikipedia.org/wiki/Misal",
  poha: "https://en.wikipedia.org/wiki/Flattened_rice",
  bhakri: "https://en.wikipedia.org/wiki/Bhakri",
  jowar: "https://en.wikipedia.org/wiki/Sorghum",
  pithla: "https://en.wikipedia.org/wiki/Pitla",
  baingan: "https://en.wikipedia.org/wiki/Baingan_bharta",
  orange: "https://en.wikipedia.org/wiki/Nagpur_orange",
  vadaPav: "https://en.wikipedia.org/wiki/Vada_pav",
  samosa: "https://en.wikipedia.org/wiki/Samosa",
  chapati: "https://en.wikipedia.org/wiki/Chapati",
  rice: "https://en.wikipedia.org/wiki/Rice",
} as const;

export function Wiki({ href, children }: { href: string; children: ReactNode }) {
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

/** Internal link: Next <Link> for /blogs pages, plain <a> for home-page anchors like "/#product". */
export function SiteLink({ href, children }: { href: string; children: ReactNode }) {
  const cls = "text-link hover:text-link-hover hover:underline";
  if (href.startsWith("/#") || href === "/") {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Link to another blog post by slug. */
export function PostLink({ slug, children }: { slug: string; children: ReactNode }) {
  return <SiteLink href={`/blogs/${slug}`}>{children}</SiteLink>;
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-blog space-y-5 text-[15px] leading-7 text-[#0f1111] md:text-[16px] md:leading-8">
      {children}
    </div>
  );
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="!mt-8 scroll-mt-24 text-[20px] font-bold text-[#0f1111] md:text-[22px]">
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="!mt-6 scroll-mt-24 text-[16px] font-bold text-[#0f1111]">
      {children}
    </h3>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1.5 pl-5 marker:text-[#565959]">{children}</ul>;
}

export function Numbered({ children }: { children: ReactNode }) {
  return <ol className="list-decimal space-y-1.5 pl-5 marker:text-[#565959]">{children}</ol>;
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-[13px] leading-6 text-[#565959]">{children}</p>;
}

/** Quick facts box near the top of a recipe: time, serves, heat level, etc. */
export function QuickFacts({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[#d5d9d9] bg-[#d5d9d9] sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="bg-[#f7f8f8] px-3 py-2.5">
          <dt className="text-[11px] font-bold uppercase tracking-wide text-[#565959]">{item.label}</dt>
          <dd className="mt-0.5 text-[14px] font-medium text-[#0f1111]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Simple responsive table. First column is treated as the row header. */
export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-[#d5d9d9]">
      <table className="w-full min-w-[520px] border-collapse text-left text-[13px] leading-5 md:text-[14px]">
        <thead className="bg-[#f7f8f8]">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="border-b border-[#d5d9d9] px-3 py-2 font-bold text-[#0f1111]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#d5d9d9] last:border-b-0 align-top">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-3 py-2 font-bold text-[#0f1111]">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-3 py-2 text-[#0f1111]">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KitchenTip({ title = "Kitchen tip from Lata Special", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="mt-8 rounded-sm border border-[#d5d9d9] bg-[#f7f8f8] p-4 text-[14px] leading-6 text-[#565959]">
      <p className="font-bold text-[#0f1111]">{title}</p>
      <div className="mt-1 space-y-2">{children}</div>
    </aside>
  );
}

/** "You may also like" — links to other posts by slug. Unknown slugs are skipped. */
export function RelatedPosts({ slugs }: { slugs: string[] }) {
  const posts = slugs.map((s) => getBlog(s)).filter((p) => p !== undefined);
  if (!posts.length) return null;
  return (
    <section className="mt-10 border-t border-[#d5d9d9] pt-6" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-[18px] font-bold text-[#0f1111] md:text-[20px]">
        More from the Lata Special kitchen
      </h2>
      <ul className="mt-3 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blogs/${p.slug}`}
              className="text-[15px] font-medium text-link hover:text-link-hover hover:underline"
            >
              {p.title}
            </Link>
            <span className="block text-[12px] text-[#565959]">
              {p.category} · {p.readingMinutes} min read
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BlogFaqSection({ faqs }: { faqs: BlogFaq[] }) {
  if (!faqs.length) return null;
  return (
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
  );
}
