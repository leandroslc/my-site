import Head from 'next/head'
import { SITE_NAME } from '@/src/config/constants'

type Props = {
  title: string
  description: string
  ogImageUrl: string
  ogImageType?: string
}

export const Meta = ({
  title,
  description,
  ogImageUrl,
  ogImageType = 'image/webp',
}: Props) => {
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
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:url" content={ogImageUrl} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <title>{title}</title>
    </Head>
  )
}
