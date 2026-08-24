import Link from "next/link";
import type { Category } from "@/types/domain";
import styles from "./product.module.css";

export function CategoryNav({ categories }: { categories: Category[] }) {
  return (
    <nav className={styles.categoryNav} aria-label="دسته‌بندی منو">
      <Link className={styles.categoryLink} href="/menu">
        همه
      </Link>
      {categories.map((category) => (
        <Link
          className={styles.categoryLink}
          href={`/menu/${category.slug}`}
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
