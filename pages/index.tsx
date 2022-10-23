import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className='App'>
			<Head>
				<title> Lucas Ramos | FullStack Developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Footer/>
    </div>
  )
}

export default Home
