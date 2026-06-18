import { TextInput, View, Text } from "react-native";
import { TextField } from "./TextField";
import { useColors } from "@/hooks/useColors";

type Props = React.ComponentProps<typeof TextField> & {
  value: string;
  onChangeNumber: (n: number) => void;
  maxLength?: number;
};

export function NumericInput({ value, onChangeNumber, maxLength = 3, style, ...rest }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row items-center h-14 px-4 rounded-2xl border-2 border-secondary-300 bg-secondary-300">
      <TextInput
        value={value}
        onChangeText={(t) => {
          const clean = t.replace(/[^0-9]/g, "");
          onChangeNumber(parseInt(clean || "0", 10));
        }}
        keyboardType="number-pad"
        maxLength={maxLength}
        className="w-12 font-poppins-medium text-[16px] text-secondary-700"
        placeholderTextColor={colors.secondary[500]}
        style={style}
        {...rest}
      />
      {rest.placeholder ? (
        <Text
          className="font-poppins-regular text-[14px] tracking-tighter pl-1"
          style={{ color: colors.secondary[500] }}
        >
          {rest.placeholder}
        </Text>
      ) : null}
    </View>
  );
}
