import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  rank: 1 | 2 | 3;
  count: number;
};

const RANK_BG: Record<1 | 2 | 3, string> = {
  1: "bg-primary",
  2: "bg-secondary-700",
  3: "bg-secondary-700",
};

const RANK_TEXT_COLOR: Record<1 | 2 | 3, (colors: ReturnType<typeof useColors>) => string> = {
  1: (colors) => colors.secondary[700],
  2: (colors) => colors.secondary[300],
  3: (colors) => colors.secondary[300],
};

const RANK_SIZE: Record<1 | 2 | 3, string> = {
  1: "w-8 h-8",
  2: "w-6 h-6",
  3: "w-6 h-6",
};

export function RankingPosition({ rank, count }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row items-center gap-2">
      <View
        className={`${RANK_SIZE[rank]} rounded-full items-center justify-center ${RANK_BG[rank]}`}
      >
        <Text
          className="text-[16px] font-poppins-regular tracking-tighter"
          style={{ color: RANK_TEXT_COLOR[rank](colors) }}
        >
          {rank}°
        </Text>
      </View>
      {typeof count === "number" ? (
        <Text
          className="text-[16px] font-poppins-semibold tracking-tighter pr-2"
          style={{ color: colors.secondary[700] }}
        >
          {count}
        </Text>
      ) : null}
    </View>
  );
}
