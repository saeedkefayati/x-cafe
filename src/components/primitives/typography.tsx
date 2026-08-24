import type { ElementType, HTMLAttributes } from "react";
import styles from "./typography.module.css";

const classes = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");
type Tone = "primary" | "secondary" | "muted" | "inverse";
type HeadingSize = "displayXl" | "displayLg" | "h1" | "h2" | "h3" | "h4";
type TextSize = "bodyLg" | "body" | "bodySm" | "label" | "caption";

export function Heading({
  as: Component = "h2",
  size = "h2",
  tone = "primary",
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  as?: ElementType;
  size?: HeadingSize;
  tone?: Tone;
}) {
  return (
    <Component
      className={classes(styles.heading, styles[size], styles[tone], className)}
      {...props}
    />
  );
}

export function Text({
  as: Component = "p",
  size = "body",
  tone = "secondary",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: TextSize;
  tone?: Tone;
}) {
  return (
    <Component
      className={classes(styles.text, styles[size], styles[tone], className)}
      {...props}
    />
  );
}

export function Eyebrow(props: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={classes(styles.eyebrow, props.className)} {...props} />;
}
