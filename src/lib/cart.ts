import type {
  CartLineRecord,
  Product,
  ProductOption,
  ProductSelection,
  ResolvedCartLine,
} from "@/types/domain";

export const CART_STORAGE_KEY = "cafe-cart-v1";
export const CART_STORAGE_VERSION = 1;
export const MAX_CART_QUANTITY = 20;

type SelectionInput = Partial<Omit<ProductSelection, "extraIds">> & {
  extraIds?: string[];
};

const isAvailable = (option: ProductOption) =>
  option.availability === "available" || option.availability === "seasonal";

const defaultOption = (options: ProductOption[]) => {
  const available = options.filter(isAvailable);
  return available.find((option) => option.default) ?? available[0];
};

const normalizeOptionId = (options: ProductOption[], requestedId?: string) => {
  if (options.length === 0) return undefined;
  const requested = options.find(
    (option) => option.id === requestedId && isAvailable(option),
  );
  return (requested ?? defaultOption(options))?.id;
};

export function normalizeSelection(
  product: Product,
  input: SelectionInput = {},
): ProductSelection {
  const availableExtraIds = new Set(
    product.extras.filter(isAvailable).map((option) => option.id),
  );
  const extraIds = [...new Set(input.extraIds ?? [])]
    .filter((id) => availableExtraIds.has(id))
    .sort((first, second) => {
      const firstOrder = product.extras.find(
        (option) => option.id === first,
      )?.sortOrder;
      const secondOrder = product.extras.find(
        (option) => option.id === second,
      )?.sortOrder;
      return (
        (firstOrder ?? 0) - (secondOrder ?? 0) || first.localeCompare(second)
      );
    });

  return {
    sizeId: normalizeOptionId(product.sizes, input.sizeId),
    temperatureId: normalizeOptionId(product.temperatures, input.temperatureId),
    milkId: normalizeOptionId(product.milkOptions, input.milkId),
    sweetnessId: normalizeOptionId(product.sweetnessOptions, input.sweetnessId),
    extraIds,
  };
}

export function createCartLineId(
  productId: string,
  selection: ProductSelection,
) {
  return JSON.stringify([
    productId,
    selection.sizeId ?? "",
    selection.temperatureId ?? "",
    selection.milkId ?? "",
    selection.sweetnessId ?? "",
    selection.extraIds,
  ]);
}

const getSelectedOptions = (product: Product, selection: ProductSelection) => {
  const selectedIds = new Set([
    selection.sizeId,
    selection.temperatureId,
    selection.milkId,
    selection.sweetnessId,
    ...selection.extraIds,
  ]);
  return [
    ...product.sizes,
    ...product.temperatures,
    ...product.milkOptions,
    ...product.sweetnessOptions,
    ...product.extras,
  ].filter((option) => selectedIds.has(option.id) && isAvailable(option));
};

export function calculateUnitPrice(product: Product, input: ProductSelection) {
  const selection = normalizeSelection(product, input);
  return (
    product.basePrice +
    getSelectedOptions(product, selection).reduce(
      (total, option) => total + option.priceDelta,
      0,
    )
  );
}

const clampQuantity = (quantity: number) =>
  Math.min(MAX_CART_QUANTITY, Math.max(1, Math.trunc(quantity)));

export function addCartLine(
  lines: CartLineRecord[],
  product: Product,
  input: SelectionInput,
  quantity = 1,
) {
  const selection = normalizeSelection(product, input);
  const id = createCartLineId(product.id, selection);
  const existing = lines.find((line) => line.id === id);

  if (existing) {
    return lines.map((line) =>
      line.id === id
        ? { ...line, quantity: clampQuantity(line.quantity + quantity) }
        : line,
    );
  }

  return [
    ...lines,
    {
      id,
      productId: product.id,
      selection,
      quantity: clampQuantity(quantity),
    },
  ];
}

export function setCartLineQuantity(
  lines: CartLineRecord[],
  id: string,
  quantity: number,
) {
  return lines.map((line) =>
    line.id === id ? { ...line, quantity: clampQuantity(quantity) } : line,
  );
}

export function removeCartLine(lines: CartLineRecord[], id: string) {
  return lines.filter((line) => line.id !== id);
}

export function resolveCartLines(
  lines: CartLineRecord[],
  catalog: Product[],
): ResolvedCartLine[] {
  const productsById = new Map(catalog.map((product) => [product.id, product]));

  return lines.flatMap((line) => {
    const product = productsById.get(line.productId);
    if (!product) return [];
    const selection = normalizeSelection(product, line.selection);
    const unitPrice = calculateUnitPrice(product, selection);
    return [
      {
        ...line,
        id: createCartLineId(product.id, selection),
        selection,
        product,
        optionLabels: getSelectedOptions(product, selection).map(
          (option) => option.name,
        ),
        unitPrice,
        totalPrice: unitPrice * line.quantity,
      },
    ];
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseSelection(value: unknown): SelectionInput | undefined {
  if (!isRecord(value) || !Array.isArray(value.extraIds)) return undefined;
  if (!value.extraIds.every((id) => typeof id === "string")) return undefined;
  const stringOrUndefined = (key: string) =>
    typeof value[key] === "string" ? (value[key] as string) : undefined;
  return {
    sizeId: stringOrUndefined("sizeId"),
    temperatureId: stringOrUndefined("temperatureId"),
    milkId: stringOrUndefined("milkId"),
    sweetnessId: stringOrUndefined("sweetnessId"),
    extraIds: value.extraIds,
  };
}

export function parseCartSnapshot(serialized: string, catalog: Product[]) {
  try {
    const snapshot: unknown = JSON.parse(serialized);
    if (
      !isRecord(snapshot) ||
      snapshot.version !== CART_STORAGE_VERSION ||
      !Array.isArray(snapshot.lines)
    ) {
      return [];
    }

    const productsById = new Map(
      catalog.map((product) => [product.id, product]),
    );
    const parsedLines: CartLineRecord[] = [];

    for (const value of snapshot.lines) {
      if (!isRecord(value)) continue;
      const product =
        typeof value.productId === "string"
          ? productsById.get(value.productId)
          : undefined;
      const selection = parseSelection(value.selection);
      if (
        !product ||
        !selection ||
        typeof value.quantity !== "number" ||
        !Number.isInteger(value.quantity) ||
        value.quantity < 1 ||
        value.quantity > MAX_CART_QUANTITY
      ) {
        continue;
      }
      const normalized = normalizeSelection(product, selection);
      const id = createCartLineId(product.id, normalized);
      if (value.id !== id) continue;
      parsedLines.push({
        id,
        productId: product.id,
        selection: normalized,
        quantity: value.quantity,
      });
    }

    return parsedLines;
  } catch {
    return [];
  }
}

export function serializeCartSnapshot(lines: CartLineRecord[]) {
  return JSON.stringify({ version: CART_STORAGE_VERSION, lines });
}
