import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { faqs } from "@/data/mock";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "پرسش‌های رایج" };
export default function FAQPage() {
  return (
    <>
      <PageIntro
        title="پرسش‌های رایج"
        description="پاسخ‌های نهایی با سیاست واقعی سفارش، تحویل و آلرژن‌ها تکمیل می‌شوند."
      />
      <Section spacing="compact">
        <Container size="reading">
          {faqs.map((faq) => (
            <details className={styles.faq} key={faq.id}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </Container>
      </Section>
    </>
  );
}
