import { useRouter } from "expo-router";
import { useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { ConfirmModal, type ConfirmModalRef } from "@/components/ui/ConfirmModal";
import { useColors } from "@/hooks/useColors";

export default function GroupSettings() {
  const router = useRouter();
  const colors = useColors();
  const leaveRef = useRef<ConfirmModalRef>(null);
  const deleteRef = useRef<ConfirmModalRef>(null);

  const goBack = () => {
    router.replace("/(tabs)/groups/detail");
  };

  const handleLeave = () => {
    leaveRef.current?.dismiss();
    goBack();
  };

  const handleDelete = () => {
    deleteRef.current?.dismiss();
    goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={goBack}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Configuración
        </Text>
        <View className="w-12 h-12" />
      </View>

      <ScrollView
        className="px-4"
        contentContainerStyle={{ gap: 8, paddingBottom: 32 }}
      >
        <View className="bg-secondary-300 rounded-3xl overflow-hidden">
          <SettingsRow
            icon={<Icon.PencilSimpleIcon size={22} color={colors.secondary[700]} />}
            label="Editar grupo"
            onPress={() => router.push("/(tabs)/groups/edit")}
            colors={colors}
          />
          <Divider />
          <SettingsRow
            icon={<Icon.UserPlusIcon size={22} color={colors.secondary[700]} />}
            label="Invitar miembros"
            onPress={() => router.push("/(tabs)/groups/invite")}
            colors={colors}
          />
          <Divider />
          <SettingsRow
            icon={<Icon.UsersIcon size={22} color={colors.secondary[700]} />}
            label="Ver miembros"
            onPress={() => router.push("/(tabs)/groups/members")}
            colors={colors}
          />
        </View>

        <View className="bg-secondary-300 rounded-3xl overflow-hidden mt-4">
          <SettingsRow
            icon={<Icon.SignOutIcon size={22} color={colors.primary.DEFAULT} />}
            label="Salir del grupo"
            destructive
            onPress={() => leaveRef.current?.present()}
            colors={colors}
          />
          <Divider />
          <SettingsRow
            icon={<Icon.TrashIcon size={22} color={colors.primary.DEFAULT} />}
            label="Eliminar grupo"
            destructive
            onPress={() => deleteRef.current?.present()}
            colors={colors}
          />
        </View>
      </ScrollView>

      <ConfirmModal
        ref={leaveRef}
        title="¿Salir del grupo?"
        message="Ya no verás check-ins ni rachas de este grupo. Esta acción no se puede deshacer."
        confirmLabel="Salir"
        cancelLabel="Cancelar"
        variant="destructive"
        onConfirm={handleLeave}
      />

      <ConfirmModal
        ref={deleteRef}
        title="¿Eliminar grupo?"
        message="Se eliminarán todos los check-ins, rachas y reacciones del grupo para todos los miembros. Esta acción es permanente."
        confirmLabel="Eliminar"
        cancelLabel="Cancelar"
        variant="destructive"
        onConfirm={handleDelete}
      />
    </SafeAreaView>
  );
}

function Divider() {
  return <View className="h-px -mx-4 bg-secondary" />;
}

function SettingsRow({
  icon,
  label,
  onPress,
  destructive,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  destructive?: boolean;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between px-4 py-4"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center gap-3">
        <View pointerEvents="none">{icon}</View>
        <Text
          className={`text-[16px] tracking-tighter font-poppins-medium ${
            destructive ? "text-primary" : "text-secondary-700"
          }`}
        >
          {label}
        </Text>
      </View>
      <View pointerEvents="none">
        <Icon.CaretRightIcon
          size={18}
          color={destructive ? colors.primary.DEFAULT : colors.secondary[500]}
        />
      </View>
    </TouchableOpacity>
  );
}
