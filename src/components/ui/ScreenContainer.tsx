import { ReactNode } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useColors } from "@/hooks/useColors";

type Props = {
  children: ReactNode;
  scroll?: boolean;
  withBottomPadding?: boolean;
  contentClassName?: string;
};

export function ScreenContainer({
  children,
  scroll = false,
  withBottomPadding = false,
  contentClassName,
}: Props) {
  const colors = useColors();
  const Wrapper = scroll ? ScrollView : View;
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.secondary.DEFAULT }}>
      <Wrapper
        className="flex-1"
        {...(scroll
          ? {
              contentContainerStyle: { flexGrow: 1, paddingBottom: withBottomPadding ? 96 : 32 },
              showsVerticalScrollIndicator: false,
              keyboardShouldPersistTaps: "handled",
            }
          : {})}
      >
        {scroll ? (
          <View className={contentClassName}>{children}</View>
        ) : (
          children
        )}
      </Wrapper>
    </SafeAreaView>
  );
}
