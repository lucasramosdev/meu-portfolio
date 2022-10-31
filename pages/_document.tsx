import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config'
import nextI18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
}

class MyDocument extends Document<Props> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? process.env.DEFAULT_LANGUAGE;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet='utf-8' />
					<link rel="shortcut icon" href="/static/favicon.ico" />
				</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument