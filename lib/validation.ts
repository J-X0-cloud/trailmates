import { z } from "zod";
import { ROUTES } from "@/lib/data/routes";
import type { RouteKey } from "@/types";

const ROUTE_KEYS = Object.keys(ROUTES) as [RouteKey, ...RouteKey[]];

export const ChallengeFormat = z.enum([
  "team-relay",
  "weekend-sprint",
  "route-quest",
  "office-league",
  "streak-circle",
  "head-to-head",
]);

export const CreateChallenge = z
  .object({
    format: ChallengeFormat,
    name: z.string().trim().min(2).max(60),
    route: z.enum(ROUTE_KEYS).optional(),
    teams: z
      .array(
        z.object({
          name: z.string().trim().min(2).max(40),
          members: z.array(z.string().email()).min(1).max(50),
        }),
      )
      .min(1)
      .max(12),
    startsOn: z.string().date(),
  })
  .refine((c) => c.format !== "route-quest" || c.route, { message: "Route quests need a route", path: ["route"] })
  .refine((c) => c.format === "route-quest" || c.format === "streak-circle" || c.teams.length >= 2, {
    message: "Competitive formats need at least two teams",
    path: ["teams"],
  });

export const StepSync = z.object({
  playerId: z.string().min(1),
  source: z.enum(["apple-health", "health-connect"]),
  days: z
    .array(
      z.object({
        date: z.string().date(),
        steps: z.number().int().min(0).max(150000),
      }),
    )
    .min(1)
    .max(14),
  baseline: z.number().int().min(0).optional(),
});

export type CreateChallengeInput = z.infer<typeof CreateChallenge>;
export type StepSyncInput = z.infer<typeof StepSync>;
