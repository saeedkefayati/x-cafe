import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { catalogProducts } from "@/data/products";
import { MenuCatalog } from "./menu-catalog";

vi.mock("./product-card", () => ({
  ProductCard: ({ product }: { product: (typeof catalogProducts)[number] }) => (
    <article>
      <h3>{product.name}</h3>
    </article>
  ),
}));

describe("MenuCatalog", () => {
  const products = catalogProducts.slice(0, 4);

  it("filters products by existing catalog facts", async () => {
    const user = userEvent.setup();
    render(<MenuCatalog products={products} />);

    expect(screen.getByText("۴ محصول نمایش داده می‌شود.")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "محبوب‌ها" }));

    expect(screen.getByText("۲ محصول نمایش داده می‌شود.")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Espresso" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Cappuccino" }),
    ).toBeInTheDocument();
  });

  it("exposes the selected filter state", () => {
    render(<MenuCatalog products={products} />);

    const filterGroup = screen.getByLabelText("فیلتر محصولات");
    expect(
      within(filterGroup).getByRole("button", { name: "همه" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      within(filterGroup).queryByRole("button", { name: "قیمت مرجع" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(/فیلتر آلرژن فقط بر اساس اطلاعات ثبت‌شدهٔ فعلی است/),
    ).toBeInTheDocument();
  });
});
