export default function Hero() {
  return (
    <section id="top">
      <h1 className="sr-only">
        Buy Nagpur masala online — Lata Special homemade Kala Massala, Nagpuri and Saoji taste
      </h1>
      <div className="mx-auto max-w-[1500px]">
        <picture>
          <source media="(min-width: 768px)" type="image/webp" srcSet="/images/hero baneres/desktop-hero.webp" />
          <source media="(min-width: 768px)" type="image/png" srcSet="/images/hero baneres/Dekstop hero image.png" />
          <source type="image/webp" srcSet="/images/hero baneres/mobile-hero.webp" />
          <img
            src="/images/hero baneres/mobile hero image.png"
            alt="Buy Nagpur masala online — Lata Special homemade Kala Massala, mobile banner"
            width={400}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="aspect-[2/3] h-auto w-full md:aspect-[5/2]"
          />
        </picture>
      </div>
    </section>
  );
}
