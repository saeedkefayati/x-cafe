import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { journalPosts } from "@/data/mock";
import styles from "../site.module.css";

export const metadata: Metadata = {
  title: "ژورنال",
  description: "یادداشت‌هایی از پیشخوان، مواد و فرایند.",
};
export default function JournalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="از پیشخوان."
        description="یادداشت‌هایی دربارهٔ مواد، فرایند و چیزهایی که ارزش تکرار دارند."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.journalGrid}>
            {journalPosts.map((post) => (
              <article className={styles.journalCard} key={post.id}>
                <Text size="label">{post.tags.join("، ")}</Text>
                <Heading size="h3">
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </Heading>
                <Text>{post.excerpt}</Text>
                <Link href={`/journal/${post.slug}`}>خواندن یادداشت ←</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
