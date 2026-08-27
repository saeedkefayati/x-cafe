import type { Metadata } from "next";
import Link from "next/link";
import { SearchNormal1 } from "iconsax-react";
import { Button } from "@/components/controls/button";
import { Container, Section } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { MenuGrid } from "@/components/product/menu-grid";
import { products } from "@/data/mock";
import { searchProducts } from "@/lib/search";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";
export const metadata: Metadata = createPageMetadata({
  title: "جست‌وجو",
  description: "جست‌وجوی محصولات منوی ایکس کافه بر اساس نام، توضیح و طعم.",
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
  const popularProducts = products
    .filter((product) => product.bestSeller)
    .slice(0, 3);
  const suggestions = ["لاته", "شکلات", "چیزکیک", "قهوهٔ سرد"];

  return (
    <>
      <Section className={styles.searchSection} spacing="compact">
        <Container>
          <div className={styles.searchHero}>
            <div className={styles.searchCopy}>
              <Eyebrow>Search</Eyebrow>
              <Heading as="h1" size="displayLg">
                دنبال چه طعمی هستید؟
              </Heading>
              <Text size="bodyLg">
                نام محصول، نوع نوشیدنی یا یک نشانهٔ طعمی را بنویسید.
              </Text>
            </div>
            <form className={styles.searchForm} role="search">
              <label className={styles.searchInput} htmlFor="search-query">
                <SearchNormal1
                  aria-hidden="true"
                  color="currentColor"
                  size={24}
                />
                <span>جست‌وجوی منو</span>
                <input
                  id="search-query"
                  name="q"
                  type="search"
                  placeholder="مثلاً لاته، شکلات یا چیزکیک"
                  defaultValue={query}
                />
              </label>
              <Button type="submit">پیدا کن</Button>
            </form>
            <div
              className={styles.searchSuggestions}
              aria-label="پیشنهاد جست‌وجو"
            >
              <span>جست‌وجوی سریع:</span>
              {suggestions.map((suggestion) => (
                <Link
                  href={`/search?q=${encodeURIComponent(suggestion)}`}
                  key={suggestion}
                >
                  {suggestion}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      {query ? (
        <Section spacing="compact">
          <Container>
            {results.length > 0 ? (
              <>
                <div className={styles.searchResultHeader}>
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
      ) : (
        <Section spacing="compact">
          <Container>
            <div className={styles.searchResultHeader}>
              <Eyebrow>Start here</Eyebrow>
              <Heading size="h3">انتخاب‌های محبوب برای شروع</Heading>
              <Text>
                اگر هنوز تصمیم نگرفته‌اید، این سه انتخاب نقطهٔ شروع خوبی هستند.
              </Text>
            </div>
            <div className={styles.searchResults}>
              <MenuGrid products={popularProducts} />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
