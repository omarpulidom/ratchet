import { useColorScheme, View } from "react-native";
import { useThemeStore } from "@/store/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);
  const systemScheme = useColorScheme();
  const resolved =
    mode === "auto" ? (systemScheme === "light" ? "light" : "dark") : mode;

  return (
    <View className={resolved === "dark" ? "flex-1 dark" : "flex-1"}>
      {children}
    </View>
  );
}
