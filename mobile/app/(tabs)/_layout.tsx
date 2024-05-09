import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Icon, type IconName } from "@/components/Icon";
import { colors } from "@/constants/theme";

const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: "index", title: "Today", icon: "home" },
  { name: "challenge", title: "Challenge", icon: "flag" },
  { name: "route", title: "Route", icon: "map" },
  { name: "ranks", title: "Ranks", icon: "trophy" },
  { name: "streak", title: "Streak", icon: "flame" },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.lagoonDark,
        tabBarInactiveTintColor: "#9AA6B2",
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        tabBarStyle: styles.bar,
        sceneStyle: { backgroundColor: colors.paper },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }: { color: string }) => <Icon name={tab.icon} color={color} size={23} />,
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { backgroundColor: colors.white, borderTopColor: "#EFE7D6", borderTopWidth: 1 },
});
