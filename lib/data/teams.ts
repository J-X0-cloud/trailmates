import type { FaqItem, IconCard, Plan } from "@/types";
import { CONTACT_EMAIL, DOWNLOAD_HREF } from "./site";

export const LEAGUE = {
  name: "Spring League",
  week: 3,
  weeks: 6,
  kpis: [
    { label: "Participants", value: "418", note: "of 460 invited" },
    { label: "Avg daily steps", value: "8,930", note: "up from week 1" },
    { label: "Miles walked", value: "11,204", note: "league total" },
  ],
  /** Daily league steps in thousands; the last bar is today. */
  daily: [62, 74, 58, 81, 90, 70, 86, 95, 78, 88, 97, 92],
  table: [
    { rank: 1, team: "Design", steps: 612400 },
    { rank: 2, team: "Support", steps: 588120 },
    { rank: 3, team: "Finance", steps: 544980 },
    { rank: 4, team: "Engineering", steps: 531050 },
    { rank: 5, team: "Sales", steps: 498730 },
  ],
};

export const WHY_TEAMS: IconCard[] = [
  { icon: "users", title: "Mixes up the org chart", body: "Cross-department teams and shared routes give people a reason to talk who otherwise never would." },
  { icon: "heart", title: "Inclusive scoring", body: "Baseline handicaps and most-improved awards mean every fitness level has a shot at winning." },
  { icon: "chart", title: "Aggregate reporting only", body: "Organizers see team totals and participation, never an individual’s daily data." },
  { icon: "spark", title: "Launch in an afternoon", body: "Upload a roster or connect your directory, pick a template and send one invite link." },
];

export const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Crews of up to 8", "Team Relay, Sprint and Head to Head", "Five starter routes", "Streaks, shields and boosts"],
    cta: { label: "Download free", href: DOWNLOAD_HREF },
  },
  {
    name: "Plus",
    price: "$4.99",
    period: "per month",
    features: ["Crews of up to 20", "All 30+ routes and seasonal drops", "Draw your own routes", "Private family leaderboards"],
    cta: { label: "Start a free trial", href: DOWNLOAD_HREF },
    featured: true,
  },
  {
    name: "Teams",
    price: "$3",
    period: "per member / month",
    features: ["Unlimited teams and leagues", "Organizer dashboard and exports", "SSO and roster sync", "Charity walks with donation goals"],
    cta: { label: "Talk to us", href: `mailto:${CONTACT_EMAIL}` },
  },
];

export const ORGANIZER_FAQ: FaqItem[] = [
  {
    question: "What does the organizer dashboard show?",
    answer:
      "Participation, team totals, league tables and route progress. Individual step data stays private to each person and their own crew.",
  },
  {
    question: "Can people join without a work account?",
    answer:
      "Yes. Invite links work with any email, which is handy for clubs, schools and contractors. SSO is available on Teams when you want it.",
  },
  {
    question: "Can we run a charity walk?",
    answer:
      "Teams plans include donation goals tied to miles walked. You set the cause and the rate; Trailmates tracks the progress and shows it on the route.",
  },
  {
    question: "How long does setup take?",
    answer: "Most organizers launch the same day: pick a template, add teams, choose a route and share one link.",
  },
];
