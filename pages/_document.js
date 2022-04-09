import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { web_title } from '../src/constants'
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render() {
        return (
            <Html style={{ height: '100%', width: '100%' }}>
                <Head>
                    <style>{`
            #__next { height: 100%;width:100%; }
          `}
                    </style>
                    {this.props.styleTags}
                </Head>
                <body style={{ height: '100%', margin: 0, width: '100%' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}