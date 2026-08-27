import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { products } from "@/data/mock";
import { SignatureStory } from "./signature-story";

const signatureIds = ["espresso", "cafe-latte", "iced-caramel-macchiato"];
const signatureProducts = signatureIds.flatMap((id) => {
  const product = products.find((candidate) => candidate.id === id);
  return product ? [product] : [];
});

describe("SignatureStory", () => {
  it("keeps all product states in meaningful static HTML", () => {
    render(<SignatureStory products={signatureProducts} />);

    const region = screen.getByRole("region", {
      name: "یک شات کوچک، سه حس دوست‌داشتنی.",
    });

    expect(within(region).getByText("Espresso")).toBeInTheDocument();
    expect(within(region).getByText("Café Latte")).toBeInTheDocument();
    expect(
      within(region).getByText("Iced Caramel Macchiato"),
    ).toBeInTheDocument();
    expect(
      within(region).queryByRole("link", { name: "دیدن همهٔ منو" }),
    ).not.toBeInTheDocument();
  });
});
