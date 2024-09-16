import { PropsWithChildren, ReactNode } from 'react'
import { enablePageLoader } from '@/src/config/clientSideConfig'
import { OptionsMenu } from '@/src/components/options/OptionsMenu'
import { Footer } from '../Footer'
import { FooterBorder } from '../FooterBorder'
import { ParticlesContainer } from '../ParticlesContainer'
import { Loader } from '../Loader'
import S from './PageLayout.module.css'

type Props = PropsWithChildren<{
  header?: ReactNode
}>

export const PageLayout = ({ children, header }: Props) => {
  return (
    <>
      {enablePageLoader && <Loader />}
      <header className={S.header}>
        <ParticlesContainer />
        <nav className={S.navbar}>
          <OptionsMenu />
        </nav>
        {header && header}
      </header>
      <main className={S.main}>
        {children}
        <FooterBorder />
      </main>
      <Footer />
    </>
  )
}
