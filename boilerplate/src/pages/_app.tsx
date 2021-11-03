import { AppProps } from 'next/app'
import Head from 'next/head'
import Page from 'components/Page'
import dynamic from 'next/dynamic'
import '../styles/app.sass'
import { ThemeProvider, createTheme } from '@material-ui/core'

const WalletConnectionProvider = dynamic(
  () => import('../providers/WalletConnectionProvider'),
  {
    ssr: false
  }
)

function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </WalletConnectionProvider>
  )
}

export default App
