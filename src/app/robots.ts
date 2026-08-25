import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export function buildRobots(config = siteConfig): MetadataRoute.Robots {
  if (!config.isIndexingEnabled) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/order/", "/search"],
    },
    sitemap: new URL("/sitemap.xml", config.url).toString(),
    host: config.origin,
  };
}

export default function robots(): MetadataRoute.Robots {
  return buildRobots();
}
