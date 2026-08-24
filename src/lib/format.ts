export function formatPrice(
  amount: number,
  currency = "IRR",
  locale = "fa-IR",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
