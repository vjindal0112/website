import Head from 'next/head'
import { ReactNode } from 'react'
import styles from "./Layout.module.css"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Varun Jindal' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Product builder, engineer, dancer, foodie -- Varun Jindal" />
      <link rel="canonical" href="https://www.varunjindal.com" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Product builder, engineer, dancer, foodie -- Varun Jindal" />
      <meta property="og:image" content="/profile_pic.jpg" />
      <meta property="og:url" content="https://www.varunjindal.com" />
      <meta property="og:site_name" content="Varun Jindal" />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Product builder, engineer, dancer, foodie -- Varun Jindal" />
      <meta name="twitter:image" content="/profile_pic.jpg" />
      <meta name="twitter:site" content="@varun_jindal8" />
      <meta name="twitter:creator" content="@varun_jindal8" />
    </Head>
    <div className={styles.container}>
      {children}
    </div>
  </div>
)

export default Layout
