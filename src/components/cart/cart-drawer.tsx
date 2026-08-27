"use client";

import { useEffect, useRef } from "react";
import { CloseCircle } from "iconsax-react";
import { IconButton, LinkButton } from "@/components/controls/button";
import { formatPrice } from "@/lib/format";
import { CartLine } from "./cart-line";
import { useCart } from "./cart-provider";
import styles from "./cart.module.css";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CartDrawer() {
  const { isDrawerOpen, closeCart, lines, subtotal, itemCount } = useCart();
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [],
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      opener?.focus();
    };
  }, [closeCart, isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div
      className={styles.drawerOverlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeCart();
      }}
    >
      <aside
        ref={panelRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className={styles.drawerHeader}>
          <div>
            <h2 id="cart-drawer-title">سبد خرید</h2>
            <p>{itemCount.toLocaleString("fa-IR")} محصول</p>
          </div>
          <IconButton ref={closeRef} label="بستن سبد" onClick={closeCart}>
            <CloseCircle aria-hidden="true" color="currentColor" size={21} />
          </IconButton>
        </div>
        {lines.length === 0 ? (
          <div className={styles.drawerEmpty}>
            <strong>سبد هنوز خالی است.</strong>
            <p>انتخاب بعدی‌ات را از منو پیدا کن.</p>
            <LinkButton href="/menu" onClick={closeCart}>
              دیدن منو
            </LinkButton>
          </div>
        ) : (
          <>
            <div className={styles.drawerLines}>
              {lines.map((line) => (
                <CartLine
                  key={line.id}
                  line={line}
                  compact
                  onNavigate={closeCart}
                />
              ))}
            </div>
            <div className={styles.drawerFooter}>
              <div className={styles.summaryRow}>
                <span>جمع سبد</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>هزینه‌های نهایی پس از مشخص شدن روش تحویل محاسبه می‌شوند.</p>
              <LinkButton href="/cart" onClick={closeCart}>
                مشاهدهٔ کامل سبد
              </LinkButton>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
