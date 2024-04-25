import clsx from "clsx";
import type { ReactNode } from "react";

export function Eyebrow({ children, dot, light }: { children: ReactNode; dot?: boolean; light?: boolean }) {
  return (
    <p className={clsx("eyebrow", light && "light")}>
      {dot && <span className="dot" />}
      {children}
    </p>
  );
}

interface SectionHeadProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  center?: boolean;
  className?: string;
  as?: "h1" | "h2";
  dot?: boolean;
}

export function SectionHead({ eyebrow, title, body, center, className, as: Heading = "h2", dot }: SectionHeadProps) {
  return (
    <div className={clsx("sec-head", center && "center", className)}>
      {eyebrow && <Eyebrow dot={dot}>{eyebrow}</Eyebrow>}
      <Heading>{title}</Heading>
      {body && <p>{body}</p>}
    </div>
  );
}
