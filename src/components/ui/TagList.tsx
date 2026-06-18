import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  labels: string[];
};

export function TagList({ labels }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row flex-wrap gap-1.5">
      {labels.map((label, idx) => (
        <View
          key={idx}
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: colors.secondary[300] }}
        >
          <Text
            className="text-[14px] font-poppins-regular tracking-tighter"
            style={{ color: colors.primary.DEFAULT }}
          >
            {label}
          </Text>
        </View>
      ))}
    </View>
  );
}
