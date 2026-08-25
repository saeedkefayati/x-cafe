import type { Metadata } from "next";
import { Button } from "@/components/controls/button";
import { TextField } from "@/components/controls/text-field";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading, Text } from "@/components/primitives/typography";
import { MenuGrid } from "@/components/product/menu-grid";
import { products } from "@/data/mock";
import { searchProducts } from "@/lib/search";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";
export const metadata: Metadata = createPageMetadata({
  title: "جست‌وجو",
  description: "جست‌وجوی محصولات منوی کافه بر اساس نام، توضیح و طعم.",
  path: "/search",
  index: false,
  follow: true,
});
export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const rawQuery = (await searchParams).q;
  const query =
    (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery)?.trim() ?? "";
  const results = searchProducts(products, query);

  return (
    <>
      <PageIntro
        eyebrow="Search"
        title="جست‌وجو"
        description="نام، توضیح یا طعمی را که در ذهن دارید میان محصولات فعلی پیدا کنید."
      />
      <Section spacing="compact">
        <Container>
          <form className={styles.searchForm} role="search">
            <TextField
              id="search-query"
              label="جست‌وجوی منو"
              name="q"
              type="search"
              placeholder="مثلاً لاته، شکلات یا چیزکیک"
              defaultValue={query}
            />
            <Button type="submit">جست‌وجو</Button>
          </form>
        </Container>
      </Section>
      {query ? (
        <Section spacing="compact">
          <Container>
            {results.length > 0 ? (
              <>
                <div className={styles.sectionHeaderText}>
                  <Heading size="h3">
                    {results.length.toLocaleString("fa-IR")} نتیجه برای «{query}
                    »
                  </Heading>
                </div>
                <div className={styles.searchResults}>
                  <MenuGrid products={results} />
                </div>
              </>
            ) : (
              <div className={styles.emptyState}>
                <Heading size="h3">محصولی پیدا نشد.</Heading>
                <Text>
                  عبارت کوتاه‌تری مثل «قهوه»، «لاته»، «شکلات» یا «کیک» را امتحان
                  کنید.
                </Text>
              </div>
            )}
          </Container>
        </Section>
      ) : null}
    </>
  );
}
