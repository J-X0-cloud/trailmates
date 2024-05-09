import { StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";

export function ProgressBar({ fraction, thin, color = colors.lagoon }: { fraction: number; thin?: boolean; color?: string }) {
  const pct = Math.round(Math.min(Math.max(fraction, 0), 1) * 100);
  return (
    <View style={[styles.track, thin && styles.thin]} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: pct }}>
      <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]} />
    </View>
  );
}

/** Team-vs-team bar: lagoon for us, coral for them. */
export function SplitBar({ share, light }: { share: number; light?: boolean }) {
  return (
    <View style={[styles.split, light && styles.splitLight]}>
      <View style={[styles.splitFill, { flex: share }, light && styles.splitFillLight]} />
      <View style={{ flex: 1 - share }} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 8, borderRadius: 8, backgroundColor: "#EFE7D6", overflow: "hidden" },
  thin: { height: 5 },
  fill: { height: "100%", borderRadius: 8 },
  split: { flexDirection: "row", height: 10, borderRadius: 10, overflow: "hidden", backgroundColor: colors.coral },
  splitLight: { backgroundColor: "rgba(255,255,255,0.35)" },
  splitFill: { backgroundColor: colors.lagoon, borderRightWidth: 2, borderRightColor: colors.white },
  splitFillLight: { backgroundColor: colors.sun },
});
