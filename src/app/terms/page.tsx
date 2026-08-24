import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "شرایط استفاده" };
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
            <p>محتوای فعلی صرفاً Route و Layout قانونی را آماده می‌کند.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
