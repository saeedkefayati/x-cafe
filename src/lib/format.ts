export function formatPrice(
  amount: number,
  currency = "IRR",
  locale = "fa-IR",
) {
  if (currency === "IRR") {
    const toman = amount / 10;
    return `${new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0,
    }).format(toman)} تومان`;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string, locale = "fa-IR") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}
