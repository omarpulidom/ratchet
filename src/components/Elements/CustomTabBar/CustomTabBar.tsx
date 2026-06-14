import { Feather } from '@expo/vector-icons'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '@/components/colors'

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <>
      {/* TabBar */}
      <View className='bg-secondary border-t-2 border-secondary-300 pb-6 pt-4 px-6'>
        <View className='flex-row justify-center items-center gap-6'>
          {/* Screen 1: Inicio */}
          {state.routes.map((route, index) => {
            if (route.name !== 'index') return null
            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className={`flex-col items-center gap-1 py-5 px-7 rounded-xl min-w-[70px] ${
                  isFocused ? 'bg-primary-300' : ''
                }`}
              >
                <Feather
                  name='home'
                  size={24}
                  color={isFocused ? Colors.primary.DEFAULT : Colors.secondary[500]}
                />
                <Text
                  className={`font-medium text-xs ${isFocused ? 'text-primary' : 'text-secondary-500'}`}
                >
                  Inicio
                </Text>
              </TouchableOpacity>
            )
          })}

          {/* Screen 2: Profile */}
          {state.routes.map((route, index) => {
            if (route.name !== 'profile') return null
            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className={`flex-col items-center gap-1 py-5 px-7 rounded-xl ${
                  isFocused ? 'bg-primary-300' : ''
                }`}
              >
                <Feather
                  name='user'
                  size={24}
                  color={isFocused ? Colors.primary.DEFAULT : Colors.secondary[500]}
                />
                <Text
                  className={`font-medium text-xs ${isFocused ? 'text-primary' : 'text-secondary-500'}`}
                >
                  Perfil
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </>
  )
}
