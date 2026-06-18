import { ReactNode } from "react";
import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  icon: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ icon, title, description, action }: Props) {
  const colors = useColors();
  return (
    <View className="flex-1 items-center justify-center px-8 gap-3">
      <View pointerEvents="none">{icon}</View>
      <Text
        className="font-poppins-semibold text-[20px] tracking-tighter text-center"
        style={{ color: colors.secondary[700] }}
      >
        {title}
      </Text>
      {description ? (
        <Text
          className="font-poppins-regular text-[14px] tracking-tighter text-center"
          style={{ color: colors.secondary[500] }}
        >
          {description}
        </Text>
      ) : null}
      {action}
    </View>
  );
}
