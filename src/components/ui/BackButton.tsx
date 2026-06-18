import { useRouter } from "expo-router";
import * as Icon from "phosphor-react-native";
import { IconButton } from "./IconButton";
import { useColors } from "@/hooks/useColors";

type Variant = "default" | "onPrimary";

type Props = {
  onPress?: () => void;
  fallbackRoute: string;
  variant?: Variant;
};

export function BackButton({ onPress, fallbackRoute, variant = "default" }: Props) {
  const router = useRouter();
  const colors = useColors();
  const iconColor = variant === "onPrimary" ? colors.secondary[300] : colors.secondary[700];
  const handlePress = () => {
    if (onPress) onPress();
    else if (router.canGoBack()) router.back();
    else router.replace(fallbackRoute as never);
  };
  return (
    <IconButton
      icon={Icon.CaretLeftIcon}
      onPress={handlePress}
      variant="default"
      color={iconColor}
      accessibilityLabel="Volver"
    />
  );
}
