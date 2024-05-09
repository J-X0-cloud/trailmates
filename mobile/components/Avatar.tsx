import { StyleSheet, Text, View } from "react-native";
import { avatarColors, colors } from "@/constants/theme";

export function Avatar({ initials, color = 0, size = 36 }: { initials: string; color?: number; size?: number }) {
  return (
    <View
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: avatarColors[color % avatarColors.length] },
      ]}
      accessibilityLabel={initials}
    >
      <Text style={[styles.text, { fontSize: size * 0.34 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: { alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: colors.white },
  text: { color: colors.white, fontWeight: "700" },
});
