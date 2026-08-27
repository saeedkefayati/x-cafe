import Image from "next/image";
import type { Product } from "@/types/domain";
import styles from "./signature-story.module.css";

const beatLabels = ["خالص و پرانرژی", "نرم و ابری", "خنک و کاراملی"];

export function SignatureStory({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className={styles.story} aria-labelledby="signature-story-title">
      <div className={styles.track}>
        <div className={styles.stage}>
          <div className={styles.backdrop} aria-hidden="true" />
          <div className={`${styles.toneLayer} ${styles.toneLatte}`} />
          <div className={`${styles.toneLayer} ${styles.toneCaramel}`} />
          <div className={styles.decor} aria-hidden="true">
            <span className={styles.bubbleOne} />
            <span className={styles.bubbleTwo} />
            <span className={styles.bubbleThree} />
          </div>

          <div className={styles.frame}>
            <header className={styles.header}>
              <div className={styles.headerCopy}>
                <p className={styles.eyebrow}>یک شات، سه حال‌وهوا</p>
                <h2 id="signature-story-title">
                  یک شات کوچک، سه حس دوست‌داشتنی.
                </h2>
                <p>
                  آرام اسکرول کن؛ اسپرسو قدم‌به‌قدم نرم‌تر، شیری‌تر و خنک‌تر
                  می‌شود.
                </p>
              </div>
              <span className={styles.scrollCue} aria-hidden="true">
                <span />
                ادامه بده
              </span>
            </header>

            <ol className={styles.states}>
              {products.map((product, index) => (
                <li className={styles.state} key={product.id}>
                  <div className={styles.copy}>
                    <span className={styles.beat}>
                      {String(index + 1).padStart(2, "0")} · {beatLabels[index]}
                    </span>
                    <h3 className="latin">{product.name}</h3>
                    {product.shortName ? (
                      <strong>{product.shortName}</strong>
                    ) : null}
                    <p>{product.shortDescription}</p>
                  </div>

                  <div className={styles.visual}>
                    <div className={styles.halo} aria-hidden="true" />
                    <div className={styles.media}>
                      <Image
                        className={styles.image}
                        src={product.cardImage.src}
                        alt={product.cardImage.alt}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 1024px) calc(100vw - 2rem), 36vw"
                      />
                    </div>
                  </div>

                  <ul className={styles.notes} aria-label="ویژگی‌های طعمی">
                    {product.flavorNotes.slice(0, 3).map((note) => (
                      <li key={note.label}>{note.label}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <footer className={styles.footer} aria-label="پیشرفت روایت">
              <div className={styles.progress} aria-hidden="true">
                {products.map((product) => (
                  <span key={product.id} />
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
