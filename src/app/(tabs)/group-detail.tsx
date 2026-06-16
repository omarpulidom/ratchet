import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GradientHeader } from "@/components/gradient-header";
import { useColors } from "@/hooks/useColors";
import * as Icon from "phosphor-react-native";
import { router } from "expo-router";

export default function GroupDetailTab() {
  const colors = useColors();
  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <GradientHeader />
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            className="w-12 h-12 rounded-full items-center justify-center bg-secondary-700"
            onPress={() => router.back()}
          >
            <View pointerEvents="none">
              <Icon.CaretLeftIcon size={24} color={colors.secondary[300]} />
            </View>
          </TouchableOpacity>
          <Text className="text-[20px] font-poppins-regular text-secondary-700 tracking-tighter">
            ESCOM
          </Text>
        </View>
        <TouchableOpacity className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300">
          <View pointerEvents="none">
            <Icon.DotsThreeVerticalIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Podium */}
        <View className="flex-row gap-6 items-center justify-center mt-6">
          {/* Member */}
          <View className="flex-col items-center gap-3">
            <View className="relative">
              <View className="w-6 h-6 rounded-full bg-secondary-700 items-center justify-center absolute z-10 right-0">
                <Text className="text-[16px] font-poppins-regular text-secondary-300 tracking-tighter">
                  2
                </Text>
              </View>
              <View
                className="w-20 h-20 rounded-full bg-secondary-300 items-center justify-center"
                style={{
                  shadowColor: colors.secondary["DEFAULT"],
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 0.7,
                  shadowRadius: 16,
                  elevation: 8,
                }}
              >
                <Image
                  source={require("@/assets/images/mock/unknown_pp.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            </View>
            <Text className="text-[16px] font-poppins-regular text-secondary-500 tracking-tighter">
              25
            </Text>
          </View>
          {/* Number One - Member */}
          <View className="flex-col items-center gap-4">
            <View className="relative">
              <View className="w-8 h-8 rounded-full bg-primary items-center justify-center absolute z-10 right-0">
                <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
                  1
                </Text>
              </View>
              <View
                className="w-24 h-24 rounded-full bg-secondary-300 items-center justify-center"
                style={{
                  shadowColor: colors.primary.DEFAULT,
                  shadowOffset: { width: 4, height: -4 },
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  elevation: 8,
                }}
              >
                <Image
                  source={require("@/assets/images/mock/omarcito_pp.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            </View>
            <Text className="text-[20px] font-poppins-regular text-secondary-700 tracking-tighter">
              28 check-ins
            </Text>
          </View>
          {/* Member */}
          <View className="flex-col items-center gap-3">
            <View className="relative">
              <View className="w-6 h-6 rounded-full bg-secondary-700 items-center justify-center absolute z-10 right-0">
                <Text className="text-[16px] font-poppins-regular text-secondary-300 tracking-tighter">
                  3
                </Text>
              </View>
              <View
                className="w-20 h-20 rounded-full bg-secondary-300 items-center justify-center"
                style={{
                  shadowColor: colors.secondary["DEFAULT"],
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 0.7,
                  shadowRadius: 16,
                  elevation: 8,
                }}
              >
                <Image
                  source={require("@/assets/images/mock/dany_pp.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            </View>
            <Text className="text-[16px] font-poppins-regular text-secondary-500 tracking-tighter">
              23
            </Text>
          </View>
        </View>

        {/* Streak info */}
        <View className="flex-row items-center justify-between px-4 py-3 rounded-3xl bg-secondary-300 mx-2 mt-6">
          <View className="flex-row items-center gap-2">
            <Icon.FireSimpleIcon
              size={16}
              color={colors.primary.DEFAULT}
              weight="fill"
            />
            <Text className="text-[14px] font-poppins-regular text-secondary-700 tracking-tighter">
              Días de racha
            </Text>
          </View>
          <Text className="text-[16px] font-poppins-semibold text-secondary-700 tracking-tighter pr-1">
            6
          </Text>
        </View>

        {/* Checkin data */}
        <View className="bg-secondary-300 mt-2 mx-2 p-4 pt-6 rounded-3xl gap-5">
          {/* Header - Date selector */}
          <View className="flex-row items-center justify-between">
            <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
              Junio 2026
            </Text>
            <View className="flex-row items-center gap-12 pr-2">
              <TouchableOpacity>
                <View pointerEvents="none">
                  <Icon.CaretLeftIcon size={20} color={colors.secondary[700]} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View pointerEvents="none">
                  <Icon.CaretRightIcon size={20} color={colors.secondary[700]} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row gap-4">
            {/* 30-day streak grid */}
            <View className="flex-1 mt-4">
              <View className="flex-row">
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
              </View>
              <View className="flex-row">
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
              </View>
              <View className="flex-row">
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
              </View>
              <View className="flex-row">
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-primary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
              </View>
              <View className="flex-row">
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary" />
                <View className="flex-1 aspect-square rounded-full bg-secondary-300" />
                <View className="flex-1 aspect-square rounded-full bg-secondary-300" />
                <View className="flex-1 aspect-square rounded-full bg-secondary-300" />
                <View className="flex-1 aspect-square rounded-full bg-secondary-300" />
                <View className="flex-1 aspect-square rounded-full bg-secondary-300" />
              </View>
            </View>
            <View className="flex-col items-center gap-2">
              <View className="flex-row w-full items-center gap-3 border border-secondary p-3 rounded-2xl">
                <Icon.ClockIcon
                  size={24}
                  color={colors.primary.DEFAULT}
                  weight="fill"
                />
                <View className="flex-col gap-2">
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    19 de junio
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    Inicio de racha
                  </Text>
                </View>
              </View>
              <View className="flex-row w-full items-center gap-3 border border-secondary p-3 rounded-2xl">
                <Icon.TrophyIcon
                  size={24}
                  color={colors.primary.DEFAULT}
                  weight="fill"
                />
                <View className="flex-col gap-2">
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    11 días
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    Racha record
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Week data */}
        <Text className="text-secondary-500 my-6 text-center font-poppins-regular text-[14px] tracking-tighter">
          junio 8 - junio 14
        </Text>

        {/* Period selector */}
        <View className="flex-row bg-secondary-300 overflow-hidden rounded-3xl items-center mx-2 p-1.5">
          <TouchableOpacity className="bg-primary py-2 rounded-l-3xl rounded-r-md flex-1 items-center justify-center">
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Semana
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center border-r border-secondary justify-center">
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Mes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center border-r border-secondary justify-center">
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Año
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 items-center justify-center">
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Todos
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ranking data */}
        <View className="px-2 gap-2 mt-6">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Ranking
          </Text>
          <View className="bg-secondary-300 rounded-3xl px-4">
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/omarcito_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    omarcito
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    4 check-ins
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                1°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/unknown_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    pm404
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    3 check-ins
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                2°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/dany_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    danydz_al
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    2 check-ins
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                3°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* See all */}
            <TouchableOpacity className="py-5">
              <View className="flex-row items-center justify-between">
                <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                  Todos los rankings
                </Text>
                <View className="pr-2">
                  <View pointerEvents="none">
                    <Icon.ArrowRightIcon
                      size={20}
                      color={colors.secondary[700]}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Victories data */}
        <View className="px-2 gap-2 mt-6">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Victorias
          </Text>
          <View className="bg-secondary-300 rounded-3xl px-4">
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/omarcito_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    omarcito
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    3 victorias semanales
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                1°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/unknown_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    pm404
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    2 victorias semanales
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                2°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* Ranking position */}
            <View className="flex-row items-center py-3 justify-between">
              <View className="flex-row items-center gap-3">
                <Image
                  source={require("@/assets/images/mock/dany_pp.png")}
                  className="w-12 h-12"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
                    danydz_al
                  </Text>
                  <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                    1 victoria semanal
                  </Text>
                </View>
              </View>
              <Text className="text-secondary-700 font-poppins-semibold text-[16px] pr-2 tracking-tighter">
                3°
              </Text>
            </View>
            {/* Separator */}
            <View className="h-px -mx-4 bg-secondary" />
            {/* See all */}
            <TouchableOpacity className="py-5">
              <View className="flex-row items-center justify-between">
                <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                  Todas las victorias
                </Text>
                <View className="pr-2">
                  <View pointerEvents="none">
                    <Icon.ArrowRightIcon
                      size={20}
                      color={colors.secondary[700]}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Group stats */}
        <View className="px-2 gap-2 mt-6">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Estadísticas del grupo
          </Text>
          <View className="bg-secondary-300 rounded-3xl px-4">
            {/* Ranking position */}
            <View className="flex-row items-center py-3 gap-3 justify-start">
              <View className="w-12 h-12 items-center justify-center">
                <Icon.CheckCircleIcon size={24} color={colors.secondary[700]} />
              </View>
              <View>
                <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
                  9
                </Text>
                <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                  Total check-ins
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
