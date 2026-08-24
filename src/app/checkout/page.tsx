import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import styles from "../site.module.css";
export const metadata: Metadata = {
  title: "تسویه حساب",
  robots: { index: false, follow: false },
};
export default function CheckoutPage() {
  return (
    <>
      <PageIntro
        title="تسویه حساب"
        description="ثبت و پرداخت سفارش پس از مشخص‌شدن روش تحویل و زیرساخت واقعی فعال می‌شود."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.emptyState}>
            <span className={styles.mockNotice}>ثبت سفارش غیرفعال است</span>
            <Heading size="h3">پرداخت واقعی هنوز فعال نیست.</Heading>
            <Text>
              روش تحویل، محدودهٔ سرویس، درگاه پرداخت و سامانهٔ سفارش هنوز از
              تصمیم‌های باز کسب‌وکار هستند.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
