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
import { useAuth } from "@/components/Providers/AuthProvider";

const inputClass =
  "bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl";

export default function ProfileEdit() {
  const router = useRouter();
  const colors = useColors();
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.username ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [bio, setBio] = useState("");

  const initial = username[0]?.toUpperCase() ?? "U";

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
            Editar perfil
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-12 h-12 rounded-full items-center justify-center bg-primary"
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
        >
          <View className="items-center gap-4 mt-2">
            <View className="w-24 h-24 rounded-full items-center justify-center bg-primary">
              <Text className="text-secondary font-poppins-bold text-[40px] tracking-tighter">
                {initial}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              className="px-4 py-2 rounded-full bg-primary"
              activeOpacity={0.8}
            >
              <Text className="text-secondary font-poppins-medium text-[14px] tracking-tighter">
                Cambiar avatar
              </Text>
            </TouchableOpacity>
          </View>

          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Username
            </Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholderTextColor={colors.secondary[500]}
              autoCapitalize="none"
              autoCorrect={false}
              className={inputClass}
            />
          </View>

          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={colors.secondary[500]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              className={inputClass}
            />
          </View>

          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
              Bio
            </Text>
            <TextInput
              value={bio}
              onChangeText={setBio}
              placeholder="Cuéntanos sobre ti"
              placeholderTextColor={colors.secondary[500]}
              multiline
              numberOfLines={3}
              className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl min-h-[80px]"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
