import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

export type ReactionsPickerSheetRef = {
  present: () => void;
  dismiss: () => void;
};

type ReactionType = "like" | "fire" | "clap" | "strong";

type Props = {
  onPick: (type: ReactionType) => void;
};

const REACTIONS: { id: ReactionType; label: string; icon: typeof Icon.HeartIcon; color: string }[] = [
  { id: "like", label: "Me gusta", icon: Icon.HeartIcon, color: "#f83f6d" },
  { id: "fire", label: "Fuego", icon: Icon.FireSimpleIcon, color: "#facc15" },
  { id: "clap", label: "Aplauso", icon: Icon.HandWavingIcon, color: "#3b82f6" },
  { id: "strong", label: "Fuerte", icon: Icon.HandFistIcon, color: "#0ab87e" },
];

export const ReactionsPickerSheet = forwardRef<ReactionsPickerSheetRef, Props>(
  function ReactionsPickerSheet({ onPick }, ref) {
    const colors = useColors();
    const modalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["30%"], []);
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
          <Text
            className="font-poppins-medium text-[13px] tracking-tighter px-4 pb-2"
            style={{ color: colors.secondary[500] }}
          >
            Reaccionar
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {REACTIONS.map((r) => {
              const IconComp = r.icon;
              return (
                <TouchableOpacity
                  key={r.id}
                  onPress={() => {
                    modalRef.current?.dismiss();
                    onPick(r.id);
                  }}
                  className="flex-row items-center gap-3 flex-1 px-3 py-3 rounded-2xl"
                  style={{ backgroundColor: colors.secondary.DEFAULT }}
                  activeOpacity={0.7}
                >
                  <IconComp size={22} color={r.color} weight="fill" />
                  <Text
                    className="font-poppins-medium text-[14px] tracking-tighter"
                    style={{ color: colors.secondary[700] }}
                  >
                    {r.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
