import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "./BackButton";
import { useColors } from "@/hooks/useColors";

type Props = {
  title: string;
  backFallbackRoute: string;
  onBack?: () => void;
  right?: ReactNode;
};

export function ScreenHeader({ title, backFallbackRoute, onBack, right }: Props) {
  const router = useRouter();
  const colors = useColors();
  const handleBack = () => {
    if (onBack) onBack();
    else if (router.canGoBack()) router.back();
    else router.replace(backFallbackRoute as never);
  };
  return (
    <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
      <BackButton onPress={handleBack} fallbackRoute={backFallbackRoute} />
      <Text
        className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter"
        numberOfLines={1}
      >
        {title}
      </Text>
      <View className="w-12 h-12 items-center justify-center">
        {right ?? <View />}
      </View>
    </View>
  );
}
