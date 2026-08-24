import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { CartProvider } from "@/components/cart/cart-provider";
import { catalogProducts } from "@/data/products";
import {
  CART_STORAGE_KEY,
  addCartLine,
  normalizeSelection,
  serializeCartSnapshot,
} from "@/lib/cart";
import { CheckoutContent } from "./checkout-content";

const espresso = catalogProducts.find((product) => product.id === "espresso")!;

describe("CheckoutContent", () => {
  beforeEach(() => {
    window.localStorage.clear();
    const lines = addCartLine([], espresso, normalizeSelection(espresso), 2);
    window.localStorage.setItem(CART_STORAGE_KEY, serializeCartSnapshot(lines));
  });

  it("shows a pickup-only review without transmitting preview contact data", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CheckoutContent />
      </CartProvider>,
    );

    const form = await screen.findByRole("form", {
      name: "اطلاعات تسویه حساب",
    });
    expect(screen.getByText("تحویل حضوری")).toBeInTheDocument();
    expect(screen.getByText("۲ × اسپرسو")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ثبت سفارش پس از تکمیل تنظیمات" }),
    ).toBeDisabled();

    await user.type(screen.getByLabelText("نام و نام خانوادگی"), "سعید رضایی");
    await user.type(screen.getByLabelText("شمارهٔ تماس"), "۰۹۱۲۱۲۳۴۵۶۷");
    await user.keyboard("{Enter}");

    expect(form).toBeInTheDocument();
    expect(screen.getByLabelText("نام و نام خانوادگی")).toHaveValue(
      "سعید رضایی",
    );
    expect(Object.keys(window.localStorage)).toEqual([CART_STORAGE_KEY]);
  });

  it("keeps checkout unavailable for an empty cart", async () => {
    window.localStorage.clear();
    render(
      <CartProvider>
        <CheckoutContent />
      </CartProvider>,
    );

    expect(
      await screen.findByText("برای ادامه، ابتدا محصولی انتخاب کنید."),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("form", { name: "اطلاعات تسویه حساب" }),
    ).not.toBeInTheDocument();
  });
});
