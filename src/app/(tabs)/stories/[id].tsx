import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");

const MOCK_STORIES = [
  {
    id: "1",
    username: "danydz_al",
    avatarBg: "#3b82f6",
    media: require("@/assets/images/mock/dany_post.png"),
    timestamp: "Hace 2 horas",
  },
  {
    id: "2",
    username: "pm404",
    avatarBg: "#a855f7",
    media: require("@/assets/images/mock/pm_post.png"),
    timestamp: "Hace 5 horas",
  },
  {
    id: "3",
    username: "omarcito",
    avatarBg: "#0ab87e",
    media: require("@/assets/images/mock/dany_post.png"),
    timestamp: "Ayer",
  },
];

export default function StoryViewer() {
  const router = useRouter();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ startId?: string }>();

  const [index, setIndex] = useState(() => {
    const start = params.startId;
    if (!start) return 0;
    const idx = MOCK_STORIES.findIndex((s) => s.id === start);
    return idx === -1 ? 0 : idx;
  });

  const [progress] = useState(() => new Animated.Value(0));
  const progressAnim = useRef<Animated.CompositeAnimation | null>(null);

  const total = MOCK_STORIES.length;
  const story = MOCK_STORIES[index];

  useEffect(() => {
    progress.setValue(0);
    progressAnim.current = Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    });
    progressAnim.current.start(({ finished }) => {
      if (finished) goNext();
    });
    return () => progressAnim.current?.stop();
  }, [index, progress]);

  const goNext = () => {
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      router.back();
    }
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleTap = (e: { nativeEvent: { locationX: number } }) => {
    if (e.nativeEvent.locationX < SCREEN_W / 2) goPrev();
    else goNext();
  };

  return (
    <View className="flex-1 bg-black">
      <Animated.Image
        source={story.media}
        style={{ width: SCREEN_W, height: SCREEN_H, position: "absolute" }}
        resizeMode="cover"
      />
      <View className="absolute inset-0 bg-black/25" />

      <View
        className="absolute left-0 right-0 flex-row px-2 gap-1"
        style={{ top: insets.top + 8 }}
      >
        {MOCK_STORIES.map((_, i) => {
          const isActive = i === index;
          const isPast = i < index;
          return (
            <View
              key={i}
              className="flex-1 h-[3px] rounded-full overflow-hidden bg-white/30"
            >
              <Animated.View
                style={{
                  width: isPast
                    ? "100%"
                    : isActive
                      ? progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: ["0%", "100%"],
                        })
                      : "0%",
                  height: "100%",
                  backgroundColor: "#fff",
                }}
              />
            </View>
          );
        })}
      </View>

      <View
        className="absolute left-0 right-0 flex-row items-center px-4 justify-between"
        style={{ top: insets.top + 24 }}
      >
        <View className="flex-row items-center gap-3">
          <View
            className="w-9 h-9 rounded-full items-center justify-center"
            style={{ backgroundColor: story.avatarBg }}
          >
            <Text className="text-secondary font-poppins-bold text-[16px]">
              {story.username[0]?.toUpperCase()}
            </Text>
          </View>
          <View>
            <Text className="text-white font-poppins-medium text-[14px] tracking-tighter">
              {story.username}
            </Text>
            <Text className="text-white/70 font-poppins-regular text-[12px] tracking-tighter">
              {story.timestamp}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.XIcon size={22} color="#fff" weight="bold" />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={handleTap}
        className="absolute inset-0"
      />
    </View>
  );
}
