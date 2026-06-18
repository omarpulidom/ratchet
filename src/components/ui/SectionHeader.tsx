import { Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  const colors = useColors();
  return (
    <Text
      className="font-poppins-medium text-[13px] tracking-tighter pl-2 mt-2"
      style={{ color: colors.secondary[500] }}
    >
      {title}
    </Text>
  );
}

export function SectionTitle({ title }: Props) {
  return <SectionHeader title={title} />;
}
