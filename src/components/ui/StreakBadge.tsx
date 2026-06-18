import { Text, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type Size = "sm" | "md" | "lg";

type Props = {
  days: number;
  size?: Size;
  background?: "card" | "primary";
};

const CONTAINER_CLASS: Record<Size, string> = {
  sm: "flex-row items-center gap-1 p-2 rounded-full",
  md: "flex-row items-center gap-1.5 p-3 rounded-full",
  lg: "flex-row items-center gap-2 p-3 rounded-full",
};

const ICON_SIZE: Record<Size, number> = {
  sm: 14,
  md: 18,
  lg: 22,
};

const FONT_SIZE: Record<Size, string> = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[20px]",
};

export function StreakBadge({ days, size = "md", background = "card" }: Props) {
  const colors = useColors();
  return (
    <View
      className={`${CONTAINER_CLASS[size]} ${
        background === "card" ? "bg-secondary-300" : "bg-secondary"
      }`}
    >
      <Icon.FireSimpleIcon
        size={ICON_SIZE[size]}
        color={colors.primary.DEFAULT}
        weight="fill"
      />
      <Text
        className={`${FONT_SIZE[size]} font-poppins-medium tracking-tighter`}
        style={{ color: colors.secondary[700] }}
      >
        {days}
      </Text>
    </View>
  );
}
