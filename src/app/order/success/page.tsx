import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Text } from "@/components/primitives/typography";
import styles from "../../site.module.css";
export const metadata: Metadata = {
  title: "ثبت سفارش",
  robots: { index: false, follow: false },
};
export default function SuccessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Order"
        title="هنوز سفارشی ثبت نشده است."
        description="این صفحه پس از فعال‌شدن ثبت و پرداخت واقعی، فقط برای سفارش‌های تأییدشده نمایش داده می‌شود."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.emptyState}>
            <Text>
              اکنون شماره سفارش یا زمان تحویلی وجود ندارد. می‌توانید منو و سبد
              آزمایشی را بدون ایجاد سفارش واقعی بررسی کنید.
            </Text>
            <LinkButton href="/menu">بازگشت به منو</LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
