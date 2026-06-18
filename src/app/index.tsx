import { Redirect } from "expo-router";
import { useAuth } from "@/components/Providers/AuthProvider";

export default function Index() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href={"/(auth)/welcome"} />;
}
