import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { products } from "@/data/mock";
import { FlavorStory } from "./flavor-story";

const latte = products.find((product) => product.id === "cafe-latte")!;

describe("FlavorStory", () => {
  it("renders the product flavor notes and their accessible intensity", () => {
    render(<FlavorStory product={latte} />);

    const region = screen.getByRole("region", {
      name: "روایت طعمی کافه لاته",
    });

    for (const note of latte.flavorNotes.slice(0, 3)) {
      expect(within(region).getByText(note.label)).toBeInTheDocument();
    }

    expect(within(region).getAllByRole("img")).toHaveLength(3);
    expect(
      within(region).getByRole("img", { name: "شدت ۴ از ۵" }),
    ).toBeInTheDocument();
  });
});
