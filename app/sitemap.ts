import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/owner`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogs.map((b) => ({
      url: `${SITE_URL}/blogs/${b.slug}`,
      lastModified: new Date(b.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
