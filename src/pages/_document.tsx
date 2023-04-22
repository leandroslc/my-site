import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GlobalStyles } from '@/src/theme/GlobalStyles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
        </Head>
        <body>
          <GlobalStyles />
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
