import type { CrewMember, RankRow, StreakCell } from "@/types";

/** Avatar palette, indexed by Player.color. */
export const AVATAR_COLORS = ["#FF6B57", "#0FA3B1", "#F4A300", "#7A5AF8", "#2E9E5B", "#E0518C", "#16263A"];

export const ME = { initials: "MG", name: "Maya", color: 0 } as const;

export const TODAY = {
  dateLabel: "Thursday, March 12",
  steps: 8412,
  goal: 10000,
  streakDays: 23,
  miles: 3.9,
  activeMinutes: 64,
} as const;

export const CHALLENGE = {
  format: "Team Relay",
  day: 4,
  days: 7,
  home: { initials: "LL", name: "Lunch Loopers", steps: 212480, badge: "var(--sun)" },
  away: { initials: "DD", name: "Desk Dashers", steps: 198905, badge: "#fff" },
} as const;

export const CREW: CrewMember[] = [
  { initials: "MG", name: "Maya G.", stepsToday: 8412, color: 0 },
  { initials: "DO", name: "Dev O.", stepsToday: 11290, color: 1 },
  { initials: "PR", name: "Priya R.", stepsToday: 6120, color: 2 },
  { initials: "TB", name: "Theo B.", stepsToday: 9765, color: 3 },
  { initials: "LK", name: "Lena K.", stepsToday: 7340, color: 4 },
];

export const ACTIVE_ROUTE = {
  key: "coast",
  progress: 0.75,
  milesDone: 142.6,
  nextStop: "Cliff lookout",
  milesToNext: 6.2,
  walkingNow: 5,
} as const;

export const PODIUM = [
  { initials: "DO", name: "Dev", weekly: "71.2k", color: 1, place: 2 },
  { initials: "TB", name: "Theo", weekly: "74.9k", color: 3, place: 1 },
  { initials: "MG", name: "Maya", weekly: "68.0k", color: 0, place: 3 },
] as const;

export const RANKS: RankRow[] = [
  { rank: 4, initials: "LK", name: "Lena K.", weeklySteps: "61,540", move: "up", color: 4 },
  { rank: 5, initials: "PR", name: "Priya R.", weeklySteps: "58,215", move: "down", color: 5 },
  { rank: 6, initials: "SA", name: "Sam A.", weeklySteps: "55,030", move: "up", color: 6 },
  { rank: 7, initials: "JN", name: "Jonah N.", weeklySteps: "49,870", move: "flat", color: 0 },
];

export const BOARDS = ["Friends", "Team", "Office"] as const;

/** March, Monday-first. Three blank cells before the 1st; the 9th was a shielded rest day. */
export const STREAK_CALENDAR: StreakCell[] = [
  "e", "e", "e", "l3", "l3", "l4", "l1", "l2", "l2", "l0 rest", "l2", "l3", "l4", "l1", "l2", "l4", "l3", "l2",
  "l2", "l4", "l4", "l2", "l3", "l2", "l4", "l4", "l2", "l4", "l2", "l3", "l4", "f", "f", "f", "f",
];

export const STREAK_BADGES = [
  { icon: "bolt", label: "Early bird", tint: "var(--sun)" },
  { icon: "map", label: "100 miles", tint: "var(--mint)" },
  { icon: "shield", label: "2 shields", tint: "#FFD9D2" },
] as const;
