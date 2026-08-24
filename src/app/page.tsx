import Image from "next/image";
import { LinkButton } from "@/components/controls/button";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { MenuGrid } from "@/components/product/menu-grid";
import { products } from "@/data/mock";
import styles from "./site.module.css";

export default function Home() {
  const signature =
    products.find((product) => product.id === "iced-caramel-latte") ??
    products[0];
  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.heroGrid} size="wide">
          <Stack className={styles.heroCopy} gap="lg">
            <Stack className={styles.heroText} gap="sm">
              <Eyebrow>Signature menu</Eyebrow>
              <Heading as="h1" size="displayXl">
                برای لحظهٔ مکث.
              </Heading>
              <Text size="bodyLg">
                اسپرسوی دوبل، شیر سرد و پایان نرم کارامل؛ دقیق، ساده و بدون
                شلوغی.
              </Text>
            </Stack>
            <div className={styles.heroActions}>
              <LinkButton href="/menu">دیدن منو</LinkButton>
              <LinkButton href="/about" variant="secondary">
                داستان ما
              </LinkButton>
            </div>
          </Stack>
          <div className={styles.heroMedia}>
            <Image
              className={styles.heroImage}
              src={signature.heroImage.src}
              alt={signature.heroImage.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 928px) 100vw, 52vw"
            />
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>
              <Eyebrow>Best sellers</Eyebrow>
              <Heading>انتخاب‌های همیشگی.</Heading>
              <Text size="bodyLg">
                سه تصویر کالیبراسیون فعلی، نخستین نمونه‌های زبان بصری منو هستند.
              </Text>
            </div>
            <LinkButton href="/menu" variant="secondary">
              همهٔ منو
            </LinkButton>
          </div>
          <MenuGrid products={products} />
        </Container>
      </Section>
      <Section spacing="large">
        <Container>
          <div className={styles.editorialBand}>
            <Stack gap="md">
              <Eyebrow>Foundation preview</Eyebrow>
              <Heading size="displayLg" tone="inverse">
                خوب ساخته‌شده. هر روز سرو می‌شود.
              </Heading>
              <Text size="bodyLg" tone="inverse">
                این نسخه پایهٔ Static و Functional سایت است. روایت Scroll و
                Motion در Phase 4 روی همین ساختار اضافه می‌شود.
              </Text>
            </Stack>
          </div>
        </Container>
      </Section>
    </>
  );
}
