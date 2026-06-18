import { TextInput } from "react-native";
import { TextField } from "./TextField";

type Props = React.ComponentProps<typeof TextField>;

export function EmailField(props: Props) {
  return (
    <TextField
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      {...props}
    />
  );
}

export function UsernameField(props: Props) {
  return (
    <TextField
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
  );
}
