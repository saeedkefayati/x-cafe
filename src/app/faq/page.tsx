import type { Metadata } from "next";
import { FAQList } from "@/components/content/faq-list";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { faqs } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "پرسش‌های رایج",
  description: "پاسخ پرسش‌های رایج دربارهٔ منو، سفارش آزمایشی و تحویل حضوری.",
  path: "/faq",
});
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
          <FAQList items={faqs} />
        </Container>
      </Section>
    </>
  );
}
