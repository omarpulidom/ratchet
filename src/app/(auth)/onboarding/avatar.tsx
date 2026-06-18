import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const AVATAR_COLORS = [
  "#f83f6d", "#6d28d9", "#0ab87e", "#facc15",
  "#3b82f6", "#a855f7", "#f5577e", "#007a7a",
  "#b87a33",
];

const AVATARS = ["P", "M", "A", "D", "L", "C", "R", "S", "O"];

export default function OnboardingAvatar() {
  const router = useRouter();
  const colors = useColors();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="px-6 pt-2 pb-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
            activeOpacity={0.7}
          >
            <View pointerEvents="none">
              <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
            </View>
          </TouchableOpacity>
          <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
            1 de 3
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/onboarding/username")}
            className="px-3 py-2"
          >
            <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
              Saltar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 h-1 rounded-full bg-secondary-300 overflow-hidden">
          <View className="h-full w-1/3 bg-primary" />
        </View>
      </View>

      <View className="flex-1 px-6 pt-8 justify-between">
        <View className="gap-2">
          <Text className="text-secondary-700 font-poppins-semibold text-[28px] tracking-tighter">
            Elige tu avatar
          </Text>
          <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
            Opcional — puedes cambiarlo después
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-6">
          {AVATARS.map((letter, idx) => {
            const isSelected = selected === idx;
            return (
              <TouchableOpacity
                key={letter}
                onPress={() => setSelected(idx)}
                className={`w-[30%] aspect-square rounded-full items-center justify-center ${
                  isSelected ? "border-4 border-primary" : ""
                }`}
                style={{ backgroundColor: AVATAR_COLORS[idx] }}
                activeOpacity={0.8}
              >
                <Text className="text-secondary font-poppins-bold text-[40px] tracking-tighter">
                  {letter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View className="gap-3 mb-6">
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/onboarding/username")}
            className="h-14 rounded-2xl items-center justify-center bg-primary"
            activeOpacity={0.8}
          >
            <Text className="text-secondary font-poppins-semibold text-[16px] tracking-tighter">
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
