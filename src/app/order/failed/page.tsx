import type { Metadata } from "next";
import { CloseCircle, Refresh } from "iconsax-react";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../../site.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "سفارش ناموفق",
  description: "راهنمای ادامه دادن پس از ناموفق بودن سفارش آزمایشی.",
  path: "/order/failed",
  index: false,
  follow: false,
});

export default function FailedOrderPage() {
  return (
    <>
      <PageIntro
        eyebrow="Order"
        title="سفارش کامل نشد."
        description="هیچ سفارش واقعی یا پرداختی ثبت نشده است؛ می‌توانید اطلاعات را بررسی و دوباره تلاش کنید."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.orderFailure}>
            <CloseCircle
              aria-hidden="true"
              color="currentColor"
              size={46}
              variant="Bulk"
            />
            <div>
              <Heading as="h2" size="h3">
                سبد شما دست‌نخورده می‌ماند.
              </Heading>
              <Text>
                به سبد برگردید، شعبه و اطلاعات تماس را بررسی کنید و سپس دوباره
                وارد تسویه‌حساب شوید. در این نسخه پرداخت آنلاین وجود ندارد.
              </Text>
            </div>
            <div className={styles.inlineActions}>
              <LinkButton href="/checkout">
                <Refresh aria-hidden="true" color="currentColor" size={19} />
                تلاش دوباره
              </LinkButton>
              <LinkButton href="/cart" variant="secondary">
                بررسی سبد
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
