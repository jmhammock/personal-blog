import type { AppProps } from 'next/app'
import '../styles/globals.sass'
import React from 'react'
import MyNavbar from '../components/MyNavbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <MyNavbar />
    <div className="section">
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  </>
}

export default MyApp
