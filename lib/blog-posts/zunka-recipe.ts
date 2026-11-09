import type { BlogPost } from "@/lib/blogs";
import { OG_IMAGE } from "@/lib/site";

export const zunka: BlogPost = {
  slug: "zunka-recipe",
  title: "Zunka Recipe | Dry Kanda Zunka with Jowar Bhakri | Lata Special",
  seoTitle: "Zunka Recipe | Kanda Zunka Bhakar, Maharashtrian Dry Besan Sabzi | Lata Special",
  shortTitle: "Zunka",
  description:
    "Easy Maharashtrian zunka recipe from a Nagpur kitchen. Garlic–green chilli phodni, lots of onion, besan sprinkled in and steamed till dry and crumbly. Kanda zunka bhakar in 20 minutes, plus the zunka vs pithla difference.",
  keywords: [
    "zunka recipe",
    "zunka bhakar",
    "kanda zunka",
    "zunka recipe in marathi",
    "झुणका भाकर",
    "झुणका रेसिपी",
    "dry besan sabzi",
    "maharashtrian zunka",
    "zunka vs pithla",
    "besan onion sabzi",
    "vidarbha zunka",
    "zunka with saoji masala",
  ],
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  author: "Lata Linge",
  category: "Vegetarian Recipe",
  readingMinutes: 7,
  ogImage: OG_IMAGE,
  ogImageAlt: "Dry kanda zunka with jowar bhakri — Maharashtrian besan sabzi",
  faqs: [
    {
      question: "What is the difference between zunka and pithla?",
      answer:
        "Both are made with besan, but pithla is wet and pourable — besan is mixed into water and cooked to a thick, soft gravy. Zunka is dry and crumbly — besan is sprinkled over a phodni of onion and steamed with very little water. Pithla is eaten with rice or bhakri; zunka is the classic partner of jowar bhakri.",
    },
    {
      question: "How do I stop zunka from becoming lumpy?",
      answer:
        "Sprinkle the besan slowly with one hand while you stir with the other, and keep the flame low. Lightly dry-roasting the besan first also helps it stay crumbly. Add water only as a sprinkle, never all at once.",
    },
    {
      question: "How much besan and onion for zunka?",
      answer:
        "For 3–4 people use 1 cup besan (about 100 g) with 2 medium onions. Some kanda zunka uses 3 onions for a sweeter, softer zunka. Use about ¼ cup water in total, sprinkled in two or three rounds.",
    },
    {
      question: "Is zunka bhakar healthy?",
      answer:
        "Zunka is made from besan (gram flour), which is a source of plant protein, and jowar bhakri is a whole-grain flatbread. It is a simple, filling farm meal. Keep the oil moderate if you are watching fat.",
    },
    {
      question: "Can I add Saoji masala to zunka?",
      answer:
        "Yes. For a Vidarbha-style zunka, add ½ tsp Lata Special Saoji Masala to the onion just before the besan goes in. It gives a darker colour and roasted taste. Keep the green chilli a little less, because the masala adds heat.",
    },
    {
      question: "Where can I buy Lata Special Saoji Masala?",
      answer:
        "Order online on this site. The 250 g pack is ₹200, 500 g ₹400, 1 kg ₹800 and 2 kg ₹1600. It is homemade in Nagpur and delivered only within Nagpur.",
    },
  ],
  recipe: {
    name: "Kanda Zunka (Maharashtrian Dry Besan Sabzi)",
    alternateName: ["Zunka bhakar", "Kanda zunka", "Dry besan zunka"],
    prepTime: "PT10M",
    cookTime: "PT15M",
    totalTime: "PT25M",
    recipeYield: ["3–4 servings", "4"],
    recipeCategory: ["Main course", "Vegetarian", "Sabzi"],
    recipeCuisine: ["Indian", "Maharashtrian", "Vidarbha"],
    cookingMethod: "Stovetop",
    ingredients: [
      "1 cup besan (gram flour), about 100 g",
      "2 medium onions, finely chopped",
      "8–10 garlic cloves, crushed",
      "3–4 green chillies, crushed",
      "4 tbsp oil",
      "½ tsp mustard seeds",
      "½ tsp cumin seeds",
      "A pinch of hing (asafoetida)",
      "8 curry leaves",
      "¼ tsp turmeric",
      "Salt to taste",
      "About ¼ cup water, sprinkled",
      "Chopped coriander",
      "Optional ½ tsp Lata Special Saoji Masala",
    ],
    steps: [
      {
        name: "Dry-roast the besan",
        text: "Roast 1 cup besan in a dry pan on low flame for 3–4 minutes, stirring, till it smells nutty but does not change colour. Keep aside.",
      },
      {
        name: "Make the garlic–chilli phodni",
        text: "Heat 4 tbsp oil. Add mustard seeds, cumin, hing and curry leaves. Add crushed garlic and green chillies and fry till the garlic is light golden.",
      },
      {
        name: "Soften the onion",
        text: "Add the chopped onion, turmeric and salt. Fry on medium flame 3–4 minutes till soft and translucent. Add optional Saoji Masala and fry 20 seconds.",
      },
      {
        name: "Sprinkle in the besan",
        text: "Lower the flame. Sprinkle the besan slowly over the onion while stirring, till all the onion is coated and the mix looks like coarse crumbs.",
      },
      {
        name: "Sprinkle water and steam",
        text: "Sprinkle about 2 tbsp water, mix, cover and cook 2 minutes. Repeat once or twice till the besan is cooked, dry and crumbly — 6–8 minutes in all.",
      },
      {
        name: "Finish and serve",
        text: "Uncover, cook 1 minute to dry any moisture, add coriander and serve hot with jowar bhakri, raw onion and thecha.",
      },
    ],
  },
};
