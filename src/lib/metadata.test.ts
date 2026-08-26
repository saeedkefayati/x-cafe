import { describe, expect, it } from "vitest";
import { createPageMetadata, defaultSocialImage } from "./metadata";

describe("page metadata", () => {
  it("uses the dedicated branded social card by default", () => {
    expect(defaultSocialImage).toEqual({
      src: "/opengraph-image",
      alt: "نشان ایکس کافه؛ نقطهٔ تلاقی طعم و مکث",
      width: 1200,
      height: 630,
    });
  });

  it("creates canonical and social metadata from one page definition", () => {
    expect(
      createPageMetadata({
        title: "منو",
        description: "منوی کافه",
        path: "/menu",
      }),
    ).toMatchObject({
      title: "منو",
      description: "منوی کافه",
      alternates: { canonical: "/menu" },
      openGraph: {
        type: "website",
        title: "منو",
        url: "/menu",
        images: [{ url: defaultSocialImage.src }],
      },
      twitter: { card: "summary_large_image" },
    });
  });

  it("supports article metadata and utility-route noindex", () => {
    expect(
      createPageMetadata({
        title: "یادداشت",
        description: "یک یادداشت",
        path: "/journal/note",
        type: "article",
        publishedTime: "2026-08-24",
      }),
    ).toMatchObject({
      openGraph: {
        type: "article",
        publishedTime: "2026-08-24",
      },
    });
    expect(
      createPageMetadata({
        title: "سبد",
        description: "سبد خرید",
        path: "/cart",
        index: false,
        follow: false,
      }),
    ).toMatchObject({ robots: { index: false, follow: false } });
  });
});
