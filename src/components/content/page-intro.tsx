import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Section spacing="compact">
      <Container>
        <Stack gap="sm">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading as="h1" size="h1">
            {title}
          </Heading>
          {description ? <Text size="bodyLg">{description}</Text> : null}
        </Stack>
      </Container>
    </Section>
  );
}
