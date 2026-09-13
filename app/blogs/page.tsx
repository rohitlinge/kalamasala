import type { Metadata } from "next";
import Link from "next/link";
import StoreShell from "@/components/StoreShell";
import { JsonLd } from "@/lib/jsonld";
import { absoluteAssetUrl, blogs } from "@/lib/blogs";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Blogs — Recipes & Kitchen Stories from Lata Special";
const description =
  "Homemade Indian recipes from Lata Special, Nagpur — butter chicken, Saoji mutton, masala tips, and kitchen stories written the way we cook at home.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${SITE_NAME}` },
  description,
  keywords: [
    "Lata Special blog",
    "Indian chicken recipes",
    "butter chicken recipe",
    "saoji mutton recipe",
    "chicken tikka masala recipe",
    "Nagpur saoji mutton",
    "homemade Indian recipes",
    "Nagpur recipes",
    "makhani gravy recipe",
    "Kala Massala recipes",
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/blogs`,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [{ url: absoluteAssetUrl(OG_IMAGE), alt: "Lata Special recipes blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteAssetUrl(OG_IMAGE)],
  },
};

export default function BlogsPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blogs`,
    name: title,
    description,
    url: `${SITE_URL}/blogs`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: blogs.length,
      itemListElement: blogs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blogs/${b.slug}`,
        name: b.title,
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
    ],
  };

  return (
    <StoreShell>
      <JsonLd data={[collectionLd, breadcrumbLd]} />
      <div className="mx-auto max-w-[900px] px-3 py-5 md:px-4 md:py-8">
        <nav className="mb-3 text-[12px] text-[#565959]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-1.5">
            <li>
              <a href="/" className="text-link hover:text-link-hover hover:underline">
                Home
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#0f1111]">Blogs</li>
          </ol>
        </nav>

        <div className="amz-card p-4 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">From the kitchen</p>
          <h1 className="mt-1 text-[26px] font-medium md:text-[32px]">Blogs</h1>
          <p className="mt-2 max-w-2xl text-[14px] leading-6 text-[#565959]">
            Recipes and small kitchen stories from Lata Special. New posts will show up here as we
            publish them.
          </p>

          <ul className="mt-6 divide-y divide-[#d5d9d9] border-t border-[#d5d9d9]">
            {blogs.map((post) => (
              <li key={post.slug} className="py-5">
                <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">
                  {post.category}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-1 block text-[18px] font-medium text-[#0f1111] hover:text-link-hover"
                >
                  {post.title}
                </Link>
                <p className="mt-1.5 text-[14px] leading-6 text-[#565959]">{post.description}</p>
                <p className="mt-2 text-[12px] text-[#565959]">
                  {formatDate(post.publishedAt)} · {post.readingMinutes} min read · {post.author}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-3 inline-block text-[13px] font-bold text-link hover:text-link-hover hover:underline"
                >
                  Read recipe →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StoreShell>
  );
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
