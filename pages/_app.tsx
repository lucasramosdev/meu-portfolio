import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context'
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default appWithTranslation(MyApp, nextI18NextConfig);
