"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { IconButton } from "@/components/controls/button";
import { Container } from "@/components/primitives/layout";
import { useTheme } from "@/components/theme/theme-provider";
import styles from "./shell.module.css";

const links: Array<{ href: Route; label: string }> = [
  { href: "/menu", label: "منو" },
  { href: "/journal", label: "ژورنال" },
  { href: "/about", label: "دربارهٔ ما" },
  { href: "/locations", label: "شعبه‌ها" },
];

export function Header() {
  const { itemCount, openCart } = useCart();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="کافه، صفحهٔ اصلی">
            <span className={styles.brandMark}>
              کافه <span className={styles.brandNote}>نام موقت</span>
            </span>
          </Link>
          <nav className={styles.desktopNav} aria-label="ناوبری اصلی">
            {links.map((link) => (
              <Link className={styles.navLink} href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.utilities}>
            <Link className={styles.utilityLink} href="/search">
              جست‌وجو
            </Link>
            <button
              className={`${styles.utilityLink} ${styles.utilityButton}`}
              type="button"
              aria-haspopup="dialog"
              onClick={openCart}
            >
              سبد{" "}
              <span
                className={styles.cartCount}
                aria-label={`${itemCount.toLocaleString("fa-IR")} محصول در سبد`}
              >
                {itemCount.toLocaleString("fa-IR")}
              </span>
            </button>
            <IconButton
              label={
                resolvedTheme === "dark"
                  ? "فعال‌کردن حالت روشن"
                  : "فعال‌کردن حالت تیره"
              }
              onClick={toggleTheme}
            >
              <span aria-hidden="true">
                {resolvedTheme === "dark" ? "☀" : "☾"}
              </span>
            </IconButton>
            <span className={styles.mobileTrigger}>
              <IconButton
                ref={triggerRef}
                label="باز کردن منو"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen(true)}
              >
                ☰
              </IconButton>
            </span>
          </div>
        </Container>
      </header>
      {open ? (
        <div
          className={styles.mobileOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            className={styles.mobilePanel}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="منوی اصلی"
          >
            <div className={styles.mobilePanelHeader}>
              <strong>فهرست</strong>
              <IconButton
                ref={closeRef}
                label="بستن منو"
                onClick={() => setOpen(false)}
              >
                ×
              </IconButton>
            </div>
            <nav className={styles.mobileNav}>
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                تماس
              </Link>
              <Link href="/faq" onClick={() => setOpen(false)}>
                پرسش‌های رایج
              </Link>
              <Link href="/search" onClick={() => setOpen(false)}>
                جست‌وجو
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
