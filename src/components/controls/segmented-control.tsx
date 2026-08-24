import styles from "./controls.module.css";

export function SegmentedControl({
  legend,
  name,
  options,
  defaultValue,
}: {
  legend: string;
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  defaultValue?: string;
}) {
  return (
    <fieldset className={styles.segmented}>
      <legend className={styles.label}>{legend}</legend>
      {options.map((option) => (
        <label className={styles.segment} key={option.value}>
          <input
            className={styles.segmentInput}
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            disabled={option.disabled}
          />
          <span className={styles.segmentLabel}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
