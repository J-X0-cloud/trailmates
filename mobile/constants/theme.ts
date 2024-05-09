/** Trailmates tokens, shared with the web stylesheet: lagoon for progress, sun for streaks, coral for "you". */
export const colors = {
  cream: "#FFF8EC",
  paper: "#FFFDF8",
  ink: "#16263A",
  ink2: "#44546A",
  muted: "#6B7A8C",
  line: "#EADFC9",
  lagoon: "#0FA3B1",
  lagoonDark: "#0B7C8A",
  lagoonDeep: "#0A4E5A",
  sun: "#FFD166",
  sunDark: "#F4A300",
  coral: "#FF6B57",
  mint: "#C9EEE3",
  sky: "#DDF3F5",
  ringTrack: "#EEF2F2",
  white: "#FFFFFF",
} as const;

/** Map palette for the virtual route illustrations. */
export const mapColors = {
  land: "#F5EFDD",
  water: "#BFE4EA",
  park: "#CDE7C0",
  dune: "#F3D9A8",
  road: "#FFFFFF",
  grid: "#E6DCC3",
} as const;

/** Streak calendar intensity, l0 (shielded rest) → l4 (10k+). */
export const streakLevels = {
  l0: "#FFD9D2",
  l1: "#D5F0EC",
  l2: "#9EDCD9",
  l3: "#4FC0C8",
  l4: "#0B7C8A",
  empty: "#F1EEE6",
  future: "#E6DECD",
} as const;

export const avatarColors = ["#FF6B57", "#0FA3B1", "#F4A300", "#7A5AF8", "#2E9E5B", "#E0518C", "#16263A"] as const;

export const radius = { sm: 12, md: 18, lg: 24, pill: 999 } as const;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 } as const;

export const text = {
  title: { fontSize: 26, fontWeight: "700", letterSpacing: -0.4, color: colors.ink },
  heading: { fontSize: 17, fontWeight: "700", color: colors.ink },
  body: { fontSize: 15, color: colors.ink2 },
  caption: { fontSize: 13, color: colors.muted },
} as const;
