import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoreShell from "@/components/StoreShell";
import BlogFeaturedVideo from "@/components/blogs/BlogFeaturedVideo";
import { RelatedPosts } from "@/components/blogs/BlogParts";
import ButterChickenPost from "@/components/blogs/ButterChickenPost";
import ChickenBiryaniPost from "@/components/blogs/ChickenBiryaniPost";
import ChickenTikkaMasalaPost from "@/components/blogs/ChickenTikkaMasalaPost";
import GaramMasalaPost from "@/components/blogs/GaramMasalaPost";
import PatodiSabjiPost from "@/components/blogs/PatodiSabjiPost";
import SaojiMasalaPost from "@/components/blogs/SaojiMasalaPost";
import SaojiMuttonPost from "@/components/blogs/SaojiMuttonPost";
import SaojiRestaurantsPost from "@/components/blogs/SaojiRestaurantsPost";
import AlooBainganPost from "@/components/blogs/AlooBainganPost";
import MasalaDifferencePost from "@/components/blogs/MasalaDifferencePost";
import MatkiUsalPost from "@/components/blogs/MatkiUsalPost";
import NagpurFoodPost from "@/components/blogs/NagpurFoodPost";
import SambarVadiPost from "@/components/blogs/SambarVadiPost";
import SaojiChickenPost from "@/components/blogs/SaojiChickenPost";
import SaojiEggCurryPost from "@/components/blogs/SaojiEggCurryPost";
import TarriPohaPost from "@/components/blogs/TarriPohaPost";
import VangyacheBharitPost from "@/components/blogs/VangyacheBharitPost";
import ZunkaPost from "@/components/blogs/ZunkaPost";
import { JsonLd } from "@/lib/jsonld";
import {
  absoluteAssetUrl,
  blogBreadcrumbLd,
  blogFaqLd,
  blogPostingLd,
  blogUrl,
  blogWebPageLd,
  butterChickenRecipeLd,
  chickenBiryaniRecipeLd,
  chickenTikkaMasalaRecipeLd,
  garamMasalaRecipeLd,
  getAllBlogSlugs,
  blogs,
  getBlog,
  itemListLdFromData,
  patodiSabjiRecipeLd,
  recipeLdFromData,
  saojiMasalaRecipeLd,
  saojiMuttonRecipeLd,
  saojiRestaurantsGuideLd,
  type BlogFaq,
} from "@/lib/blogs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

