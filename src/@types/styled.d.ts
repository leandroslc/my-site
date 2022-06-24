import { ColorScheme } from '@/src/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ColorScheme {}
}
