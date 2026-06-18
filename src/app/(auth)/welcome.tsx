import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";
import { GradientHeader } from "@/components/gradient-header";

export default function Welcome() {
  const router = useRouter();
  const colors = useColors();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <GradientHeader />
      <View className="flex-1 px-6 justify-between">
        <View className="items-center gap-6 mt-32">
          <View className="w-28 h-28 rounded-full bg-primary items-center justify-center">
            <Icon.FlameIcon
              size={56}
              color={colors.secondary.DEFAULT}
              weight="fill"
            />
          </View>
          <View className="items-center gap-3">
            <Text className="text-secondary-700 font-poppins-bold text-[40px] tracking-tighter">
              Ratchet
            </Text>
            <Text className="text-secondary-500 font-poppins-regular text-[16px] tracking-tighter text-center px-6">
              Rachas que importan, con quien importa
            </Text>
          </View>
        </View>

        <View className="gap-3 mb-6">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            className="h-14 rounded-2xl items-center justify-center bg-primary"
            activeOpacity={0.8}
          >
            <Text className="text-secondary font-poppins-semibold text-[16px] tracking-tighter">
              Crear cuenta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            className="h-14 rounded-2xl items-center justify-center bg-secondary-300"
            activeOpacity={0.8}
          >
            <Text className="text-secondary-700 font-poppins-semibold text-[16px] tracking-tighter">
              Ya tengo cuenta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
