import Link from "next/link";
import type { Category } from "@/types/domain";
import styles from "./product.module.css";

export function CategoryNav({
  categories,
  activeSlug,
}: {
  categories: Category[];
  activeSlug?: string;
}) {
  return (
    <nav className={styles.categoryNav} aria-label="دسته‌بندی منو">
      <Link
        className={styles.categoryLink}
        data-active={!activeSlug}
        aria-current={!activeSlug ? "page" : undefined}
        href="/menu"
      >
        همه
      </Link>
      {categories.map((category) => (
        <Link
          className={styles.categoryLink}
          data-active={activeSlug === category.slug}
          aria-current={activeSlug === category.slug ? "page" : undefined}
          href={`/menu/${category.slug}`}
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
