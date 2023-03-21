import { expect, test } from 'vitest'
import { uno } from './utils/generator'

test('preflights', async () => {
  const result = await uno.generate('', {
    preflights: true
  })

  // 레이어 설정 확인
  expect(result.layers).toStrictEqual(['preflights', 'default'])

  // 스냅샷 체크
  expect(result.css).matchSnapshot()
})

