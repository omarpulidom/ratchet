import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { UserAvatar } from "./UserAvatar";

type Member = {
  username: string;
  uri?: string | null;
};

type Props = {
  members: Member[];
  max?: number;
  size?: "sm" | "md";
  overlap?: number;
};

const SIZE_CLASS = {
  sm: "w-9 h-9",
  md: "w-12 h-12",
} as const;

const FONT_SIZE = {
  sm: "text-[12px]",
  md: "text-[14px]",
} as const;

const OVERLAP_CLASS = {
  sm: "-ml-2",
  md: "-ml-2",
} as const;

export function MemberAvatarStack({ members, max = 3, size = "md" }: Props) {
  const colors = useColors();
  const visible = members.slice(0, max);
  const overflow = members.length - visible.length;
  return (
    <View className="flex-row items-center">
      {visible.map((m, idx) => (
        <View
          key={`${m.username}-${idx}`}
          className={idx > 0 ? OVERLAP_CLASS[size] : ""}
          style={{ zIndex: visible.length - idx }}
        >
          <UserAvatar username={m.username} uri={m.uri} size={size === "md" ? "sm" : "sm"} borderColor={colors.secondary.DEFAULT} />
        </View>
      ))}
      {overflow > 0 ? (
        <View
          className={`${SIZE_CLASS[size]} -ml-2 rounded-full items-center justify-center bg-secondary-300 border-2`}
          style={{ borderColor: colors.secondary.DEFAULT }}
        >
          <Text
            className={`${FONT_SIZE[size]} font-poppins-medium tracking-tighter`}
            style={{ color: colors.secondary[700] }}
          >
            +{overflow}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
