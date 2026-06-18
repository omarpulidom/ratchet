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

const PERIODS = [
  { id: "libre", label: "Libre" },
  { id: "dia", label: "Día" },
  { id: "semana", label: "Semana" },
  { id: "mes", label: "Mes" },
] as const;

type PeriodId = (typeof PERIODS)[number]["id"];

export default function GroupCreate() {
  const router = useRouter();
  const colors = useColors();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [period, setPeriod] = useState<PeriodId>("libre");
  const [times, setTimes] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [descFocused, setDescFocused] = useState(false);
  const [timesFocused, setTimesFocused] = useState(false);

  const timesNum = parseInt(times, 10);
  const timesValid = period === "libre" || (times.length > 0 && timesNum > 0);
  const canSubmit = name.trim().length > 0 && description.trim().length > 0 && timesValid;

  const handleSubmit = () => {
    if (!canSubmit) return;
    router.back();
  };

  const periodSuffix: Record<Exclude<PeriodId, "libre">, string> = {
    dia: "veces al día",
    semana: "veces por semana",
    mes: "veces al mes",
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
              className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl"
            />
          </View>

          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Descripción
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
              className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl min-h-[80px]"
            />
          </View>

          <View className="gap-3">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Meta
            </Text>

            <View className="flex-row bg-secondary-300 overflow-hidden rounded-3xl items-center p-1.5 gap-1">
              {PERIODS.map((p) => {
                const isActive = period === p.id;
                return (
                  <TouchableOpacity
                    key={p.id}
                    onPress={() => setPeriod(p.id)}
                    className={`flex-1 py-2 rounded-2xl items-center justify-center ${
                      isActive ? "bg-primary" : ""
                    }`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-[14px] tracking-tighter font-poppins-medium ${
                        isActive ? "text-secondary" : "text-secondary-700"
                      }`}
                    >
                      {p.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {period !== "libre" && (
              <View className="gap-2">
                <View
                  className="bg-secondary-300 flex-row items-center py-4 px-4 border-2 border-secondary-300 rounded-3xl"
                >
                  <TextInput
                    value={times}
                    onChangeText={(t) => setTimes(t.replace(/[^0-9]/g, ""))}
                    onFocus={() => setTimesFocused(true)}
                    onBlur={() => setTimesFocused(false)}
                    placeholder="2"
                    placeholderTextColor={colors.secondary[500]}
                    keyboardType="number-pad"
                    maxLength={3}
                    className="w-12 font-poppins-medium text-[16px] text-secondary-700"
                  />
                  <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter pl-1">
                    {periodSuffix[period]}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
