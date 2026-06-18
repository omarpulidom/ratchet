import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";
import { router } from "expo-router";

export default function NotificationsTab() {
  const colors = useColors();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-700"
          onPress={() => {
            if (router.canGoBack()) router.back();
            else router.replace("/(tabs)");
          }}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[300]} />
          </View>
        </TouchableOpacity>
        <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
          Notificaciones
        </Text>
        <View className="w-12" />
      </View>

      {/* Notifications list */}
      <ScrollView className="px-4">
        {/* Notification item */}
        <View className="flex-row items-center justify-between py-2 gap-8">
          <View className="flex-1 flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full">
              <Image
                source={require("@/assets/images/mock/dany_pp.png")}
                className="w-full h-full rounded-full"
              />
            </View>
            <View className="flex-1">
              <Text className="text-[14px] font-poppins-regular text-secondary-700 tracking-tighter">
                <Text className="font-poppins-medium">danydz_al</Text> ha ganado
                la semana del 1 de junio
              </Text>
              <Text className="text-[12px] font-poppins-regular text-secondary-500 tracking-tighter">
                Hace 5 minutos
              </Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-2xl overflow-hidden">
            <Image
              source={require("@/assets/images/mock/dany_post.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
        {/* Notification item */}
        <View className="flex-row items-center justify-between py-2 gap-8">
          <View className="flex-1 flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full">
              <Image
                source={require("@/assets/images/mock/dany_pp.png")}
                className="w-full h-full rounded-full"
              />
            </View>
            <View className="flex-1">
              <Text className="text-[14px] font-poppins-regular text-secondary-700 tracking-tighter">
                <Text className="font-poppins-medium">danydz_al</Text> ha hecho
                check-in
              </Text>
              <Text className="text-[12px] font-poppins-regular text-secondary-500 tracking-tighter">
                Hace 1 hora
              </Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-2xl overflow-hidden">
            <Image
              source={require("@/assets/images/mock/dany_post.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
        {/* Notification item */}
        <View className="flex-row items-center justify-between py-2 gap-8">
          <View className="flex-1 flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full">
              <Image
                source={require("@/assets/images/mock/dany_pp.png")}
                className="w-full h-full rounded-full"
              />
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-1.5">
                <Text className="text-[14px] font-poppins-regular text-secondary-700 tracking-tighter">
                  <Text className="font-poppins-medium">danydz_al</Text>{" "}
                  reaccionó
                </Text>
                <Icon.HeartIcon
                  size={20}
                  weight="fill"
                  color={colors.primary.DEFAULT}
                />
              </View>
              <Text className="text-[12px] font-poppins-regular text-secondary-500 tracking-tighter">
                Hace 2 horas
              </Text>
            </View>
          </View>

          <View className="w-12 h-12 rounded-2xl overflow-hidden">
            <Image
              source={require("@/assets/images/mock/dany_post.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
