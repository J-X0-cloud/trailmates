/**
 * Route geometry: Catmull-Rom splines through each route's control points, converted to cubic
 * Béziers for SVG, plus a dense polyline used to place the team pin at a given fraction of distance.
 */

export type Vec = [number, number];

export interface RouteGeometry {
  path: string;
  samples: Vec[];
}

const f1 = (n: number) => n.toFixed(1);

export function catmullRom(points: Vec[], steps = 24): RouteGeometry {
  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last) return { path: "", samples: [] };

  const padded: Vec[] = [first, ...points, last];
  let path = `M${f1(first[0])} ${f1(first[1])}`;
  const samples: Vec[] = [first];

  for (let i = 1; i < padded.length - 2; i++) {
    const [p0, p1, p2, p3] = [padded[i - 1]!, padded[i]!, padded[i + 1]!, padded[i + 2]!];
    const c1: Vec = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Vec = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    path += ` C${f1(c1[0])} ${f1(c1[1])} ${f1(c2[0])} ${f1(c2[1])} ${f1(p2[0])} ${f1(p2[1])}`;

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

/** Point at `fraction` (0–1) of the total arc length along the sampled polyline. */
export function pointAlong(samples: Vec[], fraction: number): Vec {
  const lengths = samples.slice(1).map((p, i) => Math.hypot(p[0] - samples[i]![0], p[1] - samples[i]![1]));
  const goal = lengths.reduce((a, b) => a + b, 0) * fraction;
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

/** Scale design-space (320×240) points to a target size. */
export function scalePoints(points: Vec[], w: number, h: number): Vec[] {
  const sx = w / 320;
  const sy = h / 240;
  return points.map(([x, y]) => [x * sx, y * sy]);
}

/** ~2,000 steps per mile, the conversion used across the app. */
export const STEPS_PER_MILE = 2000;

export function stepsToMiles(steps: number): number {
  return steps / STEPS_PER_MILE;
}
