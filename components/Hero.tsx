export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden">
        <img
          src="/images/product/hero.jpg"
          alt="Lata Special homemade Kala Massala"
          className="h-[200px] w-full object-cover object-center sm:h-[280px] md:h-[380px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaeded] via-transparent to-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eaeded] to-transparent md:h-[42%]" />

        <div className="absolute inset-x-3 bottom-4 hidden text-white drop-shadow md:inset-auto md:left-10 md:top-10 md:block md:max-w-lg">
          <p className="text-[13px] font-medium">Nagpur kitchen · homemade masala</p>
          <h1 className="font-hindi-display mt-1 text-6xl">काला मसाला</h1>
          <p className="mt-1 text-[28px] font-bold">Lata Special Kala Massala</p>
          <a
            href="#deals"
            className="pointer-events-auto mt-3 inline-block rounded-sm bg-white px-3 py-1.5 text-[13px] font-bold text-[#0f1111]"
          >
            Shop deals
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-3 -mt-6 rounded-lg bg-white p-4 shadow-sm md:hidden">
        <p className="text-[12px] text-[#565959]">Nagpur kitchen · homemade masala</p>
        <h1 className="font-hindi-display mt-1 text-[32px] leading-tight">काला मसाला</h1>
        <p className="mt-1 text-[18px] font-bold">Lata Special Kala Massala</p>
        <a href="#product" className="btn-cart mt-3">
          Shop packs
        </a>
      </div>
    </section>
  );
}
