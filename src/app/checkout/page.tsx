import type { Metadata } from "next";
import { CheckoutContent } from "@/components/checkout/checkout-content";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { createPageMetadata } from "@/lib/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "تسویه‌حساب",
  description: "تکمیل اطلاعات سفارش آزمایشی و انتخاب شعبهٔ تحویل حضوری.",
  path: "/checkout",
  index: false,
  follow: false,
});
export default function CheckoutPage() {
  return (
    <>
      <PageIntro
        title="تسویه‌حساب"
        description="نسخهٔ اول برای تحویل حضوری طراحی شده است؛ اطلاعات تماس، محل تحویل، پرداخت و مرور سفارش در یک مسیر کوتاه."
      />
      <Section spacing="compact">
        <Container>
          <CheckoutContent />
        </Container>
      </Section>
    </>
  );
}
