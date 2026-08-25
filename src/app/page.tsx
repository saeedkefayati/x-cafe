import Image from "next/image";
import Link from "next/link";
import type { Metadata, Route } from "next";
import { JournalCard } from "@/components/content/journal-card";
import { LinkButton } from "@/components/controls/button";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { MenuGrid } from "@/components/product/menu-grid";
import { categories, journalPosts, products } from "@/data/mock";
import styles from "./site.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const representativeProductIds = [
  "cappuccino",
  "iced-caramel-latte",
  "burnt-basque-cheesecake",
];

export default function Home() {
  const signature =
    products.find((product) => product.id === "iced-caramel-latte") ??
    products[0];
  const featuredProducts = products
    .filter((product) => product.featured || product.bestSeller)
    .slice(0, 6);
  const signatureHref = `/product/${signature.slug}` as Route;
  const categoryHighlights = categories.map((category, index) => ({
    category,
    product:
      products.find(
        (product) => product.id === representativeProductIds[index],
      ) ?? products.find((product) => product.categoryId === category.id)!,
  }));

  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.heroGrid} size="wide">
          <Stack className={styles.heroCopy} gap="lg">
            <Stack className={styles.heroText} gap="sm">
              <Eyebrow>Made for a pause</Eyebrow>
              <Heading as="h1" size="displayLg">
                یک مکث خوب، از همین‌جا شروع می‌شود.
              </Heading>
              <Text size="bodyLg">
                قهوه‌های کلاسیک، نوشیدنی‌های سرد و کیک‌هایی با شیرینی متعادل؛
                انتخاب روشن، بدون شلوغی.
              </Text>
            </Stack>
            <div className={styles.heroActions}>
              <LinkButton href="/menu">انتخاب از منو</LinkButton>
              <LinkButton href={signatureHref} variant="secondary">
                پیشنهاد امروز
              </LinkButton>
            </div>
          </Stack>
          <Link
            className={styles.heroMedia}
            href={signatureHref}
            aria-label={`مشاهدهٔ ${signature.shortName ?? signature.name}`}
          >
            <Image
              className={styles.heroImage}
              src={signature.heroImage.src}
              alt={signature.heroImage.alt}
              fill
              preload
              sizes="(max-width: 928px) 100vw, 52vw"
            />
            <span className={styles.heroCaption}>
              <strong>{signature.shortName ?? signature.name}</strong>
              <span>{signature.shortDescription}</span>
            </span>
          </Link>
        </Container>
      </section>

      <Section data-reveal="" spacing="compact">
        <Container>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>
              <Eyebrow>Three ways to pause</Eyebrow>
              <Heading>از کدام حال‌وهوا شروع کنیم؟</Heading>
              <Text size="bodyLg">
                سه بخش کوتاه برای رسیدن سریع‌تر به چیزی که همین حالا می‌خواهید.
              </Text>
            </div>
          </div>
          <div className={styles.categoryGrid}>
            {categoryHighlights.map(({ category, product }) => (
              <Link
                className={styles.categoryFeature}
                href={`/menu/${category.slug}`}
                key={category.id}
              >
                <div className={styles.categoryMedia}>
                  <Image
                    src={product.cardImage.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.categoryContent}>
                  <Heading as="h2" size="h4">
                    {category.name}
                  </Heading>
                  <Text size="bodySm">{category.description}</Text>
                  <span className={styles.textLink}>دیدن انتخاب‌ها ←</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal="">
        <Container>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>
              <Eyebrow>Regular favorites</Eyebrow>
              <Heading>انتخاب‌هایی که می‌شود به آن‌ها برگشت.</Heading>
              <Text size="bodyLg">
                از یک اسپرسوی کوتاه تا لاته‌ای خنک و یک برش کیک برای کنار فنجان.
              </Text>
            </div>
            <LinkButton href="/menu" variant="secondary">
              همهٔ منو
            </LinkButton>
          </div>
          <MenuGrid products={featuredProducts} />
        </Container>
      </Section>

      <Section data-reveal="" spacing="large">
        <Container>
          <div className={styles.editorialBand}>
            <Stack gap="md">
              <Eyebrow>Our approach</Eyebrow>
              <Heading size="displayLg" tone="inverse">
                ساده به نظر می‌رسد، چون جزئیاتش جدی گرفته شده.
              </Heading>
              <Text size="bodyLg" tone="inverse">
                نسبت دقیق، مواد روشن و فضایی که اجازه می‌دهد خود محصول حرف بزند؛
                این سه اصل، جهت موقت اما مشخص این کافه‌اند.
              </Text>
            </Stack>
            <ol className={styles.approachList}>
              <li>
                <span>۰۱</span>
                <strong>انتخاب کوتاه</strong>
                <p>منویی جمع‌وجور که مقایسه و تصمیم را ساده نگه می‌دارد.</p>
              </li>
              <li>
                <span>۰۲</span>
                <strong>طعم خوانا</strong>
                <p>هر ترکیب باید شخصیت مواد اصلی را حفظ کند.</p>
              </li>
              <li>
                <span>۰۳</span>
                <strong>مهمان‌نوازی آرام</strong>
                <p>تجربه‌ای روشن، از دیدن منو تا رسیدن سفارش.</p>
              </li>
            </ol>
          </div>
        </Container>
      </Section>

      <Section data-reveal="">
        <Container>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>
              <Eyebrow>From the counter</Eyebrow>
              <Heading>یادداشت‌های کوتاه از طعم و فرایند.</Heading>
            </div>
            <LinkButton href="/journal" variant="secondary">
              همهٔ یادداشت‌ها
            </LinkButton>
          </div>
          <div className={`${styles.journalGrid} ${styles.journalGridHome}`}>
            {journalPosts.slice(0, 3).map((post) => (
              <JournalCard post={post} key={post.id} />
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal="" spacing="large">
        <Container>
          <div className={styles.visitBand}>
            <div>
              <Eyebrow>Visit</Eyebrow>
              <Heading size="h2">
                جای واقعی این مکث، هنوز در حال مشخص‌شدن است.
              </Heading>
            </div>
            <Text>
              نشانی، ساعت کاری و روش تحویل پس از نهایی‌شدن اطلاعات عملیاتی در
              سایت قرار می‌گیرند.
            </Text>
            <LinkButton href="/locations" variant="secondary">
              وضعیت شعبه‌ها
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
