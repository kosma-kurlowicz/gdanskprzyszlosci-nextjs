import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} key={router.asPath} />
}

export default MyApp
