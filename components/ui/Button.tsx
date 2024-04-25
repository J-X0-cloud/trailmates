import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface ButtonProps {
  href: string;
  variant?: "lagoon" | "ghost" | "ink";
  chevron?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({ href, variant = "lagoon", chevron, className, children }: ButtonProps) {
  const classes = clsx("btn", `btn-${variant}`, className);
  const content = (
    <>
      {children}
      {chevron && <Icon name="chev" />}
    </>
  );
  return href.startsWith("mailto:") ? (
    <a className={classes} href={href}>
      {content}
    </a>
  ) : (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
