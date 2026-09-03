import { ingredients } from "@/lib/content";

export default function Ingredients() {
  return (
    <section id="ingredients" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-3 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Product details</p>
            <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">Inside the packet</h2>
          </div>
          <p className="max-w-md text-[14px] text-[#565959]">
            Nothing proprietary is hidden behind a mystery powder. These are the spices. The secret is how long each one
            sits in the kadai.
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-sm">
          <img
            src="/images/product/what inside masala..png"
            alt="What is inside homemade Kala Massala"
            className="h-[160px] w-full object-cover md:h-[340px]"
          />
        </div>

        <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ingredients.map((item) => (
            <li key={item.name} className="overflow-hidden rounded-sm border border-[#d5d9d9] bg-white">
              <div className="aspect-square bg-[#f7f7f7]">
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
              </div>
              <div className="p-2 md:p-3">
                <h3 className="font-hindi-display text-[15px] leading-snug md:text-[17px]">{item.name}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-[#565959] md:text-[12px] md:leading-5">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
