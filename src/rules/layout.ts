import type { Rule } from '@unocss/core'
import type { PonyaTheme } from '../types'

const mapping: Record<string, string> = {
  '>': 'min-',
  '<': 'max-',
  w: 'width',
  h: 'height',

  // width, height
  fit: 'fit-content',
  min: 'min-content',
  max: 'max-content',

  // justify
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

const isNum = (v: string): boolean => /^[0-9]+$/.test(v)

function parseValue(value: string, negative?: string): string {
  // 숫자만 존재하는 경우
  if (isNum(value)) {

    // 0 의 경우 추가 작업 없이 종료
    if (value === "0") {
      return "0"
    }

    // 음수 지원
    if (negative === '-') {
      return String(Number(value) * -1)
    }

    // 4px 그리드
    return 0.25 * Number(value) + 'rem'
  }

  return mapping[value] ?? value
}

export default <Rule<PonyaTheme>[]> [
  // z-index
  [/^(-)?z-?(\d+|auto|inherit|initial|unset)$/, ([,negative,v]) => ({ 'z-index': parseValue(v, negative) })],

  // width-*, height-*
  [/^([><])?([wh])-?(.+)$/, ([,minmax,wh,value]) => ({ [`${mapping[minmax] ?? ''}${mapping[wh]}`]: parseValue(value) })],

  // float, clear
  [/^(float|clear)-(left|right|none)/, ([,fc,v]) => ({ [fc]: v })],

  // align-items-*, align-self-*
  [/^(items|self)-(auto|start|end|center|baseline|stretch)$/, ([,suffix, v]) => ({ [`align-${suffix}`]: parseValue(v) })],

  // justify-*, justify-items-*, justify-self-*
  [/^justify(-items|-self)?-(start|end|center|between|around|evenly|stretch)$/, ([, j, v]) => ({ [`justify${j ?? '-content'}`]: parseValue(v), })],

  // overflow, overflow-x, overflow-y
  [/^overflow-(auto|hidden|clip|visible|scroll|overlay|inherit|initial|unset)$/, ([, overflow]) => ({ overflow })],
  [/^overflow-([xy])-(auto|hidden|clip|visible|scroll|overlay|inherit|initial|unset)$/, ([, xy, overflow]) => ({ [`overflow-${xy}`]: overflow })],

  // display
  [/^(hidden|inline|inline-(block|table|flex|grid)|block|flow|flow-root|flex|grid|list-item|table|table-(row|cell|capture)|table-(row|column|header|footer)-group|ruby|ruby-(base|text|base-container))$/, ([, display]) => ({ display })],

  // position
  [/^(static|fixed|absolute|relative|sticky)$/, ([, position]) => ({ position })],
]
