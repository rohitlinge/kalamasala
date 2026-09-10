import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Full browser/SERP title (no site template suffix). */
  seoTitle: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  readingMinutes: number;
  ogImage: string;
  ogImageAlt: string;
  faqs: BlogFaq[];
  featuredVideo?: {
    embedSrc: string;
    title: string;
    width: number;
    height: number;
    contentUrl?: string;
  };
};

export const blogs: BlogPost[] = [
  {
    slug: "butter-chicken-recipe",
    title: "Butter Chicken Recipe | Lata Special",
    seoTitle: "Butter Chicken Recipe at Home | Soft Chicken & Makhani Gravy | Lata Special",
    shortTitle: "Butter Chicken",
    description:
      "Easy homemade butter chicken recipe from Lata Special. Soft chicken cooked in makhani gravy, silky strained sauce, mustard oil finish and cold-smoke tandoori flavour — no separate tandoori chicken needed. Step-by-step Indian recipe.",
    keywords: [
      "butter chicken recipe",
      "butter chicken recipe at home",
      "homemade butter chicken",
      "makhani gravy recipe",
      "restaurant style butter chicken",
      "butter chicken without tandoori chicken",
      "chicken makhani recipe Indian",
      "Lata Special butter chicken",
      "best butter chicken gravy",
      "soft butter chicken recipe",
      "cold smoke butter chicken",
      "makhani chicken Nagpur",
    ],
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    author: "Lata Linge",
    category: "Chicken Recipe",
    readingMinutes: 12,
    ogImage: OG_IMAGE,
    ogImageAlt: "Butter chicken recipe — Lata Special homemade Indian gravy",
    faqs: [
      {
        question: "Do I need tandoori chicken for this butter chicken recipe?",
        answer:
          "No. In this Lata Special method the chicken cooks in the gravy itself, so you get butter chicken flavour and aroma without making tandoori chicken separately. A cold-smoke step with cinnamon and desi ghee adds the tandoori touch at the end.",
      },
      {
        question: "Which tomatoes should I use for makhani gravy?",
        answer:
          "Use hybrid or salad tomatoes, not desi tomatoes. Desi tomatoes are too sour and throw off the balance. Hybrid tomatoes with a little sugar give a smoother, restaurant-style gravy.",
      },
      {
        question: "Why are cashews important in butter chicken gravy?",
        answer:
          "About 50 g cashews make the makhani gravy rich and creamy. Without cashews, classic makhani gravy does not come out the same.",
      },
      {
        question: "How do I get silky smooth butter chicken gravy?",
        answer:
          "After grinding the cooked tomato-onion-cashew base, strain the paste well before cooking it again in butter. Straining removes any cashew bits so the gravy stays silky smooth.",
      },
      {
        question: "Can I skip the cold smoke step?",
        answer:
          "You can serve without it, but the cold smoke with a burnt cinnamon stick and desi ghee is what brings the tandoori-style smoke flavour into the gravy. It is the finishing trick that balances this recipe.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283687293",
      title: "Butter Chicken Recipe video — Lata Special",
      width: 600,
      height: 1167,
      contentUrl: "https://www.pinterest.com/pin/963700020283687293/",
    },
  },
];

export function getBlog(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}

export function blogUrl(slug: string) {
  return `${SITE_URL}/blogs/${slug}`;
}

export function absoluteAssetUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${encodeURI(path.startsWith("/") ? path : `/${path}`)}`;
}

export function butterChickenRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Butter Chicken Recipe | Lata Special",
    alternateName: ["Chicken Makhani", "Makhani Butter Chicken", "Homemade Butter Chicken"],
    description: post.description,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/owner`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteAssetUrl("/images/product/250g masala.png"),
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    prepTime: "PT20M",
    cookTime: "PT40M",
    totalTime: "PT60M",
    recipeYield: ["4 servings", "4"],
    recipeCategory: ["Main course", "Chicken", "Indian curry"],
    recipeCuisine: ["Indian", "North Indian", "Mughlai"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Stovetop slow cooking",
    recipeIngredient: [
      "Whole spices (khade masale)",
      "Garlic cloves",
      "1 onion",
      "About 5 hybrid / salad tomatoes (not desi)",
      "Salt to taste",
      "A little sugar (to balance tomato sourness)",
      "Kashmiri red chilli powder",
      "Fresh ginger",
      "Coriander stems (dhaniya ki danthein)",
      "2 green chillies",
      "Dry red chillies",
      "50 g cashews (kaju)",
      "Chicken leg pieces with deep cuts",
      "Butter (makkhan)",
      "1 tbsp ginger-garlic paste",
      "1 tbsp Kashmiri red chilli powder (for finishing)",
      "1/4 tsp turmeric powder",
      "Garam masala",
      "Roasted kasuri methi",
      "1/2 tsp cardamom (elaichi) powder",
      "2 tsp tomato ketchup or honey",
      "About 1 cup hot water (to loosen gravy)",
      "Cream or milk malai",
      "1 tbsp raw mustard oil (sarson ka tel)",
      "1 cinnamon stick + desi ghee (for cold smoke)",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Light roast whole spices",
        text: "In a kadhai, lightly roast whole spices, garlic and one onion — only enough to remove rawness, not a heavy bhunao.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add tomatoes and masala",
        text: "Add about 5 hybrid tomatoes, salt, a little sugar, Kashmiri red chilli, ginger, coriander stems, 2 green chillies, dry red chillies and 50 g cashews. Roast until tomatoes are lightly soft.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Cook chicken in the base",
        text: "Add cut chicken leg pieces with a little butter. Bhunao with the tomato-onion mix for 3–4 minutes so flavour goes inside the chicken.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Slow cook covered",
        text: "Add up to one cup water, cover, and cook on medium-low flame for 10 minutes so chicken releases gelatin and spices leave their flavour.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Separate chicken and grind gravy",
        text: "Remove chicken and set aside. Remove badi elaichi and tejpatta; keep chhoti elaichi. Cool the gravy, grind to a fine paste, then strain for a silky texture.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Finish makhani gravy in lagan",
        text: "In a lagan, heat oil and butter, roast ginger-garlic paste, add Kashmiri chilli and 1/4 tsp turmeric. Add strained paste (no water) and cook covered 10 minutes on medium-low, stirring once.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Return chicken and balance",
        text: "Add chicken back with garam masala, roasted kasuri methi and 1/2 tsp elaichi powder. Balance with ketchup or honey, then loosen with about one cup hot water if needed.",
      },
      {
        "@type": "HowToStep",
        position: 8,
        name: "Cream, mustard oil and cold smoke",
        text: "Mix in cream or malai and 1 tbsp raw mustard oil. Cold-smoke with a burnt cinnamon stick and desi ghee for tandoori-style flavour.",
      },
    ],
    video: post.featuredVideo
      ? {
          "@type": "VideoObject",
          name: post.featuredVideo.title,
          description: post.description,
          thumbnailUrl: [imageUrl],
          uploadDate: post.publishedAt,
          contentUrl: post.featuredVideo.contentUrl ?? post.featuredVideo.embedSrc,
          embedUrl: post.featuredVideo.embedSrc,
          inLanguage: "hi-IN",
        }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-IN",
  };
}

export function blogPostingLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    alternativeHeadline: post.seoTitle,
    description: post.description,
    image: [imageUrl],
    datePublished: `${post.publishedAt}T09:00:00+05:30`,
    dateModified: `${post.updatedAt}T09:00:00+05:30`,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/owner`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteAssetUrl("/images/product/250g masala.png"),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
    articleSection: post.category,
    wordCount: Math.round(post.readingMinutes * 200),
    timeRequired: `PT${post.readingMinutes}M`,
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Butter chicken" },
      { "@type": "Thing", name: "Makhani gravy" },
      { "@type": "Thing", name: "Indian chicken recipe" },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p"],
    },
  };
}

export function blogBreadcrumbLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${blogUrl(post.slug)}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.shortTitle,
        item: blogUrl(post.slug),
      },
    ],
  };
}

export function blogFaqLd(post: BlogPost) {
  if (!post.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${blogUrl(post.slug)}#faq`,
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function blogWebPageLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: post.seoTitle,
    description: post.description,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: { "@id": `${url}#recipe` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteAssetUrl(post.ogImage),
    },
    inLanguage: "en-IN",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  };
}
