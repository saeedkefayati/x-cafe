import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/cart-page-content";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { createPageMetadata } from "@/lib/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "سبد خرید",
  description: "مرور و ویرایش محصولات انتخاب‌شده برای سفارش آزمایشی.",
  path: "/cart",
  index: false,
  follow: false,
});
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
