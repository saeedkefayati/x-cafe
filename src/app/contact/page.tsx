import type { Metadata } from "next";
import { Button } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import styles from "../site.module.css";
export const metadata: Metadata = { title: "تماس" };
export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="تماس"
        description="فرم فعلی نمونهٔ رابط است و هنوز به سرویس ارسال متصل نشده."
      />
      <Section spacing="compact">
        <Container>
          <form className={styles.formShell}>
            <TextField id="contact-name" label="نام" autoComplete="name" />
            <TextField
              id="contact-email"
              label="ایمیل"
              type="email"
              autoComplete="email"
            />
            <TextField id="contact-message" label="پیام" />
            <Button type="submit">ارسال پیام</Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
