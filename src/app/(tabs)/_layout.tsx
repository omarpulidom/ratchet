import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
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
    return <Redirect href="/(auth)/welcome" />;
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
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="groups" options={{ title: "Groups" }} />
        <Tabs.Screen
          name="checkin"
          options={{
            title: "New Checkin",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen
          name="groups/detail"
          options={{
            title: "Group Detail",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="groups/create"
          options={{
            title: "Crear grupo",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="groups/edit"
          options={{
            title: "Editar grupo",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="groups/members"
          options={{
            title: "Miembros",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="groups/settings"
          options={{
            title: "Settings grupo",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="groups/invite"
          options={{
            title: "Invitar",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile/edit"
          options={{
            title: "Editar perfil",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile/settings"
          options={{
            title: "Configuración",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile/streaks"
          options={{
            title: "Mis rachas",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile/help"
          options={{
            title: "Ayuda",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="profile/about"
          options={{
            title: "Acerca de",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="user/[id]"
          options={{
            title: "Perfil",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="stories/[id]"
          options={{
            title: "Story",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="post/[id]"
          options={{
            title: "Check-in",
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
    </>
  );
}
