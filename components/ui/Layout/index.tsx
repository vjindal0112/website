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
    </Head>
    <div className={styles.container}>
      {children}
    </div>
  </div>
)

export default Layout
