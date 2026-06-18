import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

export default function ProfileHelp() {
  const router = useRouter();
  const colors = useColors();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Ayuda
        </Text>
        <View className="w-12 h-12" />
      </View>
      <View className="flex-1 items-center justify-center px-8 gap-3">
        <View pointerEvents="none">
          <Icon.QuestionIcon size={64} color={colors.secondary[500]} weight="regular" />
        </View>
        <Text className="text-secondary-700 font-poppins-semibold text-[20px] tracking-tighter text-center">
          Próximamente
        </Text>
        <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center">
          Estamos preparando una sección de ayuda y preguntas frecuentes.
        </Text>
      </View>
    </SafeAreaView>
  );
}
