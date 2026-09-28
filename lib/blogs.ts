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
    heading?: string;
  };
};

export const blogs: BlogPost[] = [
  {
    slug: "patodi-sabji-recipe",
    title: "Patodi Sabji Recipe | Lata Special Saoji Masala",
    seoTitle: "Patodi Sabji Recipe at Home | Besan Patodi with Saoji Masala | Lata Special",
    shortTitle: "Patodi Sabji",
    description:
      "Easy Maharashtrian patodi sabji recipe from Lata Special. One glass besan, one glass cold water, garam masala and Lata Special Saoji Masala. Cook, cut strips, and finish in a rasedar gravy. Step-by-step Nagpur kitchen bhaji.",
    keywords: [
      "patodi sabji recipe",
      "patodi recipe",
      "Maharashtrian patodi",
      "besan patodi sabzi",
      "patodi rassa",
      "patodi bhaji",
      "Saoji Masala sabzi",
      "Lata Special patodi",
      "kala masala patodi",
      "gharachi patodi",
      "Marathi patodi recipe",
      "besan gravy sabzi Nagpur",
    ],
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    author: "Lata Linge",
    category: "Vegetarian Recipe",
    readingMinutes: 9,
    ogImage: OG_IMAGE,
    ogImageAlt: "Patodi sabji recipe with Lata Special Saoji Masala",
    faqs: [
      {
        question: "What is the besan-to-water ratio for patodi?",
        answer:
          "Use one glass besan and one glass cold water. That 1:1 measure is the perfect proportion. Hot water can lump the mix.",
      },
      {
        question: "Which masala goes in patodi sabji?",
        answer:
          "This recipe uses a little more than ½ tsp garam masala plus ¼ tsp Lata Special Saoji Masala in the batter, and more Saoji Masala in the kadhai gravy. It replaces gharacha kala masala.",
      },
      {
        question: "Why cook the besan mix on a low flame?",
        answer:
          "Low flame and constant stirring keep the mix from sticking. When it thickens and leaves the pan, spread it, cool, and cut into patodi strips.",
      },
      {
        question: "How do I make the sabji gravy?",
        answer:
          "Heat 3–4 tbsp oil, add tej patta, roast Lata Special Saoji Masala on a medium flame till the oil shows, add water, then slide in the patodi. Mix gently so the strips do not break.",
      },
      {
        question: "Can I use Lata Special Saoji Masala in other sabzis too?",
        answer:
          "Yes. Use it in aloo-baingan, wadi sabzi, and any rasedar gravy. The 250 g pack is ₹200. Delivery is Nagpur only.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020284219946",
      title: "Patodi Sabji Recipe video — Lata Special Saoji Masala",
      width: 600,
      height: 438,
      contentUrl: "https://www.pinterest.com/pin/963700020284219946/",
    },
  },
  {
    slug: "chicken-biryani-recipe",
    title: "Chicken Biryani Recipe | 1 kg Dum | Lata Special",
    seoTitle: "Chicken Biryani Recipe at Home | 1 kg Dum Biryani | Lata Special",
    shortTitle: "Chicken Biryani",
    description:
      "Perfect 1 kg chicken dum biryani recipe from Lata Special. Same-weight rice and chicken, fresh garam masala, ghee-oil marinade, 50% and 70% rice layers, 20-minute dum. Step-by-step homemade chicken biryani.",
    keywords: [
      "chicken biryani recipe",
      "1 kg chicken biryani",
      "chicken dum biryani recipe",
      "homemade chicken biryani",
      "chicken biryani at home",
      "basmati chicken biryani",
      "dum biryani recipe",
      "1 kilo chicken biryani",
      "Lata Special chicken biryani",
      "layered chicken biryani",
      "birista chicken biryani",
      "handi dum biryani",
    ],
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    author: "Lata Linge",
    category: "Chicken Recipe",
    readingMinutes: 14,
    ogImage: OG_IMAGE,
    ogImageAlt: "1 kg chicken dum biryani recipe — Lata Special",
    faqs: [
      {
        question: "How much rice do I use for 1 kg chicken biryani?",
        answer:
          "Use 1 kg long-grain basmati for the same weight as the chicken. If your family eats less rice, 750–800 g is also a good measure.",
      },
      {
        question: "How long should I soak basmati rice?",
        answer:
          "Wash two to three times, then soak at least 30 minutes. Forty-five minutes is better for long-grain basmati so the rice stays long and shiny.",
      },
      {
        question: "Why use a 2–3 kg handi for 1 kg biryani?",
        answer:
          "Marinade fills about half the pot and rice sits on top. A tight 1 kg handi leaves little room for steam. A 2–3 kg handi (about 2½ kg) lets dum circulate so both chicken and rice cook.",
      },
      {
        question: "Should I add ghee in the chicken marinade?",
        answer:
          "Yes. Use the same amount of ghee as oil — 150 ml each for this 1 kg pot. The mix makes the masala shine and keeps the chicken juicy.",
      },
      {
        question: "How do I cook the rice before dum?",
        answer:
          "Boil the first layer to about 50% (around 5 minutes) and the top layer to about 70% (around 15 minutes). The last 30% cooks on dum — 10 minutes high flame, then 10 minutes slow flame.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020284185393",
      title: "Chicken Biryani Recipe video — 1 kg dum | Lata Special",
      width: 345,
      height: 714,
      contentUrl: "https://www.pinterest.com/pin/963700020284185393/",
    },
  },
  {
    slug: "top-3-saoji-restaurants-bhojnalay-nagpur",
    title: "Top 3 Saoji Restaurants (Bhojnalay) in Nagpur | Lata Special",
    seoTitle: "Top 3 Saoji Restaurants (Bhojnalay) in Nagpur | Golibar Chowk | Lata Special",
    shortTitle: "Top 3 Saoji Bhojnalay",
    description:
      "Top 3 Saoji restaurants (bhojnalay) in Nagpur at Golibar Chowk — Ashok Saoji, Anand Saoji and Hotel Chaman Saoji. Prices, crowd, gravy and why each plate is famous. From Lata Special, Nagpur.",
    keywords: [
      "top 3 Saoji restaurants Nagpur",
      "Saoji bhojnalay Nagpur",
      "Golibar Chowk Saoji",
      "Ashok Saoji Bhojnalay",
      "Anand Saoji Nagpur",
      "Hotel Chaman Saoji",
      "best Saoji restaurant Nagpur",
      "Nagpur Saoji food",
      "Vidarbha Saoji bhojnalay",
      "Saoji mutton Nagpur restaurant",
      "Lata Special Saoji",
    ],
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    author: "Lata Linge",
    category: "Nagpur Guide",
    readingMinutes: 8,
    ogImage: OG_IMAGE,
    ogImageAlt: "Top 3 Saoji restaurants bhojnalay in Nagpur — Golibar Chowk",
    faqs: [
      {
        question: "Which are the top 3 Saoji bhojnalay in Nagpur?",
        answer:
          "Around Golibar Chowk, three names stand out: Ashok Saoji Bhojnalay, Anand Saoji Restaurant, and Hotel Chaman Saoji. All three are loved for real Nagpur Saoji taste.",
      },
      {
        question: "How much does a Saoji plate cost at these places?",
        answer:
          "Prices change, but in this visit Ashok Saoji was about ₹200 a full plate and ₹100 half. Hotel Chaman Saoji was about ₹250 a plate and ₹200 half. Some special plates go higher.",
      },
      {
        question: "Which Saoji restaurant is most trending in Nagpur?",
        answer:
          "Hotel Chaman Saoji is old and also trending now. Food bloggers come here because the gravy and every item feel unique, so demand stays high.",
      },
      {
        question: "Is Anand Saoji worth it even if the place is small?",
        answer:
          "Yes. The space is small, but the taste is strong. At lunch the crowd is heavy, which is a good sign in a Nagpur bhojnalay.",
      },
      {
        question: "Can I cook this Saoji taste at home?",
        answer:
          "Yes. Use Lata Special Saoji Masala — the 250 g pack is ₹200. It is homemade in Nagpur for usal, bhaji, mutton and gravies. Delivery is Nagpur only.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283826803",
      title: "Top 3 Saoji restaurants (bhojnalay) in Nagpur — Lata Special",
      width: 600,
      height: 850,
      contentUrl: "https://www.pinterest.com/pin/963700020283826803/",
      heading: "Watch the video",
    },
  },
  {
    slug: "saoji-masala-recipe",
    title: "Saoji Masala Recipe | Lata Special",
    seoTitle: "Saoji Masala Recipe at Home | 18 Spices Slow Roast | Lata Special",
    shortTitle: "Saoji Masala",
    description:
      "Easy homemade Saoji masala recipe from Lata Special, Nagpur. Slow-roast about 18 spices — coriander, poppy seeds, stone flower, jowar, wheat, rice and more — then cook turmeric, chilli, onion, garlic and ginger powder in oil. Step-by-step Vidarbha Saoji masala.",
    keywords: [
      "saoji masala recipe",
      "homemade saoji masala",
      "how to make saoji masala",
      "Nagpur saoji masala recipe",
      "saoji masala at home",
      "Vidarbha saoji masala",
      "18 spice saoji masala",
      "dagad phool masala recipe",
      "Lata Special Saoji Masala",
      "Maharashtrian saoji masala",
      "dry roast saoji masala",
      "saoji gravy masala",
    ],
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    author: "Lata Linge",
    category: "Masala Recipe",
    readingMinutes: 10,
    ogImage: OG_IMAGE,
    ogImageAlt: "Saoji masala recipe — Lata Special homemade Nagpur roast",
    faqs: [
      {
        question: "How many spices go into homemade Saoji masala?",
        answer:
          "This recipe uses about 18 kinds of spices. Whole coriander, poppy seeds, stone flower, chana dal, jowar, wheat, rice, cumin, fennel, black pepper, star anise, black cardamom, cloves, cinnamon, nutmeg, green cardamom and salt are dry-roasted. Then turmeric, red chilli, onion powder, garlic powder and ginger powder are cooked in oil.",
      },
      {
        question: "Why must I roast Saoji masala on a slow flame?",
        answer:
          "Slow flame is the whole secret. Fast heat burns spice and makes the masala bitter. Low heat gives a slightly dark colour and a deep smell — the taste Saoji gravy is known for.",
      },
      {
        question: "Can I use a mixer instead of pounding the masala?",
        answer:
          "Yes. The old way is to pound the roast by hand. If you do not have a pounding stone, cool the spices fully and grind them in a mixer. Do not grind while they are hot.",
      },
      {
        question: "What does Saoji gravy look like after this masala?",
        answer:
          "Classic Saoji gravy is a little dark, stays thin (not a thick korma), and tastes spicy. That is the Nagpur and Vidarbha style this masala is made for.",
      },
      {
        question: "I don't want to roast 18 spices. What can I use instead?",
        answer:
          "Use Lata Special Saoji Masala — the same Nagpur kitchen roast, already packed. It works in usal, bhaji, mutton and gravies. Delivery is Nagpur only.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283798871",
      title: "Saoji Masala Recipe video — Lata Special",
      width: 600,
      height: 700,
      contentUrl: "https://www.pinterest.com/pin/963700020283798871/",
    },
  },
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
      "Best Saoji mutton Nagpur recipe from Lata Special. Pressure-cooked mutton, flame-roasted onions, dry-roasted spices, and homemade Saoji Masala for true Vidarbha heat. Step-by-step spicy Saoji-style gravy with bhakri or rice.",
    keywords: [
      "saoji mutton recipe",
      "best saoji mutton Nagpur recipe",
      "Nagpur saoji mutton",
      "saoji mutton curry",
      "Vidarbha mutton recipe",
      "homemade saoji gravy",
      "Lata Special Saoji Masala mutton",
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
    ogImageAlt: "Best Saoji mutton Nagpur recipe — Lata Special Saoji Masala",
    faqs: [
      {
        question: "What makes Saoji mutton different from regular mutton curry?",
        answer:
          "Saoji-style Nagpur mutton is darker, spicier and more aromatic. Spices are dry-roasted separately, onions are often flame-roasted for smoke, and the gravy uses a bold roasted masala. Lata Special Saoji Masala brings that Nagpuri Saoji-style punch at home.",
      },
      {
        question: "Why finish Saoji mutton with Lata Special Saoji Masala?",
        answer:
          "The fresh roasted paste gives body; Lata Special Saoji Masala adds the authentic Saoji Masala Nagpur punch. It is homemade in Nagpur for usal, bhaji, mutton, and gravies — better than random shop packets.",
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
          "Bhakri, poli, fulka or steaming hot rice. Keep lemon and a pinch of Saoji Masala on the side if you want extra heat.",
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
  {
    slug: "chicken-tikka-masala-recipe",
    title: "Chicken Tikka Masala Recipe | Lata Special",
    seoTitle: "Chicken Tikka Masala Recipe at Home | Mild Boneless Gravy | Lata Special",
    shortTitle: "Chicken Tikka Masala",
    description:
      "Chicken tikka masala recipe from Lata Special — soft boneless chicken, mild onion-cashew gravy, dahi and tomato bhunao, butter finish with no cream. Easy murg handi lajeez-style curry at home.",
    keywords: [
      "chicken tikka masala recipe",
      "chicken tikka masala at home",
      "boneless chicken gravy recipe",
      "murg handi lajeez",
      "mild chicken curry recipe",
      "chicken tikka gravy",
      "homemade chicken tikka masala",
      "Lata Special chicken tikka",
      "onion cashew chicken gravy",
      "butter finish chicken curry without cream",
    ],
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    author: "Lata Linge",
    category: "Chicken Recipe",
    readingMinutes: 11,
    ogImage: OG_IMAGE,
    ogImageAlt: "Chicken tikka masala recipe — Lata Special mild boneless gravy",
    faqs: [
      {
        question: "Why cook boneless chicken separately for chicken tikka masala?",
        answer:
          "Boneless breast does not add bone flavour to the gravy and overcooks quickly. Cook it separately to about 80–90%, finish the gravy on its own, then combine so the chicken stays soft.",
      },
      {
        question: "How do I keep the gravy mild and not too spicy?",
        answer:
          "Use boiled onion-cashew paste, only a pinch of chilli and turmeric, and pull sweetness into the onion with ghee and a little sugar. This recipe is meant to be lajeez — balanced, not fiery.",
      },
      {
        question: "Do I need cream for a creamy chicken tikka gravy?",
        answer:
          "No. Creaminess comes from boiled onion, a few cashews, proper bhunao, and a small cube of butter at the end. Technique matters more than cream.",
      },
      {
        question: "Can vegetarians make this gravy?",
        answer:
          "Yes. Follow the same gravy and use paneer tikka instead of chicken. You can also use leftover mild malai or Afghani-style tikka in the finished gravy the next day.",
      },
      {
        question: "Breast or boneless leg — which is better?",
        answer:
          "Breast works if you do not overcook it. Boneless leg is also fine and is often more forgiving. Pull the meat off the heat before it is fully done.",
      },
    ],
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283769676",
      title: "Chicken Tikka Masala Recipe video — Lata Special",
      width: 600,
      height: 1167,
      contentUrl: "https://www.pinterest.com/pin/963700020283769676/",
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

export function patodiSabjiRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Patodi Sabji Recipe | Lata Special Saoji Masala",
    alternateName: [
      "Maharashtrian patodi",
      "Besan patodi sabzi",
      "Patodi rassa",
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
    prepTime: "PT15M",
    cookTime: "PT25M",
    totalTime: "PT40M",
    recipeYield: ["4 servings", "4"],
    recipeCategory: ["Main course", "Vegetarian", "Sabzi"],
    recipeCuisine: ["Indian", "Maharashtrian", "Nagpuri"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Stovetop",
    recipeIngredient: [
      "1 glass besan (gram flour)",
      "1 glass cold water",
      "Salt to taste",
      "A little more than ½ tsp garam masala",
      "¼ tsp Lata Special Saoji Masala (in the batter)",
      "3–4 tbsp oil",
      "2 tej patta (bay leaves)",
      "Optional 1 chopped tomato",
      "1–1½ tsp Lata Special Saoji Masala (for the gravy)",
      "Water for gravy",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Mix besan with cold water and masala",
        text: "Mix one glass besan with one glass cold water, salt, a little more than ½ tsp garam masala, and ¼ tsp Lata Special Saoji Masala until smooth.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Cook the mix on a low flame",
        text: "Cook on a low flame, stirring so it does not stick, until it thickens and leaves the pan. Spread on a greased plate, cool, and cut into strips.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Make the sabji gravy",
        text: "Heat 3–4 tbsp oil with tej patta. Roast Lata Special Saoji Masala on a medium flame till the oil shows. Add water, then the patodi. Mix gently and simmer.",
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
          inLanguage: "mr-IN",
        }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-IN",
  };
}

export function chickenBiryaniRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Chicken Biryani Recipe | 1 kg Dum | Lata Special",
    alternateName: [
      "1 kg chicken dum biryani",
      "Homemade chicken biryani",
      "Handi chicken biryani",
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
    prepTime: "PT60M",
    cookTime: "PT50M",
    totalTime: "PT110M",
    recipeYield: ["6 servings", "6"],
    recipeCategory: ["Main course", "Chicken", "Rice", "Biryani"],
    recipeCuisine: ["Indian", "Hyderabadi", "Mughlai"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Dum cooking",
    recipeIngredient: [
      "1 kg long-grain basmati rice (or 750–800 g)",
      "1 kg chicken, 30–40 g pieces",
      "10 g green cardamom",
      "2 cinnamon sticks",
      "10–12 cloves",
      "5–6 g shahjeera",
      "1 piece javitri (mace)",
      "Salt to taste",
      "Less than ½ tbsp turmeric",
      "1½ tbsp deggi chilli powder",
      "1 tsp spicy chilli powder",
      "50 g ginger-garlic paste",
      "Half bunch mint + same coriander, chopped",
      "5–6 green chillies",
      "150 ml oil",
      "150 ml ghee",
      "200 g fried onion (birista)",
      "300 g beaten dahi",
      "Juice of 3–4 lemons",
      "About ½ litre water for the marinade",
      "About 5 litres water to boil rice",
      "4–5 cardamom, 1 cinnamon, 1 javitri, 4–5 cloves, 5 g shahjeera for rice water",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Wash and soak rice",
        text: "Wash basmati two to three times. Soak 30–45 minutes.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Roast and grind garam masala",
        text: "Lightly roast cardamom, cinnamon, cloves, shahjeera and javitri. Cool and grind slightly coarse.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Marinate chicken",
        text: "In a 2–3 kg handi, mix chicken with salt, turmeric, deggi and spicy chilli, ginger-garlic, mint, coriander, green chillies, oil, ghee, birista and the fresh masala. Rest 10 minutes.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Add dahi, lemon and water",
        text: "Mix in whisked dahi and lemon juice. Loosen with about ½ litre water so the marinade is medium, not thick.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Parboil rice in two stages",
        text: "Boil rice in 5 litres salted water with whole spices. Lift the first layer at about 50% (5 minutes). Cook the rest to about 70% (15 minutes).",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Layer and dum",
        text: "Layer 50% rice on the raw marinade, then 70% rice, birista and coriander. Seal and dum 10 minutes high flame plus 10 minutes slow flame.",
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

export function saojiRestaurantsGuideLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);
  const places = [
    {
      name: "Ashok Saoji Bhojnalay",
      description:
        "One of Nagpur’s older Saoji bhojnalay at Golibar Chowk. Full plate about ₹200, half about ₹100. Known for strong non-veg and crisp cuts.",
    },
    {
      name: "Anand Saoji Restaurant",
      description:
        "A small Saoji restaurant with strong taste. Lunch time is crowded. People come for flavour, not a big hall.",
    },
    {
      name: "Hotel Chaman Saoji",
      description:
        "Old and now trending Saoji bhojnalay. Food bloggers film here. Full plate about ₹250, half about ₹200. Unique gravy; Hyderabadi chicken and homestyle plates too.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#restaurants`,
    name: post.title,
    description: post.description,
    image: [imageUrl],
    numberOfItems: places.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: places.map((place, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FoodEstablishment",
        name: place.name,
        description: place.description,
        servesCuisine: ["Saoji", "Maharashtrian", "Nagpuri"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Nagpur",
        },
      },
    })),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-IN",
  };
}

export function saojiMasalaRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Saoji Masala Recipe | Lata Special",
    alternateName: [
      "Homemade Saoji masala",
      "Nagpur Saoji masala",
      "Vidarbha Saoji spice mix",
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
    prepTime: "PT15M",
    cookTime: "PT45M",
    totalTime: "PT60M",
    recipeYield: ["1 homemade batch", "1"],
    recipeCategory: ["Spice mix", "Masala", "Indian condiment"],
    recipeCuisine: ["Indian", "Maharashtrian", "Nagpuri", "Saoji", "Vidarbha"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Slow dry roast and oil roast",
    recipeIngredient: [
      "300 g whole coriander seeds",
      "50 g poppy seeds (khuskhus)",
      "Stone flower (dagad phool), a small handful",
      "2–3 tbsp chana dal",
      "2–3 tbsp sorghum (jowar)",
      "2–3 tbsp wheat",
      "2–3 tbsp rice",
      "Cumin seeds",
      "Fennel seeds",
      "Black peppercorns",
      "Star anise",
      "Black cardamom",
      "Cloves",
      "Cinnamon",
      "Nutmeg",
      "Green cardamom",
      "Salt",
      "Oil for frying the powders",
      "Dry turmeric (halak)",
      "Red chilli powder",
      "Onion powder",
      "Garlic powder",
      "Ginger powder",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Roast coriander on a slow flame",
        text: "Roast 300 g whole coriander on a very low flame until it turns a little dark. Stir so it does not burn, then plate it.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Roast poppy seeds",
        text: "Roast 50 g poppy seeds on a slow flame until nutty. They burn quickly, so stay with the pan.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Briefly roast stone flower",
        text: "Roast stone flower (dagad phool) on a low flame, but not for long. Too much heat spoils its smell.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Roast dal, jowar, wheat and rice",
        text: "Roast about 2–3 tablespoons each of chana dal, jowar, wheat and rice together on a low flame until lightly cooked.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Lightly roast cumin, fennel and pepper",
        text: "Give cumin, fennel and black pepper only a short slow roast. Pepper turns harsh if cooked too long.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Add remaining whole spices",
        text: "Add star anise, black cardamom, cloves, cinnamon, nutmeg, green cardamom and salt one after another. Roast on a low flame until fragrant.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Cook powders in oil",
        text: "Heat oil. Roast dry turmeric, then red chilli until a little dark. Add onion powder, ginger powder and garlic powder. Cook on a low flame until the raw smell leaves.",
      },
      {
        "@type": "HowToStep",
        position: 8,
        name: "Cool and grind",
        text: "Cool fully, then pound or grind in a mixer to a fine dark powder. Store airtight in a cool, dry place.",
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
      "Lata Special Saoji Masala",
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
        name: "Build gravy with Saoji Masala",
        text: "Fry onion in oil, roast chilli powder and turmeric, add the paste and Lata Special Saoji Masala. Add optional whole garlic, then cooked mutton and mix well.",
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

export function chickenTikkaMasalaRecipeLd(post: BlogPost) {
  const url = blogUrl(post.slug);
  const imageUrl = absoluteAssetUrl(post.ogImage);

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${url}#recipe`,
    name: "Chicken Tikka Masala Recipe | Lata Special",
    alternateName: [
      "Murg tikka lajeez",
      "Murg handi lajeez",
      "Mild boneless chicken gravy",
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
    prepTime: "PT25M",
    cookTime: "PT40M",
    totalTime: "PT65M",
    recipeYield: ["4 servings", "4"],
    recipeCategory: ["Main course", "Chicken", "Indian curry"],
    recipeCuisine: ["Indian", "Mughlai", "North Indian"],
    keywords: post.keywords.join(", "),
    cookingMethod: "Stovetop",
    recipeIngredient: [
      "1 kg boneless chicken breast (or boneless leg), cut small",
      "Dahi (curd) for marinade; optional lemon",
      "3 thick-sliced onions",
      "4–5 cashews",
      "Ghee, salt, water; ½ tsp sugar while boiling onions",
      "Oil + ghee for gravy",
      "2 tejpatta, black cardamom, green cardamom",
      "Ginger-garlic paste",
      "Coriander powder, pinch turmeric, pinch red chilli",
      "About ½ cup dahi per 1 kg chicken",
      "Fresh tomato paste from about 1½ tomatoes",
      "Crushed black pepper",
      "Coriander stems",
      "Kasuri methi, pinch sugar to balance",
      "Small cube of butter to finish",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Marinate chicken",
        text: "Cut boneless chicken into small pieces and marinate in dahi (optional lemon) so it stays soft.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Boil onion-cashew paste",
        text: "Boil sliced onions and cashews with salt and ghee. Add ½ tsp sugar when half-done. Grind to a fine paste.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Part-cook chicken",
        text: "Cook marinated chicken separately to about 80–90% with light golden colour. Do not overcook breast.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Build mild gravy base",
        text: "Heat oil and ghee with whole spices, add ginger-garlic and onion-cashew paste. Mild powders only — remove raw ginger-garlic smell.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Dahi, pepper, tomato bhunao",
        text: "Add dahi, black pepper and tomato paste. Bhunao well with coriander stems. Add water only in the last few minutes.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Combine and finish with butter",
        text: "Add chicken, balance with a pinch of sugar and kasuri methi, finish with a small cube of butter. No cream needed.",
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
    about: post.category.toLowerCase().includes("recipe")
      ? { "@id": `${url}#recipe` }
      : { "@type": "Thing", name: post.shortTitle },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteAssetUrl(post.ogImage),
    },
    inLanguage: "en-IN",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  };
}
