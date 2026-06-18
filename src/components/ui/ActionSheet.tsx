import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useColors } from "@/hooks/useColors";

export type ActionSheetItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  onPress: () => void;
};

export type ActionSheetRef = {
  present: () => void;
  dismiss: () => void;
};

type Props = {
  title?: string;
  items: ActionSheetItem[];
};

export const ActionSheet = forwardRef<ActionSheetRef, Props>(
  function ActionSheet({ title, items }, ref) {
    const colors = useColors();
    const modalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => [`${Math.min(20 + items.length * 8, 60)}%`], [items.length]);

    useImperativeHandle(ref, () => ({
      present: () => modalRef.current?.present(),
      dismiss: () => modalRef.current?.dismiss(),
    }));

    return (
      <BottomSheetModal
        ref={modalRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: colors.secondary[300] }}
        handleIndicatorStyle={{ backgroundColor: colors.secondary[500] }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
          />
        )}
      >
        <BottomSheetView className="flex-1 px-4 pt-2 pb-6">
          {title ? (
            <Text className="text-secondary-500 font-poppins-medium text-[13px] tracking-tighter px-4 pb-2">
              {title}
            </Text>
          ) : null}
          <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item, idx) => (
              <View key={item.key}>
                <TouchableOpacity
                  onPress={() => {
                    modalRef.current?.dismiss();
                    item.onPress();
                  }}
                  className="flex-row items-center gap-3 px-4 py-3.5"
                  activeOpacity={0.7}
                >
                  {item.icon ? <View pointerEvents="none">{item.icon}</View> : null}
                  <Text
                    className={`text-[15px] font-poppins-medium tracking-tighter ${
                      item.destructive ? "text-primary" : "text-secondary-700"
                    }`}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
                {idx < items.length - 1 ? <View className="h-px bg-secondary" /> : null}
              </View>
            ))}
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
