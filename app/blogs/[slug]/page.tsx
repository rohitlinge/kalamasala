import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoreShell from "@/components/StoreShell";
import BlogFeaturedVideo from "@/components/blogs/BlogFeaturedVideo";
import ButterChickenPost from "@/components/blogs/ButterChickenPost";
import { JsonLd } from "@/lib/jsonld";
import { getAllBlogSlugs, getBlog } from "@/lib/blogs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return { title: "Blog not found" };

  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      siteName: SITE_NAME,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blogs/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/owner`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
    articleSection: post.category,
  };

  const recipeLd =
    slug === "butter-chicken-recipe"
      ? {
          "@context": "https://schema.org",
          "@type": "Recipe",
          name: "Butter Chicken Recipe | Lata Special",
          description: post.description,
          author: { "@type": "Person", name: post.author },
          datePublished: post.publishedAt,
          prepTime: "PT20M",
          cookTime: "PT40M",
          totalTime: "PT60M",
          recipeYield: "4 servings",
          recipeCategory: "Main course",
          recipeCuisine: "Indian",
          keywords: post.keywords.join(", "),
          recipeIngredient: [
            "Whole spices (khade masale)",
            "Garlic",
            "1 onion",
            "About 5 hybrid / salad tomatoes",
            "Salt",
            "A little sugar",
            "Kashmiri red chilli",
            "Ginger",
            "Coriander stems",
            "2 green chillies",
            "Dry red chillies",
            "50 g cashews",
            "Chicken leg pieces with cuts",
            "Butter",
            "Ginger-garlic paste",
            "Turmeric (1/4 tsp)",
            "Garam masala",
            "Kasuri methi (roasted)",
            "Cardamom powder (1/2 tsp)",
            "Tomato ketchup or honey",
            "Cream or milk malai",
            "1 tbsp raw mustard oil",
            "Cinnamon stick + desi ghee (for cold smoke)",
          ],
          recipeInstructions: [
            {
              "@type": "HowToStep",
              text: "Lightly roast whole spices, garlic and onion in a kadhai — only to remove rawness.",
            },
            {
              "@type": "HowToStep",
              text: "Add hybrid tomatoes, salt, sugar, Kashmiri chilli, ginger, coriander stems, green and dry red chillies, and 50 g cashews. Roast until tomatoes are lightly soft.",
            },
            {
              "@type": "HowToStep",
              text: "Add cut chicken leg pieces with a little butter. Bhunao 3–4 minutes with the tomato mix.",
            },
            {
              "@type": "HowToStep",
              text: "Add one cup water, cover, and cook 10 minutes on medium-low flame.",
            },
            {
              "@type": "HowToStep",
              text: "Remove chicken. Discard badi elaichi and tejpatta; keep chhoti elaichi. Cool gravy and grind to a fine paste; strain.",
            },
            {
              "@type": "HowToStep",
              text: "In a lagan, heat oil and butter, roast ginger-garlic paste, add Kashmiri chilli and a pinch of turmeric. Add strained paste and cook covered 10 minutes on medium-low.",
            },
            {
              "@type": "HowToStep",
              text: "Return chicken; add garam masala, roasted kasuri methi, elaichi powder, and ketchup or honey. Loosen with hot water if needed.",
            },
            {
              "@type": "HowToStep",
              text: "Finish with cream or malai, raw mustard oil, and cold-smoke with cinnamon and desi ghee.",
            },
          ],
        }
      : null;

  return (
    <StoreShell>
      <JsonLd data={articleLd} />
      {recipeLd ? <JsonLd data={recipeLd} /> : null}
      <div className="mx-auto max-w-[900px] px-3 py-5 md:px-4 md:py-8">
        <nav className="mb-3 text-[12px] text-[#565959]" aria-label="Breadcrumb">
          <a href="/" className="text-link hover:text-link-hover hover:underline">
            Home
          </a>
          <span className="mx-1.5">›</span>
          <Link href="/blogs" className="text-link hover:text-link-hover hover:underline">
            Blogs
          </Link>
          <span className="mx-1.5">›</span>
          <span className="text-[#0f1111]">{post.shortTitle}</span>
        </nav>

        <div className="amz-card p-4 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">
            {post.category}
          </p>
          <h1 className="mt-1 text-[26px] font-medium leading-tight md:text-[32px]">{post.title}</h1>
          <p className="mt-2 text-[13px] text-[#565959]">
            By{" "}
            <Link href="/owner" className="text-link hover:text-link-hover hover:underline">
              {post.author}
            </Link>{" "}
            · {formatDate(post.publishedAt)} · {post.readingMinutes} min read
          </p>
          <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[#565959]">{post.description}</p>

          {post.featuredVideo ? (
            <div className="mt-6">
              <h2 className="mb-3 text-[16px] font-bold text-[#0f1111]">Watch the recipe</h2>
              <BlogFeaturedVideo
                src={post.featuredVideo.embedSrc}
                title={post.featuredVideo.title}
                width={post.featuredVideo.width}
                height={post.featuredVideo.height}
              />
            </div>
          ) : null}

          <div className="mt-8 border-t border-[#d5d9d9] pt-6">
            {slug === "butter-chicken-recipe" ? <ButterChickenPost /> : null}
          </div>

          <div className="mt-10 border-t border-[#d5d9d9] pt-4">
            <Link
              href="/blogs"
              className="text-[13px] font-bold text-link hover:text-link-hover hover:underline"
            >
              ← All blogs
            </Link>
          </div>
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
