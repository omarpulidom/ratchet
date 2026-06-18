import { Image, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { RankingPosition } from "./RankingPosition";

type Entry = {
  username: string;
  uri?: string | null;
  count: number;
  highlight?: boolean;
};

type Props = {
  entries: Entry[];
  emptyText?: string;
};

export function RankingList({ entries, emptyText = "Sin datos" }: Props) {
  const colors = useColors();
  if (entries.length === 0) {
    return (
      <Text
        className="text-center text-[14px] font-poppins-regular tracking-tighter py-6"
        style={{ color: colors.secondary[500] }}
      >
        {emptyText}
      </Text>
    );
  }
  return (
    <View className="rounded-3xl px-4" style={{ backgroundColor: colors.secondary[300] }}>
      {entries.map((e, idx) => {
        const rank = (idx + 1) as 1 | 2 | 3;
        const isPodium = idx < 3;
        return (
          <View key={`${e.username}-${idx}`}>
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                {e.uri ? (
                  <Image source={{ uri: e.uri }} className="w-12 h-12" resizeMode="cover" />
                ) : (
                  <View
                    className="w-12 h-12 rounded-full items-center justify-center bg-secondary-500"
                  >
                    <Text
                      className="text-[16px] font-poppins-bold"
                      style={{ color: colors.secondary[300] }}
                    >
                      {e.username[0]?.toUpperCase()}
                    </Text>
                  </View>
                )}
                <View>
                  <Text
                    className="font-poppins-medium text-[14px] tracking-tighter"
                    style={{ color: colors.secondary[700] }}
                  >
                    {e.username}
                  </Text>
                  <Text
                    className="font-poppins-regular text-[12px] tracking-tighter"
                    style={{ color: colors.secondary[500] }}
                  >
                    {e.count} check-ins
                  </Text>
                </View>
              </View>
              {isPodium ? (
                <RankingPosition rank={rank} count={0} />
              ) : (
                <Text
                  className="font-poppins-semibold text-[16px] pr-2 tracking-tighter"
                  style={{ color: colors.secondary[700] }}
                >
                  {e.count}
                </Text>
              )}
            </View>
            {idx < entries.length - 1 ? (
              <View className="h-px -mx-4" style={{ backgroundColor: colors.secondary.DEFAULT }} />
            ) : null}
          </View>
        );
      })}
    </View>
  );
}
