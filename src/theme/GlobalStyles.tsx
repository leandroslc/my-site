import { createGlobalStyle } from 'styled-components'
import { CSS_DARK_THEME_CLASS } from '@/src/config/constants'
import { parseSchemeToCSSProperties } from '@/src/helpers/ParseSchemaToCssPropertiesHelper'
import { dark, light } from './ColorScheme'
import { vars } from '.'

export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  * {
    &:focus {
      box-shadow: 0 0 0 1px ${vars.theme((theme) => theme.all.outlineInset)},
        0 0 0 3px ${vars.theme((theme) => theme.all.outline)};
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &::selection {
      color: ${vars.theme((theme) => theme.all.selection.text)};
      background-color: ${vars.theme((theme) => theme.all.selection.back)};
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  :root {
    ${parseSchemeToCSSProperties(light)}

    &.${CSS_DARK_THEME_CLASS} {
      ${parseSchemeToCSSProperties(dark)}
    }
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    color: ${vars.theme((theme) => theme.body.text)};
    font-family: 'Work Sans', Tahoma, Helvetica, Arial, Roboto, sans-serif;
    background: ${vars.theme((theme) => theme.body.back)};
    transition: all 0.2s linear;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    user-select: none;
    appearance: button;
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`
