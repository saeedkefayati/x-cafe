import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";
export const metadata: Metadata = createPageMetadata({
  title: "حریم خصوصی",
  description:
    "جایگاه موقت سیاست حریم خصوصی ایکس کافه تا آماده شدن متن حقوقی نهایی.",
  path: "/privacy",
  index: false,
  follow: false,
});
export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="حریم خصوصی" />
      <Section spacing="compact">
        <Container size="reading">
          <div className={styles.prose}>
            <p>
              متن حقوقی نهایی باید بر اساس محل فعالیت، شیوهٔ پرداخت و سرویس‌های
              متصل تهیه شود.
            </p>
            <h2>داده‌های ذخیره‌شده در مرورگر</h2>
            <p>
              سبد خرید و ترجیح حالت روشن یا تیره روی همان مرورگر ذخیره می‌شوند
              تا تجربه در مراجعهٔ بعدی ادامه پیدا کند. این نسخه حساب کاربری
              ندارد.
            </p>
            <h2>سفارش آزمایشی</h2>
            <p>
              نام، شمارهٔ تماس و ایمیل اختیاری فقط برای اعتبارسنجی سفارش آزمایشی
              برای بررسی سفارش ارسال می‌شوند. این اطلاعات در پایگاه داده یا کد
              تأیید قرار نمی‌گیرند و به شعبه یا سرویس بیرونی فرستاده نمی‌شوند.
            </p>
            <p>
              لینک نتیجه یک تأییدیهٔ امضاشده با مبلغ، شعبه، زمان آماده‌سازی و کد
              پیگیری آزمایشی است و پس از ۲۴ ساعت اعتبار ندارد.
            </p>
            <h2>موقعیت مکانی و سرویس‌های بیرونی</h2>
            <p>
              سایت موقعیت مکانی مشتری را درخواست یا ذخیره نمی‌کند. در نسخهٔ فعلی
              ابزار تحلیل رفتار، درگاه پرداخت و سامانهٔ سفارش شخص ثالث متصل
              نیست.
            </p>
            <p>
              این توضیح فنی و آزمایشی جایگزین سیاست حقوقی معتبر نیست و پیش از
              انتشار عمومی باید با متن نهایی جایگزین یا تکمیل شود.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
