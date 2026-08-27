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
      expect(product.flavorNotes.length).toBeGreaterThanOrEqual(3);
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

  it("keeps price provenance explicit", () => {
    expect(
      catalogProducts.filter(
        (product) => product.pricingStatus === "source-matched",
      ),
    ).toHaveLength(15);
    expect(
      catalogProducts.filter((product) => product.pricingStatus === "mock"),
    ).toHaveLength(0);
    expect(catalogProducts.every((product) => product.currency === "IRR")).toBe(
      true,
    );
  });

  it("uses the approved source-matched replacements and prices", () => {
    const expectedPrices = new Map([
      ["iced-caramel-macchiato", 3500000],
      ["cold-grip", 3200000],
      ["iced-hazelnut-mocha", 3500000],
      ["brownie", 2700000],
      ["tres-leches-cake", 3200000],
    ]);

    for (const [id, price] of expectedPrices) {
      const product = catalogProducts.find((candidate) => candidate.id === id);
      expect(product?.basePrice).toBe(price);
      expect(product?.pricingStatus).toBe("source-matched");
      expect(product?.cardImage.src).toBe(
        `/images/products/product-${id}-card-v1.png`,
      );
    }
  });
});
