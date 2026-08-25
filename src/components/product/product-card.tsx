import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/domain";
import styles from "./product.module.css";

const statusLabel: Record<Product["availability"], string> = {
  available: "موجود",
  unavailable: "ناموجود",
  "sold-out": "تمام شده",
  seasonal: "فصلی",
  "coming-soon": "به‌زودی",
};

export function ProductCard({
  product,
  eager = false,
}: {
  product: Product;
  eager?: boolean;
}) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.mediaLink}
        href={`/product/${product.slug}`}
        aria-label={`مشاهده ${product.name}`}
      >
        <ViewTransition
          name={`product-${product.id}`}
          share="product-morph"
          default="none"
        >
          <div className={styles.media}>
            <Image
              className={styles.image}
              src={product.cardImage.src}
              alt={product.cardImage.alt}
              fill
              loading={eager ? "eager" : "lazy"}
              sizes="(max-width: 576px) 100vw, (max-width: 928px) 50vw, 33vw"
            />
          </div>
        </ViewTransition>
      </Link>
      <div className={styles.content}>
        <div className={styles.topline}>
          <h3 className={`${styles.name} latin`}>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <span className={styles.price}>
            {formatPrice(product.basePrice, product.currency)}
          </span>
        </div>
        <p className={styles.description}>{product.shortDescription}</p>
        <div className={styles.meta}>
          {product.status !== "available" ? (
            <span className={styles.status}>{statusLabel[product.status]}</span>
          ) : null}
          {product.bestSeller ? (
            <span className={styles.status}>محبوب</span>
          ) : null}
          <span className={styles.status}>
            {product.pricingStatus === "source-matched"
              ? "قیمت مرجع"
              : "قیمت موقت"}
          </span>
        </div>
      </div>
    </article>
  );
}
