import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

export default function ProfileAbout() {
  const router = useRouter();
  const colors = useColors();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) router.back();
            else router.replace("/(tabs)/profile");
          }}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Acerca de
        </Text>
        <View className="w-12 h-12" />
      </View>
      <View className="flex-1 items-center justify-center px-8 gap-4">
        <View className="w-20 h-20 rounded-full bg-primary items-center justify-center">
          <View pointerEvents="none">
            <Icon.FlameIcon size={42} color={colors.secondary.DEFAULT} weight="fill" />
          </View>
        </View>
        <Text className="text-secondary-700 font-poppins-bold text-[28px] tracking-tighter">
          Ratchet
        </Text>
        <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center">
          Versión 0.0.1
        </Text>
        <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center mt-4">
          Rachas que importan, con quien importa.
        </Text>
      </View>
    </SafeAreaView>
  );
}
