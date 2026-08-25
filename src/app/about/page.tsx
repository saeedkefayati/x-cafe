import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { products } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "دربارهٔ ما",
  description: "روایت، اصول و رویکرد ایکس کافه به محصول و مهمان‌نوازی.",
  path: "/about",
});

const principles = [
  {
    number: "۰۱",
    title: "دقت بدون نمایش",
    description:
      "جزئیات باید در نتیجه حس شوند؛ نه اینکه تجربه را شلوغ یا توضیح را سنگین کنند.",
  },
  {
    number: "۰۲",
    title: "سادگیِ انتخاب",
    description:
      "منوی خوب باید مسیر تصمیم را کوتاه کند و تفاوت هر محصول را روشن نشان دهد.",
  },
  {
    number: "۰۳",
    title: "تکرار قابل‌اعتماد",
    description:
      "کیفیت وقتی معنا پیدا می‌کند که در مراجعهٔ بعدی هم بتوان به آن برگشت.",
  },
];

export default function AboutPage() {
  const espresso = products.find((product) => product.id === "espresso")!;
  const cake = products.find(
    (product) => product.id === "burnt-basque-cheesecake",
  )!;

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="ایکس، نقطهٔ تلاقی طعم و مکث."
        description="ایکس کافه جایی برای انتخاب‌های روشن، طعم‌های خوانا و مکث‌های کوتاهی است که ارزش تکرار دارند."
      />
      <Section data-reveal="" spacing="compact">
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyMediaTall}>
              <Image
                src={espresso.heroImage.src}
                alt={espresso.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                priority
              />
            </div>
            <Stack className={styles.storyCopy} gap="lg">
              <Eyebrow>The X story</Eyebrow>
              <Heading size="h2">هر انتخاب، یک نقطهٔ برخورد تازه.</Heading>
              <Text size="bodyLg">
                «ایکس» از برخورد دو مسیر می‌آید: دقت در محصول و آرامش در تجربه.
                نشان برند هم همین ایده را با دو خط متقاطع و یک دانهٔ قهوه در
                مرکز به تصویر می‌کشد.
              </Text>
              <Text>
                نتیجه، فضایی گرم و معاصر است که به‌جای تزئین اضافه روی طعم، ریتم
                و مهمان‌نوازی تمرکز می‌کند؛ جایی که هر فنجان می‌تواند شروع یک
                گفت‌وگو یا فقط یک مکث خوب باشد.
              </Text>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section data-reveal="">
        <Container>
          <div className={styles.sectionHeaderText}>
            <Eyebrow>Principles</Eyebrow>
            <Heading>سه اصل برای تصمیم‌های بعدی.</Heading>
          </div>
          <ol className={styles.principleGrid}>
            {principles.map((principle) => (
              <li key={principle.number}>
                <span>{principle.number}</span>
                <Heading as="h2" size="h4">
                  {principle.title}
                </Heading>
                <Text>{principle.description}</Text>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section data-reveal="" spacing="large">
        <Container>
          <div className={styles.storyGridReverse}>
            <Stack className={styles.storyCopy} gap="lg">
              <Eyebrow>Product first</Eyebrow>
              <Heading size="h2">منوی کوتاه، فضای بیشتر برای توجه.</Heading>
              <Text size="bodyLg">
                پانزده محصول اولیه عمداً در سه گروه روشن شکل گرفته‌اند: قهوهٔ
                گرم، قهوهٔ سرد و کیک. این مرزبندی کمک می‌کند هر محصول دقیق‌تر
                معرفی شود و انتخاب، سریع‌تر و مطمئن‌تر بماند.
              </Text>
              <div>
                <LinkButton href="/menu">دیدن منوی کامل</LinkButton>
              </div>
            </Stack>
            <div className={styles.storyMediaWide}>
              <Image
                src={cake.heroImage.src}
                alt={cake.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
