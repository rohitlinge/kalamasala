import type { BlogPost } from "@/lib/blogs";
import { famousFoodOfNagpur } from "./famous-food-of-nagpur";
import { saojiChicken } from "./saoji-chicken-recipe";
import { tarriPoha } from "./tarri-poha-recipe";
import { sambarVadi } from "./sambar-vadi-recipe";
import { saojiEggCurry } from "./saoji-egg-curry-recipe";
import { masalaDifference } from "./saoji-masala-vs-kolhapuri-vs-garam-masala";
import { vangyacheBharit } from "./varhadi-vangyache-bharit-recipe";
import { matkiUsal } from "./matki-usal-recipe";
import { alooBaingan } from "./aloo-baingan-sabji-recipe";
import { zunka } from "./zunka-recipe";

/** Posts that carry their own data files (newest first). Merged into `blogs` in lib/blogs.ts. */
export const newBlogPosts: BlogPost[] = [
  famousFoodOfNagpur,
  saojiChicken,
  tarriPoha,
  sambarVadi,
  saojiEggCurry,
  masalaDifference,
  vangyacheBharit,
  matkiUsal,
  alooBaingan,
  zunka,
];
