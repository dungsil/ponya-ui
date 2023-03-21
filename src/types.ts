
export type PonyaOptions = {

}

export type PonyaThemeDefault<T> = Omit<keyof T, 'DEFAULT'>
export type PonyaThemeColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type PonyaThemeColor = Record<PonyaThemeColorKey, string>
export type PonyaThemeUI = [string, PonyaThemeColorKey]

export type PonyaTheme = {
  fontFamily: {
    DEFAULT: PonyaThemeDefault<PonyaTheme['fontFamily']>
    sans: string[]
    serif: string[]
    mono: string[]
  },
  fontSize: {
    root: string
    base: number
    prose: number

    [key: string]: string | number
  },
  lineHeight: {
    base: number
    prose: 1.75
    [key: string]: string | number
  },
  letterSpacing: {
    base: number
    [key: string]: string | number
  },
  colors: {
    gray: PonyaThemeColor
    [key: string]: string | PonyaThemeColor
  },

  ui: {
    background: {
      base: PonyaThemeUI
    }
    color: {
      base: PonyaThemeUI
      prose: PonyaThemeUI
      display: PonyaThemeUI
    }
  }
}

