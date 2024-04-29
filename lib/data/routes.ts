import type { RouteKey, VirtualRoute } from "@/types";

export const ROUTES: Record<RouteKey, VirtualRoute> = {
  coast: {
    key: "coast",
    name: "Pacific Coast Stroll",
    miles: 190,
    terrain: "coast",
    points: [[40, 212], [74, 176], [70, 134], [104, 110], [98, 70], [140, 50], [190, 64], [232, 40], [284, 30]],
    stops: ["Seaside start", "Harbor pier", "Lighthouse point", "Redwood grove", "Cliff lookout", "Surf town", "Coastline finish"],
    difficulty: "Easy",
    duration: "5 weeks for a crew of 6",
    blurb: "Harbor towns, a lighthouse and a long stretch of cliffs above the surf.",
  },
  desert: {
    key: "desert",
    name: "Canyon Country Ramble",
    miles: 120,
    terrain: "desert",
    points: [[28, 60], [80, 90], [120, 70], [170, 104], [150, 150], [206, 176], [258, 140], [296, 180]],
    stops: ["Trailhead", "Red arch", "Dry wash", "Mesa camp", "Slot canyon", "River bend"],
    difficulty: "Moderate",
    duration: "3 weeks for a crew of 6",
    blurb: "Red arches, dry washes and a slot canyon that rewards the whole team at once.",
  },
  mountain: {
    key: "mountain",
    name: "High Lakes Loop",
    miles: 86,
    terrain: "mountain",
    points: [[30, 214], [70, 170], [120, 186], [150, 140], [196, 120], [230, 84], [280, 110], [292, 60]],
    stops: ["Base camp", "Meadow", "Switchbacks", "Alpine lake", "Ridge line", "Summit hut"],
    difficulty: "Challenging",
    duration: "2 weeks for a crew of 6",
    blurb: "Switchbacks to an alpine lake, then a ridge walk to the summit hut.",
  },
  city: {
    key: "city",
    name: "Big City Bridges",
    miles: 42,
    terrain: "city",
    points: [[24, 28], [70, 70], [120, 58], [170, 110], [220, 150], [260, 110], [296, 204]],
    stops: ["Old market", "Park loop", "River walk", "Bridge five", "Night market"],
    difficulty: "Easy",
    duration: "1 week for a crew of 6",
    blurb: "Five bridges, two markets and a riverside path. A great first route.",
  },
  lakes: {
    key: "lakes",
    name: "Northwoods Lakes Trail",
    miles: 150,
    terrain: "lakes",
    points: [[26, 140], [60, 120], [140, 110], [180, 80], [250, 70], [290, 110], [270, 200]],
    stops: ["Cabin start", "Loon cove", "Birch hollow", "Canoe dock", "Pine ridge", "Lakeside finish"],
    difficulty: "Easy",
    duration: "4 weeks for a crew of 6",
    blurb: "Loon coves, canoe docks and pine ridges strung between quiet lakes.",
  },
  river: {
    key: "river",
    name: "Mississippi Meander",
    miles: 240,
    terrain: "lakes",
    points: [[40, 20], [90, 60], [60, 110], [120, 140], [100, 196], [170, 214], [230, 180], [290, 220]],
    stops: ["Headwaters", "Mill town", "Bluff view", "Riverboat stop", "Delta market"],
    difficulty: "Epic",
    duration: "6 weeks for a crew of 6",
    blurb: "Follow a great river from its headwaters to the delta, one mill town at a time.",
  },
};

/** Library order and each route's sample progress on the /routes page. */
export const LIBRARY: { key: RouteKey; progress: number }[] = [
  { key: "coast", progress: 0.75 },
  { key: "desert", progress: 0.4 },
  { key: "mountain", progress: 0.9 },
  { key: "city", progress: 0.2 },
  { key: "lakes", progress: 0.55 },
  { key: "river", progress: 0.3 },
];

/** Home-page strip: three routes with a team pin on each. */
export const FEATURED_ROUTES: { key: RouteKey; progress: number; team: string }[] = [
  { key: "coast", progress: 0.75, team: "LL" },
  { key: "desert", progress: 0.4, team: "DD" },
  { key: "mountain", progress: 0.9, team: "HB" },
];

export const ROUTE_STATS = [
  { value: "30+", label: "routes in the library" },
  { value: "2,000", label: "steps is about a mile" },
  { value: "New", label: "seasonal routes each month" },
] as const;

export const CUSTOM_ROUTE_TICKS = [
  "Up to 12 custom checkpoints per route",
  "Share routes with other crews by link",
  "Seasonal routes for holidays and charity walks",
];
