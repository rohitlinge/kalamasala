export default function Story() {
  return (
    <section id="masala" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-3 md:p-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">From the brand</p>
            <h2 className="mt-2 text-[22px] font-medium leading-tight md:text-[32px]">
              Nagpur masala online, with a true Nagpuri and Saoji taste.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-[14px] leading-6 text-[#0f1111]">
              <strong>Lata Special Kala Massala</strong> is homemade Maharashtrian black masala from a Nagpur kitchen —
              coconut toasted dark, sesame, coriander, stone flower, and pepper. Buy Nagpur masala online here: the same
              Nagpuri taste used in usal, and the Saoji (Sawji) style heat people look for in gravies.
            </p>
            <p className="mt-3 text-[14px] leading-6 text-[#565959]">
              We do not mill for warehouses. Each batch is small enough to smell as it cools. You will notice the colour
              first — a true kala, not a dyed grey — then a nutty, warm finish. Packs ship only in Nagpur, in 6 days.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#d5d9d9] pt-5">
              {[
                ["6 days", "Door to door"],
                ["440xxx", "Nagpur pins only"],
                ["90 days", "Best after opening"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-[18px] font-bold text-[#0f1111] md:text-[22px]">{n}</p>
                  <p className="text-[11px] text-[#565959] md:text-[12px]">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
