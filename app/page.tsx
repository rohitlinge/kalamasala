import StoreShell from "@/components/StoreShell";
import Hero from "@/components/Hero";
import ProductShelf from "@/components/ProductShelf";
import ProductDetail from "@/components/ProductDetail";
import Reviews from "@/components/Reviews";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import HowToUse from "@/components/HowToUse";
import Storage from "@/components/Storage";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lata Special Kala Massala",
    brand: { "@type": "Brand", name: "Lata Special" },
    description:
      "Homemade Maharashtrian Kala Massala, slow-roasted in small batches in Nagpur. Delivery in 6 days, Nagpur only.",
    areaServed: "Nagpur, Maharashtra",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "500",
      highPrice: "2000",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <StoreShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProductShelf />
      <ProductDetail />
      <Reviews showFirstProduct />
      <Story />
      <Ingredients />
      <Process />
      <Comparison />
      <HowToUse />
      <Storage />
    </StoreShell>
  );
}
