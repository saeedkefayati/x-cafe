"use client";

import { Trash } from "iconsax-react";
import { LinkButton } from "@/components/controls/button";
import { Heading, Text } from "@/components/primitives/typography";
import { formatPrice } from "@/lib/format";
import { CartLine } from "./cart-line";
import { useCart } from "./cart-provider";
import styles from "./cart.module.css";

export function CartPageContent() {
  const { lines, subtotal, itemCount, isHydrated, clearCart } = useCart();

  if (!isHydrated) {
    return <p role="status">در حال آماده‌سازی سبد…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className={styles.emptyPage}>
        <Heading size="h3">سبد هنوز خالی است.</Heading>
        <Text>یک انتخاب خوب از منو شروع می‌شود.</Text>
        <LinkButton href="/menu">دیدن منو</LinkButton>
      </div>
    );
  }

  return (
    <div className={styles.cartLayout}>
      <div>
        <div className={styles.cartList}>
          {lines.map((line) => (
            <CartLine key={line.id} line={line} />
          ))}
        </div>
        <div className={styles.cartListFooter}>
          <button
            className={styles.clearButton}
            type="button"
            onClick={clearCart}
          >
            <Trash aria-hidden="true" color="currentColor" size={18} />
            حذف همهٔ محصولات
          </button>
        </div>
      </div>
      <aside
        className={styles.cartSummary}
        aria-labelledby="cart-summary-title"
      >
        <Heading as="h2" id="cart-summary-title" size="h4">
          خلاصهٔ سفارش
        </Heading>
        <div className={styles.summaryRow}>
          <span>{itemCount.toLocaleString("fa-IR")} محصول</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <Text size="bodySm">
          مالیات و هزینهٔ خدمات هنوز نهایی نشده‌اند و در این پیش‌نمایش محاسبه
          نمی‌شوند.
        </Text>
        <LinkButton href="/checkout">ادامهٔ سفارش</LinkButton>
      </aside>
    </div>
  );
}
