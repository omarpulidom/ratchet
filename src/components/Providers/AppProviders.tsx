import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { queryClient } from '@/lib/qc'
import { AuthProvider } from './AuthProvider'
import { ThemeProvider } from './ThemeProvider'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BottomSheetModalProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </BottomSheetModalProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
