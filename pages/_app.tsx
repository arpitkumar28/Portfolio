import '../styles/globals.css'
import type { AppProps } from 'next/app'
<<<<<<< HEAD
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
=======

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
>>>>>>> e5c46e9267ac84053968c1c8c6926107409e166d
}
