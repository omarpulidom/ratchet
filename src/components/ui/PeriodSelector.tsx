import { Text, TouchableOpacity, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Size = "sm" | "md" | "lg";

type Props<T extends string> = {
  items: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  size?: Size;
};

const CONTAINER_CLASS: Record<Size, string> = {
  sm: "p-1 gap-0.5",
  md: "p-1.5 gap-1",
  lg: "p-2 gap-1.5",
};

const CELL_CLASS: Record<Size, string> = {
  sm: "py-1.5 rounded-2xl",
  md: "py-2 rounded-2xl",
  lg: "py-2.5 rounded-2xl",
};

const TEXT_SIZE: Record<Size, string> = {
  sm: "text-[12px]",
  md: "text-[14px]",
  lg: "text-[15px]",
};

export function PeriodSelector<T extends string>({
  items,
  value,
  onChange,
  size = "md",
}: Props<T>) {
  const colors = useColors();
  return (
    <View
      className={`flex-row items-center rounded-3xl ${CONTAINER_CLASS[size]}`}
      style={{ backgroundColor: colors.secondary[300] }}
    >
      {items.map((item) => {
        const isActive = value === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onChange(item.id)}
            className={`flex-1 items-center justify-center ${CELL_CLASS[size]} ${
              isActive ? "bg-primary" : ""
            }`}
            activeOpacity={0.8}
          >
            <Text
              className={`${TEXT_SIZE[size]} font-poppins-medium tracking-tighter ${
                isActive ? "text-secondary" : "text-secondary-700"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
