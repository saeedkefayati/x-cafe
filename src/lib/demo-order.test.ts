import { describe, expect, it } from "vitest";
import { locations } from "@/data/locations";
import { catalogProducts } from "@/data/products";
import type { PickupOrderRequest } from "@/types/commerce";
import { addCartLine, normalizeSelection } from "./cart";
import {
  createDemoOrderAttempt,
  verifyDemoOrderConfirmation,
} from "./demo-order";

const espresso = catalogProducts.find((product) => product.id === "espresso")!;
const gholhak = locations.find((location) => location.slug === "gholhak")!;

function validRequest(): PickupOrderRequest {
  return {
    schemaVersion: 1,
    cart: addCartLine([], espresso, normalizeSelection(espresso), 2),
    customer: {
      name: "سعید رضایی",
      phone: "۰۹۱۲۱۲۳۴۵۶۷",
      email: "saeed@example.com",
    },
    fulfillment: { type: "pickup", locationId: gholhak.id },
  };
}

describe("demo order confirmation", () => {
  it("re-resolves a valid cart and issues a verifiable server confirmation", () => {
    const orderedAt = new Date("2026-08-25T09:00:00.000Z");
    const result = createDemoOrderAttempt(validRequest(), orderedAt);

    expect(result.status).toBe("accepted");
    if (result.status !== "accepted") return;
    expect(result.confirmation.orderId).toMatch(/^CAFE-[A-F0-9]{10}$/);
    expect(result.confirmation.itemCount).toBe(2);
    expect(result.confirmation.readyAt).toBe("2026-08-25T09:45:00.000Z");
    expect(
      verifyDemoOrderConfirmation(result.confirmationToken, orderedAt),
    ).toEqual(result.confirmation);
  });

  it("rejects invalid contact data, branch ids, and empty carts", () => {
    const orderedAt = new Date("2026-08-25T09:00:00.000Z");
    expect(
      createDemoOrderAttempt(
        { ...validRequest(), customer: { name: "س", phone: "۱۲۳" } },
        orderedAt,
      ),
    ).toMatchObject({
      status: "rejected",
      message: "اطلاعات تماس را بررسی کنید.",
    });
    expect(
      createDemoOrderAttempt(
        {
          ...validRequest(),
          fulfillment: { type: "pickup", locationId: "unknown" },
        },
        orderedAt,
      ),
    ).toMatchObject({
      status: "rejected",
      message: "شعبهٔ تحویل معتبر نیست.",
    });
    expect(
      createDemoOrderAttempt({ ...validRequest(), cart: [] }, orderedAt),
    ).toMatchObject({
      status: "rejected",
      message: "سبد سفارش معتبر نیست.",
    });
  });

  it("rejects orders outside branch acceptance hours", () => {
    expect(
      createDemoOrderAttempt(
        validRequest(),
        new Date("2026-08-25T19:00:00.000Z"),
      ),
    ).toMatchObject({
      status: "rejected",
      message: "این شعبه در حال حاضر سفارش تحویل حضوری نمی‌پذیرد.",
    });
  });

  it("rejects tampered and expired confirmations", () => {
    const orderedAt = new Date("2026-08-25T09:00:00.000Z");
    const result = createDemoOrderAttempt(validRequest(), orderedAt);
    expect(result.status).toBe("accepted");
    if (result.status !== "accepted") return;

    expect(
      verifyDemoOrderConfirmation(result.confirmationToken + "x", orderedAt),
    ).toBeNull();
    expect(
      verifyDemoOrderConfirmation(
        result.confirmationToken,
        new Date("2026-08-27T09:00:00.000Z"),
      ),
    ).toBeNull();
  });
});
