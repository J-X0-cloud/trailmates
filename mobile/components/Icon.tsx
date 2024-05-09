import Svg, { Circle, G, Path, Rect } from "react-native-svg";

/** Same rounded line icons as the web app. */
const PATHS = {
  home: <Path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />,
  flag: <Path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
  map: <Path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  trophy: <Path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4a3 3 0 0 0 4 4m8-4h4a3 3 0 0 1-4 4M12 13v4m-4 4h8m-6-4h4" />,
  user: (
    <>
      <Circle cx={12} cy={8} r={4} />
      <Path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  flame: <Path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z" />,
  shoe: (
    <>
      <Path d="M3 16c0-3 1-8 3-9l3 3c2 1 4 0 5 2 3 0 7 1 7 4v1H3z" />
      <Path d="M3 19h18" />
    </>
  ),
  clock: (
    <>
      <Circle cx={12} cy={12} r={9} />
      <Path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <Path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
      <Circle cx={12} cy={9} r={2.5} />
    </>
  ),
  users: (
    <>
      <Circle cx={9} cy={8} r={3.5} />
      <Path d="M2 20a7 7 0 0 1 14 0" />
      <Path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a7 7 0 0 1 4 6.5" />
    </>
  ),
  clap: <Path d="M7 11l4-4a1.6 1.6 0 0 1 2.3 2.3L11 11.6l4.5-4.5a1.6 1.6 0 0 1 2.3 2.3l-5.7 5.7 4.3-4.3a1.6 1.6 0 0 1 2.3 2.3L13 18.8a6 6 0 0 1-8.5 0 6 6 0 0 1 0-8.5l1-1" />,
  shield: (
    <>
      <Path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <Path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  bolt: <Path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  check: <Path d="M5 12.5l4.5 4.5L19 7.5" />,
  up: <Path d="M12 6l6 8H6z" fill="currentColor" stroke="none" />,
  down: <Path d="M12 18l6-8H6z" fill="currentColor" stroke="none" />,
  chev: <Path d="M9 5l7 7-7 7" />,
  bell: <Path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" />,
  heart: <Path d="M12 20s-8-4.5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.5 12 20 12 20z" />,
  lock: (
    <>
      <Rect x={5} y={11} width={14} height={10} rx={2} />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  chart: <Path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />,
  spark: <Path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  globe: (
    <>
      <Circle cx={12} cy={12} r={9} />
      <Path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName;
  color: string;
  size?: number;
}

export function Icon({ name, color, size = 20 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" color={color}>
        {PATHS[name]}
      </G>
    </Svg>
  );
}
