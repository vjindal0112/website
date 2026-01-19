import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
};

const SITE_URL = "https://varunjindal.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const Layout = ({
  children,
  title = "Varun Jindal",
  description = "Probably at his desk — Varun Jindal",
  image,
  url,
  type = "website",
  publishedTime,
  author = "Varun Jindal",
}: Props) => {
  const fullImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:site_name" content="Varun Jindal" />
        {type === "article" && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {type === "article" && (
          <meta property="article:author" content={author} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Head>

      <header className={styles.header}>
        <Link href="/" aria-label="Home" className={styles.logo}>
          <Image src="/logo.png" alt="VJ" width={44} height={44} />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/writing" className={styles.navLink}>
            Writing
          </Link>
        </nav>
      </header>

      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
