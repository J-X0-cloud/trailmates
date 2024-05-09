import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { ProgressBar } from "@/components/ProgressBar";
import { RouteMap } from "@/components/RouteMap";
import { colors } from "@/constants/theme";
import { coastRoute, crew, me, routeProgress } from "@/lib/mock-data";
import { nextStopIndex } from "@/lib/routes";

const SHEET_HEIGHT = 250;

export default function RouteScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const mapHeight = Math.max(height - SHEET_HEIGHT - 80, 320);
  const pct = Math.round(routeProgress.fraction * 100);
  const upcoming = coastRoute.stops.slice(nextStopIndex(coastRoute.stops.length, routeProgress.fraction));

  return (
    <View style={styles.root}>
      <RouteMap route={coastRoute} progress={routeProgress.fraction} width={width} height={mapHeight} pin={me.initials} />

      <View style={[styles.chip, { top: insets.top + 10 }]}>
        <Icon name="users" color={colors.lagoonDark} size={16} />
        <Text style={styles.chipText}>{routeProgress.walkingNow} walking now</Text>
      </View>

      <View style={styles.sheet}>
        <View style={styles.grab} />
        <View style={styles.row}>
          <Text style={styles.title}>{coastRoute.name}</Text>
          <Text style={styles.pct}>{pct}%</Text>
        </View>
        <ProgressBar fraction={routeProgress.fraction} />

        <View style={styles.next}>
          <View style={styles.nextIcon}>
            <Icon name="pin" color={colors.coral} size={20} />
          </View>
          <View style={styles.flex}>
            <Text style={styles.nextName}>{routeProgress.nextStop}</Text>
            <Text style={styles.caption}>
              {routeProgress.milesToNext} mi to go · unlocks a postcard
              {upcoming.length > 1 ? ` · then ${upcoming[1]}` : ""}
            </Text>
          </View>
        </View>

        <View style={styles.stack}>
          {crew.map((member, i) => (
            <View key={member.id} style={i > 0 && styles.overlap}>
              <Avatar initials={member.initials} color={member.color} size={32} />
            </View>
          ))}
          <Text style={[styles.caption, styles.stackText]}>
            {routeProgress.milesDone} of {coastRoute.miles} mi
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  flex: { flex: 1 },
  chip: {
    position: "absolute",
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.white,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    shadowColor: colors.ink,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  chipText: { fontSize: 13, fontWeight: "600", color: colors.ink },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: SHEET_HEIGHT,
    backgroundColor: colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 12,
    shadowColor: colors.ink,
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
  },
  grab: { alignSelf: "center", width: 40, height: 5, borderRadius: 3, backgroundColor: "#E4DCCB" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  title: { fontSize: 19, fontWeight: "700", color: colors.ink },
  pct: { fontSize: 15, fontWeight: "700", color: colors.lagoonDark },
  next: { flexDirection: "row", gap: 12, alignItems: "center" },
  nextIcon: { width: 40, height: 40, borderRadius: 13, backgroundColor: "#FFE8E4", alignItems: "center", justifyContent: "center" },
  nextName: { fontSize: 16, fontWeight: "700", color: colors.ink },
  caption: { fontSize: 13, color: colors.muted },
  stack: { flexDirection: "row", alignItems: "center" },
  overlap: { marginLeft: -10 },
  stackText: { marginLeft: 10 },
});
