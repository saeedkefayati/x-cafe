import type { Metadata } from "next";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { CategoryNav } from "@/components/product/category-nav";
import { MenuCatalog } from "@/components/product/menu-catalog";
import { categories, products } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../site.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "منو",
  description:
    "منوی ایکس کافه؛ ۱۵ محصول با قیمت پایهٔ منطبق با مرجع و جزئیات شفاف.",
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
              قیمت پایه از منوی شعبهٔ فلسطین؛ اختلاف گزینه‌ها فعلاً موقت است
            </span>
            <CategoryNav categories={categories} />
            <MenuCatalog products={products} />
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
