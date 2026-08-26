"use client";

import { useActionState, useState, type FormEvent } from "react";
import { submitDemoOrder } from "@/app/checkout/actions";
import { commerceConfig } from "@/config/commerce";
import { useCart } from "@/components/cart/cart-provider";
import { Button, LinkButton } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { Heading, Text } from "@/components/primitives/typography";
import {
  buildCheckoutReview,
  createAuthoritativeCartInput,
  validateCustomerContact,
  type ContactErrors,
} from "@/lib/checkout";
import { serializeCartSnapshot } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { formatPickupReadyTime, getPickupAvailability } from "@/lib/pickup";
import type { CheckoutActionState, CustomerContact } from "@/types/commerce";
import styles from "./checkout.module.css";

const initialActionState: CheckoutActionState = { message: "" };

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

export function CheckoutContent({ now }: { now?: Date } = {}) {
  const { lines, isHydrated } = useCart();
  const observedAt = now ?? new Date();
  const [actionState, formAction, isSubmitting] = useActionState(
    submitDemoOrder,
    initialActionState,
  );
  const [contact, setContact] = useState<CustomerContact>({
    name: "",
    phone: "",
    email: "",
  });
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [isContactValid, setIsContactValid] = useState(false);
  const [pickupSelection, setPickupSelection] = useState<{
    locationId: string;
    selectedAt: Date;
  } | null>(null);

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

  const handleContactCheck = () => {
    const errors = validateCustomerContact(contact);
    setContactErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsContactValid(isValid);

    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) {
      document.getElementById("checkout-" + firstInvalidField)?.focus();
    }
    return isValid;
  };

  if (!isHydrated) {
    return <p role="status">در حال آماده‌سازی سفارش…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Heading size="h3">برای ادامه، ابتدا محصولی انتخاب کنید.</Heading>
        <Text>
          صفحهٔ تسویه‌حساب فقط برای سبدی با حداقل یک محصول نمایش داده می‌شود.
        </Text>
        <LinkButton href="/menu">دیدن منو</LinkButton>
      </div>
    );
  }

  const review = buildCheckoutReview(lines);
  const selectedLocation = commerceConfig.pickupLocations.find(
    (location) => location.id === pickupSelection?.locationId,
  );
  const selectedAvailability = selectedLocation
    ? getPickupAvailability(selectedLocation, observedAt)
    : null;
  const selectedReadyTime =
    selectedLocation && pickupSelection
      ? formatPickupReadyTime(selectedLocation, pickupSelection.selectedAt)
      : null;
  const cartSnapshot = serializeCartSnapshot(
    createAuthoritativeCartInput(lines),
  );
  const canSubmitDemoOrder =
    isContactValid &&
    Boolean(selectedLocation) &&
    Boolean(selectedAvailability?.acceptingOrders);

  const handleOrderSubmit = (event: FormEvent<HTMLFormElement>) => {
    const contactIsValid = handleContactCheck();
    if (!contactIsValid || !canSubmitDemoOrder) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.layout}>
      <form
        className={styles.form}
        aria-label="اطلاعات تسویه‌حساب"
        aria-describedby={
          actionState.message
            ? "checkout-preview-note checkout-action-message"
            : "checkout-preview-note"
        }
        action={formAction}
        noValidate
        onSubmit={handleOrderSubmit}
      >
        <input type="hidden" name="cartSnapshot" value={cartSnapshot} />
        <section className={styles.panel} aria-labelledby="contact-title">
          <div className={styles.stepHeading}>
            <span>۱</span>
            <div>
              <Heading as="h2" id="contact-title" size="h4">
                اطلاعات تماس
              </Heading>
              <Text size="bodySm">برای هماهنگی آماده شدن سفارش.</Text>
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
              error={contactErrors.name ?? actionState.fieldErrors?.name}
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
              error={contactErrors.phone ?? actionState.fieldErrors?.phone}
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
              error={contactErrors.email ?? actionState.fieldErrors?.email}
              onChange={(event) => setContactField("email", event.target.value)}
              onBlur={() => validateField("email")}
            />
          </div>
          <div className={styles.contactActions}>
            <Button
              type="button"
              variant="secondary"
              onClick={handleContactCheck}
            >
              بررسی اطلاعات تماس
            </Button>
            {isContactValid ? (
              <p className={styles.validationSuccess} role="status">
                اطلاعات تماس تأیید شد.
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
              <Text size="bodySm">یکی از سه شعبهٔ تهران را انتخاب کنید.</Text>
            </div>
          </div>
          <fieldset className={styles.locationFieldset}>
            <legend>شعبهٔ تحویل</legend>
            <div className={styles.locationOptions}>
              {commerceConfig.pickupLocations.map((location) => {
                const availability = getPickupAvailability(
                  location,
                  observedAt,
                );
                const inputId = "pickup-" + location.slug;
                return (
                  <div className={styles.locationOption} key={location.id}>
                    <input
                      id={inputId}
                      type="radio"
                      name="pickupLocationId"
                      value={location.id}
                      checked={pickupSelection?.locationId === location.id}
                      onChange={() =>
                        setPickupSelection({
                          locationId: location.id,
                          selectedAt: observedAt,
                        })
                      }
                    />
                    <label htmlFor={inputId}>
                      <span className={styles.locationTitleRow}>
                        <strong>{location.name}</strong>
                        <small data-state={availability.state}>
                          {availability.label}
                        </small>
                      </span>
                      <span>{location.address}</span>
                      <span className={styles.locationMeta}>
                        <span dir="ltr">{location.phone}</span>
                        <span>{location.openingHours.join("، ")}</span>
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
          {selectedLocation ? (
            <div className={styles.readyEstimate} aria-live="polite">
              <strong>
                زمان آماده‌سازی سفارش:{" "}
                {selectedLocation.pickupSchedule?.preparationMinutes.toLocaleString(
                  "fa-IR",
                )}{" "}
                دقیقه
              </strong>
              {selectedAvailability?.acceptingOrders && selectedReadyTime ? (
                <p>
                  اگر سفارش همین حالا ثبت شود، حدود ساعت {selectedReadyTime} از{" "}
                  {selectedLocation.name} آمادهٔ تحویل است.
                </p>
              ) : (
                <p>
                  این شعبه در حال حاضر سفارش تحویل حضوری نمی‌پذیرد؛ ساعات کاری
                  بالا را بررسی کنید.
                </p>
              )}
            </div>
          ) : (
            <div className={styles.pendingBox}>
              <strong>هنوز شعبه‌ای انتخاب نشده است.</strong>
              <p>
                برای دیدن زمان تقریبی آماده شدن، شعبهٔ تحویل را انتخاب کنید.
              </p>
            </div>
          )}
          <p className={styles.sampleNotice}>
            اطلاعات شعبه‌ها از مرجع اعلام‌شده به‌روز شده است؛ ثبت سفارش همچنان
            آزمایشی است و به شعبه ارسال نمی‌شود.
          </p>
          {actionState.fieldErrors?.pickupLocationId ? (
            <p className={styles.actionError} role="alert">
              {actionState.fieldErrors.pickupLocationId}
            </p>
          ) : null}
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
              <p>مبلغ سفارش هنگام تحویل حضوری در شعبه پرداخت می‌شود.</p>
            </div>
          </div>
        </section>

        <div className={styles.submitArea}>
          <p className={styles.previewNote} id="checkout-preview-note">
            این سفارش فقط برای پیش‌نمایش تجربهٔ خرید است؛ اطلاعات تماس ذخیره
            نمی‌شوند و سفارش به شعبه ارسال نخواهد شد.
          </p>
          {actionState.message ? (
            <p
              className={styles.actionError}
              id="checkout-action-message"
              role="alert"
            >
              {actionState.message}
            </p>
          ) : null}
          <Button type="submit" disabled={!canSubmitDemoOrder || isSubmitting}>
            {isSubmitting ? "در حال بررسی سفارش…" : "ثبت سفارش آزمایشی"}
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
      </aside>
    </div>
  );
}
