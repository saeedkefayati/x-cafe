import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { MediaAsset } from "@/types/domain";

export const defaultSocialImage: MediaAsset = {
  src: "/images/products/contact-sheet-v1.png",
  alt: "مجموعهٔ قهوه‌های گرم، نوشیدنی‌های سرد و کیک‌های منوی ایکس کافه",
  width: 1240,
  height: 912,
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: MediaAsset;
  index?: boolean;
  follow?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  index = true,
  follow = true,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const images = [
    {
      url: image.src,
      width: image.width,
      height: image.height,
      alt: image.alt,
    },
  ];
  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          title,
          description,
          url: path,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          images,
          publishedTime,
        }
      : {
          type: "website",
          title,
          description,
          url: path,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          images,
        };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.src, alt: image.alt }],
    },
    ...(index ? {} : { robots: { index: false, follow } }),
  };
}
