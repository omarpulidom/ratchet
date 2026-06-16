import { useColors } from "@/hooks/useColors";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { router } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

export default function CheckinTab() {
  const colors = useColors();
  return (
    <SafeAreaView className="flex-1 bg-secondary">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            className="w-12 h-12 rounded-full items-center justify-center bg-secondary-700"
            onPress={() => router.back()}
          >
            <Icon.CaretLeftIcon size={24} color={colors.secondary[300]} />
          </TouchableOpacity>
        </View>
        <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
          Nuevo check-in
        </Text>
        <TouchableOpacity className="w-12 h-12 rounded-full items-center justify-center bg-primary">
          <Icon.CheckIcon size={24} color={colors.secondary[300]} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Image preview */}
        <View className="rounded-3xl w-44 h-56 self-center mt-4">
          <Image
            source={require("@/assets/images/mock/dany_post.png")}
            className="w-full rounded-3xl h-full"
            resizeMode="cover"
          />
          <TouchableOpacity className="absolute -bottom-6 self-center w-12 h-12 rounded-full items-center justify-center bg-secondary-300">
            <Icon.PencilSimpleIcon size={24} color={colors.secondary[700]} />
          </TouchableOpacity>
        </View>
        {/* Caption input */}
        <View className="px-2 gap-2 mt-8">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Descripción
          </Text>
          <TextInput
            placeholder="Escribe tu descripción del check-in"
            className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-6 px-4 text-secondary-700 border-secondary-500 rounded-3xl"
            placeholderTextColor={colors.secondary[500]}
          />
        </View>
        {/* Groups selector */}
        <View className="px-2 gap-2 mt-4">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Grupos
          </Text>
          <View className="flex-row items-center bg-secondary-300 rounded-3xl gap-2 p-2">
            <View className="flex-row bg-secondary rounded-2xl items-center justify-center gap-3 p-3">
              <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
                ESCOM
              </Text>
              <TouchableOpacity>
                <Icon.XIcon size={24} color={colors.secondary[700]} />
              </TouchableOpacity>
            </View>
            <View className="flex-row bg-secondary rounded-2xl items-center justify-center gap-3 p-3">
              <Text className="text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
                AMIGOS
              </Text>
              <TouchableOpacity>
                <Icon.XIcon size={24} color={colors.secondary[700]} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="ml-auto pr-4">
              <Icon.CaretDownIcon
                size={16}
                weight="fill"
                color={colors.secondary[500]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Actividades selector */}
        <View className="px-2 gap-2 mt-4">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Actividades
          </Text>
          <View className="flex-row items-center bg-secondary-300 rounded-3xl gap-2 p-2">
            <View className="flex-row bg-secondary rounded-2xl items-center justify-center gap-3 p-3">
              <Text className="text-[16px] font-poppins-regular text-primary tracking-tighter">
                #gym
              </Text>
              <TouchableOpacity>
                <Icon.XIcon size={24} color={colors.secondary[700]} />
              </TouchableOpacity>
            </View>
            <View className="flex-row bg-secondary rounded-2xl items-center justify-center gap-3 p-3">
              <Text className="text-[16px] font-poppins-regular text-primary tracking-tighter">
                #ejercicio
              </Text>
              <TouchableOpacity>
                <Icon.XIcon size={24} color={colors.secondary[700]} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="ml-auto pr-4">
              <Icon.CaretDownIcon
                size={16}
                weight="fill"
                color={colors.secondary[500]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Checkin data */}
        <View className="px-2 gap-2 mt-4">
          <Text className="pl-4 text-[16px] font-poppins-regular text-secondary-700 tracking-tighter">
            Datos del check-in
          </Text>
          <View className="bg-secondary-300 rounded-3xl px-4 py-6 gap-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <Icon.CalendarDotsIcon
                  size={24}
                  color={colors.secondary[700]}
                />
                <Text className="text-secondary-700 font-poppins-regular text-[16px] tracking-tighter">
                  Fecha y hora
                </Text>
              </View>
              <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                12 de junio, 7:30 a.m.
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <Icon.MapPinIcon size={24} color={colors.secondary[700]} />
                <Text className="text-secondary-700 font-poppins-regular text-[16px] tracking-tighter">
                  Ubicación
                </Text>
              </View>
              <Text className="text-secondary-500 font-poppins-regular text-[14px] tracking-tighter">
                Smart Fit La Viga
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
