import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/components/Providers/AuthProvider";

const MOCK_PROFILE = {
  username: "omarcito",
  avatarBg: "#f83f6d",
  bio: "Gym, código y café ☕",
  posts: 12,
  groups: 3,
  streak: 6,
  longestStreak: 11,
};

const MOCK_POSTS = [
  { id: "p1", media: require("@/assets/images/mock/dany_post.png") },
  { id: "p2", media: require("@/assets/images/mock/pm_post.png") },
  { id: "p3", media: require("@/assets/images/mock/dany_post.png") },
  { id: "p4", media: require("@/assets/images/mock/pm_post.png") },
];

const MOCK_GROUPS = [
  { id: "g1", name: "ESCOM" },
  { id: "g2", name: "Lecturas" },
];

const getGroupInitial = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function ProfileTab() {
  const router = useRouter();
  const colors = useColors();
  const { user } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-2">
        <View className="w-12 h-12" />
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          @{user?.username ?? MOCK_PROFILE.username}
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/profile/settings")}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.GearSixIcon size={22} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center gap-3 mt-4 px-4">
          <View
            className="w-24 h-24 rounded-full items-center justify-center"
            style={{ backgroundColor: MOCK_PROFILE.avatarBg }}
          >
            <Text className="text-secondary font-poppins-bold text-[40px] tracking-tighter">
              {MOCK_PROFILE.username[0]?.toUpperCase()}
            </Text>
          </View>
          <Text className="text-secondary-700 font-poppins-bold text-[20px] tracking-tighter">
            {MOCK_PROFILE.username}
          </Text>
          {MOCK_PROFILE.bio ? (
            <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center px-8">
              {MOCK_PROFILE.bio}
            </Text>
          ) : null}
          <View className="flex-row gap-2 mt-2">
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/profile/edit")}
              className="px-5 py-2 rounded-full bg-secondary-300"
              activeOpacity={0.7}
            >
              <Text className="text-secondary-700 font-poppins-medium text-[13px] tracking-tighter">
                Editar perfil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/profile/streaks")}
              className="px-5 py-2 rounded-full bg-secondary-300"
              activeOpacity={0.7}
            >
              <Text className="text-secondary-700 font-poppins-medium text-[13px] tracking-tighter">
                Mis rachas
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-around mt-6 px-4">
          <Stat label="Posts" value={MOCK_PROFILE.posts} />
          <Stat label="Grupos" value={MOCK_PROFILE.groups} />
          <Stat label="Racha" value={`${MOCK_PROFILE.streak}d`} accent />
        </View>

        <View className="px-4 mt-6">
          <Text className="text-secondary-700 font-poppins-semibold text-[16px] tracking-tighter pl-2 mb-3">
            Mis grupos
          </Text>
          <View className="flex-row gap-2">
            {MOCK_GROUPS.map((g) => (
              <TouchableOpacity
                key={g.id}
                onPress={() => router.push("/(tabs)/groups/detail")}
                className="flex-row items-center gap-2 px-2 py-2 rounded-full bg-secondary-300"
                activeOpacity={0.7}
              >
                <View className="w-7 h-7 rounded-full items-center justify-center bg-primary">
                  <Text className="text-secondary font-poppins-bold text-[11px] tracking-tighter">
                    {getGroupInitial(g.name)}
                  </Text>
                </View>
                <Text className="text-secondary-700 font-poppins-medium text-[13px] tracking-tighter pr-1">
                  {g.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="px-4 mt-6">
          <Text className="text-secondary-700 font-poppins-semibold text-[16px] tracking-tighter pl-2 mb-3">
            Check-ins
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {MOCK_POSTS.map((p) => (
              <TouchableOpacity
                key={p.id}
                onPress={() => router.push(`/(tabs)/post/${p.id}`)}
                className="w-[31%] aspect-square rounded-2xl overflow-hidden"
                activeOpacity={0.8}
              >
                <Image
                  source={p.media}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: boolean;
}) {
  return (
    <View className="items-center">
      <Text
        className={`font-poppins-bold text-[20px] tracking-tighter ${
          accent ? "text-primary" : "text-secondary-700"
        }`}
      >
        {value}
      </Text>
      <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter mt-1">
        {label}
      </Text>
    </View>
  );
}
