import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { locations } from "@/data/mock";
import styles from "../site.module.css";

export const metadata: Metadata = { title: "شعبه‌ها" };
export default function LocationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visit"
        title="به ما سر بزنید."
        description="نشانی‌ها و ساعات واقعی پیش از انتشار جایگزین می‌شوند."
      />
      <Section spacing="compact">
        <Container>
          <ul className={styles.list}>
            {locations.map((location) => (
              <li className={styles.listItem} key={location.id}>
                <Heading size="h3">{location.name}</Heading>
                <Text>{location.address}</Text>
                {location.openingHours.map((hours) => (
                  <Text size="bodySm" key={hours}>
                    {hours}
                  </Text>
                ))}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
