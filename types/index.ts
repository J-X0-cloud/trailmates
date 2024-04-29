import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  href: string;
  label: string;
}

export type RouteKey = "coast" | "desert" | "mountain" | "city" | "lakes" | "river";
export type TerrainKey = "coast" | "desert" | "mountain" | "city" | "lakes";
export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Epic";

export interface VirtualRoute {
  key: RouteKey;
  name: string;
  miles: number;
  terrain: TerrainKey;
  /** Control points in a 320×240 design space; the map scales them to any size. */
  points: [number, number][];
  stops: string[];
  difficulty: Difficulty;
  duration: string;
  blurb: string;
}

export interface Player {
  initials: string;
  name: string;
  /** Index into the avatar palette. */
  color: number;
}

export interface CrewMember extends Player {
  stepsToday: number;
}

export type RankMove = "up" | "down" | "flat";

export interface RankRow extends Player {
  rank: number;
  weeklySteps: string;
  move: RankMove;
}

/** l0 = rest day covered by a shield, l1..l4 = 5k / 6.5k / 8k / 10k+, e = before the month, f = future */
export type StreakCell = "e" | "f" | "l0 rest" | "l1" | "l2" | "l3" | "l4";

export interface TitledText {
  title: string;
  body: string;
}

export interface IconCard extends TitledText {
  icon: IconName;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
