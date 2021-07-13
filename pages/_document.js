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
            <link src="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <link src="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            <link src="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css" rel="stylesheet"/>
            <meta property="og:title" content="My page title" key="title" />
            <link rel="icon" href="/gp-icon.png" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-RP52EB93ZV"/>
            <Script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RP52EB93ZV');
                `}
            </Script>
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