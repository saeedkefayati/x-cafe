import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { locations } from "@/data/locations";
import { catalogProducts } from "@/data/products";
import { resolveCartLines } from "@/lib/cart";
import { buildCheckoutReview, validateCustomerContact } from "@/lib/checkout";
import { getPickupAvailability, getPickupReadyAt } from "@/lib/pickup";
import type {
  CheckoutActionState,
  DemoOrderConfirmation,
  PickupOrderRequest,
} from "@/types/commerce";

const DEMO_CONFIRMATION_LIFETIME_MS = 24 * 60 * 60 * 1000;
const fallbackSecret =
  "cafe-commerce-local-demo-only-set-DEMO_ORDER_CONFIRMATION_SECRET";

function confirmationSecret() {
  const configuredSecret = process.env.DEMO_ORDER_CONFIRMATION_SECRET;
  if (configuredSecret) return configuredSecret;
  if (process.env.NODE_ENV !== "production") return fallbackSecret;
  throw new Error(
    "DEMO_ORDER_CONFIRMATION_SECRET is required for demo order confirmations.",
  );
}

function sign(value: string) {
  return createHmac("sha256", confirmationSecret())
    .update(value)
    .digest("base64url");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isConfirmation(value: unknown): value is DemoOrderConfirmation {
  return (
    isRecord(value) &&
    value.schemaVersion === 1 &&
    value.mode === "demo" &&
    typeof value.orderId === "string" &&
    typeof value.issuedAt === "string" &&
    typeof value.expiresAt === "string" &&
    typeof value.readyAt === "string" &&
    typeof value.locationId === "string" &&
    typeof value.itemCount === "number" &&
    typeof value.subtotal === "number" &&
    typeof value.currency === "string"
  );
}

export type DemoOrderAttempt =
  | {
      status: "accepted";
      confirmation: DemoOrderConfirmation;
      confirmationToken: string;
    }
  | {
      status: "rejected";
      message: string;
      fieldErrors?: CheckoutActionState["fieldErrors"];
    };

export function createDemoOrderAttempt(
  request: PickupOrderRequest,
  at: Date,
): DemoOrderAttempt {
  const contactErrors = validateCustomerContact(request.customer);
  if (Object.keys(contactErrors).length > 0) {
    return {
      status: "rejected",
      message: "اطلاعات تماس را بررسی کنید.",
      fieldErrors: contactErrors,
    };
  }

  const location = locations.find(
    (item) => item.id === request.fulfillment.locationId && item.pickupEnabled,
  );
  if (!location) {
    return {
      status: "rejected",
      message: "شعبهٔ تحویل معتبر نیست.",
      fieldErrors: {
        pickupLocationId: "یکی از شعبه‌های تحویل را انتخاب کنید.",
      },
    };
  }

  const availability = getPickupAvailability(location, at);
  if (!availability.acceptingOrders) {
    return {
      status: "rejected",
      message: "این شعبه در حال حاضر سفارش تحویل حضوری نمی‌پذیرد.",
      fieldErrors: { pickupLocationId: availability.label },
    };
  }

  if (request.cart.length === 0 || request.cart.length > 20) {
    return {
      status: "rejected",
      message: "سبد سفارش معتبر نیست.",
      fieldErrors: { cart: "سبد باید بین ۱ تا ۲۰ ردیف معتبر داشته باشد." },
    };
  }

  const resolvedLines = resolveCartLines(request.cart, catalogProducts);
  const allLinesAvailable =
    resolvedLines.length === request.cart.length &&
    resolvedLines.every(
      (line) =>
        line.product.status === "available" &&
        line.product.availability === "available",
    );
  if (!allLinesAvailable) {
    return {
      status: "rejected",
      message: "یک یا چند محصول دیگر قابل سفارش نیست.",
      fieldErrors: { cart: "سبد را با منوی فعلی دوباره بررسی کنید." },
    };
  }

  const review = buildCheckoutReview(resolvedLines);
  const readyAt = getPickupReadyAt(location, at);
  if (!readyAt || !review.currency) {
    return {
      status: "rejected",
      message: "زمان یا مبلغ سفارش قابل محاسبه نیست.",
    };
  }

  const confirmation: DemoOrderConfirmation = {
    schemaVersion: 1,
    mode: "demo",
    orderId:
      "CAFE-" + randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase(),
    issuedAt: at.toISOString(),
    expiresAt: new Date(
      at.getTime() + DEMO_CONFIRMATION_LIFETIME_MS,
    ).toISOString(),
    readyAt: readyAt.toISOString(),
    locationId: location.id,
    itemCount: review.itemCount,
    subtotal: review.subtotal,
    currency: review.currency,
  };
  const encoded = Buffer.from(JSON.stringify(confirmation)).toString(
    "base64url",
  );
  return {
    status: "accepted",
    confirmation,
    confirmationToken: encoded + "." + sign(encoded),
  };
}

export function verifyDemoOrderConfirmation(
  token: string,
  at = new Date(),
): DemoOrderConfirmation | null {
  const [encoded, signature, extra] = token.split(".");
  if (!encoded || !signature || extra) return null;

  const expected = Buffer.from(sign(encoded));
  const received = Buffer.from(signature);
  if (
    expected.length !== received.length ||
    !timingSafeEqual(expected, received)
  ) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    );
    if (!isConfirmation(parsed)) return null;
    const issuedAt = Date.parse(parsed.issuedAt);
    const expiresAt = Date.parse(parsed.expiresAt);
    const readyAt = Date.parse(parsed.readyAt);
    if (
      !/^CAFE-[A-F0-9]{10}$/.test(parsed.orderId) ||
      !locations.some((location) => location.id === parsed.locationId) ||
      parsed.currency !== "IRR" ||
      !Number.isFinite(issuedAt) ||
      !Number.isFinite(expiresAt) ||
      !Number.isFinite(readyAt) ||
      issuedAt > at.getTime() + 60_000 ||
      expiresAt - issuedAt !== DEMO_CONFIRMATION_LIFETIME_MS ||
      readyAt < issuedAt ||
      !Number.isFinite(parsed.itemCount) ||
      !Number.isFinite(parsed.subtotal) ||
      !Number.isInteger(parsed.itemCount) ||
      !Number.isInteger(parsed.subtotal) ||
      parsed.itemCount < 1 ||
      parsed.itemCount > 400 ||
      parsed.subtotal < 0 ||
      expiresAt <= at.getTime()
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
