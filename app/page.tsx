import { JsonLd, faqLd, localBusinessLd, productLd, websiteLd } from "@/lib/jsonld";
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
import Faq from "@/components/Faq";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <StoreShell>
      <JsonLd data={websiteLd()} />
      <JsonLd data={localBusinessLd()} />
      <JsonLd data={productLd()} />
      <JsonLd data={faqLd()} />
      <Hero />
      <ProductShelf />
      <ProductDetail />
      <Reviews showFirstProduct />
      <Story />
      <Faq />
      <Ingredients />
      <Process />
      <Comparison />
      <HowToUse />
      <Storage />
    </StoreShell>
  );
}
