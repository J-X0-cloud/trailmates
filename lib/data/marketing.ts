import type { IconName } from "@/components/ui/Icon";
import type { TitledText } from "@/types";
import type { ScreenKey } from "./preview";

export const HOW_IT_WORKS: TitledText[] = [
  { title: "Start a crew", body: "Invite friends, family or coworkers with a link. Crews can be two people or a whole department." },
  { title: "Pick a challenge", body: "Race another team, walk a route together or just keep a group streak. Every format runs on autopilot." },
  { title: "Just walk", body: "Steps sync in the background. Open the app to see the map move, send a cheer, or quietly check who is winning." },
];

export const FEATURES: { screen: ScreenKey; eyebrow: string; title: string; body: string; ticks: string[] }[] = [
  {
    screen: "challenge",
    eyebrow: "Team challenges",
    title: "Pick a side. Walk it together.",
    body: "Set up a week-long relay, a weekend sprint or a month-long league in under a minute. Every step your crew takes lands in one shared total, so the person who walked the dog twice today carries the team, and everyone sees it.",
    ticks: ["Teams of 2 to 50, friends or coworkers", "Live totals with gentle nudges, never spam", "One-tap cheers and a weekly recap"],
  },
  {
    screen: "route",
    eyebrow: "Virtual routes",
    title: "Turn the block into the coastline.",
    body: "Your team’s steps move a shared pin along illustrated routes, from a coastal stroll to a canyon ramble. Hit a checkpoint and the whole crew unlocks a postcard, a bit of local trivia and a small bonus.",
    ticks: ["Hand-drawn maps with real distances", "Checkpoints, postcards and finish-line moments", "Plus members can draw their own routes"],
  },
  {
    screen: "streak",
    eyebrow: "Streaks",
    title: "Streaks that forgive a rest day.",
    body: "Hit your daily goal to keep the flame lit. Shields cover planned rest days and sick days, so a streak rewards the habit, not perfection.",
    ticks: ["Personal goals that adapt to your week", "Earn shields by helping teammates", "A calendar of every good day"],
  },
  {
    screen: "ranks",
    eyebrow: "Leaderboards",
    title: "Competitive, but in a good way.",
    body: "Weekly boards for friends, your team and your office reset every Monday, so nobody is stuck at the bottom forever. Improvement badges celebrate the person who walked more than last week, not only the winner.",
    ticks: ["Weekly resets keep it fresh", "Most improved gets as much love as first place", "Private boards for family groups"],
  },
];

export const BOOSTS = [
  { image: "/images/boost-banana.webp", title: "Snack break", body: "Double steps for the next 30 minutes. Great for the walk back from lunch." },
  { image: "/images/boost-rocket.webp", title: "Rocket start", body: "Kick off Monday with a bonus for everyone on your team who is up before 8." },
  { image: "/images/boost-helmet.webp", title: "Streak helmet", body: "Protects your streak on a planned rest day. Earned, never bought." },
  { image: "/images/boost-sign.webp", title: "Shortcut", body: "When the whole crew hits goal, the team pin skips ahead to the next checkpoint." },
] as const;

export const QUOTES = [
  {
    avatar: "/images/avatar-green.webp",
    quote: "Our book club turned into a walking club by accident. We finished the coast route in five weeks and now nobody wants to stop.",
    name: "Rosa M.",
    role: "Team captain, Page Turners",
  },
  {
    avatar: "/images/avatar-cap.webp",
    quote: "I am not a gym person. Being mile 90 of a canyon with my brothers is the first thing that has gotten me out after dinner every night.",
    name: "Andre T.",
    role: "Walks with family, 41-day streak",
  },
  {
    avatar: "/images/avatar-red.webp",
    quote: "The weekly reset is the genius part. I was last in week one and most improved in week two, and my team cheered like I had won.",
    name: "Kenji W.",
    role: "Office league, design team",
  },
] as const;

export const PREVIEW_PERKS: { icon: IconName; title: string; body: string }[] = [
  { icon: "lock", title: "Private by default", body: "Only step counts are shared with your crew. Location is never used; routes are virtual." },
  { icon: "bell", title: "Nudges, not nagging", body: "One evening reminder if you are close to your goal, plus a weekly recap. That is it." },
  { icon: "heart", title: "Built for every pace", body: "Goals adapt to your own baseline, so a 4,000-step day can still be a win." },
  { icon: "globe", title: "Widgets and watch", body: "Home-screen widgets and a watch complication show your team standing at a glance." },
];
