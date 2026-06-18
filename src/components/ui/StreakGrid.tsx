import { Text, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type DayState = "active" | "inactive" | "future";

type Props = {
  days: DayState[];
  cols?: number;
};

const CELL = "flex-1 aspect-square rounded-full";

export function StreakGrid({ days, cols = 7 }: Props) {
  const colors = useColors();
  return (
    <View className="gap-1">
      {Array.from({ length: Math.ceil(days.length / cols) }).map((_, row) => (
        <View key={row} className="flex-row gap-1">
          {days.slice(row * cols, (row + 1) * cols).map((d, i) => (
            <View
              key={`${row}-${i}`}
              className={CELL}
              style={{
                backgroundColor:
                  d === "active"
                    ? colors.primary.DEFAULT
                    : d === "inactive"
                    ? colors.secondary.DEFAULT
                    : colors.secondary[300],
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
