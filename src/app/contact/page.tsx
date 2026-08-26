import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { locations } from "@/data/locations";
import { createMapSearchUrl } from "@/lib/maps";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";
export const metadata: Metadata = createPageMetadata({
  title: "تماس",
  description: "شمارهٔ تماس، نشانی و ساعت کاری شعبه‌های ایکس کافه.",
  path: "/contact",
});
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="با نزدیک‌ترین شعبه در تماس باشید."
        description="شمارهٔ مستقیم، نشانی و ساعت کاری هر سه شعبه در یک نگاه."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactStatus}>
              <span className={styles.mockNotice}>سه شعبه در تهران</span>
              <Heading size="h2">برای هماهنگی، مستقیم تماس بگیرید.</Heading>
              <Text size="bodyLg">
                برای پرسش دربارهٔ ساعت حضور، موجودی روز یا تحویل سفارش، مستقیماً
                با همان شعبه تماس بگیرید. فرم پیام آنلاین تا زمان اتصال به یک
                صندوق پاسخ‌گویی واقعی نمایش داده نمی‌شود.
              </Text>
              <div className={styles.inlineActions}>
                <LinkButton href="/faq">پرسش‌های رایج</LinkButton>
                <LinkButton href="/locations" variant="secondary">
                  وضعیت شعبه‌ها
                </LinkButton>
              </div>
            </div>
            <dl className={styles.contactChecklist}>
              {locations.map((location) => (
                <div key={location.id}>
                  <dt>{location.name}</dt>
                  <dd>
                    <a href={location.phoneUri} dir="ltr">
                      {location.phone}
                    </a>
                    <br />
                    {location.openingHours.join("، ")}
                    <br />
                    {location.address}
                    <span className={styles.contactLinks}>
                      <a href={location.phoneUri}>تماس با شعبه</a>
                      <a
                        href={createMapSearchUrl(location.address)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        مسیریابی روی نقشه
                      </a>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>
    </>
  );
}
