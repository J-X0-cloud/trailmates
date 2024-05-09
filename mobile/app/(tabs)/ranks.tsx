import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { Screen } from "@/components/Screen";
import { Segmented } from "@/components/Segmented";
import { colors, text } from "@/constants/theme";
import { formatK, formatSteps } from "@/lib/format";
import { leaderboard } from "@/lib/mock-data";
import type { Board, RankEntry } from "@/lib/types";

const BOARDS: readonly Board[] = ["Friends", "Team", "Office"];

/** Podium order left → right: 2nd, 1st, 3rd. */
const PODIUM_ORDER = [1, 0, 2];
const STEP_STYLE = {
  1: { height: 76, color: colors.sunDark },
  2: { height: 56, color: colors.lagoon },
  3: { height: 42, color: colors.coral },
} as const;

export default function RanksScreen() {
  const [board, setBoard] = useState<Board>("Friends");
  const rows = leaderboard[board];
  const podium = PODIUM_ORDER.map((i) => rows[i]).filter((row): row is RankEntry => row !== undefined);
  const rest = rows.slice(3);

  return (
    <Screen>
      <View style={styles.top}>
        <Text style={text.title}>Leaderboard</Text>
        <Text style={styles.pill}>This week</Text>
      </View>
      <Segmented options={BOARDS} value={board} onChange={setBoard} />

      <View style={styles.podium}>
        {podium.map((entry) => {
          const step = STEP_STYLE[entry.rank as 1 | 2 | 3];
          return (
            <View key={entry.id} style={styles.pod}>
              <Avatar initials={entry.initials} color={entry.color} size={entry.rank === 1 ? 52 : 44} />
              <Text style={styles.podName} numberOfLines={1}>
                {entry.name}
              </Text>
              <Text style={styles.podSteps}>{formatK(entry.weekly)}</Text>
              <View style={[styles.step, { height: step.height, backgroundColor: step.color }]}>
                <Text style={styles.stepText}>{entry.rank}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.list}>
        {rest.map((entry) => (
          <View key={entry.id} style={styles.row}>
            <Text style={styles.rank}>{entry.rank}</Text>
            <Avatar initials={entry.initials} color={entry.color} size={34} />
            <Text style={styles.name}>{entry.name}</Text>
            <Text style={styles.steps}>{formatSteps(entry.weekly)}</Text>
            <MoveIndicator move={entry.move} />
          </View>
        ))}
      </View>

      <View style={styles.note}>
        <Icon name="heart" color={colors.coral} size={18} />
        <Text style={styles.noteText}>Everyone who hits 5k a day earns a trail badge.</Text>
      </View>
    </Screen>
  );
}

function MoveIndicator({ move }: { move: RankEntry["move"] }) {
  if (move === "flat") return <View style={styles.flat} accessibilityLabel="No change" />;
  return (
    <View accessibilityLabel={move === "up" ? "Moved up" : "Moved down"}>
      <Icon name={move} color={move === "up" ? colors.lagoon : colors.coral} size={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  pill: {
    overflow: "hidden",
    fontSize: 12,
    fontWeight: "600",
    color: colors.lagoonDark,
    backgroundColor: colors.sky,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  podium: { flexDirection: "row", alignItems: "flex-end", justifyContent: "center", gap: 8, marginTop: 6 },
  pod: { flex: 1, alignItems: "center", gap: 2 },
  podName: { fontSize: 14, fontWeight: "700", color: colors.ink, marginTop: 4 },
  podSteps: { fontSize: 12, color: colors.muted },
  step: {
    alignSelf: "stretch",
    marginTop: 6,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: { fontSize: 22, fontWeight: "700", color: colors.white },
  list: { gap: 6 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.white,
    borderColor: "#EFE7D6",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  rank: { width: 18, fontSize: 14, fontWeight: "700", color: colors.muted, textAlign: "center" },
  name: { flex: 1, fontSize: 15, fontWeight: "600", color: colors.ink },
  steps: { fontSize: 14, fontWeight: "600", color: colors.ink2, fontVariant: ["tabular-nums"] },
  flat: { width: 12, height: 3, borderRadius: 2, backgroundColor: "#C9D1D9", marginHorizontal: 2 },
  note: { flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "#FFF1EC", borderRadius: 16, padding: 12 },
  noteText: { flex: 1, fontSize: 13, color: colors.ink2 },
});
