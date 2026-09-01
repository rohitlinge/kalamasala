import type { Metadata } from "next";
import StoreShell from "@/components/StoreShell";
import Reviews from "@/components/Reviews";
import { SocialIcons } from "@/components/SocialDock";
import { JsonLd } from "@/lib/jsonld";
import { owner } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const title = "Lata Linge — Homemade Nagpur Masala Kitchen";
const description =
  "Meet Lata Linge, the Nagpur cook behind Lata Special. About 9 years of homemade Kala Massala with Nagpuri and Saoji-style taste. Buy her masala online for Nagpur delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/owner` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/owner`,
    type: "profile",
    images: [{ url: owner.photo, alt: "Lata Linge, homemade Nagpur masala" }],
  },
};

export default function OwnerPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: owner.name,
    jobTitle: "Home cook",
    image: `${SITE_URL}${encodeURI(owner.photo)}`,
    url: `${SITE_URL}/owner`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: ["Kala Massala", "Nagpuri masala", "Saoji masala", "Maharashtrian spices"],
    description,
  };

  return (
    <StoreShell>
      <JsonLd data={personLd} />
      <div className="mx-auto max-w-[900px] px-3 py-5 md:px-4 md:py-8">
        <div className="amz-card p-4 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">About the owner</p>
          <div className="mt-4 flex flex-col items-center text-center">
            <img
              src={owner.photo}
              alt={`${owner.name}, homemade Nagpur Kala Massala`}
              className="h-52 w-52 rounded-full object-cover object-top shadow-md md:h-64 md:w-64"
            />
            <h1 className="mt-4 text-[26px] font-medium md:text-[32px]">{owner.name}</h1>
            <p className="mt-1 text-[13px] text-[#565959]">Nagpur kitchen · Nagpuri &amp; Saoji-style Kala Massala</p>
            <SocialIcons className="mt-4 justify-center" />
          </div>
          <p className="font-hindi mx-auto mt-6 max-w-xl text-center text-[16px] leading-7 text-[#0f1111]">{owner.bioHi}</p>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14px] leading-6 text-[#565959]">{owner.bio}</p>
        </div>
      </div>
      <Reviews showFirstProduct />
    </StoreShell>
  );
}
