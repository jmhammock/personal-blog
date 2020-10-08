import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout> 
}

export default MyApp
