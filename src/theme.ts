import type { PonyaTheme } from './types'

export const theme: PonyaTheme = {
  fontFamily: {
    DEFAULT: 'sans',
    sans: ['"Pretendard Variable"', 'Pretendard', 'sans-serif'],
    serif: ['serif'],
    mono: ['monospace']
  },
  fontSize: {
    root: '16px',
    base: 1,
    prose: 1.0625,
  },
  lineHeight: {
    base: 1,
    prose: 1.75
  },
  letterSpacing: {
    base: 0
  },
  colors: {
    gray: {
      50:  '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    }
  },

  ui: {
    background: {
      base: ['gray', 50]
    },
    color: {
      base: ['gray', 700],
      prose: ['gray', 700],
      display: ['gray', 800]
    }
  }
}
