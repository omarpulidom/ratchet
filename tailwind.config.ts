import type { Config } from 'tailwindcss'
import { Colors } from './src/components/colors'
import { AppFontNames } from './src/components/fonts/font-names'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],

  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    extend: {
      colors: {
        primary: Colors.primary,
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          700: 'var(--color-secondary-700)',
          500: 'var(--color-secondary-500)',
          300: 'var(--color-secondary-300)',
        },
        green: Colors.green,
        greeny: Colors.greeny,
        rose: Colors.rose,
        amber: Colors.amber,
        terra: Colors.terra,
        sand: Colors.sand,
        teal: Colors.teal,
        ruby: Colors.ruby,
      },
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
