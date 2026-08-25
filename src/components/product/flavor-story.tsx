import { Container } from "@/components/primitives/layout";
import type { FlavorNote, Product } from "@/types/domain";
import styles from "./flavor-story.module.css";

const flavorTypeLabels: Record<FlavorNote["type"], string> = {
  aroma: "رایحه",
  taste: "طعم",
  texture: "بافت",
};

const intensitySteps = [1, 2, 3, 4, 5];

export function FlavorStory({ product }: { product: Product }) {
  const titleId = `flavor-story-${product.id}`;
  const productLabel = product.shortName ?? product.name;

  return (
    <section className={styles.story} aria-labelledby={titleId}>
      <Container className={styles.layout} size="wide">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>پروفایل طعمی</p>
          <h2 id={titleId}>روایت طعمی {productLabel}</h2>
          <p>
            سه نشانهٔ اصلی این فنجان؛ از اولین برداشت تا بافتی که در پایان باقی
            می‌ماند.
          </p>
        </div>

        <ol className={styles.notes}>
          {product.flavorNotes.slice(0, 3).map((note, index) => {
            const intensity = note.intensity ?? 3;

            return (
              <li className={styles.note} key={`${note.type}-${note.label}`}>
                <div className={styles.noteMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{flavorTypeLabels[note.type]}</span>
                </div>
                <h3>{note.label}</h3>
                <div
                  className={styles.intensity}
                  role="img"
                  aria-label={`شدت ${intensity.toLocaleString("fa-IR")} از ۵`}
                >
                  {intensitySteps.map((step) => (
                    <span
                      className={step <= intensity ? styles.active : undefined}
                      key={step}
                    />
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
