import { useColorScheme } from "react-native";
import { Colors } from "@/components/colors";
import { useThemeStore } from "@/store/theme";

export function useColors() {
  const mode = useThemeStore((s) => s.mode);
  const systemScheme = useColorScheme();
  const resolved =
    mode === "auto" ? (systemScheme === "light" ? "light" : "dark") : mode;
  return resolved === "dark" ? Colors.dark : Colors.light;
}
