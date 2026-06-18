import { TextInput, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { TextField } from "./TextField";
import { useColors } from "@/hooks/useColors";

type Props = React.ComponentProps<typeof TextField>;

export function SearchField(props: Props) {
  const colors = useColors();
  return (
    <View className="flex-row items-center bg-secondary-300 rounded-2xl px-4 gap-2">
      <View pointerEvents="none">
        <Icon.MagnifyingGlassIcon size={18} color={colors.secondary[500]} />
      </View>
      <TextInput
        placeholderTextColor={colors.secondary[500]}
        className="flex-1 h-12 font-poppins-regular leading-tight text-[16px] text-secondary-700"
        {...props}
      />
    </View>
  );
}
