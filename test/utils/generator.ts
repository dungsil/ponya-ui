import { createGenerator } from '@unocss/core'
import { presetPonya } from 'ponya-ui'

export const uno = createGenerator({
  presets: [
    presetPonya()
  ],
})
