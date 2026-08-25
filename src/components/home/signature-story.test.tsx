import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { products } from "@/data/mock";
import { SignatureStory } from "./signature-story";

const signatureIds = ["espresso", "cafe-latte", "iced-caramel-latte"];
const signatureProducts = signatureIds.flatMap((id) => {
  const product = products.find((candidate) => candidate.id === id);
  return product ? [product] : [];
});

describe("SignatureStory", () => {
  it("keeps all product states in meaningful static HTML", () => {
    render(<SignatureStory products={signatureProducts} />);

    const region = screen.getByRole("region", {
      name: "از یک شات، تا امضای سرد.",
    });

    expect(within(region).getByText("Espresso")).toBeInTheDocument();
    expect(within(region).getByText("Café Latte")).toBeInTheDocument();
    expect(within(region).getByText("Iced Caramel Latte")).toBeInTheDocument();
    expect(
      within(region).getByRole("link", { name: "دیدن همهٔ منو" }),
    ).toHaveAttribute("href", "/menu");
  });
});
