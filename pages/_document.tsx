import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Product builder, engineer, dancer, foodie — Varun Jindal" />
          <link rel="canonical" href="https://www.varunjindal.com" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/logo.ico" />

          {/* Open Graph tags */}
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Product builder, engineer, dancer, foodie — Varun Jindal" />
          <meta property="og:image" content="/profile_pic.jpg" />
          <meta property="og:url" content="https://www.varunjindal.com" />
          <meta property="og:site_name" content="Varun Jindal" />

          {/* Twitter Tags */}
          <meta name="twitter:description" content="Product builder, engineer, dancer, foodie — Varun Jindal" />
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
