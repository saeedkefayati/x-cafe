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
        eyebrow="Help"
        title="پرسش‌های رایج"
        description="آنچه اکنون مشخص است و تصمیم‌هایی که هنوز باید پیش از شروع سفارش واقعی گرفته شوند."
      />
      <Section spacing="compact">
        <Container size="reading">
          {faqs.map((faq) => (
            <details className={styles.faq} key={faq.id}>
              <summary>
                <span>{faq.question}</span>
                <small>{faq.category}</small>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </Container>
      </Section>
    </>
  );
}
