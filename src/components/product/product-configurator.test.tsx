import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { CartPageContent } from "@/components/cart/cart-page-content";
import { CartProvider } from "@/components/cart/cart-provider";
import { catalogProducts } from "@/data/products";
import { CART_STORAGE_KEY } from "@/lib/cart";
import { ProductConfigurator } from "./product-configurator";

const latte = catalogProducts.find((product) => product.id === "cafe-latte")!;

describe("ProductConfigurator", () => {
  beforeEach(() => window.localStorage.clear());

  it("updates price, adds the configured product, and restores it from storage", async () => {
    const user = userEvent.setup();
    const view = render(
      <CartProvider>
        <ProductConfigurator product={latte} />
      </CartProvider>,
    );

    await user.click(screen.getByText("بزرگ"));
    await user.click(screen.getByText("شیر جو دوسر"));
    const addButton = screen.getByRole("button", { name: /افزودن به سبد/ });
    expect(addButton).toHaveTextContent("۲۸۵٬۰۰۰");
    await user.click(addButton);

    expect(
      screen.getByRole("dialog", { name: "سبد خرید" }),
    ).toBeInTheDocument();
    expect(screen.getByText("کافه لاته")).toBeInTheDocument();
    expect(screen.getByText(/بزرگ، گرم، شیر جو دوسر/)).toBeInTheDocument();
    await waitFor(() =>
      expect(window.localStorage.getItem(CART_STORAGE_KEY)).toContain(
        "cafe-latte",
      ),
    );

    view.unmount();
    render(
      <CartProvider>
        <CartPageContent />
      </CartProvider>,
    );

    expect(await screen.findByText("خلاصهٔ سفارش")).toBeInTheDocument();
    expect(screen.getAllByText(/۲۸۵٬۰۰۰/)).toHaveLength(2);
  });
});
