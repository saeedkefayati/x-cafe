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
        title="سفارش ثبت شد."
        description="این صفحه فعلاً نمونهٔ رابط موفقیت سفارش است."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.emptyState}>
            <Text>
              شماره و زمان تحویل پس از اتصال Backend در این بخش نمایش داده
              می‌شود.
            </Text>
            <LinkButton href="/menu">بازگشت به منو</LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
