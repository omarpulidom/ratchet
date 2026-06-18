import { useRouter } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const INVITE_LINK = "ratchet.app/i/abc123xyz";

const SUGGESTED_USERS = [
  { id: "u1", username: "carla_dev", avatarBg: "#0ab87e" },
  { id: "u2", username: "javier_fit", avatarBg: "#3b82f6" },
  { id: "u3", username: "majo_reads", avatarBg: "#a855f7" },
  { id: "u4", username: "tomas_box", avatarBg: "#facc15" },
];

export default function GroupInvite() {
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
          Invitar
        </Text>
        <View className="w-12 h-12" />
      </View>

      <ScrollView
        className="px-4"
        contentContainerStyle={{ gap: 16, paddingBottom: 32 }}
      >
        <View className="bg-secondary-300 rounded-3xl p-4 gap-4">
          <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
            Link de invitación
          </Text>
          <View className="flex-row items-center bg-secondary rounded-2xl px-4 py-3 gap-2">
            <Text
              className="flex-1 text-secondary-700 font-poppins-regular text-[14px] tracking-tighter"
              numberOfLines={1}
            >
              {INVITE_LINK}
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              className="w-9 h-9 rounded-full items-center justify-center bg-primary"
              activeOpacity={0.8}
            >
              <View pointerEvents="none">
                <Icon.CopyIcon size={16} color={colors.secondary[300]} weight="bold" />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            className="h-12 rounded-2xl items-center justify-center bg-primary flex-row gap-2"
            activeOpacity={0.8}
          >
            <View pointerEvents="none">
              <Icon.ShareNetworkIcon size={18} color={colors.secondary[300]} weight="bold" />
            </View>
            <Text className="text-secondary font-poppins-medium text-[14px] tracking-tighter">
              Compartir link
            </Text>
          </TouchableOpacity>
        </View>

        <View className="gap-3">
          <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter pl-2">
            Invitar manualmente
          </Text>
          <View className="flex-row items-center bg-secondary-300 rounded-2xl px-4 gap-2">
            <View pointerEvents="none">
              <Icon.MagnifyingGlassIcon size={18} color={colors.secondary[500]} />
            </View>
            <TextInput
              placeholder="Buscar usuarios"
              placeholderTextColor={colors.secondary[500]}
              className="flex-1 h-12 font-poppins-regular leading-tight text-[16px] text-secondary-700"
            />
          </View>
          <View className="gap-2">
            {SUGGESTED_USERS.map((u) => (
              <View
                key={u.id}
                className="flex-row items-center justify-between p-3 rounded-2xl bg-secondary-300"
              >
                <View className="flex-row items-center gap-3">
                  <View
                    className="w-10 h-10 rounded-full items-center justify-center"
                    style={{ backgroundColor: u.avatarBg }}
                  >
                    <Text className="text-secondary font-poppins-bold text-[14px]">
                      {u.username[0]?.toUpperCase()}
                    </Text>
                  </View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    @{u.username}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  className="px-4 py-2 rounded-full bg-primary"
                  activeOpacity={0.8}
                >
                  <Text className="text-secondary font-poppins-medium text-[12px] tracking-tighter">
                    Invitar
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
