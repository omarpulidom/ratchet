import { Pressable, Text, View } from "react-native";
import { useThemeStore, type ThemeMode } from "@/store/theme";

const OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
];

export function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);

  return (
    <View className="flex-row bg-secondary-300 rounded-3xl p-1.5">
      {OPTIONS.map((opt) => {
        const isActive = mode === opt.value;
        return (
          <Pressable
            key={opt.value}
            onPress={() => setMode(opt.value)}
            className={`flex-1 py-2 rounded-3xl items-center ${
              isActive ? "bg-primary" : ""
            }`}
          >
            <Text
              className={`text-[14px] tracking-tighter font-poppins-medium ${
                isActive ? "text-white" : "text-secondary-700"
              }`}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
