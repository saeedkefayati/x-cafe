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
  title: "شعبه‌ها",
  description: "نشانی، تلفن و ساعت کاری سه شعبهٔ ایکس کافه در تهران.",
  path: "/locations",
});
export default function LocationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit"
        title="سه نقطه برای یک مکث کوتاه."
        description="قلهک، فلسطین و پاسداران؛ سه شعبه در تهران برای تحویل حضوری سفارش."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.locationStatus}>
            <span className={styles.mockNotice}>اطلاعات به‌روز شعبه‌ها</span>
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
                <a
                  className={styles.mapLink}
                  href={createMapSearchUrl(location.address)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`مسیریابی به ${location.name}`}
                >
                  مسیریابی روی نقشه
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <div className={styles.inlineActions}>
            <LinkButton href="/menu">انتخاب از منو</LinkButton>
            <LinkButton href="/checkout" variant="secondary">
              رفتن به تسویه‌حساب
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
