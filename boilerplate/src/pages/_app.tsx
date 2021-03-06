import { AppProps } from 'next/app'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Page from 'components/Page'

import '../styles/app.sass'

const WalletConnectionProvider = dynamic(
  () => import('../providers/WalletConnectionProvider'),
  {
    ssr: false
  }
)

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ;(function () {
      // Change these if you use something different in your hook.
      const storageKey = 'darkMode'
      const classNameDark = 'dark-mode'
      const classNameLight = 'light-mode'

      function setClassOnDocumentBody(darkMode) {
        document.body.classList.add(darkMode ? classNameDark : classNameLight)
        document.body.classList.remove(
          darkMode ? classNameLight : classNameDark
        )
      }

      const preferDarkQuery = '(prefers-color-scheme: dark)'
      const mql = window.matchMedia(preferDarkQuery)
      const supportsColorSchemeQuery = mql.media === preferDarkQuery
      const localStorageTheme = null
      try {
        localStorageTheme = localStorage.getItem(storageKey)
      } catch (err) {}
      const localStorageExists = localStorageTheme !== null
      if (localStorageExists) {
        localStorageTheme = JSON.parse(localStorageTheme)
      }

      // Determine the source of truth
      if (localStorageExists) {
        // source of truth from localStorage
        setClassOnDocumentBody(localStorageTheme)
      } else if (supportsColorSchemeQuery) {
        // source of truth from system
        setClassOnDocumentBody(mql.matches)
        localStorage.setItem(storageKey, mql.matches)
      } else {
        // source of truth from document.body
        const isDarkMode = document.body.classList.contains(classNameDark)
        localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
      }
    })()
  }, [])

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
