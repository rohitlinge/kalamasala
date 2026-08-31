import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";

export default function ProductShelf() {
  return (
    <section id="deals" className="px-3 pb-3 pt-3 md:-mt-16 md:px-4 md:pt-0">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-2.5 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        {packs.map((p) => (
          <article key={p.id} className="amz-card p-2.5 shadow-sm md:p-4">
            <h2 className="line-clamp-2 text-[13px] font-bold leading-tight md:text-[21px]">
              {p.featured ? "Today's Deal" : p.label}
            </h2>
            <a href="#product" className="mt-2 block">
              <img
                src={p.image}
                alt={`Lata Special Kala Massala ${p.weight}`}
                className="h-28 w-full rounded-sm object-cover md:h-44"
              />
            </a>
            <p className="mt-2 text-[13px] font-medium md:text-[16px]">Kala Massala · {p.weight}</p>
            <p className="price mt-0.5 text-[18px] md:text-[21px]">{formatInr(p.price)}</p>
            <p className="hidden text-[12px] text-[#565959] md:block">{p.note}</p>
            <a href="#product" className="link mt-1 inline-block text-[12px] md:mt-3 md:text-[13px]">
              See options
            </a>
          </article>
        ))}
        <article className="amz-card p-2.5 shadow-sm md:p-4">
          <h2 className="line-clamp-2 text-[13px] font-bold leading-tight md:text-[21px]">Inside the packet</h2>
          <a href="#ingredients" className="mt-2 block">
            <img
              src="/images/product/texture.jpg"
              alt="Homemade Kala Massala"
              className="h-28 w-full rounded-sm object-cover md:h-44"
            />
          </a>
          <p className="mt-2 text-[12px] text-[#0f1111] md:text-[14px]">Eleven whole spices. No fillers, no dye.</p>
          <a href="#ingredients" className="link mt-1 inline-block text-[12px] md:mt-3 md:text-[13px]">
            Shop by ingredient
          </a>
        </article>
      </div>
    </section>
  );
}
