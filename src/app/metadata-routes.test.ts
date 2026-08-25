import { describe, expect, it } from "vitest";
import { resolveSiteConfig } from "@/config/site";
import { categories, journalPosts, products } from "@/data/mock";
import { buildRobots } from "./robots";
import { buildSitemap } from "./sitemap";

describe("metadata routes", () => {
  it("blocks all crawling until publishing is explicitly enabled", () => {
    expect(buildRobots(resolveSiteConfig({}))).toEqual({
      rules: { userAgent: "*", disallow: "/" },
    });
  });

  it("keeps utility and private-flow routes out of enabled crawling", () => {
    expect(
      buildRobots(
        resolveSiteConfig({
          SITE_URL: "https://cafe.test.ir",
          SITE_INDEXING_ENABLED: "true",
        }),
      ),
    ).toMatchObject({
      rules: {
        allow: "/",
        disallow: ["/cart", "/checkout", "/order/", "/search"],
      },
      sitemap: "https://cafe.test.ir/sitemap.xml",
      host: "https://cafe.test.ir",
    });
  });

  it("lists every public category, product, and journal entry once", () => {
    const entries = buildSitemap(new URL("http://localhost:3000"));
    const urls = entries.map((entry) => entry.url);

    expect(entries).toHaveLength(
      7 + categories.length + products.length + journalPosts.length,
    );
    expect(new Set(urls)).toHaveLength(entries.length);
    for (const category of categories) {
      expect(urls).toContain(`http://localhost:3000/menu/${category.slug}`);
    }
    for (const product of products) {
      expect(urls).toContain(`http://localhost:3000/product/${product.slug}`);
    }
    for (const post of journalPosts) {
      expect(urls).toContain(`http://localhost:3000/journal/${post.slug}`);
    }
    expect(urls.some((url) => url.includes("/checkout"))).toBe(false);
    expect(urls.some((url) => url.includes("/order/"))).toBe(false);
  });
});
