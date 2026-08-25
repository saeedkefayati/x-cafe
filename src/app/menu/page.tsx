import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { CategoryNav } from "@/components/product/category-nav";
import { MenuGrid } from "@/components/product/menu-grid";
import { categories, products } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "منو",
  description:
    "منوی آزمایشی کافه؛ محصولات و قیمت‌ها پیش از انتشار نهایی می‌شوند.",
  path: "/menu",
});
export default function MenuPage() {
  return (
    <div className={styles.pageBody}>
      <PageIntro
        eyebrow="Menu"
        title="منو"
        description="محصولات روشن، توضیح کوتاه و انتخاب بدون حواس‌پرتی."
      />
      <Section spacing="compact">
        <Container>
          <Stack gap="lg">
            <span className={styles.mockNotice}>
              داده‌ها و قیمت‌ها آزمایشی‌اند
            </span>
            <CategoryNav categories={categories} />
            <MenuGrid products={products} />
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
