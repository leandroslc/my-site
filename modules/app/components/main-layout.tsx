import { PropsWithChildren } from 'react'
import { ThemeToggle } from './theme-toggle'

type Props = PropsWithChildren<{}>

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  )
}
