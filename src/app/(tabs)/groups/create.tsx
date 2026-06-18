import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type ThemeIcon = {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string; weight?: "regular" | "fill" | "bold" }>;
  color: string;
};

const THEME_ICONS: ThemeIcon[] = [
  { id: "gym", name: "Gym", icon: Icon.BarbellIcon, color: "#f83f6d" },
  { id: "lectura", name: "Lectura", icon: Icon.BookOpenIcon, color: "#0ab87e" },
  { id: "cocina", name: "Cocina", icon: Icon.ForkKnifeIcon, color: "#facc15" },
  { id: "correr", name: "Correr", icon: Icon.PersonSimpleRunIcon, color: "#3b82f6" },
  { id: "box", name: "Box", icon: Icon.HandFistIcon, color: "#a855f7" },
  { id: "sueno", name: "Sueño", icon: Icon.MoonIcon, color: "#007a7a" },
  { id: "musica", name: "Música", icon: Icon.MusicNotesIcon, color: "#b87a33" },
  { id: "codigo", name: "Código", icon: Icon.CodeIcon, color: "#6d28d9" },
  { id: "arte", name: "Arte", icon: Icon.PaintBrushIcon, color: "#f5577e" },
];

const WEEKLY_GOALS = [
  { id: "libre", label: "Libre" },
  { id: "3", label: "3 / semana" },
  { id: "5", label: "5 / semana" },
  { id: "7", label: "7 / semana" },
];

export default function GroupCreate() {
  const router = useRouter();
  const colors = useColors();
  const [name, setName] = useState("");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("libre");
  const [nameFocused, setNameFocused] = useState(false);
  const [descFocused, setDescFocused] = useState(false);

  const canSubmit = name.trim().length > 0 && themeId !== null;

  const handleSubmit = () => {
    if (!canSubmit) return;
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
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
            Crear grupo
          </Text>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!canSubmit}
            className={`w-12 h-12 rounded-full items-center justify-center ${
              canSubmit ? "bg-primary" : "bg-secondary-500"
            }`}
            activeOpacity={0.7}
          >
            <View pointerEvents="none">
              <Icon.CheckIcon size={24} color={colors.secondary[300]} weight="bold" />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          className="flex-1 px-4"
          contentContainerStyle={{ gap: 24, paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Nombre del grupo
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder="Ej. Gym amigos"
              placeholderTextColor={colors.secondary[500]}
              className={`h-14 px-4 rounded-2xl border-2 font-poppins-regular text-[16px] text-secondary-700 ${
                nameFocused
                  ? "border-primary bg-secondary"
                  : "border-secondary-300 bg-secondary-300"
              }`}
            />
          </View>

          <View className="gap-3">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Temática
            </Text>
            <View className="flex-row flex-wrap gap-3 px-2">
              {THEME_ICONS.map((t) => {
                const ThemeI = t.icon;
                const isSelected = themeId === t.id;
                return (
                  <TouchableOpacity
                    key={t.id}
                    onPress={() => setThemeId(t.id)}
                    className="items-center gap-2"
                    activeOpacity={0.8}
                  >
                    <View
                      className={`w-16 h-16 rounded-2xl items-center justify-center ${
                        isSelected ? "border-2 border-primary" : ""
                      }`}
                      style={{ backgroundColor: t.color }}
                    >
                      <View pointerEvents="none">
                        <ThemeI size={28} color={colors.secondary.DEFAULT} weight="fill" />
                      </View>
                    </View>
                    <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                      {t.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Descripción (opcional)
            </Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              onFocus={() => setDescFocused(true)}
              onBlur={() => setDescFocused(false)}
              placeholder="¿De qué se trata el grupo?"
              placeholderTextColor={colors.secondary[500]}
              multiline
              numberOfLines={3}
              className={`px-4 py-3 rounded-2xl border-2 font-poppins-regular text-[16px] text-secondary-700 ${
                descFocused
                  ? "border-primary bg-secondary"
                  : "border-secondary-300 bg-secondary-300"
              }`}
              style={{ minHeight: 80, textAlignVertical: "top" }}
            />
          </View>

          <View className="gap-3">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Meta semanal
            </Text>
            <View className="flex-row bg-secondary-300 rounded-2xl p-1.5 gap-1">
              {WEEKLY_GOALS.map((g) => {
                const isActive = goal === g.id;
                return (
                  <TouchableOpacity
                    key={g.id}
                    onPress={() => setGoal(g.id)}
                    className={`flex-1 py-2 rounded-2xl items-center ${
                      isActive ? "bg-primary" : ""
                    }`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-[13px] tracking-tighter font-poppins-medium ${
                        isActive ? "text-secondary" : "text-secondary-700"
                      }`}
                    >
                      {g.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
