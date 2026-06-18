import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { router } from "expo-router";

import { useColors } from "@/hooks/useColors";
export default function GroupsTab() {
  const colors = useColors();
  return (
    <SafeAreaView className="flex-1 bg-secondary">
      {/* Header */}
      <View className="flex-row items-center justify-end px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/groups/create")}
          className="h-12 w-12 flex-row rounded-full items-center justify-center bg-secondary-700"
        >
          <View pointerEvents="none">
            <Icon.UserPlusIcon size={24} color={colors.secondary.DEFAULT} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300">
          <View pointerEvents="none">
            <Icon.MagnifyingGlassIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Groups list */}
      <ScrollView className="px-2" contentContainerStyle={{ gap: 8 }}>
        <Text className="text-[20px] pl-4 font-poppins-regular text-secondary-700 tracking-tighter">
          Grupos
        </Text>
        <View className="gap-2">
          {/* Group item */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/groups/detail")}
            className="bg-secondary-300 rounded-3xl pb-3 px-6 pt-6 gap-4 overflow-hidden"
            activeOpacity={0.8}
          >
            {/* Header */}
            <View className="flex-row items-center justify-between">
              <Text className="text-[24px] font-poppins-regular text-secondary-700 tracking-tighter">
                ESCOM
              </Text>
              <View className="bg-secondary rounded-full">
                <Text className="text-[14px] font-poppins-regular text-secondary-500 tracking-tighter p-3">
                  Activo ayer
                </Text>
              </View>
            </View>
            {/* Members and activities */}
            <View className="flex-row items-start gap-6">
              {/* Members */}
              <View className="gap-2">
                <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                  Miembros
                </Text>
                <View className="relative w-36 h-12">
                  {/* Members */}
                  {/* (avatar 1) */}
                  <Image
                    source={require("@/assets/images/mock/omarcito_pp.png")}
                    className="absolute w-12 h-12 left-0 top-0 rounded-full"
                  />
                  {/* (avatar 2) */}
                  <Image
                    source={require("@/assets/images/mock/unknown_pp.png")}
                    className="absolute w-12 h-12 left-8 top-0 rounded-full"
                  />
                  {/* (avatar 3) */}
                  <Image
                    source={require("@/assets/images/mock/dany_pp.png")}
                    className="absolute w-12 h-12 left-16 top-0 rounded-full"
                  />
                  {/* Frame 81 badge +N */}
                  <View className="absolute w-12 h-12 left-24 top-0 rounded-full bg-secondary items-center justify-center">
                    <Text className="text-secondary-700 text-[16px] font-poppins-medium tracking-tighter">
                      +3
                    </Text>
                  </View>
                </View>
              </View>
              {/* Activities */}
              <View className="gap-2">
                <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                  Actividades
                </Text>
                <Text className="text-primary font-poppins-regular text-[14px] tracking-tighter">
                  #gym #ejercico #natacion
                </Text>
              </View>
            </View>
            {/* Badges + share button */}
            <View className="flex-row mt-2 items-end justify-between">
              {/* Badges */}
              <View className="gap-2 -ml-2 flex-row items-center">
                <View className="flex-row items-center bg-secondary rounded-full gap-2 p-3">
                  <Icon.CheckCircleIcon
                    size={20}
                    color={colors.secondary[700]}
                  />
                  <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                    34 check-ins
                  </Text>
                </View>
                <View className="flex-row items-center bg-secondary rounded-full gap-2 p-3">
                  <Icon.FireSimpleIcon
                    size={20}
                    color={colors.primary.DEFAULT}
                    weight="fill"
                  />
                  <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                    3
                  </Text>
                </View>
              </View>
              {/* Share button */}
              <TouchableOpacity className="bg-primary rounded-full p-3">
                <View pointerEvents="none">
                  <Icon.ExportIcon size={20} color={colors.secondary.DEFAULT} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* Group item */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/groups/detail")}
            className="bg-secondary-300 rounded-3xl pb-3 px-6 pt-6 gap-4 overflow-hidden"
            activeOpacity={0.8}
          >
            {/* Header */}
            <View className="flex-row items-center justify-between">
              <Text className="text-[24px] font-poppins-regular text-secondary-700 tracking-tighter">
                Lecturas
              </Text>
              <View className="bg-secondary rounded-full">
                <Text className="text-[14px] font-poppins-regular text-secondary-500 tracking-tighter p-3">
                  Activo hace 2 días
                </Text>
              </View>
            </View>
            {/* Members and activities */}
            <View className="flex-row items-start gap-6">
              {/* Members */}
              <View className="gap-2">
                <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                  Miembros
                </Text>
                <View className="relative w-36 h-12">
                  {/* Members */}
                  {/* (avatar 1) */}
                  <Image
                    source={require("@/assets/images/mock/omarcito_pp.png")}
                    className="absolute w-12 h-12 left-0 top-0 rounded-full"
                  />
                  {/* (avatar 2) */}
                  <Image
                    source={require("@/assets/images/mock/unknown_pp.png")}
                    className="absolute w-12 h-12 left-8 top-0 rounded-full"
                  />
                  {/* (avatar 3) */}
                  <Image
                    source={require("@/assets/images/mock/dany_pp.png")}
                    className="absolute w-12 h-12 left-16 top-0 rounded-full"
                  />
                </View>
              </View>
              {/* Activities */}
              <View className="gap-2">
                <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                  Actividades
                </Text>
                <Text className="text-primary font-poppins-regular text-[14px] tracking-tighter">
                  #libros #leer #nose
                </Text>
              </View>
            </View>
            {/* Badges + share button */}
            <View className="flex-row mt-2 items-end justify-between">
              {/* Badges */}
              <View className="gap-2 -ml-2 flex-row items-center">
                <View className="flex-row items-center bg-secondary rounded-full gap-2 p-3">
                  <Icon.CheckCircleIcon
                    size={20}
                    color={colors.secondary[700]}
                  />
                  <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                    12 check-ins
                  </Text>
                </View>
                <View className="flex-row items-center bg-secondary rounded-full gap-2 p-3">
                  <Icon.FireSimpleIcon
                    size={20}
                    color={colors.primary.DEFAULT}
                    weight="fill"
                  />
                  <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                    2
                  </Text>
                </View>
              </View>
              {/* Share button */}
              <TouchableOpacity className="bg-primary rounded-full p-3">
                <View pointerEvents="none">
                  <Icon.ExportIcon size={20} color={colors.secondary.DEFAULT} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
