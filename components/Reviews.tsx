import { packs, reviews } from "@/lib/content";
import { formatInr } from "@/lib/product";

export default function Reviews({ showFirstProduct = false }: { showFirstProduct?: boolean }) {
  const first = packs.find((p) => p.featured) ?? packs[0];

  return (
    <section id="reviews" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-3 md:p-8">
        <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Customer reviews</p>
        <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">नागपुर की रसोइयों की बात</h2>
        <p className="mt-2 max-w-2xl text-[14px] text-[#565959]">
          Homemade Kala Massala, in the words of women who already cook with it.
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-sm border border-[#d5d9d9] bg-[#fafafa] p-3 md:p-4">
              <p className="stars text-[13px]">★★★★★</p>
              <p className="font-hindi mt-2 text-[15px] leading-6 text-[#0f1111]">{r.text}</p>
              <p className="mt-3 text-[13px] font-bold text-[#0f1111]">{r.name}</p>
              <p className="text-[12px] text-[#565959]">{r.area}</p>
            </li>
          ))}
        </ul>

        {showFirstProduct && (
          <article className="mt-6 max-w-sm rounded-sm border border-[#d5d9d9] p-3 md:p-4">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Today&apos;s Deal</p>
            <a href="/#product" className="mt-2 block">
              <img
                src={first.image}
                alt={`Lata Special Kala Massala ${first.weight}`}
                className="h-40 w-full rounded-sm object-cover"
              />
            </a>
            <p className="mt-2 text-[16px] font-medium">Kala Massala · {first.weight}</p>
            <p className="price mt-0.5 text-[21px]">{formatInr(first.price)}</p>
            <p className="mt-1 text-[12px] text-[#565959]">{first.note}</p>
            <a href="/#product" className="btn-cart mt-3">
              Shop {first.weight}
            </a>
          </article>
        )}
      </div>
    </section>
  );
}
