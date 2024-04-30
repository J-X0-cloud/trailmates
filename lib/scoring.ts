import type { CrewMember } from "@/types";

/**
 * Challenge scoring. Raw team totals decide relays and sprints; handicapped scores (steps relative to
 * each player's own baseline) decide head-to-heads and "most improved", so every fitness level can win.
 */

export function crewTotal(crew: Pick<CrewMember, "stepsToday">[]): number {
  return crew.reduce((sum, member) => sum + member.stepsToday, 0);
}

export function leadMargin(home: number, away: number): number {
  return Math.abs(home - away);
}

export interface BaselinedSteps {
  steps: number;
  /** Rolling 28-day median of daily steps. */
  baseline: number;
}

/** 100 = walked exactly your baseline. Capped so one huge day can't decide a week. */
export function handicapScore({ steps, baseline }: BaselinedSteps, cap = 250): number {
  if (baseline <= 0) return 100;
  return Math.min(Math.round((steps / baseline) * 100), cap);
}

/** Week-over-week improvement in percent, used for the "most improved" badge. */
export function improvement(thisWeek: number, lastWeek: number): number {
  if (lastWeek <= 0) return 0;
  return Math.round(((thisWeek - lastWeek) / lastWeek) * 1000) / 10;
}

/**
 * Flags a sync as suspicious when it's far outside the player's normal range, so it goes to a quick
 * review instead of counting automatically.
 */
export function needsReview({ steps, baseline }: BaselinedSteps, threshold = 4): boolean {
  return baseline > 0 && steps > baseline * threshold && steps > 40000;
}

export interface TeamStanding {
  team: string;
  steps: number;
}

export function rankTeams<T extends TeamStanding>(teams: T[]): (T & { rank: number })[] {
  return [...teams].sort((a, b) => b.steps - a.steps).map((team, i) => ({ ...team, rank: i + 1 }));
}
