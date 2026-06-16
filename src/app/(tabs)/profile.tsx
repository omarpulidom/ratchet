import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeToggle } from '@/components/Elements/ThemeToggle'
import { useAuth } from '@/components/Providers/AuthProvider'

export default function ProfileTab() {
  const { logout } = useAuth()
  return (
    <SafeAreaView className='flex-1 bg-secondary p-4'>
      <View className='gap-2 mb-6'>
        <Text className='text-secondary-700 font-poppins-regular text-[14px] tracking-tighter pl-4'>
          Tema
        </Text>
        <ThemeToggle />
      </View>
      <TouchableOpacity onPress={() => logout()} className='bg-primary-300 p-2 rounded-lg self-start'>
        <Text className='text-primary tracking-tighter'>Log-out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
