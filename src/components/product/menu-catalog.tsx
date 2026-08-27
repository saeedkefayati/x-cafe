"use client";

import { Sort } from "iconsax-react";
import { useMemo, useState } from "react";
import type { Category, Product } from "@/types/domain";
import { CategoryNav } from "./category-nav";
import { MenuGrid } from "./menu-grid";
import styles from "./product.module.css";

type FilterId = "all" | "popular" | "no-known-allergen";
type SortId = "recommended" | "price-asc" | "price-desc" | "name";

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

const sortOptions: Array<{ value: SortId; label: string }> = [
  { value: "recommended", label: "پیشنهادی" },
  { value: "price-asc", label: "قیمت: کم به زیاد" },
  { value: "price-desc", label: "قیمت: زیاد به کم" },
  { value: "name", label: "نام محصول" },
];

export function MenuCatalog({
  products,
  categories,
  activeSlug,
}: {
  products: Product[];
  categories: Category[];
  activeSlug?: string;
}) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [sort, setSort] = useState<SortId>("recommended");
  const visibleProducts = useMemo(() => {
    const filter =
      filters.find((item) => item.id === activeFilter) ?? filters[0];
    const activeCategory = categories.find(
      (category) => category.slug === activeSlug,
    );
    const filtered = products.filter(
      (product) =>
        (!activeCategory || product.categoryId === activeCategory.id) &&
        filter.matches(product),
    );

    return [...filtered].sort((first, second) => {
      if (sort === "price-asc") return first.basePrice - second.basePrice;
      if (sort === "price-desc") return second.basePrice - first.basePrice;
      if (sort === "name") return first.name.localeCompare(second.name, "fa");
      return Number(second.bestSeller) - Number(first.bestSeller);
    });
  }, [activeFilter, activeSlug, categories, products, sort]);

  const hasCustomView = activeFilter !== "all" || sort !== "recommended";

  return (
    <div className={styles.catalog}>
      <div className={styles.catalogToolbar}>
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>دسته‌بندی</span>
          <CategoryNav categories={categories} activeSlug={activeSlug} />
        </div>
        <div className={styles.toolbarControls}>
          <div className={styles.toolbarGroup}>
            <span className={styles.toolbarLabel}>ویژگی</span>
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
          <label className={styles.sortControl}>
            <span className={styles.toolbarLabel}>
              <Sort aria-hidden="true" color="currentColor" size={17} />
              مرتب‌سازی
            </span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortId)}
            >
              {sortOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className={styles.catalogSummary}>
        <p className={styles.filterSummary} role="status" aria-live="polite">
          {visibleProducts.length.toLocaleString("fa-IR")} محصول
        </p>
        {hasCustomView ? (
          <button
            className={styles.resetFilters}
            type="button"
            onClick={() => {
              setActiveFilter("all");
              setSort("recommended");
            }}
          >
            بازنشانی نمایش
          </button>
        ) : null}
      </div>
      {activeFilter === "no-known-allergen" ? (
        <p className={styles.allergenHint}>
          این فیلتر فقط دادهٔ ثبت‌شده را بررسی می‌کند؛ در حساسیت شدید با شعبه
          هماهنگ کنید.
        </p>
      ) : null}
      {visibleProducts.length > 0 ? (
        <MenuGrid products={visibleProducts} eagerCount={3} />
      ) : (
        <p className={styles.catalogEmpty}>
          محصولی با این ترکیب فیلتر پیدا نشد.
        </p>
      )}
    </div>
  );
}
