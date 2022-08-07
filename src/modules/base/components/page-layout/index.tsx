import { PropsWithChildren, ReactNode } from 'react'
import Head from 'next/head'
import { Footer } from '../footer'
import { ParticlesContainer } from '../particles-container'
import { Meta } from '../meta'
import { ThemeToggle } from '../theme-toggle'
import * as S from './styles'

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
          <ThemeToggle />
        </S.Navbar>
        {header && header}
      </S.Header>
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}
