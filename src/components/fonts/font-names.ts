import type { AppFontKeys } from './fonts'

export const AppFontNames = {
  Poppins_300Light: 'Poppins_300Light',
  Poppins_400Regular: 'Poppins_400Regular',
  Poppins_500Medium: 'Poppins_500Medium',
  Poppins_600SemiBold: 'Poppins_600SemiBold',
  Poppins_700Bold: 'Poppins_700Bold',
  Poppins_800ExtraBold: 'Poppins_800ExtraBold',
} as const satisfies {
  [key in AppFontKeys]: AppFontKeys
}
