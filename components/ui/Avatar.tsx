import clsx from "clsx";
import { AVATAR_COLORS } from "@/lib/data/crew";

export function Avatar({ initials, color = 0, size }: { initials: string; color?: number; size?: string }) {
  return (
    <span className={clsx("av", size)} style={{ background: AVATAR_COLORS[color % AVATAR_COLORS.length] }}>
      {initials}
    </span>
  );
}
