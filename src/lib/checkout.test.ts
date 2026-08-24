import { describe, expect, it } from "vitest";
import { commerceConfig, getCommerceBlockers } from "@/config/commerce";
import { catalogProducts } from "@/data/products";
import { addCartLine, normalizeSelection, resolveCartLines } from "./cart";
import {
  buildCheckoutReview,
  createAuthoritativeCartInput,
  normalizePhone,
  validateCustomerContact,
} from "./checkout";

const latte = catalogProducts.find(
  (product) => product.id === "iced-caramel-latte",
)!;
const cake = catalogProducts.find(
  (product) => product.id === "burnt-basque-cheesecake",
)!;

function checkoutLines() {
  let records = addCartLine(
    [],
    latte,
    normalizeSelection(latte, { sizeId: "size-large" }),
    2,
  );
  records = addCartLine(records, cake, normalizeSelection(cake), 1);
  return resolveCartLines(records, catalogProducts);
}

describe("pickup checkout foundation", () => {
  it("builds a currency-safe review from current resolved catalog data", () => {
    const lines = checkoutLines();
    const review = buildCheckoutReview(lines);

    expect(review.lines).toHaveLength(2);
    expect(review.itemCount).toBe(3);
    expect(review.subtotal).toBe(
      lines.reduce((total, line) => total + line.totalPrice, 0),
    );
    expect(review.currency).toBe("IRR");
  });

  it("rejects a review that mixes currencies", () => {
    const lines = checkoutLines();
    const mixed = [
      lines[0],
      { ...lines[1], product: { ...lines[1].product, currency: "USD" } },
    ];

    expect(() => buildCheckoutReview(mixed)).toThrow(
      "Checkout cannot combine multiple currencies",
    );
  });

  it("creates an order input without trusting client-side price snapshots", () => {
    const [line] = checkoutLines();
    const [input] = createAuthoritativeCartInput([line]);

    expect(input).toEqual({
      id: line.id,
      productId: line.productId,
      selection: line.selection,
      quantity: line.quantity,
    });
    expect(input).not.toHaveProperty("unitPrice");
    expect(input).not.toHaveProperty("totalPrice");
    expect(input.selection.extraIds).not.toBe(line.selection.extraIds);
  });

  it("normalizes localized phone digits and validates contact fields", () => {
    expect(normalizePhone("۰۹۱۲ ۱۲۳-۴۵۶۷")).toBe("09121234567");
    expect(
      validateCustomerContact({
        name: "سعید رضایی",
        phone: "+98 912 123 4567",
        email: "saeed@example.com",
      }),
    ).toEqual({});
    expect(
      validateCustomerContact({
        name: "س",
        phone: "۱۲۳",
        email: "invalid",
      }),
    ).toEqual({
      name: "نام باید بین ۲ تا ۸۰ نویسه باشد.",
      phone: "شمارهٔ تماس باید بین ۸ تا ۱۵ رقم باشد.",
      email: "نشانی ایمیل معتبر نیست.",
    });
  });

  it("keeps every real-commerce dependency explicit", () => {
    expect(commerceConfig.customerMode).toBe("guest");
    expect(commerceConfig.fulfillmentMode).toBe("pickup");
    expect(commerceConfig.paymentMethod).toBe("pay-at-pickup");
    expect(commerceConfig.pickupLocations).toHaveLength(3);
    expect(getCommerceBlockers(commerceConfig).map((item) => item.id)).toEqual([
      "pickup-location-confirmation",
      "order-provider",
      "availability-source",
      "fee-policy",
    ]);
  });
});
