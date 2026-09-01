import { SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/site";
import { packs } from "@/lib/content";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE,
    image: `${SITE_URL}/images/hero baneres/Dekstop hero image.png`,
    description:
      "Homemade Nagpur Kala Massala with Nagpuri and Saoji-style taste. Buy masala online for Nagpur delivery.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
      postalCode: "440009",
    },
    areaServed: {
      "@type": "City",
      name: "Nagpur",
    },
    servesCuisine: ["Maharashtrian", "Saoji", "Nagpuri"],
    priceRange: "₹₹",
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en-IN", "hi-IN"],
  };
}

export function productLd() {
  const prices = packs.map((p) => p.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product`,
    name: "Lata Special Kala Massala",
    image: packs.map((p) => `${SITE_URL}${encodeURI(p.image)}`),
    description:
      "Buy Nagpur masala online. Homemade Kala Massala with Nagpuri and Saoji taste, slow-roasted in a Nagpur kitchen.",
    brand: { "@type": "Brand", name: "Lata Special" },
    category: "Spices",
    areaServed: "Nagpur, Maharashtra",
    offers: {
      "@type": "AggregateOffer",
      url: `${SITE_URL}/#product`,
      priceCurrency: "INR",
      lowPrice: String(Math.min(...prices)),
      highPrice: String(Math.max(...prices)),
      offerCount: packs.length,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "4",
      bestRating: "5",
    },
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I buy Nagpur masala online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lata Special Kala Massala is sold online at kalamassala.online. Delivery is Nagpur only (pincodes 440xxx and 441xxx), in 6 days.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Nagpuri or Saoji taste masala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is homemade Maharashtrian Kala Massala from a Nagpur kitchen. The roast is dark, nutty, and peppery — the Nagpuri and Saoji-style taste used in usal, bhaji, and gravies.",
        },
      },
      {
        "@type": "Question",
        name: "Where do you deliver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nagpur, Maharashtra only. We deliver to 440xxx and 441xxx pincodes.",
        },
      },
    ],
  };
}
