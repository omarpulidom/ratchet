import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { getInitial } from "./_avatarUtils";

type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  name: string;
  size?: Size;
  borderColor?: string;
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const FONT_SIZE: Record<Size, string> = {
  sm: "text-[12px]",
  md: "text-[16px]",
  lg: "text-[20px]",
  xl: "text-[40px]",
};

export function GroupAvatar({ name, size = "md", borderColor }: Props) {
  const colors = useColors();
  const initial = getInitial(name);
  return (
    <View
      className={`${SIZE_CLASS[size]} rounded-full items-center justify-center bg-primary`}
      style={borderColor ? { borderWidth: 2, borderColor } : undefined}
    >
      <Text
        className={`${FONT_SIZE[size]} font-poppins-bold tracking-tighter`}
        style={{ color: colors.secondary.DEFAULT }}
      >
        {initial}
      </Text>
    </View>
  );
}