/** Body components for posts whose data lives in lib/blog-posts. */
const POST_BODIES: Record<string, ComponentType<{ faqs?: BlogFaq[] }>> = {
  "famous-food-of-nagpur": NagpurFoodPost,
  "saoji-chicken-recipe": SaojiChickenPost,
  "tarri-poha-recipe": TarriPohaPost,
  "sambar-vadi-recipe": SambarVadiPost,
  "saoji-egg-curry-recipe": SaojiEggCurryPost,
  "saoji-masala-vs-kolhapuri-vs-garam-masala": MasalaDifferencePost,
  "varhadi-vangyache-bharit-recipe": VangyacheBharitPost,
  "matki-usal-recipe": MatkiUsalPost,
  "aloo-baingan-sabji-recipe": AlooBainganPost,
  "zunka-recipe": ZunkaPost,
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) {
    return {
      title: "Blog not found",
      robots: { index: false, follow: false },
    };
  }

  const url = blogUrl(post.slug);
  const image = absoluteAssetUrl(post.ogImage);

  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: `${SITE_URL}/owner` }],
    creator: post.author,
    publisher: SITE_NAME,
    category: "food",
    alternates: { canonical: url },
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
      title: post.seoTitle,
      description: post.description,
      url,
      type: "article",
      publishedTime: `${post.publishedAt}T09:00:00+05:30`,
      modifiedTime: `${post.updatedAt}T09:00:00+05:30`,
      authors: [post.author],
      section: post.category,
      tags: post.keywords,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: image,
          alt: post.ogImageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [{ url: image, alt: post.ogImageAlt }],
    },
    other: {
      "article:published_time": `${post.publishedAt}T09:00:00+05:30`,
      "article:modified_time": `${post.updatedAt}T09:00:00+05:30`,
      "article:author": post.author,
      "article:section": post.category,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const faqLd = blogFaqLd(post);
  const recipeLd = post.recipe
    ? recipeLdFromData(post)
    : slug === "saoji-masala-recipe"
      ? saojiMasalaRecipeLd(post)
      : slug === "butter-chicken-recipe"
        ? butterChickenRecipeLd(post)
        : slug === "saoji-mutton-nagpur-recipe"
          ? saojiMuttonRecipeLd(post)
          : slug === "chicken-tikka-masala-recipe"
            ? chickenTikkaMasalaRecipeLd(post)
            : slug === "chicken-biryani-recipe"
              ? chickenBiryaniRecipeLd(post)
              : slug === "patodi-sabji-recipe"
                ? patodiSabjiRecipeLd(post)
                : slug === "how-to-make-garam-masala-at-home"
                  ? garamMasalaRecipeLd(post)
                  : null;
  const guideLd =
    slug === "top-3-saoji-restaurants-bhojnalay-nagpur"
      ? saojiRestaurantsGuideLd(post)
      : itemListLdFromData(post);
  const PostBody = POST_BODIES[slug];
  const schemas = [
    blogWebPageLd(post),
    blogPostingLd(post),
    blogBreadcrumbLd(post),
    ...(recipeLd ? [recipeLd] : []),
    ...(guideLd ? [guideLd] : []),
    ...(faqLd ? [faqLd] : []),
  ];

  return (
    <StoreShell>
      <JsonLd data={schemas} />
      <div className="mx-auto max-w-[900px] px-3 py-5 md:px-4 md:py-8">
        <nav className="mb-3 text-[12px] text-[#565959]" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-1.5">
            <li>
              <a href="/" className="text-link hover:text-link-hover hover:underline">
                Home
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/blogs" className="text-link hover:text-link-hover hover:underline">
                Blogs
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#0f1111]">{post.shortTitle}</li>
          </ol>
        </nav>

        <article className="amz-card p-4 md:p-8" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="datePublished" content={post.publishedAt} />
          <meta itemProp="dateModified" content={post.updatedAt} />
          <link itemProp="mainEntityOfPage" href={blogUrl(post.slug)} />

          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">
            {post.category}
          </p>
          <h1 className="mt-1 text-[26px] font-medium leading-tight md:text-[32px]" itemProp="name">
            {post.title}
          </h1>
          <p className="mt-2 text-[13px] text-[#565959]">
            By{" "}
            <Link
              href="/owner"
              className="text-link hover:text-link-hover hover:underline"
              itemProp="author"
            >
              {post.author}
            </Link>{" "}
            ·{" "}
            <time dateTime={post.publishedAt} itemProp="datePublished">
              {formatDate(post.publishedAt)}
            </time>{" "}
            · {post.readingMinutes} min read
          </p>
          <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[#565959]" itemProp="description">
            {post.description}
          </p>

          {post.featuredVideo ? (
            <div className="mt-6">
              <h2 className="mb-3 text-[16px] font-bold text-[#0f1111]">
                {post.featuredVideo.heading ?? "Watch the recipe"}
              </h2>
              <BlogFeaturedVideo
                src={post.featuredVideo.embedSrc}
                title={post.featuredVideo.title}
                width={post.featuredVideo.width}
                height={post.featuredVideo.height}
              />
            </div>
          ) : null}

          <div className="mt-8 border-t border-[#d5d9d9] pt-6" itemProp="articleBody">
            {slug === "top-3-saoji-restaurants-bhojnalay-nagpur" ? (
              <SaojiRestaurantsPost faqs={post.faqs} />
            ) : null}
            {slug === "saoji-masala-recipe" ? <SaojiMasalaPost faqs={post.faqs} /> : null}
            {slug === "butter-chicken-recipe" ? <ButterChickenPost faqs={post.faqs} /> : null}
            {slug === "saoji-mutton-nagpur-recipe" ? <SaojiMuttonPost faqs={post.faqs} /> : null}
            {slug === "chicken-tikka-masala-recipe" ? (
              <ChickenTikkaMasalaPost faqs={post.faqs} />
            ) : null}
            {slug === "chicken-biryani-recipe" ? <ChickenBiryaniPost faqs={post.faqs} /> : null}
            {slug === "patodi-sabji-recipe" ? <PatodiSabjiPost faqs={post.faqs} /> : null}
            {slug === "how-to-make-garam-masala-at-home" ? <GaramMasalaPost faqs={post.faqs} /> : null}
            {PostBody ? <PostBody faqs={post.faqs} /> : null}
            {/* Older posts don't render their own related list — link them to newer posts here. */}
            {PostBody ? null : <RelatedPosts slugs={relatedSlugs(post.slug, post.category)} />}
          </div>

          <div className="mt-10 border-t border-[#d5d9d9] pt-4">
            <Link
              href="/blogs"
              className="text-[13px] font-bold text-link hover:text-link-hover hover:underline"
            >
              ← All blogs
            </Link>
          </div>
        </article>
      </div>
    </StoreShell>
  );
}

/** Same-category posts first, then the newest others; never the post itself. */
function relatedSlugs(slug: string, category: string, limit = 4) {
  const others = blogs.filter((b) => b.slug !== slug);
  const same = others.filter((b) => b.category === category);
  const rest = others.filter((b) => b.category !== category);
  return [...same, ...rest].slice(0, limit).map((b) => b.slug);
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
