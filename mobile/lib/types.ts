export interface Player {
  id: string;
  initials: string;
  name: string;
  color: number;
}

export interface CrewMember extends Player {
  stepsToday: number;
}

export interface TeamScore {
  initials: string;
  name: string;
  steps: number;
}

export interface Challenge {
  format: string;
  day: number;
  days: number;
  home: TeamScore;
  away: TeamScore;
}

export type Vec = [number, number];

export interface VirtualRoute {
  key: string;
  name: string;
  miles: number;
  points: Vec[];
  stops: string[];
}

export type Board = "Friends" | "Team" | "Office";

export interface RankEntry extends Player {
  rank: number;
  weekly: number;
  move: "up" | "down" | "flat";
}

/** null = outside the month; "future" = not yet; 0 = shielded rest day; 1–4 = 5k / 6.5k / 8k / 10k+. */
export type StreakDay = null | "future" | 0 | 1 | 2 | 3 | 4;
