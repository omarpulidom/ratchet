import { Text } from "react-native";

type Variant = "default" | "primary";

type Props = {
  label: string;
  variant?: Variant;
};

export function Badge({ label, variant = "default" }: Props) {
  const isActive = variant === "primary";
  return (
    <Text
      className={`text-[12px] font-poppins-medium tracking-tighter px-3 py-1.5 rounded-full ${
        isActive ? "bg-primary" : "bg-secondary-300"
      }`}
    >
      <Text className={isActive ? "text-secondary" : "text-secondary-500"}>{label}</Text>
    </Text>
  );
}
