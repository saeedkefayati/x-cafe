import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { LinkButton } from "@/components/controls/button";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { Heading } from "@/components/primitives/typography";
import { MenuGrid } from "@/components/product/menu-grid";
import { getPost, journalPosts, products } from "@/data/mock";
import { formatDate } from "@/lib/format";
import styles from "../../site.module.css";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post
    ? { title: post.seoTitle, description: post.seoDescription }
    : { title: "یادداشت پیدا نشد" };
}
export default async function PostPage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const relatedProducts = products.filter((product) =>
    post.relatedProductIds.includes(product.id),
  );
  return (
    <>
      <PageIntro
        eyebrow={post.tags[0]}
        title={post.title}
        description={post.excerpt}
      />
      <Section spacing="compact">
        <Container size="reading">
          <article className={styles.prose}>
            <div className={styles.postMeta}>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span>{post.tags.join("، ")}</span>
            </div>
            {post.coverImage ? (
              <ViewTransition
                name={`journal-${post.id}`}
                share="journal-morph"
                default="none"
              >
                <div className={styles.postCover}>
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
              </ViewTransition>
            ) : null}
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className={styles.postBack}>
              <LinkButton href="/journal" variant="secondary">
                بازگشت به ژورنال
              </LinkButton>
            </div>
          </article>
        </Container>
      </Section>
      {relatedProducts.length > 0 ? (
        <Section>
          <Container>
            <div className={styles.sectionHeaderText}>
              <Heading size="h3">محصولات مرتبط</Heading>
            </div>
            <MenuGrid products={relatedProducts} />
          </Container>
        </Section>
      ) : null}
    </>
  );
}
