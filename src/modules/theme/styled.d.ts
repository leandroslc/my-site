import { ColorScheme } from './color-scheme'

declare module 'styled-components' {
  export interface DefaultTheme extends ColorScheme {}
}
