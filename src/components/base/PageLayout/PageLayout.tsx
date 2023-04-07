import { PropsWithChildren, ReactNode } from 'react'
import Head from 'next/head'
import { OptionsMenu } from '@/src/components/options/OptionsMenu'
import { Footer } from '../Footer'
import { FooterBorder } from '../FooterBorder'
import { ParticlesContainer } from '../ParticlesContainer'
import { Meta } from '../Meta'
import * as S from './PageLayout.styles'

type Props = PropsWithChildren<{
  title: string
  header?: ReactNode
}>

export const PageLayout = ({ children, header, title }: Props) => {
  return (
    <>
      <Meta />
      <Head>
        <title>{title}</title>
      </Head>
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
