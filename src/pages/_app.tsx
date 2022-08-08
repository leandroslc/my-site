import { AppProps } from 'next/app'
import { GlobalStyles } from '@/src/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
