import { AppProps } from 'next/app'
import { App } from '@/src/modules/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}
