import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "سبد خرید" };
export default function CartPage() {
  return (
    <>
      <PageIntro title="سبد خرید" />
      <Section spacing="compact">
        <Container>
          <div className={styles.emptyState}>
            <Heading size="h3">سبد هنوز خالی است.</Heading>
            <Text>یک انتخاب خوب از منو شروع می‌شود.</Text>
            <LinkButton href="/menu">دیدن منو</LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
