import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useColors } from "@/hooks/useColors";

export type ConfirmModalRef = {
  present: () => void;
  dismiss: () => void;
};

type Variant = "default" | "destructive";

type Props = {
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: Variant;
  onConfirm: () => void;
  onCancel?: () => void;
};

export const ConfirmModal = forwardRef<ConfirmModalRef, Props>(
  function ConfirmModal(
    { title, message, confirmLabel = "Confirmar", cancelLabel = "Cancelar", variant = "default", onConfirm, onCancel },
    ref,
  ) {
    const colors = useColors();
    const modalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["35%"], []);

    useImperativeHandle(ref, () => ({
      present: () => modalRef.current?.present(),
      dismiss: () => modalRef.current?.dismiss(),
    }));

    const isDestructive = variant === "destructive";
    const confirmBg = isDestructive ? "bg-primary" : "bg-primary";
    const confirmText = isDestructive ? "text-secondary" : "text-secondary";

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
        onDismiss={onCancel}
      >
        <BottomSheetView className="flex-1 px-6 pt-2 pb-8 justify-center gap-6">
          <View className="gap-2">
            <Text className="text-secondary-700 font-poppins-semibold text-[20px] tracking-tighter text-center">
              {title}
            </Text>
            {message ? (
              <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter text-center">
                {message}
              </Text>
            ) : null}
          </View>

          <View className="gap-3">
            <TouchableOpacity
              onPress={() => {
                modalRef.current?.dismiss();
                onConfirm();
              }}
              className={`h-12 rounded-2xl items-center justify-center ${confirmBg}`}
              activeOpacity={0.8}
            >
              <Text className={`${confirmText} font-poppins-semibold text-[15px] tracking-tighter`}>
                {confirmLabel}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modalRef.current?.dismiss();
                onCancel?.();
              }}
              className="h-12 rounded-2xl items-center justify-center bg-secondary-700"
              activeOpacity={0.7}
            >
              <Text className="text-secondary-700 font-poppins-medium text-[15px] tracking-tighter">
                {cancelLabel}
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
