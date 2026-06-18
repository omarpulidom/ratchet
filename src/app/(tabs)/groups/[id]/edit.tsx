import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

export default function GroupEdit() {
  const router = useRouter();
  const colors = useColors();
  const [name, setName] = useState("ESCOM");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Editar grupo
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full items-center justify-center bg-primary"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CheckIcon size={24} color={colors.secondary[300]} weight="bold" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ gap: 24, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="gap-2">
          <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
            Nombre del grupo
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nombre"
            placeholderTextColor={colors.secondary[500]}
            className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl"
          />
        </View>

        <View className="gap-2">
          <Text className="text-secondary-700 font-poppins-medium text-[14px] pl-4">
            Descripción
          </Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="¿De qué se trata el grupo?"
            placeholderTextColor={colors.secondary[500]}
            multiline
            numberOfLines={3}
            className="bg-secondary-300 font-poppins-regular leading-tight text-[16px] py-4 px-4 text-secondary-700 border-2 border-secondary-300 rounded-3xl min-h-[80px]"
          />
        </View>

        <View className="bg-secondary-300 rounded-3xl p-4 mt-4 gap-2">
          <Text className="text-primary font-poppins-medium text-[14px] tracking-tighter">
            Zona peligrosa
          </Text>
          <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
            Eliminar el grupo es permanente para todos los miembros.
          </Text>
          <TouchableOpacity
            onPress={() => {}}
            className="bg-primary py-3 rounded-2xl items-center mt-2"
            activeOpacity={0.8}
          >
            <Text className="text-secondary font-poppins-medium text-[14px] tracking-tighter">
              Eliminar grupo
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
