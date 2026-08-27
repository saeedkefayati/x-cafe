"use client";

import { useMemo, useState } from "react";
import { Bag2 } from "iconsax-react";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/controls/button";
import { QuantityControl } from "@/components/controls/quantity-control";
import { SegmentedControl } from "@/components/controls/segmented-control";
import { calculateUnitPrice, normalizeSelection } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import type { Product, ProductOption, ProductSelection } from "@/types/domain";
import styles from "./product.module.css";

function optionChoices(options: ProductOption[], currency: string) {
  return options.map((option) => ({
    label: option.name,
    value: option.id,
    disabled:
      option.availability !== "available" && option.availability !== "seasonal",
    note:
      option.priceDelta > 0
        ? `+ ${formatPrice(option.priceDelta, currency)}`
        : undefined,
  }));
}

export function ProductConfigurator({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selection, setSelection] = useState<ProductSelection>(() =>
    normalizeSelection(product),
  );
  const [quantity, setQuantity] = useState(1);
  const unitPrice = useMemo(
    () => calculateUnitPrice(product, selection),
    [product, selection],
  );

  const updateSelection = (
    key: Exclude<keyof ProductSelection, "extraIds">,
    value: string,
  ) => {
    setSelection((current) =>
      normalizeSelection(product, { ...current, [key]: value }),
    );
  };

  const groups: Array<{
    key: Exclude<keyof ProductSelection, "extraIds">;
    name: string;
    legend: string;
    options: ProductOption[];
  }> = [
    { key: "sizeId", name: "size", legend: "اندازه", options: product.sizes },
    {
      key: "temperatureId",
      name: "temperature",
      legend: "دما",
      options: product.temperatures,
    },
    {
      key: "milkId",
      name: "milk",
      legend: "نوع شیر",
      options: product.milkOptions,
    },
    {
      key: "sweetnessId",
      name: "sweetness",
      legend: "میزان شیرینی",
      options: product.sweetnessOptions,
    },
  ];

  return (
    <div className={styles.configurator}>
      {groups
        .filter((group) => group.options.length > 1)
        .map((group) => (
          <SegmentedControl
            key={group.key}
            legend={group.legend}
            name={`${product.id}-${group.name}`}
            options={optionChoices(group.options, product.currency)}
            value={selection[group.key]}
            onChange={(value) => updateSelection(group.key, value)}
          />
        ))}

      {product.extras.length > 0 ? (
        <fieldset className={styles.extras}>
          <legend>افزودنی‌ها</legend>
          {product.extras.map((extra) => {
            const checked = selection.extraIds.includes(extra.id);
            return (
              <label className={styles.extraOption} key={extra.id}>
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={extra.availability !== "available"}
                  onChange={() =>
                    setSelection((current) =>
                      normalizeSelection(product, {
                        ...current,
                        extraIds: checked
                          ? current.extraIds.filter((id) => id !== extra.id)
                          : [...current.extraIds, extra.id],
                      }),
                    )
                  }
                />
                <span>{extra.name}</span>
                {extra.priceDelta > 0 ? (
                  <small>
                    + {formatPrice(extra.priceDelta, product.currency)}
                  </small>
                ) : null}
              </label>
            );
          })}
        </fieldset>
      ) : null}

      <div className={styles.addRow}>
        <QuantityControl
          value={quantity}
          max={20}
          onChange={setQuantity}
          label={`تعداد ${product.shortName ?? product.name}`}
        />
        <Button
          className={styles.addButton}
          type="button"
          onClick={() => addItem(product.id, selection, quantity)}
        >
          <Bag2 aria-hidden="true" color="currentColor" size={20} />
          افزودن به سبد — {formatPrice(unitPrice * quantity, product.currency)}
        </Button>
      </div>
    </div>
  );
}
