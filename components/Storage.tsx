import { storageRules } from "@/lib/content";

export default function Storage() {
  return (
    <section id="store" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-3 md:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Important information</p>
            <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">Masala is an oil. Treat it like one.</h2>
            <p className="mt-3 text-[14px] leading-6 text-[#565959]">
              Homemade Kala Massala has no anti-caking dust to hide moisture. These six habits keep the packet honest
              until the last spoon.
            </p>
            <div className="mt-4 overflow-hidden rounded-sm">
              <img
                src="/images/product/Masala is an oil.webp"
                alt="Homemade Kala Massala with its natural oils"
                className="h-40 w-full object-cover md:h-52"
              />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {storageRules.map((rule) => (
              <article key={rule.title} className="rounded-sm border border-[#d5d9d9] p-4">
                <h3 className="text-[15px] font-bold">{rule.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#565959]">{rule.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
