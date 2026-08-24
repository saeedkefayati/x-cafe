import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/cart-page-content";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
export const metadata: Metadata = { title: "سبد خرید" };
export default function CartPage() {
  return (
    <>
      <PageIntro title="سبد خرید" />
      <Section spacing="compact">
        <Container>
          <CartPageContent />
        </Container>
      </Section>
    </>
  );
}
