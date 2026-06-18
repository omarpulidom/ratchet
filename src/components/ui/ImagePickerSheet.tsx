import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

export type ImagePickerSheetRef = {
  present: () => void;
  dismiss: () => void;
};

type Props = {
  onPickCamera: () => void;
  onPickGallery: () => void;
};

export const ImagePickerSheet = forwardRef<ImagePickerSheetRef, Props>(
  function ImagePickerSheet({ onPickCamera, onPickGallery }, ref) {
    const colors = useColors();
    const modalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["32%"], []);
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
        <BottomSheetView className="flex-1 px-4 pt-2 pb-8 gap-2">
          <Text
            className="font-poppins-medium text-[13px] tracking-tighter px-4 pb-2"
            style={{ color: colors.secondary[500] }}
          >
            Foto para tu check-in
          </Text>
          <SheetOption
            icon={<Icon.CameraIcon size={20} color={colors.secondary[700]} />}
            label="Tomar foto"
            onPress={() => {
              modalRef.current?.dismiss();
              onPickCamera();
            }}
            colors={colors}
          />
          <SheetOption
            icon={<Icon.ImageIcon size={20} color={colors.secondary[700]} />}
            label="Elegir de la galeria"
            onPress={() => {
              modalRef.current?.dismiss();
              onPickGallery();
            }}
            colors={colors}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

function SheetOption({
  icon,
  label,
  onPress,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center gap-3 px-4 py-3.5"
      activeOpacity={0.7}
    >
      <View pointerEvents="none">{icon}</View>
      <Text
        className="text-[15px] font-poppins-medium tracking-tighter"
        style={{ color: colors.secondary[700] }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
