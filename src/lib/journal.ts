import type { JournalPost } from "@/types/domain";

export function estimateReadingMinutes(post: JournalPost) {
  const wordCount = [post.excerpt, ...post.body]
    .join(" ")
    .trim()
    .split(/\s+/u).length;
  return Math.max(1, Math.ceil(wordCount / 180));
}
