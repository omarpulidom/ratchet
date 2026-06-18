import { useRouter } from "expo-router";
import { useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { ConfirmModal, type ConfirmModalRef } from "@/components/ConfirmModal";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/components/Providers/AuthProvider";
import { useThemeStore, type ThemeMode } from "@/store/theme";

export default function ProfileSettings() {
  const router = useRouter();
  const colors = useColors();
  const { logout } = useAuth();
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);
  const logoutRef = useRef<ConfirmModalRef>(null);

  const handleLogout = () => {
    logoutRef.current?.dismiss();
    logout();
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
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
        <SectionTitle title="Cuenta" />
        <SettingsCard>
          <Row
            icon={<Icon.UserIcon size={22} color={colors.secondary[700]} />}
            label="Editar perfil"
            onPress={() => router.push("/(tabs)/profile/edit")}
            colors={colors}
          />
          <Divider />
          <Row
            icon={<Icon.LockIcon size={22} color={colors.secondary[700]} />}
            label="Cambiar contraseña"
            onPress={() => {}}
            colors={colors}
          />
        </SettingsCard>

        <SectionTitle title="Notificaciones" />
        <SettingsCard>
          <Row
            icon={<Icon.BellIcon size={22} color={colors.secondary[700]} />}
            label="Push"
            onPress={() => {}}
            right={<Icon.ToggleRightIcon size={28} color={colors.primary.DEFAULT} weight="fill" />}
            colors={colors}
          />
        </SettingsCard>

        <SectionTitle title="Apariencia" />
        <SettingsCard>
          <View className="flex-row overflow-hidden items-center p-1.5 gap-1">
            <ThemeOption value="auto" label="Auto" isActive={mode === "auto"} onPress={setMode} colors={colors} />
            <ThemeOption value="light" label="Claro" isActive={mode === "light"} onPress={setMode} colors={colors} />
            <ThemeOption value="dark" label="Oscuro" isActive={mode === "dark"} onPress={setMode} colors={colors} />
          </View>
        </SettingsCard>

        <SectionTitle title="Soporte" />
        <SettingsCard>
          <Row
            icon={<Icon.QuestionIcon size={22} color={colors.secondary[700]} />}
            label="Ayuda"
            onPress={() => router.push("/(tabs)/profile/help")}
            colors={colors}
          />
          <Divider />
          <Row
            icon={<Icon.InfoIcon size={22} color={colors.secondary[700]} />}
            label="Acerca de"
            onPress={() => router.push("/(tabs)/profile/about")}
            colors={colors}
          />
        </SettingsCard>

        <TouchableOpacity
          onPress={() => logoutRef.current?.present()}
          className="h-14 rounded-2xl items-center justify-center bg-primary mt-6"
          activeOpacity={0.8}
        >
          <Text className="text-secondary font-poppins-semibold text-[16px] tracking-tighter">
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ConfirmModal
        ref={logoutRef}
        title="¿Cerrar sesión?"
        message="Tendrás que volver a iniciar sesión para usar la app."
        confirmLabel="Cerrar sesión"
        cancelLabel="Cancelar"
        variant="destructive"
        onConfirm={handleLogout}
      />
    </SafeAreaView>
  );
}

function ThemeOption({
  value,
  label,
  isActive,
  onPress,
  colors,
}: {
  value: ThemeMode;
  label: string;
  isActive: boolean;
  onPress: (mode: ThemeMode) => void;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      className={`flex-1 py-2 rounded-2xl items-center justify-center ${
        isActive ? "bg-primary" : ""
      }`}
      activeOpacity={0.8}
    >
      <Text
        className={`text-[14px] tracking-tighter font-poppins-medium ${
          isActive ? "text-secondary" : "text-secondary-700"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <Text className="text-secondary-500 font-poppins-medium text-[13px] tracking-tighter pl-2 mt-2">
      {title}
    </Text>
  );
}

function SettingsCard({ children }: { children: React.ReactNode }) {
  return <View className="bg-secondary-300 rounded-3xl overflow-hidden">{children}</View>;
}

function Divider() {
  return <View className="h-px -mx-4 bg-secondary" />;
}

function Row({
  icon,
  label,
  onPress,
  right,
  colors,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  right?: React.ReactNode;
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
        <Text className="text-[16px] tracking-tighter font-poppins-medium text-secondary-700">
          {label}
        </Text>
      </View>
      {right ?? (
        <View pointerEvents="none">
          <Icon.CaretRightIcon size={18} color={colors.secondary[500]} />
        </View>
      )}
    </TouchableOpacity>
  );
}
