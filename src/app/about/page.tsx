import type { Metadata } from "next";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";

export const metadata: Metadata = { title: "دربارهٔ ما" };
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="قهوهٔ خوب، فقط بخشی از ماجراست."
        description="این صفحه ساختار محتوایی برند را نگه می‌دارد تا روایت واقعی کافه جایگزین متن آزمایشی شود."
      />
      <Section>
        <Container size="reading">
          <Stack gap="lg">
            <Heading size="h3">دقت، مهمان‌نوازی و تکرار خوب.</Heading>
            <Text size="bodyLg">
              هدف این تجربه، انتقال آرامش و کیفیت یک کافهٔ مستقل به فضای دیجیتال
              است؛ بدون تقلید از فروشگاه‌های عمومی و بدون ادعای بزرگ.
            </Text>
            <div>
              <LinkButton href="/locations">دیدن شعبه‌ها</LinkButton>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
