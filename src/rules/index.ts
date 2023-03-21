import layout from './layout'

import type { Rule } from '@unocss/core'
import type { PonyaTheme } from '../types'

export const rules: Rule<PonyaTheme>[] = [
  ...layout
]
