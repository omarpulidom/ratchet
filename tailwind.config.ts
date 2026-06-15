import type { Config } from 'tailwindcss'
import { Colors } from './src/components/colors'
import { AppFontNames } from './src/components/fonts/font-names'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],

  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    extend: {
      colors: Colors,
      fontFamily: {
        poppins: [
          AppFontNames.Poppins_500Medium,
        ],
        'poppins-light': [
          AppFontNames.Poppins_300Light,
        ],
        'poppins-regular': [
          AppFontNames.Poppins_400Regular,
        ],
        'poppins-medium': [
          AppFontNames.Poppins_500Medium,
        ],
        'poppins-semibold': [
          AppFontNames.Poppins_600SemiBold,
        ],
        'poppins-bold': [
          AppFontNames.Poppins_700Bold,
        ],
        'poppins-extrabold': [
          AppFontNames.Poppins_800ExtraBold,
        ],

        sans: [
          AppFontNames.Poppins_500Medium,
          'sans-serif',
        ],
        mono: [
          AppFontNames.Poppins_500Medium,
          'monospace',
        ],
        primary: [
          AppFontNames.Poppins_500Medium,
          'sans-serif',
        ],
        secondary: [
          AppFontNames.Poppins_500Medium,
          'sans-serif',
        ],
      },
    },
  },

  plugins: [],
}

export default config
