import type { Metadata } from "next";
import { Button } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "جست‌وجو" };
export default function SearchPage() {
  return (
    <>
      <PageIntro
        title="جست‌وجو"
        description="در Phase 2 محصولات در اولویت نتایج قرار می‌گیرند."
      />
      <Section spacing="compact">
        <Container>
          <form className={styles.formShell} role="search">
            <TextField
              id="search-query"
              label="جست‌وجوی منو"
              name="q"
              type="search"
              placeholder="مثلاً ماچا یا چیزکیک"
            />
            <Button type="submit">جست‌وجو</Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
