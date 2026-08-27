import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoCircle } from "iconsax-react";
import { notFound, redirect } from "next/navigation";
import { ViewTransition } from "react";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { ProductConfigurator } from "@/components/product/product-configurator";
import { FlavorStory } from "@/components/product/flavor-story";
import { products, getProduct } from "@/data/mock";
import { formatPrice } from "@/lib/format";
import { createPageMetadata } from "@/lib/metadata";
import productStyles from "@/components/product/product.module.css";

const legacyProductSlugs: Record<string, string> = {
  "iced-caramel-latte": "iced-caramel-macchiato",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const replacementSlug = legacyProductSlugs[slug];
  if (replacementSlug) redirect(`/product/${replacementSlug}`);
  const product = getProduct(slug);
  return product
    ? createPageMetadata({
        title: product.seoTitle,
        description: product.seoDescription,
        path: `/product/${product.slug}`,
        image: product.socialImage ?? product.cardImage,
      })
    : { title: "محصول پیدا نشد" };
}
export default async function ProductPage({
  params,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <Section spacing="compact">
        <Container className={productStyles.heroGrid} size="wide">
          <ViewTransition
            name={`product-${product.id}`}
            share="product-morph"
            default="none"
          >
            <div className={productStyles.heroMedia}>
              <Image
                className={productStyles.heroImage}
                src={product.heroImage.src}
                alt={product.heroImage.alt}
                width={product.heroImage.width}
                height={product.heroImage.height}
                loading="eager"
                sizes="(max-width: 928px) 100vw, 50vw"
              />
            </div>
          </ViewTransition>
          <Stack className={productStyles.heroContent} gap="lg">
            <Stack gap="sm">
              <Eyebrow>Product</Eyebrow>
              <Heading as="h1" size="displayLg" className="latin">
                {product.name}
              </Heading>
              <Text size="bodyLg">{product.shortDescription}</Text>
              <Text size="bodySm">
                شروع قیمت از {formatPrice(product.basePrice, product.currency)}
              </Text>
            </Stack>
            <ul className={productStyles.flavors}>
              {product.flavorNotes.map((note) => (
                <li key={note.label}>{note.label}</li>
              ))}
            </ul>
            <Text>{product.fullDescription}</Text>
            <ProductConfigurator product={product} />
          </Stack>
        </Container>
      </Section>
      <FlavorStory product={product} />
      <Section data-reveal="">
        <Container size="reading">
          <div className={productStyles.ingredientSection}>
            <div className={productStyles.ingredientHeader}>
              <Eyebrow>Inside the cup</Eyebrow>
              <Heading>مواد اصلی</Heading>
              <Text>
                ترکیب‌های اصلی این محصول، کوتاه و روشن؛ برای اینکه پیش از انتخاب
                بدانید چه چیزی در فنجان یا بشقاب شماست.
              </Text>
            </div>
            <ul className={productStyles.ingredientGrid}>
              {product.ingredients.map((ingredient, index) => (
                <li
                  className={productStyles.ingredientItem}
                  key={ingredient.id}
                >
                  <span className={productStyles.ingredientNumber}>
                    {(index + 1).toLocaleString("fa-IR", {
                      minimumIntegerDigits: 2,
                    })}
                  </span>
                  <span className={productStyles.ingredientCopy}>
                    <strong>{ingredient.name}</strong>
                    {ingredient.allergen ? (
                      <small>آلرژن ثبت‌شده: {ingredient.allergen}</small>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
            <div className={productStyles.allergenNotice}>
              <strong className={productStyles.allergenTitle}>
                <InfoCircle aria-hidden="true" color="currentColor" size={20} />
                {product.allergens.length > 0
                  ? `آلرژن‌های ثبت‌شده: ${product.allergens.join("، ")}`
                  : "برای این محصول آلرژنی در دادهٔ فعلی ثبت نشده است."}
              </strong>
              <Text size="bodySm">
                امکان تماس متقاطع مواد وجود دارد. در صورت حساسیت شدید، پیش از
                سفارش از طریق <Link href="/contact">صفحهٔ تماس</Link> با شعبه
                هماهنگ کنید.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
