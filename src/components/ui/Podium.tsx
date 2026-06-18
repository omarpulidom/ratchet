import { Image, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { UserAvatar } from "./UserAvatar";

type Member = {
  username: string;
  uri?: string | null;
  count: number;
};

type Props = {
  first: Member;
  second: Member;
  third: Member;
  avatarSize?: "sm" | "md" | "lg";
};

const RANK_BADGE_CLASS: Record<1 | 2 | 3, string> = {
  1: "w-8 h-8 bg-primary",
  2: "w-6 h-6 bg-secondary-700",
  3: "w-6 h-6 bg-secondary-700",
};

const RANK_TEXT_COLOR: Record<1 | 2 | 3, (colors: ReturnType<typeof useColors>) => string> = {
  1: (colors) => colors.secondary[700],
  2: (colors) => colors.secondary[300],
  3: (colors) => colors.secondary[300],
};

const AVATAR_CLASS: Record<"sm" | "md" | "lg", string> = {
  sm: "w-16 h-16",
  md: "w-20 h-20",
  lg: "w-24 h-24",
};

export function Podium({ first, second, third, avatarSize = "md" }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row items-end justify-center gap-6">
      <PodiumColumn
        member={second}
        rank={2}
        avatarClass={AVATAR_CLASS[avatarSize === "lg" ? "sm" : "sm"]}
        colors={colors}
        rankTextColor={RANK_TEXT_COLOR[2](colors)}
        rankBadgeClass={RANK_BADGE_CLASS[2]}
      />
      <PodiumColumn
        member={first}
        rank={1}
        avatarClass={AVATAR_CLASS[avatarSize]}
        colors={colors}
        rankTextColor={RANK_TEXT_COLOR[1](colors)}
        rankBadgeClass={RANK_BADGE_CLASS[1]}
        larger
      />
      <PodiumColumn
        member={third}
        rank={3}
        avatarClass={AVATAR_CLASS[avatarSize === "lg" ? "sm" : "sm"]}
        colors={colors}
        rankTextColor={RANK_TEXT_COLOR[3](colors)}
        rankBadgeClass={RANK_BADGE_CLASS[3]}
      />
    </View>
  );
}

function PodiumColumn({
  member,
  rank,
  avatarClass,
  colors,
  rankTextColor,
  rankBadgeClass,
  larger,
}: {
  member: Member;
  rank: 1 | 2 | 3;
  avatarClass: string;
  colors: ReturnType<typeof useColors>;
  rankTextColor: string;
  rankBadgeClass: string;
  larger?: boolean;
}) {
  return (
    <View className="items-center gap-2">
      <View className="relative">
        <View
          className={`${rankBadgeClass} rounded-full items-center justify-center absolute z-10 right-0`}
        >
          <Text
            className="text-[16px] font-poppins-regular tracking-tighter"
            style={{ color: rankTextColor }}
          >
            {rank}
          </Text>
        </View>
        <View
          className={`${avatarClass} rounded-full bg-secondary-300 items-center justify-center overflow-hidden`}
        >
          {member.uri ? (
            <Image source={{ uri: member.uri }} className="w-full h-full" />
          ) : (
            <UserAvatar username={member.username} uri={null} size="md" />
          )}
        </View>
      </View>
      <Text
        className={`${larger ? "text-[20px]" : "text-[16px]"} font-poppins-regular tracking-tighter`}
        style={{ color: colors.secondary[700] }}
      >
        {member.count}
      </Text>
    </View>
  );
}
