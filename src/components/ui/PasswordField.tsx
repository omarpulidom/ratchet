import { forwardRef, useState } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextField } from "./TextField";
import { IconButton } from "./IconButton";
import { useColors } from "@/hooks/useColors";

type Props = React.ComponentProps<typeof TextField>;

export const PasswordField = forwardRef<TextInput, Props>(function PasswordField(
  props,
  ref,
) {
  const colors = useColors();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TextField
        ref={ref}
        secureTextEntry={!visible}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      <View className="absolute right-3 top-9">
        <IconButton
          icon={Ionicons as never}
          onPress={() => setVisible((v) => !v)}
          variant="ghost"
          size="sm"
          color={colors.secondary[500]}
        />
      </View>
    </View>
  );
});
