import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Main } from '../components/Main'
import { useMain } from '../context'

const Home: NextPage = () => {
	const {state} = useMain()
	const theme = state.theme;

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