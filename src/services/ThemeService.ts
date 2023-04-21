import { createStorage } from './BrowserStorageService'

const STORAGE_PREFIX = 'theme'

export enum Themes {
  System = '',
  Dark = 'dark',
  Light = 'light',
}

const storage = createStorage(STORAGE_PREFIX)

const prefersDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const injectTheme = (theme: Themes) => {
  if (typeof window === 'undefined') {
    return
  }

  if (!Object.values(Themes).includes(theme)) {
    return
  }

  const root = document.querySelector('html')

  root?.classList.remove(Themes.Dark)
  root?.classList.remove(Themes.Light)

  if (theme !== Themes.System) {
    root?.classList.add(theme)
  }
}

export const getCurrentTheme = () => {
  if (typeof window === 'undefined') {
    return Themes.System
  }

  const theme = storage.get()

  if (theme === Themes.Dark || (!theme && prefersDarkMode())) {
    return Themes.Dark
  }

  return Themes.Light
}

export const setCurrentTheme = (theme: Themes) => {
  if (typeof window === 'undefined') {
    return
  }

  storage.set(theme)
  injectTheme(theme)
}
