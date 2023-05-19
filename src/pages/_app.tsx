import type { AppProps } from 'next/app'
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/globals.css";
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
   return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}