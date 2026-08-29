import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import HowToUse from "@/components/HowToUse";
import Storage from "@/components/Storage";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import { razorpayKeyId } from "@/lib/env";

export default function HomePage() {
  const razorpayKey = razorpayKeyId() ?? "";

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
      lowPrice: "5",
      highPrice: "2000",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <div className="hairline" />
        <Story />
        <Ingredients />
        <Process />
        <Comparison />
        <HowToUse />
        <Storage />
        <div className="hairline" />
        <OrderSection razorpayKey={razorpayKey} />
      </main>
      <Footer />
    </>
  );
}
