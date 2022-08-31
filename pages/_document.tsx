import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic"
                        rel="stylesheet"
                    />
                </Head>
                <body style={{ "fontFamily": "Roboto", "fontWeight": "300" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument