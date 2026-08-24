import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { locations } from "@/data/locations";
import styles from "../site.module.css";

export const metadata: Metadata = { title: "شعبه‌ها" };
export default function LocationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit"
        title="سه نقطه برای یک مکث کوتاه."
        description="سه شعبهٔ نمونه در تهران برای تحویل حضوری سفارش در نظر گرفته شده‌اند؛ اطلاعات نهایی پیش از انتشار دوباره تأیید می‌شود."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.locationStatus}>
            <span className={styles.mockNotice}>اطلاعات نمونه</span>
            <Heading size="h2">شعبهٔ مناسب خودتان را انتخاب کنید.</Heading>
            <Text size="bodyLg">
              زمان آماده‌سازی سفارش در هر سه شعبه ۴۵ دقیقه است و تحویل فقط از
              شعبهٔ انتخاب‌شده انجام می‌شود.
            </Text>
          </div>
          <div className={styles.locationGrid}>
            {locations.map((location, index) => (
              <article className={styles.locationCard} key={location.id}>
                <span>
                  {(index + 1).toLocaleString("fa-IR", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
                <Heading as="h2" size="h4">
                  {location.name}
                </Heading>
                <address>{location.address}</address>
                <dl>
                  <div>
                    <dt>ساعات کاری</dt>
                    <dd>{location.openingHours.join("، ")}</dd>
                  </div>
                  <div>
                    <dt>تلفن</dt>
                    <dd dir="ltr">
                      <a href={location.phoneUri}>{location.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>آماده‌سازی</dt>
                    <dd>
                      {location.pickupSchedule?.preparationMinutes.toLocaleString(
                        "fa-IR",
                      )}{" "}
                      دقیقه
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className={styles.inlineActions}>
            <LinkButton href="/menu">انتخاب از منو</LinkButton>
            <LinkButton href="/checkout" variant="secondary">
              رفتن به تسویه حساب
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
