import type { Metadata } from "next";
import Link from "next/link";
import { Call, InfoCircle, Location as LocationIcon } from "iconsax-react";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
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
        description="برای هر موضوع، کوتاه‌ترین مسیر ارتباطی را انتخاب کنید."
      />
      <Section spacing="compact">
        <Container>
          <div className={styles.contactHub}>
            <div className={styles.contactLead}>
              <Heading size="h2">پاسخ درست، از همان شعبه شروع می‌شود.</Heading>
              <Text size="bodyLg">
                برای موجودی روز، هماهنگی تحویل یا حساسیت غذایی، تماس مستقیم با
                شعبهٔ انتخابی دقیق‌ترین راه است. شماره‌ها، ساعت‌ها و نقشه‌ها در
                صفحهٔ <Link href="/locations">شعبه‌ها</Link> یک‌جا قرار دارند.
              </Text>
            </div>
            <div className={styles.contactTopics}>
              <article>
                <Call aria-hidden="true" color="currentColor" size={26} />
                <Heading as="h2" size="h4">
                  سفارش و موجودی روز
                </Heading>
                <Text size="bodySm">
                  پیش از حرکت، موجودی محصول و زمان آماده‌سازی را با شعبه چک
                  کنید.
                </Text>
              </article>
              <article>
                <InfoCircle aria-hidden="true" color="currentColor" size={26} />
                <Heading as="h2" size="h4">
                  حساسیت غذایی
                </Heading>
                <Text size="bodySm">
                  برای حساسیت شدید، فقط به برچسب سایت اکتفا نکنید و مستقیم سؤال
                  کنید.
                </Text>
              </article>
              <article>
                <LocationIcon
                  aria-hidden="true"
                  color="currentColor"
                  size={26}
                />
                <Heading as="h2" size="h4">
                  آدرس و مسیریابی
                </Heading>
                <Text size="bodySm">
                  نقشهٔ تعاملی هر سه شعبه در صفحهٔ شعبه‌ها در دسترس است.
                </Text>
              </article>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
