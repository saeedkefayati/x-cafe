import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";
export const metadata: Metadata = createPageMetadata({
  title: "شرایط استفاده",
  description: "جایگاه موقت شرایط استفاده تا آماده‌شدن سیاست حقوقی نهایی.",
  path: "/terms",
  index: false,
  follow: false,
});
export default function TermsPage() {
  return (
    <>
      <PageIntro title="شرایط استفاده" />
      <Section spacing="compact">
        <Container size="reading">
          <div className={styles.prose}>
            <p>
              شرایط سفارش، لغو، بازپرداخت و تحویل پس از نهایی‌شدن مدل کسب‌وکار
              در این صفحه درج می‌شود.
            </p>
            <h2>وضعیت نسخهٔ فعلی</h2>
            <p>
              نام برند، قیمت‌ها و اطلاعات شعبه‌ها آزمایشی‌اند. ثبت سفارش فعلی
              فقط جریان فنی سایت را بررسی می‌کند و قرارداد خرید یا سفارش واقعی
              ایجاد نمی‌کند.
            </p>
            <h2>پرداخت و تحویل</h2>
            <p>
              درگاه آنلاین متصل نیست و مبلغی دریافت نمی‌شود. پرداخت هنگام تحویل
              فقط تصمیم نسخهٔ اول است و تا اتصال سامانهٔ سفارش واقعی عملیاتی
              محسوب نمی‌شود.
            </p>
            <h2>لغو و بازپرداخت</h2>
            <p>
              چون سفارش و پرداخت واقعی انجام نمی‌شود، فرایند لغو یا بازپرداخت
              نیز هنوز وجود ندارد. سیاست نهایی باید پیش از شروع فروش عمومی درج
              شود.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
