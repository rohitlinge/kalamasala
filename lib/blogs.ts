export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  readingMinutes: number;
  featuredVideo?: {
    embedSrc: string;
    title: string;
    width: number;
    height: number;
  };
};

export const blogs: BlogPost[] = [
  {
    slug: "butter-chicken-recipe",
    title: "Butter Chicken Recipe | Lata Special",
    shortTitle: "Butter Chicken",
    description:
      "Restaurant-style butter chicken gravy at home — Lata Special technique. Chicken cooks in the gravy so the flavour goes deep. Soft chicken, silky makhani sauce, and a cold-smoke tandoori touch. Full recipe with steps.",
    keywords: [
      "butter chicken recipe",
      "makhani gravy recipe",
      "homemade butter chicken",
      "butter chicken without tandoori chicken",
      "Lata Special butter chicken",
      "chicken recipe Indian",
      "makhani chicken Nagpur",
      "restaurant style butter chicken at home",
    ],
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    author: "Lata Linge",
    category: "Chicken Recipe",
    readingMinutes: 12,
    featuredVideo: {
      embedSrc: "https://assets.pinterest.com/ext/embed.html?id=963700020283687293",
      title: "Butter Chicken Recipe video — Lata Special",
      width: 600,
      height: 1167,
    },
  },
];

export function getBlog(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}
