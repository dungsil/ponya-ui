import { theme as defaultTheme } from './theme'
import type { Preflight } from '@unocss/core'
import type { PonyaTheme, PonyaThemeUI } from './types'

function resolveUI(theme: PonyaTheme, ui: PonyaThemeUI): string {
  return theme.colors[ui[0]][ui[1]]
}

// noinspection CssInvalidPropertyValue,CssNoGenericFontName,CssOverwrittenProperties
export const preflights: Preflight<PonyaTheme>[] = [
  {
    layer: 'preflights',
    getCSS: ({ theme }) => `
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      background-repeat: no-repeat;

      border-width: 0;
      border-style: solid;
      border-color: ${theme.colors.gray[300]};
    }

    :where(:root) {
      cursor: default;
      line-height: ${theme.lineHeight.base};
      overflow-wrap: break-word;
      -moz-tab-size: 4;
      tab-size: 4;
      -webkit-tap-highlight-color: transparent;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }

    :where(html) {
      font-size: ${theme.fontSize.base}rem;
    }

    :where(body) {
      margin: 0;

      font-size: ${theme.fontSize.base}rem;
      line-height: ${theme.lineHeight.base};
      letter-spacing: ${theme.letterSpacing.base}em;

      background-color: ${resolveUI(theme, theme.ui.background.base)};
      color: ${resolveUI(theme, theme.ui.color.base)};
    }

    :where(h1, h2, h3, h4, h5, h6) {
      margin: 0;

      font-size: 1em;
      color: ${resolveUI(theme, theme.ui.color.display)};
    }

    :where(p) {
      margin: 0;
    }

    :where(a) {
      color: inherit;
      text-decoration: inherit;
    }

    :where(dl, ol, ul) {
      margin: 0;
      padding: 0;
    }

    :where(nav) :where(ul, ol) {
      list-style: none;
    }

    :where(hr) {
      height: 0;
      border-top-width: 1px;
    }

    :where(pre) {
      overflow: auto;
    }

    :where(pre, code, kbd, samp) {
      font-family: ${theme.fontFamily.mono};
      font-size: 1em;
    }

    :where(abbr[title]) {
      text-decoration: underline;
      text-decoration: underline dotted;
    }

    :where(b, strong) {
      font-weight: bolder;
    }

    :where(small) {
      font-size: 80%;
    }

    :where(audio, canvas, iframe, img, svg, video) {
      vertical-align: middle;
    }

    :where(iframe) {
      border-style: none;
    }

    :where(svg:not([fill])) {
      fill: currentColor;
    }

    :where(table) {
      border-collapse: collapse;
      text-indent: 0;
    }

    :where(iframe, img, input, video, select, textarea) {
      max-width: 100%;
      height: auto;
    }

    :where(button, input, select, textarea) {
      border-width: 1px;
      border-color: inherit;
      margin: 0;
      background-color: transparent;

      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      color: inherit;
    }

    :where(button, [type="button" i], [type="reset" i], [type="submit" i]) {
      -webkit-appearance: button;
    }

    :where(select) {
      -webkit-appearance: none;
      appearance: none;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") no-repeat right center / 1em;
      border-radius: 0;
      padding-right: 1em;
    }

    :where(select[multiple]) {
      background-image: none;
    }

    :where([type="color" i], [type="range" i]) {
      border-width: 0;
      padding: 0;
    }

    :where(fieldset) {
      border: 1px solid #a0a0a0;
    }

    :where(textarea) {
      resize: vertical;
    }

    :where([type="search" i]) {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }

    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    :where(dialog) {
      background-color: white;
      border: solid;
      color: black;
      height: -moz-fit-content;
      height: fit-content;
      left: 0;
      margin: auto;
      padding: 1em;
      position: absolute;
      right: 0;
      width: -moz-fit-content;
      width: fit-content;
    }

    :where(dialog:not([open])) {
      display: none;
    }

    :where(details > summary:first-of-type) {
      display: list-item;
    }


    :where([aria-busy="true" i]) {
      cursor: progress;
    }

    :where([aria-disabled="true" i], [disabled]) {
      cursor: not-allowed;
    }

    :where([aria-hidden="false" i][hidden]) {
      display: initial;
    }

    :where([aria-hidden="false" i][hidden]:not(:focus)) {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      ::before,
      ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
    }
    `.replace(/^\s{4}/gm, '')
  }
]
