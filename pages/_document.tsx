import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Probably at his desk — Varun Jindal"
          />
          <link rel="canonical" href="https://www.varunjindal.com" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/logo.ico" />

          {/* Google Fonts - Wabi-sabi typography */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..600;1,8..60,300..600&family=Caveat:wght@400..700&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Probably at his desk — Varun Jindal"
          />
          <meta property="og:image" content="/profile_pic.jpg" />
          <meta property="og:url" content="https://www.varunjindal.com" />
          <meta property="og:site_name" content="Varun Jindal" />

          {/* Twitter Tags */}
          <meta
            name="twitter:description"
            content="Probably at his desk — Varun Jindal"
          />
          <meta name="twitter:image" content="/profile_pic.jpg" />
          <meta name="twitter:site" content="@varun_jindal8" />
          <meta name="twitter:creator" content="@varun_jindal8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
