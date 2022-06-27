import { createGlobalStyle } from 'styled-components'

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

  html {
    height: 100%;
  }

  body {
    height: 100%;
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
`
