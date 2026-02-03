import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import "../styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}