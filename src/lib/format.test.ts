import { describe, expect, it } from "vitest";
import { formatPrice } from "./format";

describe("formatPrice", () => {
  it("stores IRR while presenting customer-facing prices in toman", () => {
    expect(formatPrice(2100000, "IRR")).toBe("۲۱۰٬۰۰۰ تومان");
  });
});
