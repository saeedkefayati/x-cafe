import { describe, expect, it } from "vitest";
import { catalogProducts } from "./products";

const categoryCounts = {
  "hot-coffee": 5,
  "cold-coffee": 5,
  cakes: 5,
};

describe("catalog products", () => {
  it("contains five complete products in each requested category", () => {
    expect(catalogProducts).toHaveLength(15);

    for (const [categoryId, count] of Object.entries(categoryCounts)) {
      expect(
        catalogProducts.filter((product) => product.categoryId === categoryId),
      ).toHaveLength(count);
    }

    for (const product of catalogProducts) {
      expect(product.shortDescription).not.toBe("");
      expect(product.fullDescription).not.toBe("");
      expect(product.ingredients.length).toBeGreaterThan(0);
      expect(product.flavorNotes.length).toBeGreaterThan(0);
      expect(product.basePrice).toBeGreaterThan(0);
    }
  });

  it("uses unique product ids and slugs", () => {
    expect(new Set(catalogProducts.map((product) => product.id)).size).toBe(15);
    expect(new Set(catalogProducts.map((product) => product.slug)).size).toBe(
      15,
    );
    expect(
      new Set(catalogProducts.map((product) => product.cardImage.src)).size,
    ).toBe(15);
  });
});
