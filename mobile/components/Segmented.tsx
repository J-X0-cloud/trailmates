import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

interface SegmentedProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

export function Segmented<T extends string>({ options, value, onChange }: SegmentedProps<T>) {
  return (
    <View style={styles.track} accessibilityRole="tablist">
      {options.map((option) => {
        const on = option === value;
        return (
          <Pressable
            key={option}
            style={[styles.option, on && styles.on]}
            onPress={() => {
              void Haptics.selectionAsync();
              onChange(option);
            }}
            accessibilityRole="tab"
            accessibilityState={{ selected: on }}
          >
            <Text style={[styles.text, on && styles.textOn]}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: { flexDirection: "row", backgroundColor: "#F3EDE0", borderRadius: 14, padding: 3 },
  option: { flex: 1, alignItems: "center", paddingVertical: 7, borderRadius: 11 },
  on: { backgroundColor: colors.white, shadowColor: colors.ink, shadowOpacity: 0.08, shadowRadius: 3, shadowOffset: { width: 0, height: 1 } },
  text: { fontSize: 14, fontWeight: "600", color: colors.muted },
  textOn: { color: colors.ink },
});
