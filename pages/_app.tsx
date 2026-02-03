import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/next'
import "../styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics scriptSrc="/_a/s.js" endpoint="/_a/i" />
        </>
    )
}