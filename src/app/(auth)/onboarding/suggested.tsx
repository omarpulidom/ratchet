import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type SuggestedGroup = {
  id: string;
  name: string;
  members: number;
  icon: React.ComponentType<{ size?: number; color?: string; weight?: "regular" | "fill" | "bold" }>;
  color: string;
};

const SUGGESTED: SuggestedGroup[] = [
  { id: "gym", name: "Gym amigos", members: 124, icon: Icon.BarbellIcon, color: "#f83f6d" },
  { id: "lectura", name: "Lectura diaria", members: 87, icon: Icon.BookOpenIcon, color: "#0ab87e" },
  { id: "cocina", name: "Cocinar en casa", members: 53, icon: Icon.ForkKnifeIcon, color: "#facc15" },
  { id: "correr", name: "Correr 5k", members: 211, icon: Icon.PersonSimpleRunIcon, color: "#3b82f6" },
  { id: "box", name: "Box training", members: 42, icon: Icon.HandFistIcon, color: "#a855f7" },
  { id: "sueno", name: "Dormir bien", members: 96, icon: Icon.MoonIcon, color: "#007a7a" },
];

export default function OnboardingSuggested() {
  const router = useRouter();
  const colors = useColors();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

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
            3 de 3
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/")}
            className="px-3 py-2"
          >
            <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
              Saltar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 h-1 rounded-full bg-secondary-300 overflow-hidden">
          <View className="h-full w-full bg-primary" />
        </View>
      </View>

      <View className="flex-1">
        <View className="px-6 pt-4 pb-2 gap-2">
          <Text className="text-secondary-700 font-poppins-semibold text-[28px] tracking-tighter">
            Únete a grupos
          </Text>
          <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
            Selecciona los que te interesen. Puedes cambiarlo después.
          </Text>
        </View>

        <ScrollView className="px-4 mt-4" contentContainerStyle={{ gap: 8 }}>
          {SUGGESTED.map((g) => {
            const isSelected = selected.has(g.id);
            const GroupIcon = g.icon;
            return (
              <TouchableOpacity
                key={g.id}
                onPress={() => toggle(g.id)}
                className="flex-row items-center justify-between p-4 rounded-2xl bg-secondary-300"
                activeOpacity={0.8}
              >
                <View className="flex-row items-center gap-3 flex-1">
                  <View
                    className="w-12 h-12 rounded-full items-center justify-center"
                    style={{ backgroundColor: g.color }}
                  >
                    <View pointerEvents="none">
                      <GroupIcon size={24} color="#1a1a1a" weight="fill" />
                    </View>
                  </View>
                  <View className="flex-1">
                    <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
                      {g.name}
                    </Text>
                    <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                      {g.members} miembros
                    </Text>
                  </View>
                </View>
                <View
                  className={`w-7 h-7 rounded-full items-center justify-center ${
                    isSelected ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  {isSelected && (
                    <View pointerEvents="none">
                      <Icon.CheckIcon size={18} color={colors.secondary[300]} weight="bold" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View className="px-6 gap-3 mb-6 pt-4">
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)")}
            className="h-14 rounded-2xl items-center justify-center bg-primary"
            activeOpacity={0.8}
          >
            <Text className="text-secondary font-poppins-semibold text-[16px] tracking-tighter">
              {selected.size > 0
                ? `Unirme a ${selected.size} grupo${selected.size > 1 ? "s" : ""}`
                : "Finalizar"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
