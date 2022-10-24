import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import { Main } from '../components/Main'
import { useMain } from '../context'

const Home: NextPage = () => {
	const {state, dispatch} = useMain()

	const { t } = useTranslation();

  const theme = state.theme;
  return (
		<ThemeProvider theme={theme}>
				<CssBaseline/>
				<div className='App'>
					<Head>
						<title> Lucas Ramos | FullStack Developer</title>
						<meta name="viewport" content="width=device-width, initial-scale=1"/>
					</Head>
					<Main />
					<p>{t('Sobre mim').valueOf()}</p>
					<Footer/>
				</div>
		</ThemeProvider>
  )
}

export default Home
