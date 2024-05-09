import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { ProgressBar, SplitBar } from "@/components/ProgressBar";
import { Screen } from "@/components/Screen";
import { SectionHeader } from "@/components/SectionHeader";
import { colors } from "@/constants/theme";
import { formatSteps } from "@/lib/format";
import { challenge, crew } from "@/lib/mock-data";

export default function ChallengeScreen() {
  const insets = useSafeAreaInsets();
  const [cheered, setCheered] = useState(false);
  const { home, away } = challenge;
  const top = Math.max(...crew.map((m) => m.stepsToday));
  const crewTotal = crew.reduce((sum, m) => sum + m.stepsToday, 0);
  const ranked = [...crew].sort((a, b) => b.stepsToday - a.stepsToday);

  function cheer() {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setCheered(true);
  }

  return (
    <Screen edges={[]} padded={false}>
      <View style={[styles.hero, { paddingTop: insets.top + 16 }]}>
        <Svg style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="challengeHero" x1="0" y1="0" x2="0.4" y2="1">
              <Stop offset="0" stopColor={colors.lagoon} />
              <Stop offset="1" stopColor={colors.lagoonDeep} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#challengeHero)" />
        </Svg>
        <Text style={styles.heroLabel}>
          {challenge.format} · Day {challenge.day} of {challenge.days}
        </Text>
        <View style={styles.vs}>
          <TeamBadge initials={home.initials} name={home.name} steps={home.steps} tint={colors.sun} />
          <Text style={styles.vsText}>vs</Text>
          <TeamBadge initials={away.initials} name={away.name} steps={away.steps} tint={colors.white} />
        </View>
        <SplitBar share={home.steps / (home.steps + away.steps)} light />
        <Text style={styles.heroFoot}>
          {formatSteps(Math.abs(home.steps - away.steps))} steps ahead · {challenge.days - challenge.day} days left
        </Text>
      </View>

      <View style={styles.body}>
        <SectionHeader title="Your crew today" meta={`${formatSteps(crewTotal)} steps`} />
        {ranked.map((member) => (
          <View key={member.id} style={styles.member}>
            <Avatar initials={member.initials} color={member.color} />
            <View style={styles.memberBody}>
              <Text style={styles.memberName}>{member.name}</Text>
              <ProgressBar fraction={member.stepsToday / top} thin />
            </View>
            <Text style={styles.memberSteps}>{formatSteps(member.stepsToday)}</Text>
          </View>
        ))}

        <Pressable
          style={[styles.cheer, cheered && styles.cheered]}
          onPress={cheer}
          disabled={cheered}
          accessibilityRole="button"
        >
          <Icon name={cheered ? "check" : "clap"} color={colors.white} size={20} />
          <Text style={styles.cheerText}>{cheered ? "Cheer sent to 4 teammates" : "Send the crew a cheer"}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

function TeamBadge({ initials, name, steps, tint }: { initials: string; name: string; steps: number; tint: string }) {
  return (
    <View style={styles.team}>
      <View style={[styles.badge, { backgroundColor: tint }]}>
        <Text style={styles.badgeText}>{initials}</Text>
      </View>
      <Text style={styles.teamName}>{name}</Text>
      <Text style={styles.teamSteps}>{formatSteps(steps)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    gap: 12,
    alignItems: "stretch",
  },
  heroLabel: { textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.8)" },
  vs: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  vsText: { fontSize: 15, fontWeight: "700", color: "rgba(255,255,255,0.7)" },
  team: { alignItems: "center", gap: 4, width: 130 },
  badge: { width: 50, height: 50, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  badgeText: { fontSize: 16, fontWeight: "700", color: colors.ink },
  teamName: { fontSize: 15, fontWeight: "700", color: colors.white },
  teamSteps: { fontSize: 20, fontWeight: "700", color: colors.white, fontVariant: ["tabular-nums"] },
  heroFoot: { textAlign: "center", fontSize: 13, fontWeight: "600", color: colors.white },
  body: { paddingHorizontal: 16, paddingTop: 16, gap: 10 },
  member: { flexDirection: "row", alignItems: "center", gap: 12 },
  memberBody: { flex: 1, gap: 5 },
  memberName: { fontSize: 15, fontWeight: "600", color: colors.ink },
  memberSteps: { fontSize: 14, fontWeight: "700", color: colors.ink, fontVariant: ["tabular-nums"] },
  cheer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.coral,
    borderRadius: 999,
    paddingVertical: 14,
  },
  cheered: { backgroundColor: colors.lagoonDark },
  cheerText: { fontSize: 15, fontWeight: "700", color: colors.white },
});
