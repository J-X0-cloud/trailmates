import type { IconName } from "@/components/ui/Icon";

export type ScreenKey = "today" | "challenge" | "route" | "ranks" | "streak";

export const SCREENS: { key: ScreenKey; tab: string; icon: IconName; title: string; description: string }[] = [
  {
    key: "today",
    tab: "Today",
    icon: "home",
    title: "Your day at a glance",
    description:
      "A step ring, your live streak and where your team stands, all on one calm screen. Syncs quietly from the phone’s health data, no extra wearable needed.",
  },
  {
    key: "challenge",
    tab: "Challenge",
    icon: "flag",
    title: "Team vs team, in real time",
    description:
      "Every step from every crew member adds to one shared total. See who is carrying the team today and send a cheer with one tap.",
  },
  {
    key: "route",
    tab: "Route",
    icon: "map",
    title: "Walk somewhere worth walking",
    description:
      "Team steps move your pin along a real-feeling route. Checkpoints unlock postcards and trivia, so a Tuesday lap of the office park becomes mile 142 of the coast.",
  },
  {
    key: "ranks",
    tab: "Ranks",
    icon: "trophy",
    title: "Leaderboards that stay friendly",
    description:
      "Friends, team and office boards reset every week. Rank changes are shown gently, and everyone who reaches 5,000 steps a day earns a badge.",
  },
  {
    key: "streak",
    tab: "Streak",
    icon: "flame",
    title: "Streaks with a safety net",
    description:
      "A calendar of your good days. Shields cover planned rest days so one busy Sunday never wipes out a month of work.",
  },
];

export const PREVIEW_FACTS = [
  { value: "5", label: "core screens" },
  { value: "Free", label: "to play, forever" },
  { value: "1 tap", label: "to cheer a teammate" },
] as const;
