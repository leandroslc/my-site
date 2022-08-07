import { Themes } from './types'
import { themeStorage } from './theme-storage'

const prefersDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const getCurrentTheme = () => {
  if (typeof window === 'undefined') {
    return Themes.System
  }

  const theme = themeStorage.get()

  if (theme === Themes.Dark || (!theme && prefersDarkMode())) {
    return Themes.Dark
  }

  return Themes.Light
}
