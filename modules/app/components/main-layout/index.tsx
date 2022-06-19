import { PropsWithChildren } from 'react'
import { ClientSideOnly } from '~/modules/base/components/client-side-only'
import { ThemeToggle } from '../theme-toggle'
import * as S from './styles'

type Props = PropsWithChildren<{}>

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <S.Navbar>
        <ClientSideOnly>
          <ThemeToggle />
        </ClientSideOnly>
      </S.Navbar>
      {children}
    </>
  )
}
