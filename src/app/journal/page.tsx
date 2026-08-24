import type { Metadata } from "next";
import { JournalCard } from "@/components/content/journal-card";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
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
      <Section data-reveal="" spacing="compact">
        <Container>
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
