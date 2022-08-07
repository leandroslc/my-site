import { Themes } from './types'
import { injectTheme } from './inject-theme'
import { themeStorage } from './theme-storage'

export const setCurrentTheme = (theme: Themes) => {
  if (typeof window === 'undefined') {
    return
  }

  themeStorage.set(theme)
  injectTheme(theme)
}
