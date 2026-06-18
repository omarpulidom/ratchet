import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");

const MOCK_POSTS: Record<
  string,
  {
    id: string;
    username: string;
    avatarBg: string;
    media: any;
    caption: string;
    location: string;
    timestamp: string;
    likes: number;
    groupName: string;
  }
> = {
  p1: {
    id: "p1",
    username: "omarcito",
    avatarBg: "#f83f6d",
    media: require("@/assets/images/mock/dany_post.png"),
    caption: "Morning workout check #gym",
    location: "Smart Fit La Viga",
    timestamp: "Ayer a las 11:32 a.m.",
    likes: 2,
    groupName: "ESCOM",
  },
  p2: {
    id: "p2",
    username: "pm404",
    avatarBg: "#a855f7",
    media: require("@/assets/images/mock/pm_post.png"),
    caption: "Sesión de box en la mañana #box",
    location: "Smart Fit La Viga",
    timestamp: "4 de junio a las 9:15 a.m.",
    likes: 5,
    groupName: "ESCOM",
  },
  p3: {
    id: "p3",
    username: "omarcito",
    avatarBg: "#f83f6d",
    media: require("@/assets/images/mock/dany_post.png"),
    caption: "Cardio día 30 #gym",
    location: "Smart Fit La Viga",
    timestamp: "Hace 3 días",
    likes: 8,
    groupName: "Lecturas",
  },
  p4: {
    id: "p4",
    username: "omarcito",
    avatarBg: "#f83f6d",
    media: require("@/assets/images/mock/pm_post.png"),
    caption: "Nuevo PR en sentadilla #gym",
    location: "Smart Fit La Viga",
    timestamp: "Hace 1 semana",
    likes: 12,
    groupName: "ESCOM",
  },
};

export default function PostDetail() {
  const router = useRouter();
  const colors = useColors();
  const params = useLocalSearchParams<{ id?: string }>();
  const postId = params.id ?? "p1";
  const post = MOCK_POSTS[postId] ?? MOCK_POSTS.p1;

  const [liked, setLiked] = useState(false);

  const initial = post.username[0]?.toUpperCase() ?? "U";

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) router.back();
            else router.replace("/(tabs)");
          }}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Check-in
        </Text>
        <View className="w-12 h-12" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-secondary-300 rounded-3xl mx-2 overflow-hidden">
          <View className="flex-row items-center justify-between p-3">
            <View className="flex-row items-center gap-2 flex-1">
              <View
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: post.avatarBg }}
              >
                <Text className="text-secondary font-poppins-bold text-[18px]">
                  {initial}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                  {post.username}
                </Text>
                <Text className="text-secondary-500 font-poppins-light text-[12px] tracking-tighter">
                  {post.timestamp}
                </Text>
              </View>
            </View>
            <View className="px-3 py-1.5 bg-secondary rounded-full">
              <Text className="text-secondary-500 font-poppins-medium text-[12px] tracking-tighter">
                {post.groupName}
              </Text>
            </View>
          </View>

          <View style={{ width: SCREEN_W - 16, height: SCREEN_W - 16 }}>
            <Image
              source={post.media}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>

          <View className="flex-row items-center justify-between px-3 py-3">
            <TouchableOpacity
              onPress={() => setLiked((l) => !l)}
              className="flex-row items-center gap-2 px-3 py-2 bg-secondary rounded-full"
              activeOpacity={0.7}
            >
              <View pointerEvents="none">
                <Icon.HeartIcon
                  size={20}
                  color={liked ? colors.primary.DEFAULT : colors.secondary[500]}
                  weight={liked ? "fill" : "regular"}
                />
              </View>
              <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                {liked ? post.likes + 1 : post.likes}
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-1 pr-2">
              <View pointerEvents="none">
                <Icon.MapPinIcon
                  size={16}
                  color={colors.secondary[500]}
                  weight="fill"
                />
              </View>
              <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                {post.location}
              </Text>
            </View>
          </View>

          <View className="flex-row px-3 pb-4 items-center gap-1.5 flex-wrap">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
              {post.username}
            </Text>
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              {post.caption.split(" ").map((word, idx) => {
                if (word.startsWith("#")) {
                  return (
                    <Text key={idx} className="text-primary tracking-tighter">
                      {word}{" "}
                    </Text>
                  );
                }
                return (
                  <Text key={idx}>{word} </Text>
                );
              })}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
