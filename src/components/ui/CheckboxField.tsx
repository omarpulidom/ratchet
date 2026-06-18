import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";

type Props = {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  required?: boolean;
};

export function CheckboxField({ label, checked, onChange, required }: Props) {
  const colors = useColors();
  return (
    <View className="flex-row items-start gap-3 p-3">
      <TouchableOpacity
        onPress={() => onChange(!checked)}
        className={`w-6 h-6 rounded border items-center justify-center ${
          checked ? "bg-primary border-primary" : "bg-secondary-300 border-secondary-500"
        }`}
        activeOpacity={0.8}
      >
        {checked ? (
          <Icon.Ionicons
            name="checkmark"
            size={14}
            color={colors.secondary.DEFAULT}
          />
        ) : null}
      </TouchableOpacity>
      <View className="flex-1">
        <Text
          className="text-sm font-poppins-regular"
          style={{ color: colors.secondary[700] }}
        >
          {label}
          {required ? (
            <Text style={{ color: colors.primary.DEFAULT }}> *</Text>
          ) : null}
        </Text>
      </View>
    </View>
  );
}
