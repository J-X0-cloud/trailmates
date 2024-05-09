import { StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { Screen } from "@/components/Screen";
import { SectionHeader } from "@/components/SectionHeader";
import { colors, streakLevels } from "@/constants/theme";
import { march, streakBadges, today } from "@/lib/mock-data";
import type { StreakDay } from "@/lib/types";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const KEY: { level: 0 | 1 | 3 | 4; label: string }[] = [
  { level: 1, label: "5k" },
  { level: 3, label: "8k" },
  { level: 4, label: "10k+" },
  { level: 0, label: "Rest day" },
];

function dayColor(day: StreakDay): string {
  if (day === null || day === "future") return "transparent";
  return streakLevels[`l${day}`];
}

export default function StreakScreen() {
  const counted = march.filter((d): d is 0 | 1 | 2 | 3 | 4 => typeof d === "number");
  const hit = counted.filter((d) => d > 0).length;
  const weeks = Array.from({ length: Math.ceil(march.length / 7) }, (_, w) => march.slice(w * 7, w * 7 + 7));

  return (
    <Screen>
      <View style={styles.hero}>
        <Svg style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="streakHero" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#FFF1CC" />
              <Stop offset="1" stopColor="#FFE2DB" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#streakHero)" />
        </Svg>
        <View style={styles.flame}>
          <Icon name="flame" color={colors.white} size={28} />
        </View>
        <View>
          <Text style={styles.heroTitle}>{today.streakDays}-day streak</Text>
          <Text style={styles.heroSub}>Your longest yet. Keep it lit.</Text>
        </View>
      </View>

      <Card>
        <SectionHeader title="March" meta={`${hit} of ${counted.length} days`} />
        <View style={[styles.week, styles.weekHead]}>
          {WEEKDAYS.map((d, i) => (
            <Text key={i} style={styles.weekday}>
              {d}
            </Text>
          ))}
        </View>
        {weeks.map((week, w) => (
          <View key={w} style={styles.week}>
            {week.map((day, i) => (
              <View
                key={i}
                style={[
                  styles.cell,
                  { backgroundColor: dayColor(day) },
                  day === "future" && styles.future,
                  day === 0 && styles.rest,
                ]}
                accessibilityLabel={
                  day === null ? undefined : day === "future" ? "Upcoming" : day === 0 ? "Rest day, shield used" : `Goal level ${day}`
                }
              />
            ))}
          </View>
        ))}
        <View style={styles.key}>
          {KEY.map((k) => (
            <View key={k.label} style={styles.keyItem}>
              <View style={[styles.keySwatch, { backgroundColor: streakLevels[`l${k.level}`] }]} />
              <Text style={styles.keyText}>{k.label}</Text>
            </View>
          ))}
        </View>
      </Card>

      <View style={styles.badges}>
        {streakBadges.map((badge) => (
          <View key={badge.label} style={styles.badge}>
            <View style={[styles.badgeIcon, { backgroundColor: badge.tint }]}>
              <Icon name={badge.icon} color={colors.ink} size={22} />
            </View>
            <Text style={styles.badgeText}>{badge.label}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flexDirection: "row", alignItems: "center", gap: 14, borderRadius: 20, overflow: "hidden", padding: 16 },
  flame: { width: 54, height: 54, borderRadius: 17, backgroundColor: colors.coral, alignItems: "center", justifyContent: "center" },
  heroTitle: { fontSize: 22, fontWeight: "700", color: colors.ink },
  heroSub: { fontSize: 13, color: colors.ink2 },
  week: { flexDirection: "row", gap: 6, marginTop: 6 },
  weekHead: { marginTop: 10 },
  weekday: { flex: 1, textAlign: "center", fontSize: 12, fontWeight: "600", color: colors.muted },
  cell: { flex: 1, aspectRatio: 1, borderRadius: 9 },
  future: { borderWidth: 1.5, borderStyle: "dashed", borderColor: streakLevels.future },
  rest: { borderWidth: 2, borderColor: "#FFF0EC" },
  key: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
  keyItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  keySwatch: { width: 12, height: 12, borderRadius: 4 },
  keyText: { fontSize: 12, color: colors.muted },
  badges: { flexDirection: "row", gap: 10 },
  badge: { flex: 1, alignItems: "center", gap: 6, backgroundColor: colors.white, borderRadius: 18, borderWidth: 1, borderColor: "#EFE7D6", paddingVertical: 14 },
  badgeIcon: { width: 46, height: 46, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  badgeText: { fontSize: 13, fontWeight: "600", color: colors.ink },
});
