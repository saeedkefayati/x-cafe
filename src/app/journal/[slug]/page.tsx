import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/content/page-intro";
import { Container, Section } from "@/components/primitives/layout";
import { getPost, journalPosts } from "@/data/mock";
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
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </Container>
      </Section>
    </>
  );
}
