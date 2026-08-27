import Image from "next/image";
import type { Metadata } from "next";
import {
  Apple,
  Call,
  ExportCurve,
  Google,
  Location as LocationIcon,
  Map1,
  Routing2,
  Timer1,
} from "iconsax-react";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { locations } from "@/data/locations";
import { createMapDirectionsUrl, type MapProvider } from "@/lib/maps";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";

const mapProviders: { id: MapProvider; label: string }[] = [
  { id: "google", label: "گوگل مپس" },
  { id: "apple", label: "اپل مپس" },
  { id: "neshan", label: "نشان" },
  { id: "balad", label: "بلد" },
];

function MapProviderIcon({ provider }: { provider: MapProvider }) {
  const iconProps = {
    "aria-hidden": true,
    color: "currentColor",
    size: 22,
  } as const;

  switch (provider) {
    case "google":
      return <Google {...iconProps} />;
    case "apple":
      return <Apple {...iconProps} />;
    case "neshan":
      return <Map1 {...iconProps} />;
    case "balad":
      return <Routing2 {...iconProps} />;
  }
}

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
            <Heading size="h2">شعبهٔ مناسب خودتان را انتخاب کنید.</Heading>
            <Text size="bodyLg">
              زمان آماده‌سازی سفارش در هر سه شعبه ۴۵ دقیقه است و تحویل فقط از
              شعبهٔ انتخاب‌شده انجام می‌شود.
            </Text>
          </div>
          <div className={styles.locationList}>
            {locations.map((location, index) => (
              <article className={styles.locationFeature} key={location.id}>
                <div className={styles.locationMap}>
                  <div
                    className={styles.locationMapVisual}
                    role="img"
                    aria-label={`نقشهٔ محلی اطراف ${location.name}`}
                  >
                    <Image
                      className={styles.locationMapLight}
                      src={`/images/locations/map-${location.slug}-light.svg`}
                      alt=""
                      fill
                      sizes="(max-width: 928px) 100vw, 45vw"
                    />
                    <Image
                      className={styles.locationMapDark}
                      src={`/images/locations/map-${location.slug}-dark.svg`}
                      alt=""
                      fill
                      sizes="(max-width: 928px) 100vw, 45vw"
                    />
                  </div>
                  <span className={styles.mapBranchLabel}>{location.name}</span>
                </div>
                <div className={styles.locationContent}>
                  <span className={styles.locationNumber}>
                    {(index + 1).toLocaleString("fa-IR", {
                      minimumIntegerDigits: 2,
                    })}
                  </span>
                  <Heading as="h2" size="h3">
                    {location.name}
                  </Heading>
                  <address>
                    <LocationIcon
                      aria-hidden="true"
                      color="currentColor"
                      size={20}
                    />
                    {location.address}
                  </address>
                  <dl>
                    <div>
                      <dt>
                        <Timer1
                          aria-hidden="true"
                          color="currentColor"
                          size={18}
                        />
                        ساعات کاری
                      </dt>
                      <dd>{location.openingHours.join("، ")}</dd>
                    </div>
                    <div>
                      <dt>
                        <Call
                          aria-hidden="true"
                          color="currentColor"
                          size={18}
                        />
                        تلفن
                      </dt>
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
                  <div className={styles.mapDirections}>
                    <Text size="bodySm">مسیریابی با</Text>
                    <div className={styles.mapProviderGrid}>
                      {mapProviders.map((provider) => (
                        <a
                          className={styles.mapProviderLink}
                          data-provider={provider.id}
                          href={createMapDirectionsUrl(
                            provider.id,
                            location.lat,
                            location.lng,
                          )}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`مسیریابی به ${location.name} با ${provider.label}`}
                          key={provider.id}
                        >
                          <span className={styles.mapProviderIcon}>
                            <MapProviderIcon provider={provider.id} />
                          </span>
                          <span>{provider.label}</span>
                          <ExportCurve
                            className={styles.mapProviderExternal}
                            aria-hidden="true"
                            color="currentColor"
                            size={15}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
