import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { PODIUM, RANKS } from "@/lib/data/crew";
import { LEAGUE } from "@/lib/data/teams";
import { rankTeams } from "@/lib/scoring";

const Query = z.object({ board: z.enum(["friends", "team", "office"]).default("friends") });

export function GET(request: NextRequest) {
  const parsed = Query.safeParse(Object.fromEntries(request.nextUrl.searchParams));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  if (parsed.data.board === "office") {
    return NextResponse.json({
      board: "office",
      week: LEAGUE.week,
      rows: rankTeams(LEAGUE.table.map(({ team, steps }) => ({ team, steps }))),
    });
  }

  const podium = [...PODIUM].sort((a, b) => a.place - b.place).map((p) => ({ rank: p.place, name: p.name, initials: p.initials, weekly: p.weekly }));
  const rest = RANKS.map((r) => ({ rank: r.rank, name: r.name, initials: r.initials, weekly: r.weeklySteps, move: r.move }));
  return NextResponse.json({ board: parsed.data.board, resetsOn: "Monday", rows: [...podium, ...rest] });
}
