import { expect, test } from 'vitest'
import { uno } from './utils/generator'

function ruleTest(name: string, target: string[]) {
  test(name, async () => {
    const result = await uno.generate(target.join(' '), { preflights: false })
    expect(result.css).matchSnapshot()
  })
}

ruleTest('position', ['static', 'fixed', 'absolute', 'relative', 'sticky'])
ruleTest('display', ['hidden', 'inline', 'inline-block', 'inline-table', 'inline-flex', 'inline-grid', 'block', 'flow', 'flow-root', 'flex', 'grid', 'list-item', 'table', 'table-row', 'table-cell', 'table-caption', 'table-row-group', 'table-column-group', 'table-header-group', 'table-footer-group', 'ruby', 'ruby-base', 'ruby-text', 'ruby-base-container'])

ruleTest('width', ['w1', 'w10', 'w-auto', 'w-fit', 'w-min', 'w-max', 'w100%', 'w50vh', 'w153px'])
ruleTest('min-width', ['>w1', '>w10', '>w-auto', '>w-fit', '>w-min', '>w-max', '>w100%', '>w50vh', '>w153px'])
ruleTest('max-width', ['<w1', '<w10', '<w-auto', '<w-fit', '<w-min', '<w-max', '<w100%', '<w50vh', '<w153px'])

ruleTest('height', ['h1', 'h10', 'h-auto', 'h-fit', 'h-min', 'h-max'])
ruleTest('min-height', ['>h1', '>h10', '>h-auto', '>h-fit', '>h-min', '>h-max', '>h100%', '>h50vh', '>h153px'])
ruleTest('max-height', ['<h1', '<h10', '<h-auto', '<h-fit', '<h-min', '<h-max', '<h100%', '<h50vh', '<h153px'])

ruleTest('overflow', ['overflow-auto', 'overflow-hidden', 'overflow-clip', 'overflow-visible', 'overflow-scroll', 'overflow-overlay', 'overflow-inherit', 'overflow-initial', 'overflow-unset'])
ruleTest('overflow-x', ['overflow-x-auto', 'overflow-x-hidden', 'overflow-x-clip', 'overflow-x-visible', 'overflow-x-scroll', 'overflow-x-overlay', 'overflow-x-inherit', 'overflow-x-initial', 'overflow-x-unset'])
ruleTest('overflow-y', ['overflow-y-auto', 'overflow-y-hidden', 'overflow-y-clip', 'overflow-y-visible', 'overflow-y-scroll', 'overflow-y-overlay', 'overflow-y-inherit', 'overflow-y-initial', 'overflow-y-unset'])

ruleTest('justify-content', ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly', 'justify-stretch'])
ruleTest('justify-items', ['justify-items-start', 'justify-items-end', 'justify-items-center', 'justify-items-between', 'justify-items-around', 'justify-items-evenly', 'justify-items-stretch'])
ruleTest('justify-self', ['justify-self-start', 'justify-self-end', 'justify-self-center', 'justify-self-between', 'justify-self-around', 'justify-self-evenly', 'justify-self-stretch'])

ruleTest('align-items', ['items-start', 'items-end', 'items-center', 'baseline', 'items-stretch'])
ruleTest('align-self', ['self-auto', 'self-start', 'self-end', 'self-center', 'self-stretch'])

ruleTest('float', ['float-left', 'float-right', 'float-none'])
ruleTest('clear', ['clear-left', 'clear-right', 'clear-both', 'clear-none'])

ruleTest('z-index', ['z-auto', 'z-inherit', 'z-initial', 'z-unset', 'z0', '-z10'])
