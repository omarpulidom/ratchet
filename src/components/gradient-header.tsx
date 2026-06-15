import { Image } from "react-native";

export function GradientHeader() {
  return (
    <Image
      source={require("@/assets/images/gradient/gradient.png")}
      style={{
        position: "absolute",
        left: -41,
        top: 0,
        width: 522,
        height: 309,
      }}
      resizeMode="cover"
    />
  );
}
