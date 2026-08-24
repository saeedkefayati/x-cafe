import { LinkButton } from "@/components/controls/button";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";

export default function NotFound() {
  return (
    <Section spacing="large">
      <Container size="reading">
        <Stack gap="lg">
          <Eyebrow>404</Eyebrow>
          <Heading as="h1" size="displayLg">
            این میز خالی است.
          </Heading>
          <Text size="bodyLg">
            صفحه‌ای که دنبالش بودید پیدا نشد؛ منو هنوز سر جای خودش است.
          </Text>
          <div>
            <LinkButton href="/menu">رفتن به منو</LinkButton>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
