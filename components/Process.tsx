import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="craft" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] overflow-hidden">
        <img
          src="/images/product/tin.jpg"
          alt="Kala Massala packed from the kitchen tin"
          className="h-[180px] w-full object-cover md:h-[380px]"
        />
        <div className="p-3 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">From the manufacturer</p>
          <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">A small process. No shortcuts in it.</h2>
          <p className="mt-2 max-w-3xl text-[14px] text-[#565959]">
            Kala Massala is not mixed from ready powders. It is built — spice by spice — so the coconut is dark, the
            coriander is sweet, and the chilli never scorches the rest.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.n} className="rounded-sm border border-[#d5d9d9] p-4">
                <p className="text-[13px] font-bold text-[#c45500]">{step.n}</p>
                <h3 className="mt-1 text-[16px] font-bold">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#565959]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
