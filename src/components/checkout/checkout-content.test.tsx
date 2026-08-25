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
    expect(screen.getByText("پرداخت هنگام تحویل")).toBeInTheDocument();
    expect(screen.getByText("شعبهٔ قلهک")).toBeInTheDocument();
    expect(screen.getByText("۲ × اسپرسو")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ثبت سفارش آزمایشی" }),
    ).toBeDisabled();

    await user.type(screen.getByLabelText("نام و نام خانوادگی"), "سعید رضایی");
    await user.type(screen.getByLabelText("شمارهٔ تماس"), "۰۹۱۲۱۲۳۴۵۶۷");
    await user.click(
      screen.getByRole("button", { name: "بررسی اطلاعات تماس" }),
    );

    expect(form).toBeInTheDocument();
    expect(
      screen.getByText("اطلاعات تماس برای ادامه آماده است."),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("نام و نام خانوادگی")).toHaveValue(
      "سعید رضایی",
    );
    expect(Object.keys(window.localStorage)).toEqual([CART_STORAGE_KEY]);
  });

  it("lets the guest select a sample pickup branch without persisting it", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CheckoutContent />
      </CartProvider>,
    );

    await screen.findByRole("form", { name: "اطلاعات تسویه حساب" });
    const branch = screen.getByRole("radio", { name: /شعبهٔ قلهک/ });
    await user.click(screen.getByText("شعبهٔ قلهک"));

    expect(branch).toBeChecked();
    expect(screen.getByText(/زمان آماده‌سازی سفارش/)).toHaveTextContent(
      "۴۵ دقیقه",
    );
    expect(
      screen.getByText(/اطلاعات این سه شعبه فعلاً نمونه‌اند/),
    ).toBeInTheDocument();
    expect(Object.keys(window.localStorage)).toEqual([CART_STORAGE_KEY]);
  });

  it("enables the demo order only after valid contact and an open branch", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CheckoutContent now={new Date("2026-08-25T09:00:00.000Z")} />
      </CartProvider>,
    );

    await screen.findByRole("form", { name: "اطلاعات تسویه حساب" });
    await user.type(screen.getByLabelText("نام و نام خانوادگی"), "سعید رضایی");
    await user.type(screen.getByLabelText("شمارهٔ تماس"), "۰۹۱۲۱۲۳۴۵۶۷");
    await user.click(
      screen.getByRole("button", { name: "بررسی اطلاعات تماس" }),
    );
    await user.click(screen.getByText("شعبهٔ قلهک"));

    expect(
      screen.getByRole("button", { name: "ثبت سفارش آزمایشی" }),
    ).toBeEnabled();
  });

  it("shows accessible field errors for invalid guest contact data", async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <CheckoutContent />
      </CartProvider>,
    );

    await screen.findByRole("form", { name: "اطلاعات تسویه حساب" });
    await user.type(screen.getByLabelText("نام و نام خانوادگی"), "س");
    await user.type(screen.getByLabelText("شمارهٔ تماس"), "۱۲۳");
    await user.type(screen.getByLabelText("ایمیل"), "invalid");
    await user.click(
      screen.getByRole("button", { name: "بررسی اطلاعات تماس" }),
    );

    expect(
      screen.getByText("نام باید بین ۲ تا ۸۰ نویسه باشد."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("شمارهٔ تماس باید بین ۸ تا ۱۵ رقم باشد."),
    ).toBeInTheDocument();
    expect(screen.getByText("نشانی ایمیل معتبر نیست.")).toBeInTheDocument();
    expect(screen.getByLabelText("نام و نام خانوادگی")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(screen.getByLabelText("نام و نام خانوادگی")).toHaveFocus();
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
