import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#3b2418",
    lang: siteConfig.language,
    dir: "rtl",
    icons: [
      {
        src: "/brand/x-cafe-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
