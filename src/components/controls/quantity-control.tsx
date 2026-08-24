"use client";

import styles from "./controls.module.css";

export function QuantityControl({
  value,
  min = 1,
  max = 12,
  onChange,
  label = "تعداد",
}: {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label?: string;
}) {
  return (
    <div className={styles.quantity} role="group" aria-label={label}>
      <button
        className={styles.quantityButton}
        type="button"
        aria-label="کاهش تعداد"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        −
      </button>
      <output className={styles.quantityValue} aria-live="polite">
        {value}
      </output>
      <button
        className={styles.quantityButton}
        type="button"
        aria-label="افزایش تعداد"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </div>
  );
}
