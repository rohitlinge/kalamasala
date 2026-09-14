export default function Hero() {
  return (
    <section>
      <h1 className="sr-only">
        Buy Saoji Masala online Nagpur — Lata Special homemade Saoji Masala
      </h1>
      <div className="mx-auto max-w-[1500px]">
        <img
          src="/images/hero baneres/mobile-hero.webp"
          alt="Buy Saoji Masala online Nagpur — Lata Special homemade Saoji Masala, mobile banner"
          width={400}
          height={600}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full md:hidden"
        />
        <img
          src="/images/hero baneres/desktop-hero.webp"
          alt="Buy Saoji Masala online Nagpur — Lata Special homemade Saoji Masala, desktop banner"
          width={1000}
          height={400}
          fetchPriority="high"
          decoding="async"
          className="hidden h-auto w-full md:block"
        />
      </div>
    </section>
  );
}
