import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const USERNAME_REGEX = /^[a-z0-9_]{3,20}$/;

export default function OnboardingUsername() {
  const router = useRouter();
  const colors = useColors();
  const [username, setUsername] = useState("");
  const [focused, setFocused] = useState(false);

  const trimmed = username.trim().toLowerCase();
  const isValid = USERNAME_REGEX.test(trimmed);
  const isAvailable = isValid && trimmed !== "admin" && trimmed !== "ratchet";
  const showError = username.length > 0 && !isValid;
  const showTaken = username.length > 0 && isValid && !isAvailable;

  const canContinue = isValid && isAvailable;

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="flex-1 px-6 pt-2">
          <View className="flex-row items-center justify-between pt-2 pb-4">
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
              2 de 3
            </Text>
            <View className="w-12 h-12" />
          </View>
          <View className="h-1 rounded-full bg-secondary-300 overflow-hidden">
            <View className="h-full w-2/3 bg-primary" />
          </View>

          <View className="flex-1 justify-center gap-8">
            <View className="gap-2">
              <Text className="text-secondary-700 font-poppins-semibold text-[28px] tracking-tighter text-center">
                Elige tu @username
              </Text>
              <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center">
                3 a 20 caracteres, solo minúsculas, números y guión bajo
              </Text>
            </View>

            <View className="gap-3">
              <View
                className={`flex-row items-center h-16 px-4 rounded-2xl border-2 ${
                  focused
                    ? "border-primary bg-secondary"
                    : "border-secondary-300 bg-secondary-300"
                }`}
              >
                <Text className="text-secondary-500 font-poppins-medium text-[20px] tracking-tighter pr-1">
                  @
                </Text>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="tu_username"
                  placeholderTextColor={colors.secondary[500]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus
                  className="flex-1 text-secondary-700 font-poppins-medium text-[20px] tracking-tighter"
                />
                {canContinue && (
                  <View pointerEvents="none">
                    <Icon.CheckCircleIcon size={24} color={colors.primary.DEFAULT} weight="fill" />
                  </View>
                )}
              </View>

              {showError && (
                <Text className="text-sm text-primary pl-4 font-poppins-regular">
                  Formato inválido. Solo minúsculas, números y guión bajo.
                </Text>
              )}
              {showTaken && (
                <Text className="text-sm text-primary pl-4 font-poppins-regular">
                  Este username no está disponible
                </Text>
              )}
              {canContinue && (
                <Text className="text-sm text-primary pl-4 font-poppins-regular">
                  ¡Disponible!
                </Text>
              )}
            </View>
          </View>

          <View className="gap-3 mb-6">
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/onboarding/suggested")}
              disabled={!canContinue}
              className={`h-14 rounded-2xl items-center justify-center ${
                canContinue ? "bg-primary" : "bg-secondary-500"
              }`}
              activeOpacity={0.8}
            >
              <Text className="text-secondary font-poppins-semibold text-[16px] tracking-tighter">
                Continuar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
