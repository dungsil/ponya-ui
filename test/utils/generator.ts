import { createGenerator } from '@unocss/core'
import { presetPonya } from '../..'

export const uno = createGenerator({
  presets: [
    presetPonya()
  ],
})
