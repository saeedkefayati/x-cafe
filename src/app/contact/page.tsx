import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import styles from "../site.module.css";
export const metadata: Metadata = {
  title: "تماس",
  description: "وضعیت راه‌های ارتباطی و پشتیبانی کافه.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="راه ارتباط باید واقعی و پاسخ‌گو باشد."
        description="ایمیل، تلفن و شبکه‌های اجتماعی هنوز برای انتشار تأیید نشده‌اند؛ بنابراین هیچ مسیر ساختگی یا فرم بدون مقصدی نمایش داده نمی‌شود."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactStatus}>
              <span className={styles.mockNotice}>
                ارسال آنلاین غیرفعال است
              </span>
              <Heading size="h2">
                پیام شما نباید در یک فرم آزمایشی گم شود.
              </Heading>
              <Text size="bodyLg">
                به‌محض مشخص‌شدن صندوق پاسخ‌گویی واقعی، فرم تماس به آن متصل و
                زمان تقریبی پاسخ نیز همین‌جا اعلام می‌شود.
              </Text>
              <div className={styles.inlineActions}>
                <LinkButton href="/faq">پرسش‌های رایج</LinkButton>
                <LinkButton href="/locations" variant="secondary">
                  وضعیت شعبه‌ها
                </LinkButton>
              </div>
            </div>
            <dl className={styles.contactChecklist}>
              <div>
                <dt>پرسش دربارهٔ محصول</dt>
                <dd>مواد، آلرژن و گزینه‌ها در صفحهٔ هر محصول قرار دارند.</dd>
              </div>
              <div>
                <dt>پیگیری سفارش</dt>
                <dd>
                  ثبت سفارش واقعی هنوز فعال نیست؛ سفارشی برای پیگیری ایجاد
                  نمی‌شود.
                </dd>
              </div>
              <div>
                <dt>همکاری و پیشنهاد</dt>
                <dd>نشانی رسمی همکاری پس از تأیید هویت برند اضافه خواهد شد.</dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>
    </>
  );
}
