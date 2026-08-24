import { describe, expect, it } from "vitest";
import { faqs, journalPosts, products } from "./mock";

describe("editorial content", () => {
  it("keeps journal entries complete, unique, and linked to catalog products", () => {
    expect(journalPosts).toHaveLength(3);
    expect(new Set(journalPosts.map((post) => post.id)).size).toBe(
      journalPosts.length,
    );
    expect(new Set(journalPosts.map((post) => post.slug)).size).toBe(
      journalPosts.length,
    );

    const productIds = new Set(products.map((product) => product.id));
    for (const post of journalPosts) {
      expect(post.body.length).toBeGreaterThanOrEqual(3);
      expect(post.coverImage).toBeDefined();
      expect(post.relatedProductIds.length).toBeGreaterThan(0);
      expect(
        post.relatedProductIds.every((productId) => productIds.has(productId)),
      ).toBe(true);
    }
  });

  it("keeps FAQ entries unique and explicitly honest about unresolved commerce", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(6);
    expect(new Set(faqs.map((faq) => faq.id)).size).toBe(faqs.length);
    expect(faqs.some((faq) => faq.answer.includes("هنوز"))).toBe(true);
    expect(faqs.some((faq) => faq.answer.includes("نهایی"))).toBe(true);
  });
});
