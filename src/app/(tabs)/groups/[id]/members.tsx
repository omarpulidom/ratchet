import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const MOCK_MEMBERS = [
  { id: "1", username: "omarcito", role: "owner" as const, avatarBg: "#f83f6d" },
  { id: "2", username: "danydz_al", role: "member" as const, avatarBg: "#3b82f6" },
  { id: "3", username: "pm404", role: "member" as const, avatarBg: "#a855f7" },
  { id: "4", username: "ana_lop", role: "member" as const, avatarBg: "#0ab87e" },
  { id: "5", username: "luis_mtz", role: "member" as const, avatarBg: "#facc15" },
];

export default function GroupMembers() {
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
          Miembros
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/groups/invite")}
          className="w-12 h-12 rounded-full items-center justify-center bg-primary"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.UserPlusIcon size={22} color={colors.secondary[300]} weight="bold" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="px-4"
        contentContainerStyle={{ gap: 2, paddingBottom: 32 }}
      >
        {MOCK_MEMBERS.map((m) => (
          <View
            key={m.id}
            className="flex-row items-center justify-between py-3 px-2"
          >
            <View className="flex-row items-center gap-3 flex-1">
              <View
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: m.avatarBg }}
              >
                <Text className="text-secondary font-poppins-bold text-[18px]">
                  {m.username[0]?.toUpperCase()}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
                  {m.username}
                </Text>
                <View className="flex-row items-center gap-2 mt-1">
                  <View
                    className={`px-2 py-0.5 rounded-full ${
                      m.role === "owner" ? "bg-primary" : "bg-secondary-300"
                    }`}
                  >
                    <Text
                      className={`text-[10px] font-poppins-medium tracking-tighter ${
                        m.role === "owner"
                          ? "text-secondary"
                          : "text-secondary-500"
                      }`}
                    >
                      {m.role === "owner" ? "OWNER" : "MEMBER"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {m.role === "member" && (
              <TouchableOpacity
                onPress={() => {}}
                className="w-9 h-9 rounded-full items-center justify-center"
                activeOpacity={0.7}
              >
                <View pointerEvents="none">
                  <Icon.XIcon size={20} color={colors.secondary[500]} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
