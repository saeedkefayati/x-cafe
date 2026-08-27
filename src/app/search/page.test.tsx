import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { catalogProducts } from "@/data/products";
import SearchPage from "./page";

const navigation = vi.hoisted(() => ({ replace: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: navigation.replace }),
}));

vi.mock("@/components/product/menu-grid", () => ({
  MenuGrid: ({ products }: { products: typeof catalogProducts }) => (
    <div data-testid="search-results">
      {products.map((product) => (
        <span key={product.id}>{product.name}</span>
      ))}
    </div>
  ),
}));

describe("Search page", () => {
  it("keeps the initial state focused on the search controls", async () => {
    const user = userEvent.setup();
    render(
      await SearchPage({
        params: Promise.resolve({}),
        searchParams: Promise.resolve({}),
      }),
    );

    expect(screen.queryByTestId("search-results")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /نتیجه برای/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "پاک‌کردن جست‌وجو" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "جست‌وجوی منو" }),
    ).toHaveAttribute("type", "text");

    await user.type(
      screen.getByRole("textbox", { name: "جست‌وجوی منو" }),
      "لاته",
    );

    expect(
      screen.getByRole("button", { name: "پاک‌کردن جست‌وجو" }),
    ).toBeInTheDocument();
  });

  it("shows matching results and clears them from the input", async () => {
    const user = userEvent.setup();
    render(
      await SearchPage({
        params: Promise.resolve({}),
        searchParams: Promise.resolve({ q: "لاته" }),
      }),
    );

    expect(screen.getByTestId("search-results")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /نتیجه برای «لاته»/ }),
    ).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: "جست‌وجوی منو" });
    expect(input).toHaveValue("لاته");

    await user.click(screen.getByRole("button", { name: "پاک‌کردن جست‌وجو" }));

    expect(input).toHaveValue("");
    expect(navigation.replace).toHaveBeenCalledWith("/search", {
      scroll: false,
    });
    expect(input).toHaveFocus();
  });
});
