export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden">
        <img
          src="/images/hero-kala-masala2.png"
          alt="Lata Special homemade Kala Massala"
          className="h-[220px] w-full object-cover sm:h-[300px] md:h-[380px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaeded] via-transparent to-black/25" />
        <div className="absolute inset-x-0 bottom-0 top-[42%] bg-gradient-to-t from-[#eaeded] to-transparent" />
        <div className="absolute left-4 top-6 max-w-lg text-white drop-shadow md:left-10 md:top-10">
          <p className="text-[13px] font-medium">Nagpur kitchen · homemade masala</p>
          <h1 className="font-hindi-display mt-1 text-4xl md:text-6xl">काला मसाला</h1>
          <p className="mt-1 text-[20px] font-bold md:text-[28px]">Lata Special Kala Massala</p>
          <a href="#deals" className="mt-3 inline-block rounded-sm bg-white px-3 py-1.5 text-[13px] font-bold text-[#0f1111]">
            Shop deals
          </a>
        </div>
      </div>
    </section>
  );
}
