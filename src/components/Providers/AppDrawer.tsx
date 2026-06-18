import { useRouter } from "expo-router";
import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/components/Providers/AuthProvider";
import { useDrawer } from "@/components/Providers/DrawerProvider";

const SCREEN_WIDTH = Dimensions.get("window").width;
const DRAWER_WIDTH = Math.min(SCREEN_WIDTH * 0.82, 360);
const SWIPE_THRESHOLD = 60;

export function AppDrawer({ children }: { children: ReactNode }) {
  const router = useRouter();
  const colors = useColors();
  const { user, logout } = useAuth();
  const { isOpen, close, open } = useDrawer();
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const listenerId = translateX.addListener(({ value }) => {
      startX.current = value;
    });
    return () => translateX.removeListener(listenerId);
  }, [translateX]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: isOpen ? 0 : -DRAWER_WIDTH,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 1 : 0,
        duration: 240,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isOpen, translateX, overlayOpacity]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => isOpen,
      onMoveShouldSetPanResponder: (_, gesture) =>
        isOpen && Math.abs(gesture.dx) > 5,
      onPanResponderGrant: () => {
        isDragging.current = true;
      },
      onPanResponderMove: (_, gesture) => {
        if (!isOpen) return;
        const next = Math.min(0, Math.max(-DRAWER_WIDTH, startX.current + gesture.dx));
        translateX.setValue(next);
      },
      onPanResponderRelease: (_, gesture) => {
        isDragging.current = false;
        const finalX = startX.current + gesture.dx;
        if (finalX < -DRAWER_WIDTH / 2 || gesture.dx < -SWIPE_THRESHOLD) {
          close();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const handleNavigate = (path: string) => {
    close();
    setTimeout(() => router.push(path), 200);
  };

  const handleLogout = () => {
    close();
    setTimeout(() => logout(), 200);
  };

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {children}

      {isOpen && (
        <TouchableWithoutFeedback onPress={close}>
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#000",
              opacity: overlayOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.6],
              }),
            }}
          />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: DRAWER_WIDTH,
          backgroundColor: colors.secondary[300],
          transform: [{ translateX }],
          zIndex: 100,
        }}
      >
        <View className="pt-16 px-6 pb-6 gap-6">
          <View className="flex-row items-center gap-3">
            <View
              className="w-16 h-16 rounded-full bg-primary items-center justify-center"
            >
              <Text className="text-secondary font-poppins-bold text-[28px] tracking-tighter">
                {user?.username?.[0]?.toUpperCase() ?? "U"}
              </Text>
            </View>
            <View className="flex-1">
              <Text
                className="text-secondary-700 font-poppins-semibold text-[20px] tracking-tighter"
                numberOfLines={1}
              >
                {user?.username ?? "guest"}
              </Text>
              <Text
                className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter"
                numberOfLines={1}
              >
                {user?.email ?? "Invitado"}
              </Text>
            </View>
          </View>

          <View className="h-px bg-secondary" />

          <View className="gap-2">
            <DrawerItem
              icon={<Icon.UserIcon size={22} color={colors.secondary[700]} weight="regular" />}
              label="Mi perfil"
              onPress={() => handleNavigate("/(tabs)/profile")}
              colors={colors}
            />
            <DrawerItem
              icon={<Icon.GearSixIcon size={22} color={colors.secondary[700]} weight="regular" />}
              label="Configuración"
              onPress={() => handleNavigate("/(tabs)/profile/settings")}
              colors={colors}
            />
            <DrawerItem
              icon={<Icon.QuestionIcon size={22} color={colors.secondary[700]} weight="regular" />}
              label="Ayuda"
              onPress={() => handleNavigate("/(tabs)/profile/help")}
              colors={colors}
            />
          </View>
        </View>

        <View className="mt-auto px-6 pb-12">
          <TouchableOpacity
            onPress={handleLogout}
            className="flex-row items-center gap-3 p-3 rounded-2xl"
            activeOpacity={0.7}
          >
            <Icon.SignOutIcon size={22} color={colors.primary.DEFAULT} weight="regular" />
            <Text className="text-primary font-poppins-medium text-[16px] tracking-tighter">
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

function DrawerItem({
  icon,
  label,
  onPress,
  colors,
}: {
  icon: ReactNode;
  label: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center gap-3 p-3 rounded-2xl bg-secondary"
      activeOpacity={0.7}
    >
      <View pointerEvents="none">{icon}</View>
      <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function DrawerTrigger() {
  const { open } = useDrawer();
  const colors = useColors();
  return (
    <TouchableOpacity
      onPress={open}
      className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
      activeOpacity={0.7}
    >
      <View pointerEvents="none">
        <Icon.ListIcon size={24} color={colors.secondary[700]} weight="regular" />
      </View>
    </TouchableOpacity>
  );
}
