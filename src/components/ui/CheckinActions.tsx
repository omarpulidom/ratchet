import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  likes: number;
  liked: boolean;
  location?: string;
  onLike?: () => void;
};

export function CheckinActions({ likes, liked, location, onLike }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row mt-2 items-center justify-between">
      <TouchableOpacity
        onPress={onLike}
        className="flex-row p-3 rounded-full items-center gap-1.5"
        style={{ backgroundColor: colors.secondary.DEFAULT }}
        activeOpacity={0.7}
      >
        <Icon.HeartIcon
          size={20}
          color={liked ? colors.primary.DEFAULT : colors.secondary[500]}
          weight={liked ? "fill" : "regular"}
        />
        <Text
          className="font-poppins-regular text-[16px] tracking-tighter"
          style={{ color: colors.secondary[500] }}
        >
          {likes}
        </Text>
      </TouchableOpacity>
      {location ? (
        <View className="flex-row items-center gap-1 pr-2">
          <Icon.MapPinIcon
            size={16}
            color={colors.secondary[500]}
            weight="fill"
          />
          <Text
            className="font-poppins-regular text-[12px] tracking-tighter"
            style={{ color: colors.secondary[500] }}
          >
            {location}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
