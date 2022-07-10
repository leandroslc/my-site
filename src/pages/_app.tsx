import { AppProps } from 'next/app'
import { GlobalStyles } from '@/src/theme'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
