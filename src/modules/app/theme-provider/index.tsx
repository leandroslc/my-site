import { PropsWithChildren } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { dark, GlobalStyles, light } from '@/src/theme'
import { useStore } from '../data/state'
import { Themes } from '../data/types'

type Props = PropsWithChildren<{}>

const prefersDarkMode = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

const getTheme = (theme: Themes) => {
  if (theme === Themes.Dark || (!theme && prefersDarkMode())) {
    return dark
  }

  return light
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = useStore((state) => state.theme)

  return (
    <Provider theme={getTheme(theme)}>
      <>
        <GlobalStyles />
        {children}
      </>
    </Provider>
  )
}
