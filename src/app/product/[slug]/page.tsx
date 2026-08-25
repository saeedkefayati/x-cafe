import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { Container, Section, Stack } from "@/components/primitives/layout";
import { Eyebrow, Heading, Text } from "@/components/primitives/typography";
import { ProductConfigurator } from "@/components/product/product-configurator";
import { FlavorStory } from "@/components/product/flavor-story";
import { products, getProduct } from "@/data/mock";
import { formatPrice } from "@/lib/format";
import { createPageMetadata } from "@/lib/metadata";
import productStyles from "@/components/product/product.module.css";

const signatureStoryProductIds = new Set([
  "espresso",
  "cafe-latte",
  "iced-caramel-latte",
]);

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
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
                preload
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
      {signatureStoryProductIds.has(product.id) ? (
        <FlavorStory product={product} />
      ) : null}
      <Section data-reveal="">
        <Container size="reading">
          <Stack gap="md">
            <Heading>مواد اصلی</Heading>
            {product.ingredients.map((ingredient) => (
              <Text key={ingredient.id}>
                <strong>{ingredient.name}</strong>
                {ingredient.allergen ? ` — آلرژن: ${ingredient.allergen}` : ""}
              </Text>
            ))}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
