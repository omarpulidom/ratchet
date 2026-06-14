import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";
import { Colors } from "@/components/colors";

type TabConfig = {
  name: string;
  label: string;
  icon: Icon.Icon;
  isCta?: boolean;
};

const TABS: TabConfig[] = [
  { name: "groups", label: "Grupos", icon: Icon.RankingIcon },
  { name: "index", label: "Inicio", icon: Icon.HouseIcon },
  { name: "checkin", label: "Checkin", icon: Icon.PlusIcon, isCta: true },
  { name: "profile", label: "Perfil", icon: Icon.UserIcon },
];

function TabButton({
  tab,
  isFocused,
  onPress,
}: {
  tab: TabConfig;
  isFocused: boolean;
  onPress: () => void;
}) {
  const TabIcon = tab.icon;
  const containerClass = tab.isCta
    ? "w-14 h-14 rounded-[32px] items-center justify-center bg-primary"
    : `h-14 ${isFocused ? "px-4" : "w-14 px-0"} rounded-[32px] bg-secondary-700 flex-row items-center justify-center gap-2`;

  return (
    <TouchableOpacity onPress={onPress} className={containerClass} hitSlop={8}>
      <View pointerEvents="none">
        <TabIcon
          size={24}
          color={Colors.secondary[300]}
          weight={tab.isCta ? "regular" : isFocused ? "fill" : "regular"}
        />
      </View>
      {isFocused && !tab.isCta && (
        <Text className="text-secondary-300 text-[14px] font-poppins-regular tracking-[-0.06em]">
          {tab.label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row items-end justify-between pb-8 px-4">
      <View className="flex-1 items-start">
        <TabButton
          tab={TABS[0]}
          isFocused={
            state.index ===
            state.routes.findIndex((r) => r.name === TABS[0].name)
          }
          onPress={() => navigation.navigate(TABS[0].name)}
        />
      </View>

      <View className="flex-row items-center">
        <TabButton
          tab={TABS[1]}
          isFocused={
            state.index ===
            state.routes.findIndex((r) => r.name === TABS[1].name)
          }
          onPress={() => navigation.navigate(TABS[1].name)}
        />
        <TabButton
          tab={TABS[2]}
          isFocused={
            state.index ===
            state.routes.findIndex((r) => r.name === TABS[2].name)
          }
          onPress={() => navigation.navigate(TABS[2].name)}
        />
      </View>

      <View className="flex-1 items-end">
        <TabButton
          tab={TABS[3]}
          isFocused={
            state.index ===
            state.routes.findIndex((r) => r.name === TABS[3].name)
          }
          onPress={() => navigation.navigate(TABS[3].name)}
        />
      </View>
    </View>
  );
}
