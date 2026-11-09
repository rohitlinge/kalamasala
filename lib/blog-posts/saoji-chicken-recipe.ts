import type { BlogPost } from "@/lib/blogs";
import { OG_IMAGE } from "@/lib/site";

export const saojiChicken: BlogPost = {
  slug: "saoji-chicken-recipe",
  title: "Saoji Chicken Recipe | Nagpur Style Chicken Rassa | Lata Special",
  seoTitle: "Saoji Chicken Recipe at Home | Spicy Nagpuri Chicken Rassa | Lata Special",
  shortTitle: "Saoji Chicken",
  description:
    "Nagpur-style Saoji chicken recipe from Lata Special. Roasted onion-coconut-garlic paste, Saoji Masala fried till the oil floats, and a thin, fiery black chicken rassa with tarri on top. 1 kg chicken, step by step, with heat control tips.",
  keywords: [
    "saoji chicken recipe",
    "saoji chicken",
    "nagpuri saoji chicken",
    "saoji chicken rassa",
    "nagpur style chicken curry",
    "spicy chicken rassa",
    "black chicken curry nagpur",
    "saoji chicken gravy",
    "saoji chicken at home",
    "vidarbha chicken curry",
    "chicken with saoji masala",
    "Lata Special saoji chicken",
  ],
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  author: "Lata Linge",
  category: "Chicken Recipe",
  readingMinutes: 10,
  ogImage: OG_IMAGE,
  ogImageAlt: "Nagpur style Saoji chicken rassa made with Lata Special Saoji Masala",
  faqs: [
    {
      question: "How much Saoji masala for 1 kg chicken?",
      answer:
        "Use 3 tablespoons Lata Special Saoji Masala for medium heat and 4 tablespoons for full Nagpur bhojnalay heat. Add 1 teaspoon more to the marinade. Start lower the first time — Saoji Masala is already hot.",
    },
    {
      question: "Why is Saoji chicken gravy dark or black?",
      answer:
        "The colour comes from slow-roasted spices, dry coconut (khobra) and onion roasted till deep brown, and Saoji Masala fried in oil till it darkens. There is no food colour in real Saoji chicken.",
    },
    {
      question: "What is tarri in Saoji chicken?",
      answer:
        "Tarri (or tari) is the layer of red-black spiced oil that floats on top of Saoji rassa. It forms when the masala is fried well in plenty of oil before water goes in. In Nagpur people pour extra tarri over rice or bhakri.",
    },
    {
      question: "How is Saoji chicken different from Kolhapuri chicken?",
      answer:
        "Saoji chicken from Nagpur has a thin, oily, very dark rassa with a deep roasted-spice taste. Kolhapuri chicken uses a redder Kolhapuri masala with more chilli and is usually served with tambda and pandhra rassa. Both are hot, but they taste different.",
    },
    {
      question: "Can I make Saoji chicken less spicy?",
      answer:
        "Yes. Use 2 tablespoons Saoji Masala for 1 kg chicken, skip extra red chilli, and add a little more roasted coconut to the paste. The flavour stays Saoji; only the heat drops.",
    },
    {
      question: "Where can I buy Saoji masala in Nagpur?",
      answer:
        "Lata Special Saoji Masala is homemade in Nagpur. The 250 g pack is ₹200, 500 g is ₹400 and 1 kg is ₹800. Order online on this site — delivery is Nagpur only.",
    },
  ],
  recipe: {
    name: "Saoji Chicken (Nagpur Style Chicken Rassa)",
    alternateName: ["Nagpuri Saoji chicken", "Saoji chicken rassa", "Spicy Nagpur chicken curry"],
    prepTime: "PT30M",
    cookTime: "PT45M",
    totalTime: "PT75M",
    recipeYield: ["4–5 servings", "5"],
    recipeCategory: ["Main course", "Chicken", "Curry"],
    recipeCuisine: ["Indian", "Maharashtrian", "Saoji", "Nagpuri"],
    cookingMethod: "Stovetop",
    ingredients: [
      "1 kg chicken, curry cut with bone",
      "½ tsp turmeric, salt, 1 tsp ginger-garlic paste and 1 tsp Lata Special Saoji Masala (marinade)",
      "2 large onions, sliced",
      "¼ cup grated dry coconut (khobra)",
      "15–18 garlic cloves",
      "2-inch piece ginger",
      "A small handful coriander leaves and stems",
      "6–7 tbsp oil",
      "2 tej patta (bay leaves)",
      "3–4 tbsp Lata Special Saoji Masala",
      "3–4 cups hot water",
      "Salt to taste",
    ],
    steps: [
      {
        name: "Marinate the chicken",
        text: "Wash and drain 1 kg chicken. Rub with turmeric, salt, ginger-garlic paste and 1 tsp Saoji Masala. Rest 20–30 minutes.",
      },
      {
        name: "Roast and grind the wet paste",
        text: "In 1 tbsp oil roast sliced onions till deep brown. Add garlic, ginger and dry coconut and roast till the coconut is dark golden. Cool and grind with coriander and a little water.",
      },
      {
        name: "Fry the paste and Saoji Masala",
        text: "Heat 5–6 tbsp oil with tej patta. Fry the paste 5–7 minutes. Add 3–4 tbsp Saoji Masala with a splash of water and fry on medium flame till oil separates.",
      },
      {
        name: "Fry the chicken",
        text: "Add the marinated chicken and fry on high flame 8–10 minutes, stirring, till it is coated and the masala clings.",
      },
      {
        name: "Make the thin rassa",
        text: "Pour 3–4 cups hot water, add salt, cover and simmer 20–25 minutes till the chicken is soft and red-black tarri floats on top.",
      },
      {
        name: "Rest and serve",
        text: "Rest 5 minutes, finish with coriander, and serve with bhakri, chapati or hot rice, onion and lemon.",
      },
    ],
  },
};
