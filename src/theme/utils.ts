import { type DefaultTheme } from 'styled-components'
import { dark } from './color-scheme'

export const isDarkTheme = (theme: DefaultTheme) => {
  return theme.name === dark.name
}
