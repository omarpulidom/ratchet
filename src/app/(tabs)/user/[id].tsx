import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const MOCK_OTHER_USER = {
  id: "u9",
  username: "danydz_al",
  email: "dany@example.com",
  avatarBg: "#3b82f6",
  bio: "Gym, lectura y café ☕",
  posts: 24,
  groups: 3,
  streak: 12,
};

const MOCK_USER_POSTS = [
  { id: "p1", media: require("@/assets/images/mock/dany_post.png") },
  { id: "p2", media: require("@/assets/images/mock/pm_post.png") },
  { id: "p3", media: require("@/assets/images/mock/dany_post.png") },
];

export default function UserProfile() {
  const router = useRouter();
  const colors = useColors();
  const params = useLocalSearchParams<{ id?: string }>();

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
          @{MOCK_OTHER_USER.username}
        </Text>
        <View className="w-12 h-12" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="items-center gap-3 mt-4">
          <View
            className="w-24 h-24 rounded-full items-center justify-center"
            style={{ backgroundColor: MOCK_OTHER_USER.avatarBg }}
          >
            <Text className="text-secondary font-poppins-bold text-[40px] tracking-tighter">
              {MOCK_OTHER_USER.username[0]?.toUpperCase()}
            </Text>
          </View>
          <Text className="text-secondary-700 font-poppins-bold text-[20px] tracking-tighter">
            {MOCK_OTHER_USER.username}
          </Text>
          {MOCK_OTHER_USER.bio ? (
            <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center px-8">
              {MOCK_OTHER_USER.bio}
            </Text>
          ) : null}
        </View>

        <View className="flex-row justify-around mt-6 px-4">
          <Stat label="Posts" value={MOCK_OTHER_USER.posts} />
          <Stat label="Grupos" value={MOCK_OTHER_USER.groups} />
          <Stat label="Racha" value={`${MOCK_OTHER_USER.streak}d`} accent />
        </View>

        <View className="px-4 mt-6">
          <Text className="text-secondary-700 font-poppins-semibold text-[16px] tracking-tighter pl-2 mb-3">
            Check-ins
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {MOCK_USER_POSTS.map((p) => (
              <TouchableOpacity
                key={p.id}
                onPress={() => {}}
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
