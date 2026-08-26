"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/domain";
import { MenuGrid } from "./menu-grid";
import styles from "./product.module.css";

type FilterId = "all" | "popular" | "no-known-allergen";

const filters: Array<{
  id: FilterId;
  label: string;
  matches: (product: Product) => boolean;
}> = [
  { id: "all", label: "همه", matches: () => true },
  {
    id: "popular",
    label: "محبوب‌ها",
    matches: (product) => product.bestSeller,
  },
  {
    id: "no-known-allergen",
    label: "بدون آلرژن ثبت‌شده",
    matches: (product) => product.allergens.length === 0,
  },
];

export function MenuCatalog({ products }: { products: Product[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const visibleProducts = useMemo(() => {
    const filter =
      filters.find((item) => item.id === activeFilter) ?? filters[0];
    return products.filter(filter.matches);
  }, [activeFilter, products]);

  return (
    <div className={styles.catalog}>
      <div className={styles.filterPanel}>
        <div>
          <strong>فیلتر سریع</strong>
          <p>بر اساس اطلاعات فعلی همین منو</p>
        </div>
        <div className={styles.filterList} aria-label="فیلتر محصولات">
          {filters.map((filter) => (
            <button
              type="button"
              className={styles.filterButton}
              data-active={activeFilter === filter.id}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              key={filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <p className={styles.filterSummary} role="status" aria-live="polite">
        {visibleProducts.length.toLocaleString("fa-IR")} محصول نمایش داده
        می‌شود.
      </p>
      <p className={styles.allergenHint}>
        فیلتر آلرژن فقط بر اساس اطلاعات ثبت‌شدهٔ فعلی است؛ در صورت حساسیت شدید،
        پیش از سفارش با شعبه هماهنگ کنید.
      </p>
      <MenuGrid products={visibleProducts} eagerCount={3} />
    </div>
  );
}
