import type { Metadata } from "next";
import { ClearCartOnConfirmation } from "@/components/checkout/clear-cart-on-confirmation";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Text } from "@/components/primitives/typography";
import { locations } from "@/data/locations";
import { verifyDemoOrderConfirmation } from "@/lib/demo-order";
import { formatPrice } from "@/lib/format";
import styles from "../../site.module.css";

export const metadata: Metadata = {
  title: "ثبت سفارش",
  robots: { index: false, follow: false },
};

function formatReadyAt(value: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    timeZone: "Asia/Tehran",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(value));
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    confirmation?: string | string[];
  }>;
}) {
  const value = (await searchParams).confirmation;
  const token = typeof value === "string" ? value : "";
  const confirmation = token ? verifyDemoOrderConfirmation(token) : null;
  const location = confirmation
    ? locations.find((item) => item.id === confirmation.locationId)
    : null;

  if (!confirmation || !location) {
    return (
      <>
        <PageIntro
          eyebrow="Order"
          title="تأیید معتبری برای نمایش وجود ندارد."
          description="صفحهٔ موفقیت فقط با تأیید آزمایشی صادرشده از سرور نمایش داده می‌شود."
        />
        <Section spacing="compact">
          <Container>
            <div className={styles.emptyState}>
              <Text>
                برای ساخت یک سفارش آزمایشی معتبر، از منو محصول انتخاب کنید و
                مسیر Checkout را کامل کنید.
              </Text>
              <LinkButton href="/menu">بازگشت به منو</LinkButton>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <ClearCartOnConfirmation />
      <PageIntro
        eyebrow="Demo order"
        title="سفارش آزمایشی تأیید شد."
        description="سرور سبد، شعبه و زمان تحویل را دوباره بررسی کرده و یک کد پیگیری آزمایشی صادر کرده است."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.orderConfirmation}>
            <span className={styles.mockNotice}>سفارش آزمایشی</span>
            <dl>
              <div>
                <dt>کد پیگیری</dt>
                <dd dir="ltr">{confirmation.orderId}</dd>
              </div>
              <div>
                <dt>شعبهٔ تحویل</dt>
                <dd>{location.name}</dd>
              </div>
              <div>
                <dt>زمان تقریبی تحویل</dt>
                <dd>{formatReadyAt(confirmation.readyAt)}</dd>
              </div>
              <div>
                <dt>تعداد محصولات</dt>
                <dd>{confirmation.itemCount.toLocaleString("fa-IR")}</dd>
              </div>
              <div>
                <dt>مبلغ آزمایشی</dt>
                <dd>
                  {formatPrice(confirmation.subtotal, confirmation.currency)}
                </dd>
              </div>
              <div>
                <dt>روش پرداخت</dt>
                <dd>هنگام تحویل</dd>
              </div>
            </dl>
            <Text>
              این تأیید برای آزمایش کامل جریان سفارش است؛ اطلاعات تماس در
              دیتابیس ذخیره نشده و سفارش به شعبه یا صندوق واقعی ارسال نشده است.
            </Text>
            <div className={styles.inlineActions}>
              <LinkButton href="/menu">سفارش آزمایشی جدید</LinkButton>
              <LinkButton href="/locations" variant="secondary">
                دیدن شعبه‌ها
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
