import type { MetadataRoute } from "next";
import { absoluteSiteUrl, siteConfig } from "@/config/site";
import { categories, journalPosts, products } from "@/data/mock";

const staticRoutes: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/menu", changeFrequency: "weekly", priority: 0.9 },
  { path: "/journal", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/locations", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
];

export function buildSitemap(baseUrl = siteConfig.url): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteSiteUrl(route.path, baseUrl),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: absoluteSiteUrl(`/menu/${category.slug}`, baseUrl),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteSiteUrl(`/product/${product.slug}`, baseUrl),
    changeFrequency: "weekly",
    priority: 0.8,
    images: [absoluteSiteUrl(product.cardImage.src, baseUrl)],
  }));
  const journalEntries: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: absoluteSiteUrl(`/journal/${post.slug}`, baseUrl),
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
    ...(post.coverImage
      ? { images: [absoluteSiteUrl(post.coverImage.src, baseUrl)] }
      : {}),
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...productEntries,
    ...journalEntries,
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap();
}
