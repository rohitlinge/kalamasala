import type { BlogPost } from "@/lib/blogs";
import { OG_IMAGE } from "@/lib/site";

export const tarriPoha: BlogPost = {
  slug: "tarri-poha-recipe",
  title: "Tarri Poha Recipe | Nagpur Style Poha with Chana Tarri | Lata Special",
  seoTitle: "Tarri Poha Recipe at Home | Nagpuri Poha with Spicy Chana Tarri | Lata Special",
  shortTitle: "Tarri Poha",
  description:
    "Nagpur tarri poha recipe from Lata Special. Soft kanda poha topped with a thin, spicy kala chana tarri made with Saoji Masala, then onion, sev, coriander and lemon. The famous Nagpuri street breakfast, step by step at home.",
  keywords: [
    "tarri poha recipe",
    "tarri poha",
    "tarri poha nagpur",
    "nagpuri tarri poha",
    "poha with chana tarri",
    "chana tarri recipe",
    "nagpur style poha",
    "tari poha recipe",
    "tarri poha recipe in marathi",
    "spicy poha with chana curry",
    "kala chana rassa for poha",
    "Lata Special tarri poha",
  ],
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  author: "Lata Linge",
  category: "Breakfast Recipe",
  readingMinutes: 9,
  ogImage: OG_IMAGE,
  ogImageAlt: "Nagpur tarri poha with spicy kala chana tarri, onion and sev",
  faqs: [
    {
      question: "What is tarri poha?",
      answer:
        "Tarri poha is a Nagpur breakfast: soft kanda poha in a plate, with a ladle of thin, spicy kala chana gravy (tarri) poured on top, finished with raw onion, sev, coriander and lemon. The word tarri means the red spiced oil that floats on the gravy.",
    },
    {
      question: "Which chana is used for tarri poha?",
      answer:
        "Use small black chana (kala chana). Soak it overnight and pressure cook till soft but whole. Some homes use white vatana (dried peas) instead — the method stays the same.",
    },
    {
      question: "Which poha is best for tarri poha?",
      answer:
        "Use thick (jada) poha. Thin poha turns mushy under hot tarri. Rinse it in a strainer, do not soak it in a bowl, and let it rest 5 minutes so it softens evenly.",
    },
    {
      question: "How do I get the oily red layer on the tarri?",
      answer:
        "Fry the onion-garlic paste and Saoji Masala in enough oil till the oil separates, and only then add chana and water. Simmer, then rest 5 minutes — the red tarri rises to the top on its own. Do not add food colour.",
    },
    {
      question: "Can I make the chana tarri a day ahead?",
      answer:
        "Yes. The tarri tastes even better the next day. Keep it in the fridge, boil it with a splash of water before serving, and make the poha fresh in the morning.",
    },
    {
      question: "Where can I buy Saoji Masala for tarri in Nagpur?",
      answer:
        "Lata Special Saoji Masala is homemade in Nagpur. 250 g is ₹200, 500 g is ₹400, 1 kg is ₹800 and 2 kg is ₹1600. Order on this site — delivery is Nagpur only.",
    },
  ],
  recipe: {
    name: "Tarri Poha (Nagpur Style Poha with Chana Tarri)",
    alternateName: ["Nagpuri tarri poha", "Tari poha", "Poha with kala chana tarri"],
    prepTime: "PT20M",
    cookTime: "PT40M",
    totalTime: "PT60M",
    recipeYield: ["4 plates", "4"],
    recipeCategory: ["Breakfast", "Street food", "Snack"],
    recipeCuisine: ["Indian", "Maharashtrian", "Nagpuri"],
    cookingMethod: "Stovetop and pressure cooker",
    ingredients: [
      "1 cup kala chana (black chickpeas), soaked overnight",
      "1 large onion, sliced, plus 1 onion finely chopped for topping",
      "2 tbsp grated dry coconut (khobra)",
      "8–10 garlic cloves and 1-inch ginger",
      "5 tbsp oil for the tarri",
      "1 tej patta (bay leaf)",
      "2 tbsp Lata Special Saoji Masala",
      "3–4 cups hot water and salt for the tarri",
      "3 cups thick poha (flattened rice)",
      "2 tbsp oil, 1 tsp mustard seeds, 10–12 curry leaves, 2 green chillies for the poha",
      "2 medium onions, chopped, for the poha",
      "½ tsp turmeric, salt and ½ tsp sugar for the poha",
      "Fine sev, chopped coriander and lemon wedges to serve",
    ],
    steps: [
      {
        name: "Cook the kala chana",
        text: "Drain the soaked chana and pressure cook with salt and 2 cups water for 5–6 whistles till soft but whole. Keep the cooking water.",
      },
      {
        name: "Roast and grind the tarri paste",
        text: "In 1 tsp oil roast sliced onion till deep brown, add garlic, ginger and dry coconut and roast till dark golden. Cool and grind with a little water.",
      },
      {
        name: "Make the chana tarri",
        text: "Heat 5 tbsp oil with tej patta, fry the paste 4–5 minutes, add 2 tbsp Saoji Masala with a splash of water and fry till oil separates. Add chana, its water and 2–3 cups hot water. Simmer 15 minutes till thin and red oil floats.",
      },
      {
        name: "Rinse the poha",
        text: "Rinse 3 cups thick poha in a strainer under running water, sprinkle salt, turmeric and sugar, mix lightly and rest 5 minutes.",
      },
      {
        name: "Cook the kanda poha",
        text: "Heat 2 tbsp oil, splutter mustard seeds, add curry leaves, green chilli and chopped onion. Cook till soft, add the poha, mix, cover and steam 2–3 minutes on low flame.",
      },
      {
        name: "Assemble the tarri poha",
        text: "Put poha on a plate, pour a ladle of hot chana tarri with its red oil on top, then add raw onion, sev, coriander and a squeeze of lemon. Serve at once.",
      },
    ],
  },
};
