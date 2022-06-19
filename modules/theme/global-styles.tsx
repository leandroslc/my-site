import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.body.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
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
