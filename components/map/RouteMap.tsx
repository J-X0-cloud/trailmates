import clsx from "clsx";
import { ROUTES } from "@/lib/data/routes";
import { catmullRom, pointAlong, scalePoints } from "@/lib/routes";
import type { RouteKey } from "@/types";
import { TERRAIN } from "./Terrain";

interface RouteMapProps {
  route: RouteKey;
  /** Fraction of the route the team has walked, 0–1. */
  progress?: number;
  className?: string;
  /** Initials on the team pin; omit for a map without a pin. */
  pin?: string;
  width?: number;
  height?: number;
  showStops?: boolean;
}

const GRID_STEP = 40;

export function RouteMap({
  route,
  progress = 0.62,
  className,
  pin,
  width: w = 320,
  height: h = 240,
  showStops = true,
}: RouteMapProps) {
  const r = ROUTES[route];
  const points = scalePoints(r.points, w, h);
  const { path, samples } = catmullRom(points);
  const [px, py] = pointAlong(samples, progress);
  const end = points[points.length - 1] ?? [0, 0];
  const n = points.length;

  const gridX = Array.from({ length: Math.ceil(w / GRID_STEP) - 1 }, (_, i) => (i + 1) * GRID_STEP).filter((x) => x < w);
  const gridY = Array.from({ length: Math.ceil(h / GRID_STEP) - 1 }, (_, i) => (i + 1) * GRID_STEP).filter((y) => y < h);

  return (
    <svg
      className={clsx("route-map", className)}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Map of the ${r.name} route, ${Math.round(progress * 100)} percent complete`}
    >
      <rect width={w} height={h} fill="var(--m-land)" />
      <g opacity=".5" stroke="var(--m-grid)" strokeWidth="1">
        {gridX.map((x) => (
          <path key={`x${x}`} d={`M${x} 0v${h}`} />
        ))}
        {gridY.map((y) => (
          <path key={`y${y}`} d={`M0 ${y}h${w}`} />
        ))}
      </g>
      <g transform={`scale(${(w / 320).toFixed(4)} ${(h / 240).toFixed(4)})`}>{TERRAIN[r.terrain]}</g>

      <path d={path} fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path} fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 7" opacity=".55" />
      <path
        d={path}
        pathLength={100}
        fill="none"
        stroke="var(--lagoon)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${(progress * 100).toFixed(1)} 200`}
      />

      {showStops &&
        points.map(([x, y], i) =>
          i === 0 || i === n - 1 || i % 2 === 0 ? (
            <circle
              key={i}
              cx={x.toFixed(1)}
              cy={y.toFixed(1)}
              r="5"
              fill={i / (n - 1) <= progress + 0.01 ? "var(--sun)" : "#fff"}
              stroke="var(--ink)"
              strokeWidth="2"
            />
          ) : null,
        )}

      <g transform={`translate(${(end[0] - 2).toFixed(1)} ${(end[1] - 22).toFixed(1)})`}>
        <path d="M2 0v22" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M3 1h13l-3.5 4.5L16 10H3z" fill="var(--coral)" />
      </g>

      {pin && (
        <g className="map-pin" transform={`translate(${px.toFixed(1)} ${py.toFixed(1)})`}>
          <circle r="15" fill="var(--lagoon)" opacity=".22" />
          <circle r="10" fill="var(--coral)" stroke="#fff" strokeWidth="2.5" />
          <text y="3.4" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff" style={{ fontFamily: "var(--sans)" }}>
            {pin}
          </text>
        </g>
      )}
    </svg>
  );
}
