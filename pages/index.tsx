import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Trans } from 'next-i18next'
import Footer from '../components/Footer'
import { Main } from '../components/Main'
import { useMain } from '../context'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
	const {state} = useMain()
	const theme = state.theme;
	const router = useRouter();

	useEffect(() => {
		const {pathname, asPath, query} = router;
		router.push({pathname, query}, asPath, {locale: 'pt-BR'})
	}, [])
  return (
		<>
			<main>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<div className='App'>
						<Head>
							<title> Lucas Ramos | FullStack Developer</title>
							<meta name="viewport" content="width=device-width, initial-scale=1"/>
						</Head>
						<Main />
						<Trans i18nKey='Sobre mim'>
							Sobre mim
						</Trans>
						<Footer/>
					</div>
				</ThemeProvider>
			</main>
		</>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home