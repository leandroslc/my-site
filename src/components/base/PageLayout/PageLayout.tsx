import { PropsWithChildren, ReactNode } from 'react'
import Head from 'next/head'
import { enablePageLoader } from '@/src/config/clientSideConfig'
import { OptionsMenu } from '@/src/components/options/OptionsMenu'
import { Footer } from '../Footer'
import { FooterBorder } from '../FooterBorder'
import { ParticlesContainer } from '../ParticlesContainer'
import { Meta } from '../Meta'
import { Loader } from '../Loader'
import * as S from './PageLayout.styles'

type Props = PropsWithChildren<{
  title: string
  description: string
  ogImageUrl: string
  header?: ReactNode
}>

export const PageLayout = ({
  children,
  header,
  title,
  description,
  ogImageUrl,
}: Props) => {
  return (
    <>
      {enablePageLoader && <Loader />}
      <Meta />
      <Head>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
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
