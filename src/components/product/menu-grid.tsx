import { Grid } from "@/components/primitives/layout";
import type { Product } from "@/types/domain";
import { ProductCard } from "./product-card";
import styles from "./product.module.css";

export function MenuGrid({
  products,
  eagerCount = 0,
}: {
  products: Product[];
  eagerCount?: number;
}) {
  return (
    <Grid className={styles.grid} gap="lg">
      {products.map((product, index) => (
        <ProductCard
          product={product}
          eager={index < eagerCount}
          key={product.id}
        />
      ))}
    </Grid>
  );
}
