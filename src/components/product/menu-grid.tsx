import { Grid } from "@/components/primitives/layout";
import type { Product } from "@/types/domain";
import { ProductCard } from "./product-card";
import styles from "./product.module.css";

export function MenuGrid({ products }: { products: Product[] }) {
  return (
    <Grid className={styles.grid} gap="lg">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}
