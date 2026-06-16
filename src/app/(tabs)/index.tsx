import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { Colors } from "@/components/colors";
import { GradientHeader } from "@/components/gradient-header";
import { router } from "expo-router";

export default function HomeTab() {
  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <GradientHeader />
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300">
            <Icon.ListIcon size={24} color={Colors.secondary[700]} />
          </TouchableOpacity>
          <Text className="text-[20px] font-poppins-regular text-secondary-700 tracking-tighter">
            Ratchet
          </Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="h-12 px-3 gap-1.5 flex-row rounded-full items-center justify-center bg-secondary-300">
            <Icon.BellIcon size={24} color={Colors.secondary[700]} />
            <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300">
            <Icon.MagnifyingGlassIcon size={24} color={Colors.secondary[700]} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Stories */}
        <View className="flex-row gap-2 pt-2 mx-2">
          {/* Self */}
          <View className="gap-6 items-center px-4 pb-2 pt-6 bg-secondary-300 rounded-2xl">
            <View>
              <Image
                source={require("@/assets/images/mock/omarcito_pp.png")}
                className="w-16 h-16 rounded-full"
              />
              <View className="absolute w-6 h-6 rounded-full bg-primary items-center justify-center border-2 border-secondary-300 bottom-0 left-1/2 -ml-5 translate-y-1/2">
                <Icon.PlusIcon size={10} color={Colors.secondary[300]} />
              </View>
            </View>
            <Text className="text-[12px] font-poppins-regular text-secondary-700 tracking-tighter">
              Tu check-in
            </Text>
          </View>
          {/* Stories */}
          <View className="w-24 h-full rounded-2xl">
            <ImageBackground
              source={require("@/assets/images/mock/pm_post.png")}
              className="flex-1 overflow-hidden justify-between rounded-2xl"
            >
              <View className="pl-2 pt-2">
                <Image
                  source={require("@/assets/images/mock/unknown_pp.png")}
                  className="h-8 w-8 border-2 border-primary rounded-full"
                />
              </View>
              <Text
                className="text-[12px] text-center font-poppins-regular mb-2 text-secondary-700 tracking-tighter"
                style={{
                  textShadowColor: "rgba(0,0,0,1)",
                  textShadowOffset: { width: 8, height: 8 },
                  textShadowRadius: 96,
                }}
              >
                pm404
              </Text>
            </ImageBackground>
          </View>
          <View className="w-24 h-full rounded-2xl">
            <ImageBackground
              source={require("@/assets/images/mock/dany_post.png")}
              className="flex-1 overflow-hidden justify-between rounded-2xl"
            >
              <View className="pl-2 pt-2">
                <Image
                  source={require("@/assets/images/mock/dany_pp.png")}
                  className="h-8 w-8 border-2 border-primary rounded-full"
                />
              </View>
              <Text
                className="text-[12px] text-center font-poppins-regular mb-2 text-secondary-700 tracking-tighter"
                style={{
                  textShadowColor: "rgba(0,0,0,1)",
                  textShadowOffset: { width: 8, height: 8 },
                  textShadowRadius: 96,
                }}
              >
                danydz_al
              </Text>
            </ImageBackground>
          </View>
        </View>

        {/* Streak */}
        <View className="mx-2 mt-6 rounded-3xl p-2 bg-secondary-300 gap-4">
          {/* Streak header + progress */}
          <View className="flex-row items-center justify-center gap-2">
            {/* Streak days */}
            <View className="self-start rounded-2xl py-4 px-6 items-center gap-4 bg-secondary">
              <View className="relative">
                <Image
                  source={require("@/assets/images/icons/crown.png")}
                  className="absolute z-10 -top-6"
                />
                <Image
                  source={require("@/assets/images/mock/omarcito_pp.png")}
                  className="w-[72px] h-[72px] rounded-2xl"
                />
              </View>
              <View className="items-center">
                <Text className="text-[20px] font-poppins-medium leading-tight text-secondary-700 tracking-tighter">
                  28 días
                </Text>
                <Text className="text-[10px] font-poppins-regular leading-none text-secondary-500 tracking-tighter">
                  en total
                </Text>
              </View>
            </View>
            {/* Streak progress */}
            <View className="flex-1 flex-col">
              {/* Streak header */}
              <View className="flex-col px-2 py-4 gap-3">
                {/* Streak header */}
                <View className="flex-row items-center justify-between">
                  <Text className="text-[24px] leading-tight font-poppins-medium text-secondary-700 tracking-tighter">
                    ESCOM
                  </Text>
                  <TouchableOpacity
                    className="flex-row items-center gap-2"
                    onPress={() => router.push("/(tabs)/group-detail")}
                  >
                    <Text className="text-[12px] font-poppins-regular text-secondary-500 tracking-tighter">
                      Ver detalles
                    </Text>
                    <Icon.ArrowRightIcon
                      size={16}
                      color={Colors.secondary[500]}
                    />
                  </TouchableOpacity>
                </View>
                {/* Streak info */}
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1.5">
                    <Text className="text-[12px] leading-tight font-poppins-regular text-secondary-500 tracking-tighter">
                      3 días en racha
                    </Text>
                    <Icon.FireSimpleIcon
                      size={16}
                      color={Colors.primary.DEFAULT}
                      weight="fill"
                    />
                  </View>
                  <Text className="text-[12px] leading-tight font-poppins-regular text-secondary-700 tracking-tighter">
                    5/7
                  </Text>
                </View>
              </View>
              {/* Streak progress */}
              <View className="bg-secondary justify-center items-center gap-2 flex-row flex-1 rounded-2xl">
                {/* Day */}
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Icon.CheckIcon
                      size={12}
                      color={Colors.secondary[700]}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Lun
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Icon.CheckIcon
                      size={12}
                      color={Colors.secondary[700]}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Mar
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-secondary-300" />
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Mie
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Icon.CheckIcon
                      size={12}
                      color={Colors.secondary[700]}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Jue
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Icon.CheckIcon
                      size={12}
                      color={Colors.secondary[700]}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Vie
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Icon.CheckIcon
                      size={12}
                      color={Colors.secondary[700]}
                      weight="bold"
                    />
                  </View>
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Sáb
                  </Text>
                </View>
                <View className="flex-col items-center justify-center gap-2">
                  <View className="w-6 h-6 rounded-full bg-secondary-300" />
                  <Text className="text-[10px] font-poppins-regular text-secondary-700 tracking-tighter">
                    Dom
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Carroussel footer */}
          <View className="flex-row justify-center mb-1 items-center gap-1.5">
            <View className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
            <View className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <View className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <View className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </View>
        </View>

        {/* Feed */}
        <View className="mx-2 mt-6 p-2 rounded-3xl bg-secondary-300">
          {/* Header */}
          <View className="p-3 rounded-t-2xl bg-secondary flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/images/mock/dany_pp.png")}
                className="w-12 h-12"
              />
              <View className="flex-col">
                <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                  danydz_al
                </Text>
                <Text className="text-secondary-500 font-poppins-light text-[12px] tracking-tighter">
                  Ayer a las 11:32 a.m.
                </Text>
              </View>
            </View>
            <View className="p-3 bg-secondary-300 rounded-full">
              <Text className="text-secondary-500 leading-tight font-poppins-medium text-[14px] tracking-tighter">
                ESCOM
              </Text>
            </View>
          </View>
          {/* Content */}
          <Image
            source={require("@/assets/images/mock/dany_post.png")}
            className="w-full overflow-hidden rounded-b-2xl"
          />
          {/* Actions */}
          <View className="flex-row mt-2 items-center justify-between">
            <View className="flex-row p-3 bg-secondary rounded-full items-center gap-1.5">
              <Icon.HeartIcon size={20} color={Colors.secondary[500]} />
              <Text className="text-secondary-500 font-poppins-regular text-[16px] tracking-tighter">
                2
              </Text>
            </View>
            <View className="flex-row gap-1 pr-2">
              <Icon.MapPinIcon
                size={16}
                color={Colors.secondary[500]}
                weight="fill"
              />
              <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                Smart Fit La Viga
              </Text>
            </View>
          </View>
          {/* Description */}
          <View className="flex-row px-2 my-4 items-center gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
              danydz_al
            </Text>
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Morning workout check
              <Text className="text-primary tracking-tighter"> #gym</Text>
            </Text>
          </View>
        </View>
        <View className="mx-2 mt-4 p-2 rounded-3xl bg-secondary-300">
          {/* Header */}
          <View className="p-3 rounded-t-2xl bg-secondary flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/images/mock/unknown_pp.png")}
                className="w-12 h-12"
              />
              <View className="flex-col">
                <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
                  pm404
                </Text>
                <Text className="text-secondary-500 font-poppins-light text-[12px] tracking-tighter">
                  4 de junio a las 9:15 a.m.
                </Text>
              </View>
            </View>
            <View className="p-3 bg-secondary-300 rounded-full">
              <Text className="text-secondary-500 leading-tight font-poppins-medium text-[14px] tracking-tighter">
                ESCOM
              </Text>
            </View>
          </View>
          {/* Content */}
          <Image
            source={require("@/assets/images/mock/pm_post.png")}
            className="w-full overflow-hidden rounded-b-2xl"
          />
          {/* Actions */}
          <View className="flex-row mt-2 items-center justify-between">
            <View className="flex-row p-3 bg-secondary rounded-full items-center gap-1.5">
              <Icon.HeartIcon size={20} color={Colors.secondary[500]} />
              <Text className="text-secondary-500 font-poppins-regular text-[16px] tracking-tighter">
                2
              </Text>
            </View>
            <View className="flex-row gap-1 pr-2">
              <Icon.MapPinIcon
                size={16}
                color={Colors.secondary[500]}
                weight="fill"
              />
              <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                Smart Fit La Viga
              </Text>
            </View>
          </View>
          {/* Description */}
          <View className="flex-row px-2 my-4 items-center gap-2">
            <Text className="text-secondary-700 font-poppins-medium text-[14px] tracking-tighter">
              pm404
            </Text>
            <Text className="text-secondary-700 font-poppins-regular text-[14px] tracking-tighter">
              Morning workout check
              <Text className="text-primary tracking-tighter"> #gym</Text>
            </Text>
          </View>
        </View>
        <View className="h-16" />
      </ScrollView>
    </SafeAreaView>
  );
}
