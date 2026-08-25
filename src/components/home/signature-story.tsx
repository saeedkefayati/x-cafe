import Image from "next/image";
import { LinkButton } from "@/components/controls/button";
import type { Product } from "@/types/domain";
import styles from "./signature-story.module.css";

const beatLabels = ["پایه", "نرمی", "امضا"];

export function SignatureStory({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className={styles.story} aria-labelledby="signature-story-title">
      <div className={styles.track}>
        <div className={styles.stage}>
          <div className={`${styles.toneLayer} ${styles.toneLatte}`} />
          <div className={`${styles.toneLayer} ${styles.toneCaramel}`} />

          <div className={styles.frame}>
            <header className={styles.header}>
              <div className={styles.headerCopy}>
                <p className={styles.eyebrow}>یک شات، سه حال‌وهوا</p>
                <h2 id="signature-story-title">از یک شات، تا امضای سرد.</h2>
                <p>
                  پایه همان اسپرسو است؛ بافت، دما و شیرینی‌اند که مسیر فنجان را
                  عوض می‌کنند.
                </p>
              </div>
              <LinkButton href="/menu" variant="secondary">
                دیدن همهٔ منو
              </LinkButton>
            </header>

            <ol className={styles.states}>
              {products.map((product, index) => (
                <li className={styles.state} key={product.id}>
                  <div className={styles.media}>
                    <Image
                      className={styles.image}
                      src={product.cardImage.src}
                      alt={product.cardImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                  </div>
                  <div className={styles.copy}>
                    <span className={styles.beat}>
                      {String(index + 1).padStart(2, "0")} / {beatLabels[index]}
                    </span>
                    <h3 className="latin">{product.name}</h3>
                    {product.shortName ? (
                      <strong>{product.shortName}</strong>
                    ) : null}
                    <p>{product.shortDescription}</p>
                    <ul className={styles.notes} aria-label="ویژگی‌های طعمی">
                      {product.flavorNotes.slice(0, 3).map((note) => (
                        <li key={note.label}>{note.label}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.progress} aria-hidden="true">
              {products.map((product) => (
                <span key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
