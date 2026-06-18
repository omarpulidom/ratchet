import { Text } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  username: string;
  caption: string;
};

export function CheckinCaption({ username, caption }: Props) {
  const colors = useColors();
  const words = caption.split(" ");
  return (
    <Text
      className="font-poppins-regular text-[14px] tracking-tighter"
      style={{ color: colors.secondary[700] }}
    >
      <Text className="font-poppins-medium">{username} </Text>
      {words.map((word, idx) => {
        if (word.startsWith("#")) {
          return (
            <Text
              key={idx}
              style={{ color: colors.primary.DEFAULT }}
            >
              {word}{" "}
            </Text>
          );
        }
        return <Text key={idx}>{word} </Text>;
      })}
    </Text>
  );
}
