import Link from "next/link";
import type { Route } from "next";
import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./controls.module.css";

type Variant = "primary" | "secondary" | "quiet";
const classes = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(" ");

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={classes(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: Route;
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={classes(styles.linkButton, styles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { label: string }
>(function IconButton({ label, className, children, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={classes(styles.iconButton, className)}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
});
