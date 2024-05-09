import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { colors } from "@/constants/theme";

interface StepRingProps {
  fraction: number;
  label: string;
  sub: string;
  size?: number;
  stroke?: number;
}

export function StepRing({ fraction, label, sub, size = 180, stroke = 16 }: StepRingProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const center = size / 2;
  return (
    <View style={{ width: size, height: size }} accessible accessibilityLabel={`${label} ${sub}`}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="stepRing" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={colors.sun} />
            <Stop offset="1" stopColor={colors.lagoon} />
          </LinearGradient>
        </Defs>
        <Circle cx={center} cy={center} r={r} fill="none" stroke={colors.ringTrack} strokeWidth={stroke} />
        <Circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="url(#stepRing)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${c * Math.min(fraction, 1)} ${c}`}
          rotation={-90}
          origin={`${center}, ${center}`}
        />
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.sub}>{sub}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { ...StyleSheet.absoluteFillObject, alignItems: "center", justifyContent: "center" },
  label: { fontSize: 34, fontWeight: "700", letterSpacing: -0.8, color: colors.ink },
  sub: { fontSize: 13, color: colors.muted, marginTop: 2 },
});
