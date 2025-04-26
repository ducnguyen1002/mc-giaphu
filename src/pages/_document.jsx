import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
