import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '@/src/config/constants'
import { useTranslation } from '@/src/hooks/useTranslation'

export const Meta = () => {
  const { translate } = useTranslation()

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/manifest/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/manifest/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/manifest/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/manifest/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/manifest/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content="/manifest/browserconfig.xml" />
      <meta name="theme-color" content="#336c8b" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}
