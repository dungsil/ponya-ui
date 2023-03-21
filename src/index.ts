import { theme } from './theme'
import { preflights } from './preflights'
import { rules } from './rules'

import type { Preset } from '@unocss/core'
import type { PonyaOptions, PonyaTheme } from './types'

export const presetPonya = (options: PonyaOptions = {}): Preset<PonyaTheme> => {

  return {
    name: 'ponya-ui',
    options,
    theme,
    preflights,
    rules
  }
}
