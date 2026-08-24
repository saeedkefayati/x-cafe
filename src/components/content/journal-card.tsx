import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Heading, Text } from "@/components/primitives/typography";
import { formatDate } from "@/lib/format";
import type { JournalPost } from "@/types/domain";
import styles from "./journal-card.module.css";

export function JournalCard({
  post,
  featured = false,
}: {
  post: JournalPost;
  featured?: boolean;
}) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
    >
      {post.coverImage ? (
        <Link
          className={styles.media}
          href={`/journal/${post.slug}`}
          aria-label={`خواندن ${post.title}`}
        >
          <ViewTransition
            name={`journal-${post.id}`}
            share="journal-morph"
            default="none"
          >
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              fill
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 58vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
            />
          </ViewTransition>
        </Link>
      ) : null}
      <div className={styles.content}>
        <div className={styles.meta}>
          <Text size="caption">{post.tags.join("، ")}</Text>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <Heading as="h2" size={featured ? "h2" : "h3"}>
          <Link href={`/journal/${post.slug}`}>{post.title}</Link>
        </Heading>
        <Text>{post.excerpt}</Text>
        <Link className={styles.readMore} href={`/journal/${post.slug}`}>
          خواندن یادداشت
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </article>
  );
}
