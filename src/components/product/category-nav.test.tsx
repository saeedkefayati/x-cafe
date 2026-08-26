import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { categories } from "@/data/mock";
import { CategoryNav } from "./category-nav";

describe("CategoryNav", () => {
  it("marks the main menu as current when no category is active", () => {
    render(<CategoryNav categories={categories} />);

    expect(screen.getByRole("link", { name: "همه" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("marks the selected category as current", () => {
    render(<CategoryNav categories={categories} activeSlug="cold-coffee" />);

    expect(screen.getByRole("link", { name: "قهوه‌های سرد" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "همه" })).not.toHaveAttribute(
      "aria-current",
    );
  });
});
