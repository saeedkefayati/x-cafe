import type { CartLineRecord, ResolvedCartLine } from "@/types/domain";
import type { CustomerContact } from "@/types/commerce";

export interface CheckoutReview {
  lines: Array<{
    id: string;
    name: string;
    optionLabels: string[];
    quantity: number;
    totalPrice: number;
  }>;
  itemCount: number;
  subtotal: number;
  currency: string | null;
}

export function buildCheckoutReview(lines: ResolvedCartLine[]): CheckoutReview {
  const currencies = new Set(lines.map((line) => line.product.currency));
  if (currencies.size > 1) {
    throw new Error("Checkout cannot combine multiple currencies");
  }

  return {
    lines: lines.map((line) => ({
      id: line.id,
      name: line.product.shortName ?? line.product.name,
      optionLabels: [...line.optionLabels],
      quantity: line.quantity,
      totalPrice: line.totalPrice,
    })),
    itemCount: lines.reduce((total, line) => total + line.quantity, 0),
    subtotal: lines.reduce((total, line) => total + line.totalPrice, 0),
    currency: lines[0]?.product.currency ?? null,
  };
}

export function createAuthoritativeCartInput(
  lines: ResolvedCartLine[],
): CartLineRecord[] {
  return lines.map((line) => ({
    id: line.id,
    productId: line.productId,
    selection: {
      ...line.selection,
      extraIds: [...line.selection.extraIds],
    },
    quantity: line.quantity,
  }));
}

const localizedDigits: Record<string, string> = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
};

export function normalizePhone(value: string) {
  return value
    .trim()
    .replace(/[۰-۹٠-٩]/g, (digit) => localizedDigits[digit])
    .replace(/[\s()-]/g, "");
}

export type ContactErrors = Partial<Record<keyof CustomerContact, string>>;

export function validateCustomerContact(input: CustomerContact): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const phone = normalizePhone(input.phone);
  const email = input.email?.trim();
  const phoneDigits = phone.replace(/^\+/, "");

  if (name.length < 2 || name.length > 80) {
    errors.name = "نام باید بین ۲ تا ۸۰ نویسه باشد.";
  }
  if (!/^\+?\d{8,15}$/.test(phone) || phoneDigits.length > 15) {
    errors.phone = "شمارهٔ تماس باید بین ۸ تا ۱۵ رقم باشد.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "نشانی ایمیل معتبر نیست.";
  }
  return errors;
}
