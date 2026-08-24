import type { Product } from "@/types/domain";

const normalizeSearchText = (value: string) =>
  value
    .normalize("NFKC")
    .toLocaleLowerCase("fa-IR")
    .replaceAll("ي", "ی")
    .replaceAll("ك", "ک")
    .trim();

export function searchProducts(products: Product[], query: string) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  return products.filter((product) =>
    normalizeSearchText(
      [
        product.name,
        product.shortName,
        product.shortDescription,
        product.fullDescription,
        ...product.flavorNotes.map((note) => note.label),
      ]
        .filter(Boolean)
        .join(" "),
    ).includes(normalizedQuery),
  );
}
