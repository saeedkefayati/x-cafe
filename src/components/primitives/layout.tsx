import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./layout.module.css";

type Gap = "xs" | "sm" | "md" | "lg" | "xl";
const gapClass: Record<Gap, string> = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};
const classes = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");

export function Box({
  as: Component = "div",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { as?: ElementType }) {
  return <Component className={classes(styles.box, className)} {...props} />;
}

export function Stack({
  gap = "md",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: Gap }) {
  return (
    <div
      className={classes(styles.stack, gapClass[gap], className)}
      {...props}
    />
  );
}

export function Inline({
  gap = "sm",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: Gap }) {
  return (
    <div
      className={classes(styles.inline, gapClass[gap], className)}
      {...props}
    />
  );
}

export function Grid({
  gap = "md",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: Gap }) {
  return (
    <div
      className={classes(styles.grid, gapClass[gap], className)}
      {...props}
    />
  );
}

export function Container({
  size = "default",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { size?: "default" | "wide" | "reading" }) {
  return (
    <div
      className={classes(
        styles.container,
        size === "wide" && styles.containerWide,
        size === "reading" && styles.containerReading,
        className,
      )}
      {...props}
    />
  );
}

export function Section({
  spacing = "default",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  spacing?: "compact" | "default" | "large";
}) {
  return (
    <section
      className={classes(
        styles.section,
        spacing === "compact" && styles.sectionCompact,
        spacing === "large" && styles.sectionLarge,
        className,
      )}
      {...props}
    />
  );
}

export function Surface({
  tone = "default",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "inverse";
}) {
  return (
    <div
      className={classes(
        styles.surface,
        tone === "muted" && styles.surfaceMuted,
        tone === "inverse" && styles.surfaceInverse,
        className,
      )}
      {...props}
    />
  );
}

export function Divider(props: HTMLAttributes<HTMLHRElement>) {
  return <hr className={classes(styles.divider, props.className)} {...props} />;
}

export function AspectRatio({
  ratio = "4 / 5",
  children,
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement> & { ratio?: string; children: ReactNode }) {
  return (
    <div
      className={classes(styles.aspectRatio, className)}
      style={{ ...style, aspectRatio: ratio } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}
