import { describe, expect, it } from "vitest";
import { catalogProducts } from "@/data/products";
import {
  addCartLine,
  calculateUnitPrice,
  createCartLineId,
  normalizeSelection,
  parseCartSnapshot,
  resolveCartLines,
  setCartLineQuantity,
} from "./cart";

const latte = catalogProducts.find((product) => product.id === "cafe-latte")!;
const cake = catalogProducts.find(
  (product) => product.id === "burnt-basque-cheesecake",
)!;

describe("cart domain", () => {
  it("normalizes missing and invalid choices to available defaults", () => {
    expect(
      normalizeSelection(latte, {
        sizeId: "not-a-size",
        extraIds: ["extra-shot", "not-an-extra", "extra-shot"],
      }),
    ).toEqual({
      sizeId: "size-regular",
      temperatureId: "temp-hot",
      milkId: "milk-whole",
      sweetnessId: undefined,
      extraIds: ["extra-shot"],
    });
  });

  it("derives unit price from the base price and selected deltas", () => {
    const selection = normalizeSelection(latte, {
      sizeId: "size-large",
      milkId: "milk-oat",
      extraIds: ["extra-shot"],
    });

    expect(calculateUnitPrice(latte, selection)).toBe(4250000);
  });

  it("uses the full normalized customization as cart identity", () => {
    const regular = normalizeSelection(latte);
    const oat = normalizeSelection(latte, { milkId: "milk-oat" });

    expect(createCartLineId(latte.id, regular)).not.toBe(
      createCartLineId(latte.id, oat),
    );
  });

  it("merges identical lines, keeps different selections separate, and clamps quantity", () => {
    const regular = normalizeSelection(latte);
    const oat = normalizeSelection(latte, { milkId: "milk-oat" });
    let lines = addCartLine([], latte, regular, 2);
    lines = addCartLine(lines, latte, regular, 3);
    lines = addCartLine(lines, latte, oat, 1);

    expect(lines).toHaveLength(2);
    expect(lines[0].quantity).toBe(5);
    expect(setCartLineQuantity(lines, lines[0].id, 99)[0].quantity).toBe(20);
  });

  it("keeps persisted data versioned and discards unknown products or invalid records", () => {
    const validSelection = normalizeSelection(cake);
    const validLine = addCartLine([], cake, validSelection, 2)[0];
    const serialized = JSON.stringify({
      version: 1,
      lines: [
        validLine,
        { ...validLine, id: "forged", productId: "missing-product" },
        { ...validLine, id: "bad-quantity", quantity: 0 },
      ],
    });

    const parsed = parseCartSnapshot(serialized, catalogProducts);
    expect(parsed).toEqual([validLine]);
    expect(
      parseCartSnapshot('{"version":2,"lines":[]}', catalogProducts),
    ).toEqual([]);
    expect(parseCartSnapshot("not-json", catalogProducts)).toEqual([]);
  });

  it("resolves display data and recalculates totals from the current catalog", () => {
    const selection = normalizeSelection(latte, { milkId: "milk-oat" });
    const lines = addCartLine([], latte, selection, 2);
    const [resolved] = resolveCartLines(lines, catalogProducts);

    expect(resolved.product.id).toBe(latte.id);
    expect(resolved.optionLabels).toContain("شیر جو دوسر");
    expect(resolved.totalPrice).toBe(resolved.unitPrice * 2);
  });
});
