import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tailwindcss@3.1.8/src/css/preflight.css"
          />
        </body>
      </Html>
    )
  }
}
