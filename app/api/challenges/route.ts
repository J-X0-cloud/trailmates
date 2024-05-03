import { NextResponse } from "next/server";
import { ROUTES } from "@/lib/data/routes";
import { CreateChallenge } from "@/lib/validation";

const DURATION_DAYS: Record<string, number | null> = {
  "team-relay": 7,
  "weekend-sprint": 2,
  "route-quest": null,
  "office-league": 42,
  "streak-circle": null,
  "head-to-head": 7,
};

export async function POST(request: Request) {
  const parsed = CreateChallenge.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }

  const challenge = parsed.data;
  const days = DURATION_DAYS[challenge.format] ?? null;
  const start = new Date(`${challenge.startsOn}T00:00:00Z`);
  const endsOn = days ? new Date(start.getTime() + days * 86_400_000).toISOString().slice(0, 10) : null;
  const inviteCode = crypto.randomUUID().slice(0, 8);

  return NextResponse.json(
    {
      challenge: {
        id: crypto.randomUUID(),
        ...challenge,
        route: challenge.route ? { key: challenge.route, name: ROUTES[challenge.route].name, miles: ROUTES[challenge.route].miles } : null,
        endsOn,
        inviteUrl: `https://trailmates.com/join/${inviteCode}`,
      },
    },
    { status: 201 },
  );
}
