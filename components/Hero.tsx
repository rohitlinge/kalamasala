export default function Hero() {
  return (
    <section id="top">
      <h1 className="sr-only">Lata Special Kala Massala</h1>
      <div className="mx-auto max-w-[1500px]">
        <img
          src="/images/hero baneres/mobile hero image.png"
          alt="Lata Special homemade Kala Massala"
          className="block h-auto w-full md:hidden"
        />
        <img
          src="/images/hero baneres/Dekstop hero image.png"
          alt="Lata Special homemade Kala Massala"
          className="hidden h-auto w-full md:block"
        />
      </div>
    </section>
  );
}
