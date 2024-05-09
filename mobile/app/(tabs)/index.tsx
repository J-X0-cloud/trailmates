import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import { Icon, type IconName } from "@/components/Icon";
import { ProgressBar, SplitBar } from "@/components/ProgressBar";
import { Screen } from "@/components/Screen";
import { StepRing } from "@/components/StepRing";
import { colors, text } from "@/constants/theme";
import { formatSteps } from "@/lib/format";
import { challenge, coastRoute, me, routeProgress, today } from "@/lib/mock-data";

const CHIPS: { icon: IconName; value: string; label: string }[] = [
  { icon: "flame", value: String(today.streakDays), label: "day streak" },
  { icon: "shoe", value: String(today.miles), label: "mi" },
  { icon: "clock", value: String(today.activeMinutes), label: "min" },
];

export default function TodayScreen() {
  const { home, away } = challenge;
  const share = home.steps / (home.steps + away.steps);

  return (
    <Screen>
      <View style={styles.top}>
        <View>
          <Text style={text.caption}>{today.dateLabel}</Text>
          <Text style={text.title}>Morning, {me.name}</Text>
        </View>
        <Avatar initials={me.initials} color={me.color} size={42} />
      </View>

      <Card style={styles.ringCard}>
        <StepRing
          fraction={today.steps / today.goal}
          label={formatSteps(today.steps)}
          sub={`of ${formatSteps(today.goal)} steps`}
        />
        <View style={styles.chips}>
          {CHIPS.map((chip) => (
            <View key={chip.label} style={styles.chip}>
              <Icon name={chip.icon} color={colors.lagoonDark} size={16} />
              <Text style={styles.chipText}>
                <Text style={styles.chipValue}>{chip.value}</Text> {chip.label}
              </Text>
            </View>
          ))}
        </View>
      </Card>

      <Pressable onPress={() => router.push("/challenge")} accessibilityRole="button">
        <Card>
          <View style={styles.row}>
            <Text style={text.caption}>
              {challenge.format} · Day {challenge.day} of {challenge.days}
            </Text>
            <Text style={styles.leading}>{home.steps > away.steps ? "Leading" : "Chasing"}</Text>
          </View>
          <View style={[styles.row, styles.gap]}>
            <Text style={styles.team}>{home.name}</Text>
            <Text style={styles.team}>{away.name}</Text>
          </View>
          <SplitBar share={share} />
          <View style={[styles.row, styles.gap]}>
            <Text style={styles.steps}>{formatSteps(home.steps)}</Text>
            <Text style={styles.steps}>{formatSteps(away.steps)}</Text>
          </View>
        </Card>
      </Pressable>

      <Pressable onPress={() => router.push("/route")} accessibilityRole="button">
        <Card style={styles.routeCard}>
          <View style={styles.routeIcon}>
            <Icon name="map" color={colors.lagoonDark} size={22} />
          </View>
          <View style={styles.routeBody}>
            <Text style={text.heading}>{coastRoute.name}</Text>
            <Text style={text.caption}>
              {routeProgress.milesDone} of {coastRoute.miles} mi · next: {routeProgress.nextStop}
            </Text>
            <View style={styles.gap}>
              <ProgressBar fraction={routeProgress.fraction} />
            </View>
          </View>
        </Card>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  ringCard: { alignItems: "center", gap: 14 },
  chips: { flexDirection: "row", gap: 8 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.sky,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipText: { fontSize: 13, color: colors.ink2 },
  chipValue: { fontWeight: "700", color: colors.ink },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  gap: { marginVertical: 6 },
  leading: { fontSize: 12, fontWeight: "700", color: colors.lagoonDark },
  team: { fontSize: 15, fontWeight: "700", color: colors.ink },
  steps: { fontSize: 13, fontWeight: "600", color: colors.ink2, fontVariant: ["tabular-nums"] },
  routeCard: { flexDirection: "row", gap: 12, alignItems: "center" },
  routeIcon: { width: 44, height: 44, borderRadius: 14, backgroundColor: colors.sky, alignItems: "center", justifyContent: "center" },
  routeBody: { flex: 1 },
});
