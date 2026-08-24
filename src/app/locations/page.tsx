import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import styles from "../site.module.css";

export const metadata: Metadata = { title: "شعبه‌ها" };
export default function LocationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit"
        title="دیدار بعدی، با یک نشانی واقعی."
        description="اطلاعات شعبه هنوز نهایی نشده است؛ این صفحه آماده است تا به‌محض تأیید، نشانی و ساعت دقیق را نمایش دهد."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.locationStatus}>
            <span className={styles.mockNotice}>در انتظار اطلاعات نهایی</span>
            <Heading size="h2">هنوز شعبه‌ای برای نمایش عمومی ثبت نشده.</Heading>
            <Text size="bodyLg">
              برای جلوگیری از نمایش نشانی یا ساعت ساختگی، این بخش تا زمان تأیید
              اطلاعات عملیاتی به همین شکل شفاف باقی می‌ماند.
            </Text>
          </div>
          <div className={styles.infoGrid}>
            <article>
              <span>۰۱</span>
              <Heading as="h2" size="h4">
                نشانی و مسیر
              </Heading>
              <Text>آدرس کامل، نشانه‌های مسیر و لینک نقشه.</Text>
            </article>
            <article>
              <span>۰۲</span>
              <Heading as="h2" size="h4">
                ساعت کاری
              </Heading>
              <Text>روزها، ساعت‌های سرویس و تغییرات مناسبتی.</Text>
            </article>
            <article>
              <span>۰۳</span>
              <Heading as="h2" size="h4">
                شیوهٔ دریافت
              </Heading>
              <Text>
                سفارش حضوری، دریافت از شعبه یا ارسال؛ پس از تصمیم نهایی.
              </Text>
            </article>
          </div>
          <div className={styles.inlineActions}>
            <LinkButton href="/menu">دیدن منوی فعلی</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              وضعیت راه‌های تماس
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
