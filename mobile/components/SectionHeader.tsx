import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

export function SectionHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {meta ? <Text style={styles.meta}>{meta}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  title: { fontSize: 17, fontWeight: "700", color: colors.ink },
  meta: { fontSize: 13, color: colors.muted },
});
