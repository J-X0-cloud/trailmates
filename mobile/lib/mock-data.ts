import type { Challenge, CrewMember, RankEntry, StreakDay, VirtualRoute } from "./types";

/** Sample crew for development builds and store screenshots; same numbers as the website preview. */

export const me = { id: "p-maya", initials: "MG", name: "Maya", color: 0 };

export const today = {
  dateLabel: "Thursday, March 12",
  steps: 8412,
  goal: 10000,
  streakDays: 23,
  miles: 3.9,
  activeMinutes: 64,
};

export const challenge: Challenge = {
  format: "Team Relay",
  day: 4,
  days: 7,
  home: { initials: "LL", name: "Lunch Loopers", steps: 212480 },
  away: { initials: "DD", name: "Desk Dashers", steps: 198905 },
};

export const crew: CrewMember[] = [
  { id: "p-maya", initials: "MG", name: "Maya G.", stepsToday: 8412, color: 0 },
  { id: "p-dev", initials: "DO", name: "Dev O.", stepsToday: 11290, color: 1 },
  { id: "p-priya", initials: "PR", name: "Priya R.", stepsToday: 6120, color: 2 },
  { id: "p-theo", initials: "TB", name: "Theo B.", stepsToday: 9765, color: 3 },
  { id: "p-lena", initials: "LK", name: "Lena K.", stepsToday: 7340, color: 4 },
];

export const coastRoute: VirtualRoute = {
  key: "coast",
  name: "Pacific Coast Stroll",
  miles: 190,
  points: [[40, 212], [74, 176], [70, 134], [104, 110], [98, 70], [140, 50], [190, 64], [232, 40], [284, 30]],
  stops: ["Seaside start", "Harbor pier", "Lighthouse point", "Redwood grove", "Cliff lookout", "Surf town", "Coastline finish"],
};

export const routeProgress = {
  fraction: 0.75,
  milesDone: 142.6,
  nextStop: "Cliff lookout",
  milesToNext: 6.2,
  walkingNow: 5,
};

export const leaderboard: Record<"Friends" | "Team" | "Office", RankEntry[]> = {
  Friends: [
    { id: "p-theo", rank: 1, initials: "TB", name: "Theo", weekly: 74900, move: "up", color: 3 },
    { id: "p-dev", rank: 2, initials: "DO", name: "Dev", weekly: 71200, move: "flat", color: 1 },
    { id: "p-maya", rank: 3, initials: "MG", name: "Maya", weekly: 68000, move: "up", color: 0 },
    { id: "p-lena", rank: 4, initials: "LK", name: "Lena K.", weekly: 61540, move: "up", color: 4 },
    { id: "p-priya", rank: 5, initials: "PR", name: "Priya R.", weekly: 58215, move: "down", color: 5 },
    { id: "p-sam", rank: 6, initials: "SA", name: "Sam A.", weekly: 55030, move: "up", color: 6 },
    { id: "p-jonah", rank: 7, initials: "JN", name: "Jonah N.", weekly: 49870, move: "flat", color: 0 },
  ],
  Team: [
    { id: "p-dev", rank: 1, initials: "DO", name: "Dev", weekly: 71200, move: "up", color: 1 },
    { id: "p-maya", rank: 2, initials: "MG", name: "Maya", weekly: 68000, move: "up", color: 0 },
    { id: "p-theo", rank: 3, initials: "TB", name: "Theo", weekly: 64350, move: "down", color: 3 },
    { id: "p-lena", rank: 4, initials: "LK", name: "Lena K.", weekly: 61540, move: "flat", color: 4 },
    { id: "p-priya", rank: 5, initials: "PR", name: "Priya R.", weekly: 58215, move: "down", color: 5 },
  ],
  Office: [
    { id: "t-design", rank: 1, initials: "DE", name: "Design", weekly: 612400, move: "flat", color: 1 },
    { id: "t-support", rank: 2, initials: "SU", name: "Support", weekly: 588120, move: "up", color: 2 },
    { id: "t-finance", rank: 3, initials: "FI", name: "Finance", weekly: 544980, move: "down", color: 3 },
    { id: "t-eng", rank: 4, initials: "EN", name: "Engineering", weekly: 531050, move: "up", color: 4 },
    { id: "t-sales", rank: 5, initials: "SA", name: "Sales", weekly: 498730, move: "flat", color: 5 },
  ],
};

/** March, Monday-first. */
export const march: StreakDay[] = [
  null, null, null, 3, 3, 4, 1, 2, 2, 0, 2, 3, 4, 1, 2, 4, 3, 2, 2, 4, 4, 2, 3, 2, 4, 4, 2, 4, 2, 3, 4,
  "future", "future", "future", "future",
];

export const streakBadges = [
  { icon: "bolt", label: "Early bird", tint: "#FFD166" },
  { icon: "map", label: "100 miles", tint: "#C9EEE3" },
  { icon: "shield", label: "2 shields", tint: "#FFD9D2" },
] as const;
