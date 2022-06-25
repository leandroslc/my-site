import { PropsWithChildren, ReactNode } from 'react'
import Head from 'next/head'
import { ClientSideOnly } from '@/src/modules/base/components/client-side-only'
import { Meta } from '@/src/modules/base/components/meta'
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
        <S.Navbar>
          <ClientSideOnly>
            <ThemeToggle />
          </ClientSideOnly>
        </S.Navbar>
        {header && header}
      </S.Header>
      <S.Main>{children}</S.Main>
    </>
  )
}
