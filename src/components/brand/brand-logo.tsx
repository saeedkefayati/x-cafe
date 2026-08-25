import Link from "next/link";
import styles from "./brand-logo.module.css";

interface BrandLogoProps {
  inverse?: boolean;
  size?: "compact" | "default";
}

export function BrandLogo({
  inverse = false,
  size = "default",
}: BrandLogoProps) {
  return (
    <Link
      className={`${styles.logo} ${inverse ? styles.inverse : ""} ${
        size === "compact" ? styles.compact : ""
      }`}
      href="/"
      aria-label="ایکس کافه، صفحهٔ اصلی"
    >
      <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true">
        <rect
          className={styles.frame}
          x="5"
          y="5"
          width="54"
          height="54"
          rx="19"
        />
        <path className={styles.strokePrimary} d="M19 18 45 46" />
        <path className={styles.strokeAccent} d="M45 18 19 46" />
        <ellipse
          className={styles.bean}
          cx="32"
          cy="32"
          rx="5.75"
          ry="8.25"
          transform="rotate(-35 32 32)"
        />
        <path
          className={styles.beanLine}
          d="M29.4 25.4c4.1 3.1 5 7.3 5.2 13.1"
        />
      </svg>
      <span className={styles.wordmark}>ایکس کافه</span>
    </Link>
  );
}
