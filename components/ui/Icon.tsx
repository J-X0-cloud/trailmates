import type { ReactNode } from "react";

export type IconName =
  | "home"
  | "flag"
  | "map"
  | "trophy"
  | "user"
  | "flame"
  | "shoe"
  | "clock"
  | "pin"
  | "users"
  | "clap"
  | "shield"
  | "bolt"
  | "check"
  | "up"
  | "down"
  | "chev"
  | "bell"
  | "heart"
  | "lock"
  | "chart"
  | "spark"
  | "globe";

/** 24×24 rounded line icons on a 2px stroke. `up`/`down` are filled rank arrows. */
const PATHS: Record<IconName, ReactNode> = {
  home: <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />,
  flag: <path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
  map: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  trophy: <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4a3 3 0 0 0 4 4m8-4h4a3 3 0 0 1-4 4M12 13v4m-4 4h8m-6-4h4" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  flame: <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" />,
  shoe: (
    <>
      <path d="M3 16c0-3 1-8 3-9l3 3c2 1 4 0 5 2 3 0 7 1 7 4v1H3z" />
      <path d="M3 19h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20a7 7 0 0 1 14 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a7 7 0 0 1 4 6.5" />
    </>
  ),
  clap: <path d="M7 11l4-4a1.6 1.6 0 0 1 2.3 2.3L11 11.6l4.5-4.5a1.6 1.6 0 0 1 2.3 2.3l-5.7 5.7 4.3-4.3a1.6 1.6 0 0 1 2.3 2.3L13 18.8a6 6 0 0 1-8.5 0 6 6 0 0 1 0-8.5l1-1" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  up: <path d="M12 6l6 8H6z" fill="currentColor" stroke="none" />,
  down: <path d="M12 18l6-8H6z" fill="currentColor" stroke="none" />,
  chev: <path d="M9 5l7 7-7 7" />,
  bell: <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" />,
  heart: <path d="M12 20s-8-4.5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.5 12 20 12 20z" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  chart: <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
};

export function Icon({ name, className = "ic" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}
