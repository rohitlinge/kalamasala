import type { BlogPost } from "@/lib/blogs";
import { OG_IMAGE } from "@/lib/site";

export const matkiUsal: BlogPost = {
  slug: "matki-usal-recipe",
  title: "Matki Usal Recipe | Sprouted Moth Bean Usal with Saoji Masala | Lata Special",
  seoTitle: "Matki Usal Recipe | Matki Chi Usal with Saoji Masala (Sukhi & Rassa) | Lata Special",
  shortTitle: "Matki Usal",
  description:
    "Matki usal recipe from Lata Special, Nagpur. How to sprout matki at home, then cook a spicy sukhi usal or a rassa usal with Lata Special Saoji Masala. Also works as the base for misal pav.",
  keywords: [
    "matki usal recipe",
    "matki chi usal",
    "matki usal",
    "sprouted moth bean curry",
    "moth bean sprouts recipe",
    "how to sprout matki",
    "matki rassa usal",
    "sukhi matki usal",
    "matki ki sabzi",
    "maharashtrian usal recipe",
    "usal for misal",
    "Saoji Masala usal",
  ],
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  author: "Lata Linge",
  category: "Vegetarian Recipe",
  readingMinutes: 9,
  ogImage: OG_IMAGE,
  ogImageAlt: "Matki usal made with sprouted moth beans and Lata Special Saoji Masala",
  faqs: [
    {
      question: "How do I sprout matki at home?",
      answer:
        "Wash 1 cup matki and soak it in plenty of water for 8–10 hours. Drain fully, tie it in a damp cotton cloth or keep it in a closed box, and leave it in a warm corner for 12–24 hours till small white tails appear.",
    },
    {
      question: "Do I need to pressure cook matki for usal?",
      answer:
        "No. Sprouted matki cooks in the kadhai in 10–15 minutes with a little water. If you want it very soft, give it one whistle in a pressure cooker, but do not overcook or the sprouts turn mushy.",
    },
    {
      question: "What is the difference between sukhi usal and rassa usal?",
      answer:
        "Sukhi usal is a dry stir-fry where the water dries up and the masala coats the sprouts. Rassa usal has a thin spicy gravy, so it can be eaten with pav or bhakri or used as the base for misal.",
    },
    {
      question: "Which masala is best for matki usal?",
      answer:
        "A spicy base masala that is fried in oil — Saoji masala or kala masala. Use about 1½ tablespoons Lata Special Saoji Masala for 2 cups of sprouts in rassa usal and 1 tablespoon for sukhi usal.",
    },
    {
      question: "Can I make misal from this matki usal?",
      answer:
        "Yes. Make the rassa version with extra water and oil so a red tarri forms. Serve usal in a bowl, pour the thin tarri on top, and add farsan, chopped onion, coriander and lemon with pav.",
    },
    {
      question: "Where can I buy Saoji masala for usal in Nagpur?",
      answer:
        "Lata Special Saoji Masala is homemade in Nagpur. The 250 g pack is ₹200, 500 g is ₹400, 1 kg is ₹800 and 2 kg is ₹1600. Order on this site — delivery is Nagpur only.",
    },
  ],
  recipe: {
    name: "Matki Usal with Saoji Masala",
    alternateName: ["Matki chi usal", "Sprouted moth bean curry", "Matki rassa usal"],
    prepTime: "PT20M",
    cookTime: "PT25M",
    totalTime: "PT45M",
    recipeYield: ["4 servings", "4"],
    recipeCategory: ["Main course", "Vegetarian", "Usal"],
    recipeCuisine: ["Indian", "Maharashtrian", "Nagpuri"],
    cookingMethod: "Stovetop",
    ingredients: [
      "1 cup matki (moth beans), sprouted — about 2½ cups sprouts",
      "3 tbsp oil",
      "½ tsp mustard seeds",
      "8–10 curry leaves",
      "A pinch of hing (asafoetida)",
      "1 large onion, finely chopped",
      "1 tsp ginger-garlic paste",
      "1 medium tomato, chopped (optional)",
      "¼ tsp turmeric",
      "1–1½ tbsp Lata Special Saoji Masala",
      "2 tbsp grated dry coconut (khobra), lightly roasted",
      "Salt to taste",
      "½ cup water for sukhi usal or 2½ cups hot water for rassa usal",
      "Chopped coriander and lemon to serve",
    ],
    steps: [
      {
        name: "Soak the matki",
        text: "Wash 1 cup matki and soak in plenty of water for 8–10 hours or overnight.",
      },
      {
        name: "Sprout the matki",
        text: "Drain fully, tie in a damp cotton cloth or keep in a closed box, and leave in a warm place 12–24 hours till small white tails appear.",
      },
      {
        name: "Make the tadka",
        text: "Heat 3 tbsp oil, add mustard seeds, curry leaves and hing, then fry the chopped onion till light brown. Add ginger-garlic paste and tomato and cook till soft.",
      },
      {
        name: "Fry the Saoji Masala",
        text: "Add turmeric, roasted khobra and 1–1½ tbsp Saoji Masala with a splash of water. Fry on medium flame till the oil separates.",
      },
      {
        name: "Cook the sprouts",
        text: "Add the sprouted matki and salt, stir 2 minutes, then add ½ cup water for sukhi usal or 2½ cups hot water for rassa usal. Cover and cook 10–15 minutes till the sprouts are soft but whole.",
      },
      {
        name: "Finish and serve",
        text: "Finish with coriander and lemon. Serve sukhi usal with chapati, rassa usal with pav or bhakri, or top rassa usal with farsan and onion for misal.",
      },
    ],
  },
};
