import { useMemo } from "react";
import Svg, { Circle, G, Path, Rect, Text as SvgText } from "react-native-svg";
import { colors, mapColors } from "@/constants/theme";
import { arcLength, catmullRom, pointAlong, scalePoints } from "@/lib/routes";
import type { VirtualRoute } from "@/lib/types";

interface RouteMapProps {
  route: VirtualRoute;
  progress: number;
  width: number;
  height: number;
  pin?: string;
}

/** Coast terrain in the 320×240 design space, matching the web map. */
function CoastTerrain() {
  return (
    <>
      <Path d="M0 0h118c-10 30 8 52-6 80s12 50-4 86 10 50 2 74H0z" fill={mapColors.water} />
      <Path d="M150 30c30-14 70-8 88 12s-6 40-34 36-66-30-54-48z" fill={mapColors.park} />
      <Path d="M240 150c24-10 60 0 66 22s-24 34-50 28-36-40-16-50z" fill={mapColors.park} />
    </>
  );
}

export function RouteMap({ route, progress, width: w, height: h, pin }: RouteMapProps) {
  const { points, path, length, pinAt, gridX, gridY } = useMemo(() => {
    const scaled = scalePoints(route.points, w, h);
    const geometry = catmullRom(scaled);
    return {
      points: scaled,
      path: geometry.path,
      length: arcLength(geometry.samples),
      pinAt: pointAlong(geometry.samples, progress),
      gridX: Array.from({ length: Math.floor((w - 1) / 40) }, (_, i) => (i + 1) * 40),
      gridY: Array.from({ length: Math.floor((h - 1) / 40) }, (_, i) => (i + 1) * 40),
    };
  }, [route, progress, w, h]);

  const n = points.length;
  const end = points[n - 1] ?? [0, 0];

  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} accessibilityLabel={`Map of the ${route.name} route, ${Math.round(progress * 100)} percent complete`}>
      <Rect width={w} height={h} fill={mapColors.land} />
      <G opacity={0.5} stroke={mapColors.grid} strokeWidth={1}>
        {gridX.map((x) => (
          <Path key={`x${x}`} d={`M${x} 0v${h}`} />
        ))}
        {gridY.map((y) => (
          <Path key={`y${y}`} d={`M0 ${y}h${w}`} />
        ))}
      </G>
      <G scaleX={w / 320} scaleY={h / 240}>
        <CoastTerrain />
      </G>

      <Path d={path} fill="none" stroke="#FFFFFF" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
      <Path d={path} fill="none" stroke={colors.ink} strokeWidth={2.6} strokeLinecap="round" strokeDasharray="1 7" opacity={0.55} />
      <Path
        d={path}
        fill="none"
        stroke={colors.lagoon}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${length * progress} ${length * 2}`}
      />

      {points.map(([x, y], i) =>
        i === 0 || i === n - 1 || i % 2 === 0 ? (
          <Circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill={i / (n - 1) <= progress + 0.01 ? colors.sun : "#FFFFFF"}
            stroke={colors.ink}
            strokeWidth={2}
          />
        ) : null,
      )}

      <G x={end[0] - 2} y={end[1] - 22}>
        <Path d="M2 0v22" stroke={colors.ink} strokeWidth={2.4} strokeLinecap="round" />
        <Path d="M3 1h13l-3.5 4.5L16 10H3z" fill={colors.coral} />
      </G>

      {pin ? (
        <G x={pinAt[0]} y={pinAt[1]}>
          <Circle r={17} fill={colors.lagoon} opacity={0.22} />
          <Circle r={11} fill={colors.coral} stroke="#FFFFFF" strokeWidth={2.5} />
          <SvgText y={3.6} textAnchor="middle" fontSize={9} fontWeight="700" fill="#FFFFFF">
            {pin}
          </SvgText>
        </G>
      ) : null}
    </Svg>
  );
}
