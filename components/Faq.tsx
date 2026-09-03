export default function Faq() {
  const items = [
    {
      q: "Can I buy Nagpur masala online?",
      a: "Yes. Order Lata Special Kala Massala on this site. We pack from a Nagpur kitchen and deliver only in Nagpur (440xxx and 441xxx) in 6 days.",
    },
    {
      q: "Is this Nagpuri or Saoji taste masala?",
      a: "It is homemade Maharashtrian Kala Massala — dark coconut, sesame, coriander, and pepper. That is the Nagpuri and Saoji-style taste used in usal, bhaji, and gravies. Not a factory mix.",
    },
    {
      q: "How do I buy Saoji or Sawji masala online from you?",
      a: "Choose 250 g, 500 g, 1 kg, or 2 kg, add your Nagpur pincode, and pay. One pack is charged per order. Transport is added at checkout from your pin.",
    },
  ];

  return (
    <section id="faq" className="px-3 py-3 md:px-4">
      <div className="amz-card mx-auto max-w-[1500px] p-3 md:p-8">
        <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">Buying guide</p>
        <h2 className="mt-1 text-[20px] font-medium md:text-[26px]">Nagpur masala online — common questions</h2>
        <dl className="mt-5 space-y-4">
          {items.map((item) => (
            <div key={item.q}>
              <dt className="text-[15px] font-bold text-[#0f1111]">{item.q}</dt>
              <dd className="mt-1 text-[14px] leading-6 text-[#565959]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
