import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "phosphor-react-native";
import { useColors } from "@/hooks/useColors";

const getInitial = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function ProfileStreaks() {
  const router = useRouter();
  const colors = useColors();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
        <TouchableOpacity
          onPress={() => {
            if (router.canGoBack()) router.back();
            else router.replace("/(tabs)/profile");
          }}
          className="w-12 h-12 rounded-full items-center justify-center bg-secondary-300"
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <Icon.CaretLeftIcon size={24} color={colors.secondary[700]} />
          </View>
        </TouchableOpacity>
        <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
          Mis rachas
        </Text>
        <View className="w-12 h-12" />
      </View>

      <ScrollView
        className="px-4"
        contentContainerStyle={{ gap: 12, paddingBottom: 32 }}
      >
        <View className="bg-secondary-300 rounded-3xl p-6 gap-4 mt-2">
          <View className="flex-row items-center gap-3">
            <View className="w-14 h-14 rounded-full items-center justify-center bg-primary">
              <View pointerEvents="none">
                <Icon.FireSimpleIcon
                  size={28}
                  color={colors.secondary[300]}
                  weight="fill"
                />
              </View>
            </View>
            <View>
              <Text className="text-secondary-500 font-poppins-regular text-[13px] tracking-tighter">
                Racha personal
              </Text>
              <Text className="text-secondary-700 font-poppins-bold text-[28px] tracking-tighter">
                6 días
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between pt-2">
            <View>
              <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                Récord
              </Text>
              <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
                11 días
              </Text>
            </View>
            <View>
              <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
                Último check-in
              </Text>
              <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
                Hoy
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-secondary-500 font-poppins-medium text-[13px] tracking-tighter pl-2 mt-4">
          Rachas por grupo
        </Text>
        <View className="gap-2">
          <GroupStreakRow name="ESCOM" current={6} best={11} />
          <GroupStreakRow name="Lecturas" current={2} best={5} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function GroupStreakRow({
  name,
  current,
  best,
}: {
  name: string;
  current: number;
  best: number;
}) {
  const colors = useColors();
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="flex-row items-center justify-between p-4 rounded-2xl bg-secondary-300"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-full items-center justify-center bg-primary">
          <Text className="text-secondary font-poppins-bold text-[13px] tracking-tighter">
            {getInitial(name)}
          </Text>
        </View>
        <View>
          <Text className="text-secondary-700 font-poppins-medium text-[16px] tracking-tighter">
            {name}
          </Text>
          <Text className="text-secondary-500 font-poppins-regular text-[12px] tracking-tighter">
            Récord: {best} días
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2 pr-1">
        <Text className="text-primary font-poppins-bold text-[20px] tracking-tighter">
          {current}
        </Text>
        <View pointerEvents="none">
          <Icon.FireSimpleIcon
            size={18}
            color={colors.primary.DEFAULT}
            weight="fill"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
