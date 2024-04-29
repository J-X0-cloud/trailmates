import type { FaqItem, IconCard, TitledText } from "@/types";

export const FORMATS: (IconCard & { duration: string })[] = [
  { icon: "flag", title: "Team Relay", duration: "7 days", body: "Two teams, one week, one shared total each. The classic, and the best way to start." },
  { icon: "bolt", title: "Weekend Sprint", duration: "48 hours", body: "Friday evening to Sunday night. Short, loud and perfect for families and roommates." },
  { icon: "map", title: "Route Quest", duration: "Until you finish", body: "No opponent, just the route. Your crew walks a virtual trail together, checkpoint by checkpoint." },
  { icon: "trophy", title: "Office League", duration: "4 to 8 weeks", body: "Departments play a season of weekly match-ups with a table, playoffs and a final week." },
  { icon: "flame", title: "Streak Circle", duration: "Ongoing", body: "Everyone keeps their own streak, and the circle’s flame grows while the whole group is lit." },
  { icon: "users", title: "Head to Head", duration: "1 to 7 days", body: "Just you and a friend. Handicaps even out different baselines so it stays close." },
];

export const RELAY_WEEK: (TitledText & { day: string })[] = [
  { day: "Mon", title: "Kickoff", body: "Teams are set, the route loads and everyone gets a Rocket start boost." },
  { day: "Wed", title: "Midweek check-in", body: "A friendly recap: who is ahead, who is most improved, and how far to the next checkpoint." },
  { day: "Fri", title: "Boost hour", body: "Snack breaks unlock for everyone. Expect a lot of walking meetings." },
  { day: "Sun", title: "Finish line", body: "Final totals land at 9 pm local time, followed by a recap card worth sharing." },
];

export const FAIR_PLAY: IconCard[] = [
  {
    icon: "shield",
    title: "Fair play, built in",
    body: "Handicaps compare each player to their own baseline, so a desk worker and a mail carrier can both win a week. Unusual spikes are flagged for a quick review instead of counting automatically.",
  },
  {
    icon: "heart",
    title: "Kind by design",
    body: "No public shaming, no red numbers, no streak-loss alarms at midnight. Rank drops are shown quietly, and rest days are part of the plan.",
  },
  {
    icon: "lock",
    title: "Your data stays yours",
    body: "Teammates see step totals and nothing else. Leave a challenge any time and your history goes with you.",
  },
];

export const PLAYER_FAQ: FaqItem[] = [
  {
    question: "Do I need a fitness tracker?",
    answer:
      "No. Trailmates reads steps from your phone through Apple Health or Health Connect. If you wear a watch that already syncs there, those steps count too.",
  },
  {
    question: "How many people can be on a team?",
    answer:
      "Free crews hold up to 8 people. Trailmates Plus raises that to 20, and Teams plans support whole organizations with as many teams as you need.",
  },
  {
    question: "What happens if I miss a day?",
    answer:
      "If you have a shield, it covers the day automatically. Shields are earned by hitting goals and cheering teammates, and you can hold up to three.",
  },
  {
    question: "Can I play with people in other countries?",
    answer:
      "Yes. Challenges use each player’s local day, and routes are virtual, so a crew can span time zones without anyone getting a head start.",
  },
  {
    question: "Is there anything to buy inside challenges?",
    answer:
      "No. Boosts and shields are earned by playing. Plus is a flat subscription for custom routes and bigger crews, and never affects the score.",
  },
];
