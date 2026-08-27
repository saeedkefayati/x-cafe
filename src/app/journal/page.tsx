import type { Metadata } from "next";
import { Tag2 } from "iconsax-react";
import { JournalCard } from "@/components/content/journal-card";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { journalPosts } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";

const journalTags = [...new Set(journalPosts.flatMap((post) => post.tags))];

export const metadata: Metadata = createPageMetadata({
  title: "ژورنال",
  description: "یادداشت‌هایی از پیشخوان، مواد و فرایند.",
  path: "/journal",
});
export default function JournalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="از پیشخوان."
        description="یادداشت‌هایی دربارهٔ مواد، فرایند و چیزهایی که ارزش تکرار دارند."
      />
      <Section data-reveal="" spacing="compact">
        <Container>
          <div className={styles.journalOverview}>
            <div>
              <strong>{journalPosts.length.toLocaleString("fa-IR")}</strong>
              <span>یادداشت کوتاه</span>
            </div>
            <div>
              <div className={styles.journalTopicHeading}>
                <Tag2 aria-hidden="true" color="currentColor" size={20} />
                <Heading as="h2" size="h4">
                  موضوع‌های ژورنال
                </Heading>
              </div>
              <ul className={styles.journalTagList} aria-label="موضوع‌ها">
                {journalTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div>
              <Heading as="h2" size="h4">
                خواندن در چند دقیقه
              </Heading>
              <Text size="bodySm">
                برای مکثی کوتاه کنار قهوه، نه یک مقالهٔ طولانی.
              </Text>
            </div>
          </div>
          <div className={styles.journalGrid}>
            {journalPosts.map((post, index) => (
              <JournalCard post={post} featured={index === 0} key={post.id} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
