import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { CartProvider } from "@/components/cart/cart-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "./header";

describe("Header", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it("opens and closes the accessible mobile navigation", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <CartProvider>
          <Header />
        </CartProvider>
      </ThemeProvider>,
    );
    const trigger = screen.getByRole("button", {
      name: "باز کردن منو",
      hidden: true,
    });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "منوی اصلی" });
    expect(dialog).toBeInTheDocument();
    expect(dialog.closest("header")).toBeNull();
    expect(screen.getByRole("button", { name: "بستن منو" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: "منوی اصلی" }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("switches to dark mode and persists the preference", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <CartProvider>
          <Header />
        </CartProvider>
      </ThemeProvider>,
    );

    await user.click(
      screen.getByRole("button", { name: "فعال کردن حالت تیره" }),
    );
    await waitFor(() =>
      expect(document.documentElement).toHaveAttribute("data-theme", "dark"),
    );
    expect(window.localStorage.getItem("cafe-theme")).toBe("dark");
  });
});
