import { Ionicons } from "@expo/vector-icons";
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

export default function Register() {
  const router = useRouter();
  const colors = useColors();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const passwordsMatch =
    password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

  const canSubmit =
    username.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length >= 6 &&
    passwordsMatch &&
    acceptedTerms;

  const inputClass = (focused: boolean) =>
    `h-14 px-4 rounded-2xl border-2 text-secondary-700 ${
      focused ? "border-primary bg-secondary" : "border-secondary-300 bg-secondary-300"
    }`;

  const handleSubmit = () => {
    if (!canSubmit) {
      if (!passwordsMatch) {
        setFormError("Las contraseñas no coinciden");
      } else if (password.length < 6) {
        setFormError("La contraseña debe tener al menos 6 caracteres");
      } else if (!acceptedTerms) {
        setFormError("Acepta los términos para continuar");
      }
      return;
    }
    setFormError(null);
    router.replace("/(auth)/onboarding/avatar");
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 pt-2 pb-8">
            <View className="flex-row items-center justify-between pt-2 pb-6">
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
                Crear cuenta
              </Text>
              <View className="w-12 h-12" />
            </View>

            <View className="gap-6">
              <View className="gap-2">
                <Text className="text-sm font-poppins-medium text-secondary-700 pl-4">
                  Username
                </Text>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                  placeholder="tu_username"
                  placeholderTextColor={colors.secondary[500]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  className={inputClass(usernameFocused)}
                />
              </View>

              <View className="gap-2">
                <Text className="text-sm font-poppins-medium text-secondary-700 pl-4">
                  Email
                </Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder="tu@email.com"
                  placeholderTextColor={colors.secondary[500]}
                  inputMode="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  className={inputClass(emailFocused)}
                />
              </View>

              <View className="gap-2">
                <Text className="text-sm font-poppins-medium text-secondary-700 pl-4">
                  Contraseña
                </Text>
                <View
                  className={`h-14 flex-row items-center rounded-2xl border-2 px-4 ${
                    passwordFocused
                      ? "border-primary bg-secondary"
                      : "border-secondary-300 bg-secondary-300"
                  }`}
                >
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholder="Mínimo 6 caracteres"
                    placeholderTextColor={colors.secondary[500]}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="flex-1 text-secondary-700"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword((p) => !p)}
                    className="ml-2 p-1"
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color="#9d9d9d"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="gap-2">
                <Text className="text-sm font-poppins-medium text-secondary-700 pl-4">
                  Confirmar contraseña
                </Text>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onFocus={() => setConfirmFocused(true)}
                  onBlur={() => setConfirmFocused(false)}
                  placeholder="Repite tu contraseña"
                  placeholderTextColor={colors.secondary[500]}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  className={inputClass(confirmFocused)}
                />
                {confirmPassword.length > 0 && !passwordsMatch && (
                  <Text className="text-xs text-primary pl-4 font-poppins-regular">
                    Las contraseñas no coinciden
                  </Text>
                )}
              </View>

              <View className="flex-row items-start gap-3 p-3">
                <TouchableOpacity
                  onPress={() => setAcceptedTerms((a) => !a)}
                  className={`w-6 h-6 rounded border items-center justify-center ${
                    acceptedTerms
                      ? "bg-primary border-primary"
                      : "bg-secondary-300 border-secondary-500"
                  }`}
                >
                  {acceptedTerms && (
                    <Ionicons name="checkmark" size={14} color="#1a1a1a" />
                  )}
                </TouchableOpacity>
                <View className="flex-1">
                  <Text className="text-sm font-poppins-regular text-secondary-700">
                    Acepto los{" "}
                    <Text className="text-primary">Términos de Uso</Text> y la{" "}
                    <Text className="text-primary">Política de Privacidad</Text>
                  </Text>
                </View>
              </View>

              {formError && (
                <Text className="text-sm text-primary pl-4 font-poppins-regular">
                  {formError}
                </Text>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!canSubmit}
                className={`h-14 rounded-2xl items-center justify-center mt-2 ${
                  canSubmit ? "bg-primary" : "bg-secondary-500"
                }`}
                activeOpacity={0.8}
              >
                <Text className="text-secondary font-poppins-semibold text-base tracking-tighter">
                  Crear cuenta
                </Text>
              </TouchableOpacity>

              <View className="flex-row justify-center gap-2 mt-4">
                <Text className="text-sm font-poppins-regular text-secondary-500">
                  ¿Ya tienes cuenta?
                </Text>
                <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                  <Text className="text-sm font-poppins-medium text-primary">
                    Inicia sesión
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
