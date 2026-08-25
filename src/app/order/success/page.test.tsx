import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CartProvider } from "@/components/cart/cart-provider";
import { locations } from "@/data/locations";
import { catalogProducts } from "@/data/products";
import {
  CART_STORAGE_KEY,
  addCartLine,
  normalizeSelection,
  serializeCartSnapshot,
} from "@/lib/cart";
import { createDemoOrderAttempt } from "@/lib/demo-order";
import type { PickupOrderRequest } from "@/types/commerce";
import SuccessPage from "./page";

const espresso = catalogProducts.find((product) => product.id === "espresso")!;
const gholhak = locations.find((location) => location.slug === "gholhak")!;
const orderedAt = new Date("2026-08-25T09:00:00.000Z");

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

describe("order success page", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
    window.localStorage.clear();
  });

  it("renders only a valid server-signed demo confirmation", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(orderedAt);
    const result = createDemoOrderAttempt(validRequest(), orderedAt);
    expect(result.status).toBe("accepted");
    if (result.status !== "accepted") return;
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      serializeCartSnapshot(validRequest().cart),
    );

    render(
      <CartProvider>
        {await SuccessPage({
          searchParams: Promise.resolve({
            confirmation: result.confirmationToken,
          }),
        })}
      </CartProvider>,
    );

    expect(
      screen.getByRole("heading", { name: "سفارش آزمایشی تأیید شد." }),
    ).toBeInTheDocument();
    expect(screen.getByText(result.confirmation.orderId)).toBeInTheDocument();
    expect(screen.getByText(gholhak.name)).toBeInTheDocument();
    expect(screen.queryByText("saeed@example.com")).not.toBeInTheDocument();
    expect(screen.queryByText("۰۹۱۲۱۲۳۴۵۶۷")).not.toBeInTheDocument();
    await act(async () => {
      await vi.runAllTimersAsync();
    });
    expect(
      JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) ?? "null"),
    ).toEqual({ version: 1, lines: [] });
  });

  it("rejects a missing or invalid confirmation", async () => {
    render(
      await SuccessPage({
        searchParams: Promise.resolve({ confirmation: "invalid" }),
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "تأیید معتبری برای نمایش وجود ندارد.",
      }),
    ).toBeInTheDocument();
  });
});
