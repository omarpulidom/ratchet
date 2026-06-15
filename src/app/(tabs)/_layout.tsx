import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CustomTabBar } from "@/components/Elements/CustomTabBar";
import { useAuth } from "@/components/Providers/AuthProvider";

export default function TabsLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <>
      <StatusBar hidden />
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: () => <View />,
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
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
          }}
        />
      </Tabs>
    </>
  );
}
