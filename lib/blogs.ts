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
  {
    slug: "saoji-mutton-nagpur-recipe",
    title: "Best Saoji Mutton Nagpur Recipe | Lata Special",
    seoTitle: "Best Saoji Mutton Nagpur Recipe at Home | Spicy Vidarbha Gravy | Lata Special",
    shortTitle: "Saoji Mutton",
    description:
      "Best Saoji mutton Nagpur recipe from Lata Special. Pressure-cooked mutton, flame-roasted onions, dry-roasted spices, and homemade Kala Massala for true Vidarbha heat. Step-by-step spicy Saoji-style gravy with bhakri or rice.",
    keywords: [
      "saoji mutton recipe",
      "best saoji mutton Nagpur recipe",
      "Nagpur saoji mutton",
      "saoji mutton curry",
      "Vidarbha mutton recipe",
      "homemade saoji gravy",
      "Lata Special kala massala mutton",
      "spicy Nagpur mutton",
      "saoji style mutton at home",
      "Maharashtrian saoji mutton",
      "pressure cooker saoji mutton",
      "dagad phool mutton recipe",
    ],
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    author: "Lata Linge",
    category: "Mutton Recipe",
    readingMinutes: 14,
    ogImage: OG_IMAGE,
    ogImageAlt: "Best Saoji mutton Nagpur recipe — Lata Special Kala Massala",
    faqs: [
      {
        question: "What makes Saoji mutton different from regular mutton curry?",
        answer:
          "Saoji-style Nagpur mutton is darker, spicier and more aromatic. Spices are dry-roasted separately, onions are often flame-roasted for smoke, and the gravy uses a bold roasted masala. Lata Special Kala Massala brings that Nagpuri Saoji-style punch at home.",
      },
      {
        question: "Can I use Lata Special Kala Massala instead of packet Saoji masala?",
        answer:
          "Yes — that is what we recommend. For this recipe, finish the gravy with Lata Special Kala Massala instead of random shop Saoji packets. It is homemade in Nagpur for Nagpuri and Saoji-style gravies.",
      },
      {
        question: "How many pressure cooker whistles for the mutton?",
        answer:
          "About six to seven whistles for half a kilogram of mutton, or up to seven–eight if the pieces are larger. Always check that the meat is soft before you build the gravy.",
      },
      {
        question: "Why roast spices separately for Saoji mutton?",
        answer:
          "Small spices roast faster than coriander, coconut, chillies or poppy seeds. Roasting separately keeps everything fragrant and cooked through, which is important for Saoji-style flavour.",
      },
      {
        question: "What should I serve with Saoji mutton?",
        answer:
          "Bhakri, poli, fulka or steaming hot rice. Keep lemon and a pinch of Kala Massala on the side if you want extra heat.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283702181",
      title: "Best Saoji Mutton Nagpur Recipe video — Lata Special",
      width: 600,
      height: 999,
      contentUrl: "https://www.pinterest.com/pin/963700020283702181/",
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

export function saojiMuttonRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Best Saoji Mutton Nagpur Recipe | Lata Special",
    alternateName: [
      "Saoji mutton curry",
      "Nagpur Saoji mutton",
      "Vidarbha Saoji mutton gravy",
    ],
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
    prepTime: "PT30M",
    cookTime: "PT50M",
    totalTime: "PT80M",
    recipeYield: ["4 servings", "4"],
    recipeCategory: ["Main course", "Mutton", "Indian curry"],
    recipeCuisine: ["Indian", "Maharashtrian", "Nagpuri", "Saoji", "Vidarbha"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Pressure cooking and stovetop",
    recipeIngredient: [
      "½ kg mutton",
      "2–3 tbsp oil (for cooker) + 3–4 tbsp oil (for gravy)",
      "Bay leaf / tejpatta",
      "Green chilli, cinnamon, cloves, black peppercorns, green cardamom",
      "Chopped onion, ginger-garlic paste, turmeric, salt",
      "2 medium whole onions (flame-roasted)",
      "Star anise, nutmeg, black cardamom, fennel seeds, stone flower (dagad phool)",
      "Coriander seeds, dry grated coconut, poppy seeds, dry red chillies",
      "1 tbsp sorghum (jowar) flour",
      "½ tsp chana dal + ½ tsp rice",
      "1 cup coriander leaves, green chillies, ginger, garlic",
      "Lata Special Kala Massala",
      "Red chilli powder, turmeric",
      "Optional whole garlic cloves and lemon juice",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Temper and pressure-cook mutton",
        text: "Heat oil in a pressure cooker with bay leaf, chilli, cinnamon, cloves, peppercorns and cardamom. Add onion, ginger-garlic paste, turmeric and mutton. Mix 2–3 minutes, add salt and water, cook 6–7 whistles.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Flame-roast onions",
        text: "Roast two whole peeled onions on a low gas flame until soft, smoky and a spoon goes through easily.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Dry-roast spices separately",
        text: "Separately dry-roast whole spices, coriander seeds, coconut, poppy seeds and dry red chillies so each is cooked through and fragrant.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Roast sorghum flour, dal and rice",
        text: "Lightly roast sorghum flour, then chana dal with rice until lightly brown. Cool all roasted items.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Grind fresh paste",
        text: "Grind roasted spices with smoked onions, coriander leaves, green chillies, ginger and garlic to a fine paste.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Build gravy with Kala Massala",
        text: "Fry onion in oil, roast chilli powder and turmeric, add the paste and Lata Special Kala Massala. Add optional whole garlic, then cooked mutton and mix well.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Adjust water and steam",
        text: "Add water carefully for a classic thinner Saoji gravy, adjust salt, optional lemon, garnish with coriander, cover and steam 3–4 minutes.",
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
          inLanguage: "en-IN",
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
      { "@type": "Thing", name: post.shortTitle },
      { "@type": "Thing", name: post.category },
      { "@type": "Thing", name: "Indian recipe" },
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
