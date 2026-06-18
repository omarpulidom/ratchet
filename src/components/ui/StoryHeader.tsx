import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { UserAvatar } from "./UserAvatar";
import { IconButton } from "./IconButton";

type Story = {
  id: string;
  username: string;
  avatarUri?: string | null;
  avatarBg: string;
  media: any;
  timestamp: string;
};

type Props = {
  story: Story;
  total: number;
  progress: Animated.Value;
  onClose: () => void;
};

import { Animated } from "react-native";

export function StoryHeader({ story, total, progress, onClose }: Props) {
  const router = useRouter();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  return (
    <View pointerEvents="box-none" className="absolute inset-0">
      <View
        className="absolute left-0 right-0 flex-row px-2 gap-1"
        style={{ top: insets.top + 8 }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            className="flex-1 h-[3px] rounded-full overflow-hidden bg-white/30"
          >
            <Animated.View
              style={{
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
                height: "100%",
                backgroundColor: "#fff",
              }}
            />
          </View>
        ))}
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
            <UserAvatar username={story.username} uri={story.avatarUri} size="sm" />
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
        <IconButton
          icon={Icon.XIcon}
          onPress={onClose}
          variant="ghost"
          color={colors.secondary[300]}
          accessibilityLabel="Cerrar"
        />
      </View>
    </View>
  );
}
