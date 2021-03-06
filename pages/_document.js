import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
            <link src="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" key="fira"/>
            <link src="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" key="crimson"/>
            <meta property="og:title" content="My page title" key="title" />
            <link rel="icon" href="/gp-icon.png" key="icongp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument