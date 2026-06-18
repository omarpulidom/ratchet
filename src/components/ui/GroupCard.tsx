import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { UserAvatar } from "./UserAvatar";
import { GroupAvatar } from "./GroupAvatar";
import { Badge } from "./Badge";
import { StreakBadge } from "./StreakBadge";

type Group = {
  id: string;
  name: string;
  lastActiveLabel?: string;
  memberCount?: number;
  checkinCount?: number;
  streakDays?: number;
};

type Props = {
  group: Group;
  onPress?: () => void;
  hideCheckins?: boolean;
  hideStreak?: boolean;
};

export function GroupCard({ group, onPress, hideCheckins, hideStreak }: Props) {
  const colors = useColors();
  return (
    <View
      className="rounded-3xl p-6 gap-4 overflow-hidden"
      style={{ backgroundColor: colors.secondary[300] }}
    >
      <View className="flex-row items-center justify-between">
        <Text
          className="text-[24px] font-poppins-regular tracking-tighter"
          style={{ color: colors.secondary[700] }}
        >
          {group.name}
        </Text>
        {group.lastActiveLabel ? (
          <View
            className="rounded-full px-3 py-2"
            style={{ backgroundColor: colors.secondary.DEFAULT }}
          >
            <Text
              className="text-[14px] font-poppins-regular tracking-tighter"
              style={{ color: colors.secondary[500] }}
            >
              {group.lastActiveLabel}
            </Text>
          </View>
        ) : null}
      </View>
      <View className="flex-row items-start gap-6">
        {typeof group.memberCount === "number" ? (
          <View className="gap-2">
            <Text
              className="font-poppins-regular text-[14px] tracking-tighter"
              style={{ color: colors.secondary[500] }}
            >
              Miembros
            </Text>
            <Text
              className="font-poppins-medium text-[14px] tracking-tighter"
              style={{ color: colors.secondary[700] }}
            >
              {group.memberCount}
            </Text>
          </View>
        ) : null}
      </View>
      {!hideCheckins || !hideStreak ? (
        <View className="flex-row items-end justify-between">
          <View className="flex-row items-center gap-2 -ml-2">
            {!hideCheckins ? (
              <Badge
                label={group.checkinCount ? `${group.checkinCount} check-ins` : "0 check-ins"}
              />
            ) : null}
            {!hideStreak && group.streakDays ? (
              <StreakBadge days={group.streakDays} />
            ) : null}
          </View>
          <View />
        </View>
      ) : null}
    </View>
  );
}
