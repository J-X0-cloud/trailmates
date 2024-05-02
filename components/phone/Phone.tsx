import clsx from "clsx";
import type { ReactNode } from "react";

export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("phone", className)}>
      <div className="phone-in">
        <span className="notch" />
        {children}
      </div>
    </div>
  );
}
