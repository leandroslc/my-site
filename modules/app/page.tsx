import { PropsWithChildren } from 'react'
import { ThemeProvider } from './components/theme-provider'

type Props = PropsWithChildren<{}>

export const App = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
