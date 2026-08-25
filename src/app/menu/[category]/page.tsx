import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { CategoryNav } from "@/components/product/category-nav";
import { MenuGrid } from "@/components/product/menu-grid";
import { categories, getCategory, products } from "@/data/mock";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/menu/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return category
    ? createPageMetadata({
        title: category.name,
        description: category.description,
        path: `/menu/${category.slug}`,
        image: category.heroImage,
      })
    : { title: "دسته‌بندی پیدا نشد" };
}
export default async function CategoryPage({
  params,
}: PageProps<"/menu/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = products.filter(
    (product) => product.categoryId === category.id,
  );
  return (
    <>
      <PageIntro
        eyebrow="Category"
        title={category.name}
        description={category.description}
      />
      <Section spacing="compact">
        <Container>
          <Stack gap="lg">
            <CategoryNav categories={categories} />
            {items.length ? (
              <MenuGrid products={items} />
            ) : (
              <p>محصولی در این دسته ثبت نشده است.</p>
            )}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
