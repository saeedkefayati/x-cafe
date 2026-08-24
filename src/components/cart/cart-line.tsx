"use client";

import Image from "next/image";
import Link from "next/link";
import { QuantityControl } from "@/components/controls/quantity-control";
import { formatPrice } from "@/lib/format";
import type { ResolvedCartLine } from "@/types/domain";
import { useCart } from "./cart-provider";
import styles from "./cart.module.css";

export function CartLine({
  line,
  compact = false,
  onNavigate,
}: {
  line: ResolvedCartLine;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const { setQuantity, removeItem } = useCart();
  const productName = line.product.shortName ?? line.product.name;

  return (
    <article className={`${styles.line} ${compact ? styles.lineCompact : ""}`}>
      <Link
        className={styles.lineMedia}
        href={`/product/${line.product.slug}`}
        onClick={onNavigate}
      >
        <Image
          src={line.product.cardImage.src}
          alt=""
          width={line.product.cardImage.width}
          height={line.product.cardImage.height}
          sizes={compact ? "88px" : "(max-width: 40rem) 96px, 140px"}
        />
      </Link>
      <div className={styles.lineContent}>
        <div className={styles.lineTopline}>
          <Link href={`/product/${line.product.slug}`} onClick={onNavigate}>
            <strong>{productName}</strong>
          </Link>
          <strong className={styles.linePrice}>
            {formatPrice(line.totalPrice, line.product.currency)}
          </strong>
        </div>
        {line.optionLabels.length > 0 ? (
          <p className={styles.lineOptions}>{line.optionLabels.join("، ")}</p>
        ) : null}
        <div className={styles.lineActions}>
          <QuantityControl
            value={line.quantity}
            max={20}
            label={`تعداد ${productName}`}
            onChange={(quantity) => setQuantity(line.id, quantity)}
          />
          <button
            className={styles.removeButton}
            type="button"
            onClick={() => removeItem(line.id)}
          >
            حذف
          </button>
        </div>
      </div>
    </article>
  );
}
