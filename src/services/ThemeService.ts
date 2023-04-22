import { createStorage } from './BrowserStorageService'

const STORAGE_PREFIX = 'theme'

export enum Themes {
  None = '',
  Dark = 'dark',
  Light = 'light',
}

const storage = createStorage(STORAGE_PREFIX)

export const injectTheme = (theme: Themes) => {
  if (typeof window === 'undefined') {
    return
  }

  if (!Object.values(Themes).includes(theme)) {
    return
  }

  const root = document.querySelector('html')

  if (root?.classList.contains(Themes.Dark)) {
    root?.classList.remove(Themes.Dark)
  }

  if (root?.classList.contains(Themes.Light)) {
    root?.classList.remove(Themes.Light)
  }

  if (theme !== Themes.None) {
    root?.classList.add(theme)
  }
}

export const getCurrentTheme = () => {
  if (typeof window === 'undefined') {
    return Themes.None
  }

  const storedTheme = storage.get() || Themes.None

  const theme = Object.values(Themes).includes(storedTheme as Themes)
    ? storedTheme
    : Themes.None

  if (theme === Themes.Dark) {
    return Themes.Dark
  }

  if (theme === Themes.Light) {
    return Themes.Light
  }

  return Themes.Dark
}

export const setCurrentTheme = (theme: Themes) => {
  if (typeof window === 'undefined') {
    return
  }

  storage.set(theme)
  injectTheme(theme)
}
