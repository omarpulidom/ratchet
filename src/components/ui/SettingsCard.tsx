import { ReactNode } from "react";
import { View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  children: ReactNode;
};

export function SettingsCard({ children }: Props) {
  const colors = useColors();
  return (
    <View
      className="rounded-3xl overflow-hidden"
      style={{ backgroundColor: colors.secondary[300] }}
    >
      {children}
    </View>
  );
}

export function Divider() {
  const colors = useColors();
  return <View className="h-px -mx-4" style={{ backgroundColor: colors.secondary.DEFAULT }} />;
}
