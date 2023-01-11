import './../global.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client'
import client from '../apolloClient'
import ScroolToTop from '../components/ScrollToTop'

export default function MyApp({ Component, pageProps }: AppProps){
  return (
    <ApolloProvider client={client}>
      <div className="min-h-[100vh]">
        <Component {...pageProps} />
      </div>
      <ScroolToTop />
      <Link href={'https://github.com/EusebioSimango'}>
        <a className="block">
            <p className="text-center text-link dark:text-darkLink py-4">@EusebioSimango</p>
        </a>
      </Link>
    </ApolloProvider> 
  )
}
