import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import I18NextHttpBackend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    fallbackLng: 'pt-Br',
		detection: {
			order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie']
		},
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default MyApp
