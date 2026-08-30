import { packs } from "@/lib/content";
import { formatInr } from "@/lib/product";

export default function ProductShelf() {
  return (
    <section id="deals" className="-mt-8 px-3 pb-3 md:-mt-16 md:px-4">
      <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {packs.map((p) => (
          <article key={p.id} className="amz-card p-4 shadow-sm">
            <h2 className="text-[21px] font-bold leading-tight">{p.featured ? "Today's Deal" : p.label}</h2>
            <a href="#product" className="mt-3 block">
              <img
                src="/images/hero-kala-masala2.png"
                alt={`Lata Special Kala Massala ${p.weight}`}
                className="h-44 w-full rounded-sm object-cover"
              />
            </a>
            <p className="mt-3 text-[16px] font-medium">
              Kala Massala · {p.weight}
            </p>
            <p className="price mt-1 text-[21px]">{formatInr(p.price)}</p>
            <p className="text-[12px] text-[#565959]">{p.note}</p>
            <a href="#product" className="link mt-3 inline-block text-[13px]">
              See options
            </a>
          </article>
        ))}
        <article className="amz-card p-4 shadow-sm">
          <h2 className="text-[21px] font-bold leading-tight">Inside the packet</h2>
          <a href="#ingredients" className="mt-3 block">
            <img
              src="/images/ingredients-spices.png"
              alt="Whole spices for Kala Massala"
              className="h-44 w-full rounded-sm object-cover"
            />
          </a>
          <p className="mt-3 text-[14px] text-[#0f1111]">Eleven whole spices. No fillers, no dye.</p>
          <a href="#ingredients" className="link mt-3 inline-block text-[13px]">
            Shop by ingredient
          </a>
        </article>
      </div>
    </section>
  );
}
