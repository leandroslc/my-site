import { createGlobalStyle } from 'styled-components'
import { cssDarkThemeClass } from '@/src/lib/config'
import { dark, light } from './color-scheme'
import { parseSchemeToCSSProperties } from './helpers'

export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  * {
    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.all.outlineInset},
        0 0 0 3px ${({ theme }) => theme.all.outline};
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  :root {
    ${parseSchemeToCSSProperties(light)}

    &.${cssDarkThemeClass} {
      ${parseSchemeToCSSProperties(dark)}
    }
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    color: ${({ theme }) => theme.body.text};
    font-family: 'Work Sans', Tahoma, Helvetica, Arial, Roboto, sans-serif;
    background: ${({ theme }) => theme.body.back};
    transition: all 0.2s linear;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    user-select: none;
    -webkit-appearance: button;
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
`
