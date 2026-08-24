import styles from "./controls.module.css";

export function SegmentedControl({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: Array<{
    label: string;
    value: string;
    note?: string;
    disabled?: boolean;
  }>;
  value?: string;
  onChange: (value: string) => void;
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
            checked={option.value === value}
            disabled={option.disabled}
            onChange={() => onChange(option.value)}
          />
          <span className={styles.segmentLabel}>
            {option.label}
            {option.note ? (
              <small className={styles.segmentNote}>{option.note}</small>
            ) : null}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
