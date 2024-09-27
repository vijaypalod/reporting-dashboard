/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* font-family */}

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
                        rel="stylesheet"
                    />
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
