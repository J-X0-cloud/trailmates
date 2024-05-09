import type { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";
import { colors, spacing } from "@/constants/theme";

interface ScreenProps {
  children: ReactNode;
  /** Screens with a full-bleed header (Challenge, Route) handle the top inset themselves. */
  edges?: Edge[];
  padded?: boolean;
}

export function Screen({ children, edges = ["top"], padded = true }: ScreenProps) {
  return (
    <SafeAreaView style={styles.root} edges={edges}>
      <ScrollView
        contentContainerStyle={[styles.content, padded && styles.padded]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  content: { paddingBottom: spacing.xl, gap: spacing.md },
  padded: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
});
