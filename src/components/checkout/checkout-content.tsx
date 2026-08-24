"use client";

import { commerceConfig, getCommerceBlockers } from "@/config/commerce";
import { useCart } from "@/components/cart/cart-provider";
import { Button, LinkButton } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { Heading, Text } from "@/components/primitives/typography";
import { buildCheckoutReview } from "@/lib/checkout";
import { formatPrice } from "@/lib/format";
import styles from "./checkout.module.css";

const blockers = getCommerceBlockers(commerceConfig);

export function CheckoutContent() {
  const { lines, isHydrated } = useCart();

  if (!isHydrated) {
    return <p role="status">در حال آماده‌سازی سفارش…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Heading size="h3">برای ادامه، ابتدا محصولی انتخاب کنید.</Heading>
        <Text>Checkout فقط برای سبدی با حداقل یک محصول نمایش داده می‌شود.</Text>
        <LinkButton href="/menu">دیدن منو</LinkButton>
      </div>
    );
  }

  const review = buildCheckoutReview(lines);

  return (
    <div className={styles.layout}>
      <form
        className={styles.form}
        aria-label="اطلاعات تسویه حساب"
        aria-describedby="checkout-preview-note"
        onSubmit={(event) => event.preventDefault()}
      >
        <section className={styles.panel} aria-labelledby="contact-title">
          <div className={styles.stepHeading}>
            <span>۱</span>
            <div>
              <Heading as="h2" id="contact-title" size="h4">
                اطلاعات تماس
              </Heading>
              <Text size="bodySm">برای هماهنگی آماده‌شدن سفارش.</Text>
            </div>
          </div>
          <div className={styles.fieldGrid}>
            <TextField
              id="checkout-name"
              name="name"
              label="نام و نام خانوادگی"
              autoComplete="name"
              minLength={2}
              maxLength={80}
              required
            />
            <TextField
              id="checkout-phone"
              name="phone"
              label="شمارهٔ تماس"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              minLength={8}
              maxLength={20}
              required
            />
            <TextField
              id="checkout-email"
              name="email"
              label="ایمیل"
              hint="اختیاری"
              type="email"
              inputMode="email"
              autoComplete="email"
            />
          </div>
        </section>

        <section className={styles.panel} aria-labelledby="fulfillment-title">
          <div className={styles.stepHeading}>
            <span>۲</span>
            <div>
              <Heading as="h2" id="fulfillment-title" size="h4">
                روش تحویل
              </Heading>
              <Text size="bodySm">نسخهٔ اول فقط تحویل حضوری دارد.</Text>
            </div>
          </div>
          <div className={styles.selectedMethod}>
            <span aria-hidden="true">✓</span>
            <div>
              <strong>تحویل حضوری</strong>
              <p>بدون آدرس مشتری و بدون هزینهٔ ارسال.</p>
            </div>
          </div>
        </section>

        <section className={styles.panel} aria-labelledby="pickup-title">
          <div className={styles.stepHeading}>
            <span>۳</span>
            <div>
              <Heading as="h2" id="pickup-title" size="h4">
                محل و زمان تحویل
              </Heading>
              <Text size="bodySm">
                پس از ثبت نشانی و ساعت کاری واقعی فعال می‌شود.
              </Text>
            </div>
          </div>
          <div className={styles.pendingBox}>
            <strong>محل تحویل هنوز مشخص نشده است.</strong>
            <p>
              برای نمایش زمان‌های معتبر، ابتدا نشانی شعبه و ساعت کاری لازم است.
            </p>
          </div>
        </section>

        <section className={styles.panel} aria-labelledby="payment-title">
          <div className={styles.stepHeading}>
            <span>۴</span>
            <div>
              <Heading as="h2" id="payment-title" size="h4">
                پرداخت
              </Heading>
              <Text size="bodySm">روش پرداخت تصمیم بعدی فاز پنجم است.</Text>
            </div>
          </div>
          <div className={styles.pendingBox}>
            <strong>هیچ مبلغی دریافت نمی‌شود.</strong>
            <p>درگاه آنلاین یا پرداخت هنگام تحویل هنوز انتخاب نشده است.</p>
          </div>
        </section>

        <div className={styles.submitArea}>
          <p className={styles.previewNote} id="checkout-preview-note">
            این صفحه فعلاً پیش‌نمایش امن Checkout است؛ اطلاعات واردشده ارسال یا
            ذخیره نمی‌شوند.
          </p>
          <Button type="button" disabled>
            ثبت سفارش پس از تکمیل تنظیمات
          </Button>
        </div>
      </form>

      <aside className={styles.summary} aria-labelledby="order-review-title">
        <Heading as="h2" id="order-review-title" size="h4">
          مرور سفارش
        </Heading>
        <ul className={styles.summaryLines}>
          {review.lines.map((line) => (
            <li key={line.id}>
              <div>
                <strong>
                  {line.quantity.toLocaleString("fa-IR")} × {line.name}
                </strong>
                {line.optionLabels.length > 0 ? (
                  <small>{line.optionLabels.join("، ")}</small>
                ) : null}
              </div>
              <span>
                {formatPrice(line.totalPrice, review.currency ?? "IRR")}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.totalRow}>
          <span>{review.itemCount.toLocaleString("fa-IR")} محصول</span>
          <strong>
            {formatPrice(review.subtotal, review.currency ?? "IRR")}
          </strong>
        </div>
        <Text size="caption">
          مبلغ نهایی پس از تعیین قوانین مالیات و هزینهٔ خدمات محاسبه می‌شود.
        </Text>
        <LinkButton href="/cart" variant="secondary">
          ویرایش سبد
        </LinkButton>
        <div className={styles.blockers}>
          <strong>موارد لازم برای فعال‌شدن سفارش</strong>
          <ul>
            {blockers.map((blocker) => (
              <li key={blocker.id}>{blocker.label}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
