"use client";

import { useState, type FormEvent } from "react";
import { commerceConfig, getCommerceBlockers } from "@/config/commerce";
import { useCart } from "@/components/cart/cart-provider";
import { Button, LinkButton } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { Heading, Text } from "@/components/primitives/typography";
import {
  buildCheckoutReview,
  validateCustomerContact,
  type ContactErrors,
} from "@/lib/checkout";
import { formatPrice } from "@/lib/format";
import type { CustomerContact } from "@/types/commerce";
import styles from "./checkout.module.css";

const blockers = getCommerceBlockers(commerceConfig);

function updateFieldError(
  errors: ContactErrors,
  field: keyof CustomerContact,
  error: string | undefined,
) {
  const nextErrors = { ...errors };
  if (error) {
    nextErrors[field] = error;
  } else {
    delete nextErrors[field];
  }
  return nextErrors;
}

export function CheckoutContent() {
  const { lines, isHydrated } = useCart();
  const [contact, setContact] = useState<CustomerContact>({
    name: "",
    phone: "",
    email: "",
  });
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [isContactValid, setIsContactValid] = useState(false);

  const setContactField = (field: keyof CustomerContact, value: string) => {
    const nextContact = { ...contact, [field]: value };
    setContact(nextContact);
    setIsContactValid(false);

    if (contactErrors[field]) {
      setContactErrors((current) =>
        updateFieldError(
          current,
          field,
          validateCustomerContact(nextContact)[field],
        ),
      );
    }
  };

  const validateField = (field: keyof CustomerContact) => {
    setContactErrors((current) =>
      updateFieldError(current, field, validateCustomerContact(contact)[field]),
    );
  };

  const handleContactCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateCustomerContact(contact);
    setContactErrors(errors);
    setIsContactValid(Object.keys(errors).length === 0);

    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) {
      const field = event.currentTarget.elements.namedItem(firstInvalidField);
      if (field instanceof HTMLElement) {
        field.focus();
      }
    }
  };

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
        noValidate
        onSubmit={handleContactCheck}
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
              value={contact.name}
              error={contactErrors.name}
              onChange={(event) => setContactField("name", event.target.value)}
              onBlur={() => validateField("name")}
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
              value={contact.phone}
              error={contactErrors.phone}
              onChange={(event) => setContactField("phone", event.target.value)}
              onBlur={() => validateField("phone")}
            />
            <TextField
              id="checkout-email"
              name="email"
              label="ایمیل"
              hint="اختیاری"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={contact.email}
              error={contactErrors.email}
              onChange={(event) => setContactField("email", event.target.value)}
              onBlur={() => validateField("email")}
            />
          </div>
          <div className={styles.contactActions}>
            <Button type="submit" variant="secondary">
              بررسی اطلاعات تماس
            </Button>
            {isContactValid ? (
              <p className={styles.validationSuccess} role="status">
                اطلاعات تماس برای ادامه آماده است.
              </p>
            ) : null}
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
              <Text size="bodySm">نسخهٔ اول درگاه پرداخت آنلاین ندارد.</Text>
            </div>
          </div>
          <div className={styles.selectedMethod}>
            <span aria-hidden="true">✓</span>
            <div>
              <strong>پرداخت هنگام تحویل</strong>
              <p>مبلغ سفارش هنگام تحویل حضوری در کافه پرداخت می‌شود.</p>
            </div>
          </div>
        </section>

        <div className={styles.submitArea}>
          <p className={styles.previewNote} id="checkout-preview-note">
            اطلاعات تماس فقط در همین صفحه بررسی می‌شوند؛ ارسال یا ذخیره‌ای انجام
            نمی‌شود.
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
