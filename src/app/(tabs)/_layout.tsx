import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import { TabBar } from "@/components/Elements/TabBar";
import { useAuth } from "@/components/Providers/AuthProvider";
import { useThemeStore } from "@/store/theme";

export default function TabsLayout() {
  const { user } = useAuth();
  const mode = useThemeStore((s) => s.mode);
  const systemScheme = useColorScheme();
  const resolved =
    mode === "auto" ? (systemScheme === "light" ? "light" : "dark") : mode;

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <>
      <StatusBar
        style={resolved === "dark" ? "light" : "dark"}
        backgroundColor="transparent"
        translucent
      />
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="groups"
          options={{
            title: "Groups",
          }}
        />
        <Tabs.Screen
          name="checkin"
          options={{
            title: "New Checkin",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        />
        <Tabs.Screen
          name="group-detail"
          options={{
            title: "Group Detail",
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
    </>
  );
}
