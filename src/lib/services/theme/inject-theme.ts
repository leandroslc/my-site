import { Themes } from './types'

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
