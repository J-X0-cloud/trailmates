import type { ComponentType } from "react";
import type { ScreenKey } from "@/lib/data/preview";
import { ChallengeScreen } from "./ChallengeScreen";
import { RanksScreen } from "./RanksScreen";
import { RouteScreen } from "./RouteScreen";
import { StreakScreen } from "./StreakScreen";
import { TodayScreen } from "./TodayScreen";

const SCREEN_COMPONENTS: Record<ScreenKey, ComponentType> = {
  today: TodayScreen,
  challenge: ChallengeScreen,
  route: RouteScreen,
  ranks: RanksScreen,
  streak: StreakScreen,
};

/** One app screen wrapped in its themed container, ready to drop into a Phone frame. */
export function AppScreen({ screen }: { screen: ScreenKey }) {
  const Screen = SCREEN_COMPONENTS[screen];
  return (
    <div className={`screen s-${screen}`}>
      <Screen />
    </div>
  );
}
