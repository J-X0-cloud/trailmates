import { NextResponse } from "next/server";
import { handicapScore, needsReview } from "@/lib/scoring";
import { StepSync } from "@/lib/validation";

/**
 * Background step sync from the mobile app (Apple Health / Health Connect). Days that look far
 * outside a player's normal range are held for review rather than counted.
 */
export async function POST(request: Request) {
  const parsed = StepSync.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const { playerId, days, baseline = 0 } = parsed.data;
  const results = days.map((day) => {
    const held = needsReview({ steps: day.steps, baseline });
    return {
      date: day.date,
      steps: day.steps,
      status: held ? ("review" as const) : ("counted" as const),
      handicapScore: handicapScore({ steps: day.steps, baseline }),
    };
  });

  return NextResponse.json({
    playerId,
    counted: results.filter((r) => r.status === "counted").reduce((sum, r) => sum + r.steps, 0),
    days: results,
  });
}
