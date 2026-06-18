import { forwardRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { useColors } from "@/hooks/useColors";

const inputBaseClass =
  "bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl";

type Props = TextInputProps & {
  label?: string;
  helperText?: string;
  errorText?: string;
};

export const TextField = forwardRef<TextInput, Props>(function TextField(
  { label, helperText, errorText, style, ...rest },
  ref,
) {
  const colors = useColors();
  return (
    <View className="gap-2">
      {label ? (
        <Text
          className="text-sm font-poppins-medium pl-4"
          style={{ color: colors.secondary[700] }}
        >
          {label}
        </Text>
      ) : null}
      <TextInput
        ref={ref}
        placeholderTextColor={colors.secondary[500]}
        className={inputBaseClass}
        {...rest}
      />
      {errorText ? (
        <Text
          className="text-xs pl-4 font-poppins-regular"
          style={{ color: colors.primary.DEFAULT }}
        >
          {errorText}
        </Text>
      ) : helperText ? (
        <Text
          className="text-xs pl-4 font-poppins-regular"
          style={{ color: colors.secondary[500] }}
        >
          {helperText}
        </Text>
      ) : null}
    </View>
  );
});
