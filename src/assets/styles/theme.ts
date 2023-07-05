import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    yellow: { base: '#FFFF00' },
    gold: { base: '#FFD700' },
    orange: { base: '#FFA500' },
    pink: { base: '#FFC0CB' },
    magenta: { base: '#FF00FF' },
    plum: { base: '#DDA0DD' },
    purple: { base: '#800080' },
    blue: {
      light: '#00FFFF',
      turquoise: '#40E0D0',
      base: '#0000FF',
      dark: '#000080'
    },
    white: {
      base: '#FFFFFF',
      dirty: '#E5E5AD'
    },
    gray: {
      base: '#505050',
      silver: '#C0C0C0'
    },
    black: { base: '#000000' },
    red: { base: '#FF0000' },
    brown: { base: '#A52A2A' },
    green: { dark: '#008000', light: '#00FF00' }
  },
  fonts: {
    monomaniac: 'Monomaniac',
    anton: 'Anton'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})
