import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  * {
    &:focus {
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.all.outlineInset},
        0 0 0 0.2rem ${({ theme }) => theme.all.outline};
      outline: 0.1rem solid transparent;
      outline-offset: 0.1rem;
    }
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
