import { describe, expect, it } from "vitest";
import { catalogProducts } from "@/data/products";
import { searchProducts } from "./search";

describe("searchProducts", () => {
  it("finds products by Persian and English names", () => {
    expect(searchProducts(catalogProducts, "لاته").length).toBeGreaterThan(0);
    expect(searchProducts(catalogProducts, "Espresso").length).toBeGreaterThan(
      0,
    );
  });

  it("finds flavor notes and normalizes Arabic character variants", () => {
    expect(searchProducts(catalogProducts, "شكلات").length).toBeGreaterThan(0);
  });

  it("returns no results for an empty or unknown query", () => {
    expect(searchProducts(catalogProducts, "   ")).toEqual([]);
    expect(searchProducts(catalogProducts, "محصولی که وجود ندارد")).toEqual([]);
  });
});
