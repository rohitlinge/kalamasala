import { comparisons } from "@/lib/content";

export default function Comparison() {
  return (
    <section id="compare" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-5 md:p-8">
        <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Compare with similar items</p>
        <h2 className="mt-1 text-[26px] font-medium">Homemade massala, against the other kind.</h2>
        <p className="mt-2 max-w-2xl text-[14px] text-[#565959]">
          Packet masala is built to look the same on every shelf, for years. Ours is built to taste like the week it
          was roasted.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-[#d5d9d9] bg-[#f0f2f2]">
                <th className="px-4 py-3 font-bold">Lata Special · Homemade</th>
                <th className="px-4 py-3 font-bold text-[#565959]">Typical packet</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.us} className="border-b border-[#e7e7e7]">
                  <td className="px-4 py-3">{row.us}</td>
                  <td className="px-4 py-3 text-[#565959]">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
