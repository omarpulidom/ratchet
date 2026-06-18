import { TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type IconType = React.ComponentType<{
  size?: number;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}>;

type Variant = "default" | "primary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

type Props = {
  icon: IconType;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  weight?: "regular" | "bold" | "fill";
  color?: string;
  accessibilityLabel?: string;
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "w-9 h-9",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

const ICON_SIZE: Record<Size, number> = {
  sm: 18,
  md: 24,
  lg: 28,
};

const VARIANT_CLASS: Record<Variant, string> = {
  default: "bg-secondary-300",
  primary: "bg-primary",
  ghost: "bg-transparent",
  destructive: "bg-primary",
};

const VARIANT_ICON_COLOR: Record<Variant, (colors: ReturnType<typeof useColors>) => string> = {
  default: (colors) => colors.secondary[700],
  primary: (colors) => colors.secondary.DEFAULT,
  ghost: (colors) => colors.secondary[700],
  destructive: (colors) => colors.secondary.DEFAULT,
};

export function IconButton({
  icon: IconComponent,
  onPress,
  variant = "default",
  size = "md",
  weight = "regular",
  color,
  accessibilityLabel,
}: Props) {
  const colors = useColors();
  const iconColor = color ?? VARIANT_ICON_COLOR[variant](colors);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`${SIZE_CLASS[size]} rounded-full items-center justify-center ${VARIANT_CLASS[variant]}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <View pointerEvents="none">
        <IconComponent size={ICON_SIZE[size]} color={iconColor} weight={weight} />
      </View>
    </TouchableOpacity>
  );
}
