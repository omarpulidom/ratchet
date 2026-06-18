import '../global.css'
import { useFonts } from '@expo-google-fonts/montserrat'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppFonts } from '@/components/fonts/fonts'
import { AppProviders } from '@/components/Providers/AppProviders'
import { useThemeStore } from '@/store/theme'

SplashScreen.preventAutoHideAsync()

function RootStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...AppFonts,
  })

  const mode = useThemeStore((s) => s.mode)
  const systemScheme = useColorScheme()
  const resolved =
    mode === 'auto' ? (systemScheme === 'light' ? 'light' : 'dark') : mode

  const [themeClass, setThemeClass] = useState('')

  useEffect(() => {
    setThemeClass(resolved === 'dark' ? 'dark' : '')
  }, [resolved])

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [
    loaded,
    error,
  ])

  if (!loaded && !error) {
    return null
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
      className={themeClass}
    >
      <StatusBar
        style={resolved === 'dark' ? 'light' : 'dark'}
        backgroundColor="transparent"
        translucent
      />
      <AppProviders>
        <RootStack />
      </AppProviders>
    </GestureHandlerRootView>
  )
}
