import { uses } from "@/lib/content";

export default function HowToUse() {
  return (
    <section id="use" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto grid max-w-[1500px] overflow-hidden lg:grid-cols-2">
        <div className="relative h-44 md:min-h-[280px] lg:min-h-full">
          <img
            src="/images/product/plate.jpg"
            alt="Homemade Kala Massala ready to cook"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-3 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Product description</p>
          <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">A spoon, hot oil, and a little restraint.</h2>
          <ul className="mt-5 space-y-4">
            {uses.map((u, i) => (
              <li key={u.title}>
                <h3 className="text-[15px] font-bold">
                  {i + 1}. {u.title}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#565959]">{u.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-4 border-[#ffa41c] pl-3 text-[13px] leading-5 text-[#565959]">
            Start with less than you think. You can always add. Boiling the masala for long after it goes in steals the
            top notes we roasted so carefully.
          </p>
        </div>
      </div>
    </section>
  );
}
