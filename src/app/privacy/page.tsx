import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "حریم خصوصی" };
export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="حریم خصوصی" />
      <Section spacing="compact">
        <Container size="reading">
          <div className={styles.prose}>
            <p>
              متن حقوقی نهایی باید بر اساس محل فعالیت، شیوهٔ پرداخت و سرویس‌های
              متصل تهیه شود.
            </p>
            <p>این متن آزمایشی جایگزین سیاست حقوقی معتبر نیست.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
