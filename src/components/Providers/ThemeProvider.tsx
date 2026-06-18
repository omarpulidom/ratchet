import { useColorScheme } from "react-native";
import { useThemeStore } from "@/store/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);
  const systemScheme = useColorScheme();
  const resolved =
    mode === "auto" ? (systemScheme === "light" ? "light" : "dark") : mode;

  return (
    <>
      {children}
    </>
  );
}

export function useResolvedTheme() {
  const mode = useThemeStore((s) => s.mode);
  const systemScheme = useColorScheme();
  const resolved =
    mode === "auto" ? (systemScheme === "light" ? "light" : "dark") : mode;
  return resolved;
}
