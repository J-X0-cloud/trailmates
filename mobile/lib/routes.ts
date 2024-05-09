import type { Vec } from "./types";

/** Catmull-Rom spline through the control points, returned as an SVG path plus dense samples. */
export function catmullRom(points: Vec[], steps = 24): { path: string; samples: Vec[] } {
  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last) return { path: "", samples: [] };

  const padded: Vec[] = [first, ...points, last];
  let path = `M${first[0]} ${first[1]}`;
  const samples: Vec[] = [first];

  for (let i = 1; i < padded.length - 2; i++) {
    const p0 = padded[i - 1]!;
    const p1 = padded[i]!;
    const p2 = padded[i + 1]!;
    const p3 = padded[i + 2]!;
    const c1: Vec = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Vec = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    path += ` C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const mt = 1 - t;
      samples.push([
        mt ** 3 * p1[0] + 3 * mt * mt * t * c1[0] + 3 * mt * t * t * c2[0] + t ** 3 * p2[0],
        mt ** 3 * p1[1] + 3 * mt * mt * t * c1[1] + 3 * mt * t * t * c2[1] + t ** 3 * p2[1],
      ]);
    }
  }
  return { path, samples };
}

export function arcLength(samples: Vec[]): number {
  let total = 0;
  for (let i = 1; i < samples.length; i++) {
    total += Math.hypot(samples[i]![0] - samples[i - 1]![0], samples[i]![1] - samples[i - 1]![1]);
  }
  return total;
}

/** Point at a fraction (0–1) of the route's length — where the team pin sits. */
export function pointAlong(samples: Vec[], fraction: number): Vec {
  const lengths = samples.slice(1).map((p, i) => Math.hypot(p[0] - samples[i]![0], p[1] - samples[i]![1]));
  const goal = lengths.reduce((a, b) => a + b, 0) * Math.min(Math.max(fraction, 0), 1);
  let acc = 0;
  for (let i = 0; i < lengths.length; i++) {
    const seg = lengths[i]!;
    if (acc + seg >= goal) {
      const t = seg ? (goal - acc) / seg : 0;
      const a = samples[i]!;
      const b = samples[i + 1]!;
      return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    }
    acc += seg;
  }
  return samples[samples.length - 1] ?? [0, 0];
}

export function scalePoints(points: Vec[], w: number, h: number): Vec[] {
  return points.map(([x, y]) => [(x * w) / 320, (y * h) / 240]);
}

/** Index of the next checkpoint the team hasn't reached yet. */
export function nextStopIndex(stopCount: number, progress: number): number {
  return Math.min(stopCount - 1, Math.floor(progress * (stopCount - 1)) + 1);
}
