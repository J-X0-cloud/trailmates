import type { NavLink } from "@/types";

export const CONTACT_EMAIL = "hello@trailmates.com";

export const SITE = {
  name: "Trailmates",
  url: "https://trailmates.com",
  themeColor: "#0B7C8A",
  blurb:
    "The social step-challenge game. Team up with friends, walk virtual routes together and keep each other moving, one friendly week at a time.",
  legal: "© 2026 Trailmates. Walk more, together.",
  dataNote: "Step data syncs from Apple Health and Health Connect. We never sell it.",
} as const;

export const NAV: NavLink[] = [
  { href: "/challenges", label: "Challenges" },
  { href: "/routes", label: "Routes" },
  { href: "/teams", label: "For teams" },
  { href: "/app", label: "App preview" },
];

export const DOWNLOAD_HREF = "/#download";

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Play",
    links: [
      { href: "/challenges", label: "Challenge formats" },
      { href: "/routes", label: "Virtual routes" },
      { href: "/app", label: "App preview" },
      { href: "/challenges#faq", label: "Player FAQ" },
    ],
  },
  {
    title: "Teams",
    links: [
      { href: "/teams", label: "Workplaces & clubs" },
      { href: "/teams#pricing", label: "Pricing" },
      { href: "/teams#admin", label: "Organizer dashboard" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Talk to us" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Fair play policy" },
    ],
  },
];
