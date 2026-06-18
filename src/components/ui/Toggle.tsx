import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  value: boolean;
  onChange: (next: boolean) => void;
  label?: string;
};

export function Toggle({ value, onChange, label }: Props) {
  const colors = useColors();
  return (
    <TouchableOpacity
      onPress={() => onChange(!value)}
      className="flex-row items-center justify-between px-4 py-4"
      activeOpacity={0.7}
    >
      {label ? (
        <Text
          className="text-[16px] font-poppins-medium tracking-tighter"
          style={{ color: colors.secondary[700] }}
        >
          {label}
        </Text>
      ) : (
        <View />
      )}
      <View pointerEvents="none">
        {value ? (
          <Icon.ToggleRightIcon size={28} color={colors.primary.DEFAULT} weight="fill" />
        ) : (
          <Icon.ToggleLeftIcon size={28} color={colors.secondary[500]} weight="regular" />
        )}
      </View>
    </TouchableOpacity>
  );
}

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return { value, setValue, toggle: () => setValue((v) => !v) };
}
