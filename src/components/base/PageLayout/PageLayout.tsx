import { PropsWithChildren, ReactNode } from 'react'
import { enablePageLoader } from '@/src/config/clientSideConfig'
import { OptionsMenu } from '@/src/components/options/OptionsMenu'
import { Footer } from '../Footer'
import { FooterBorder } from '../FooterBorder'
import { ParticlesContainer } from '../ParticlesContainer'
import { Loader } from '../Loader'
import * as S from './PageLayout.styles'

type Props = PropsWithChildren<{
  header?: ReactNode
}>

export const PageLayout = ({ children, header }: Props) => {
  return (
    <>
      {enablePageLoader && <Loader />}
      <S.Header>
        <ParticlesContainer />
        <S.Navbar>
          <OptionsMenu />
        </S.Navbar>
        {header && header}
      </S.Header>
      <S.Main>
        {children}
        <FooterBorder />
      </S.Main>
      <Footer />
    </>
  )
}
