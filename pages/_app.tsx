import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
	.use(LanguageDetector)
  .init({
    resources: {
      'pt-Br': {
        translation: {
          'Sobre mim': 'Sobre mim',
					'Olá! :D': 'Olá! :D',
					'🖖 Eu sou Lucas Ramos. Um jovem baiano que deseja, através da tecnologia 💻, melhorar a vida de todos ao seu redor. Estou sempre ávido para aprender novas coisas 💡, porém descontente quando tenho que sempre repetir as mesmas atividades dia após dia 📉. Jogar 🎮 e acompanhar as notícias 📰 sobre tecnologia são certamente os meus dois melhores hobbies. 🤩 ' : '🖖 Eu sou Lucas Ramos. Um jovem baiano que deseja, através da tecnologia 💻, melhorar a vida de todos ao seu redor. Estou sempre ávido para aprender novas coisas 💡, porém descontente quando tenho que sempre repetir as mesmas atividades dia após dia 📉. Jogar 🎮 e acompanhar as notícias 📰 sobre tecnologia são certamente os meus dois melhores hobbies. 🤩',
					'Projetos': 'Projetos',
					'Tecnologias': 'Tecnologias',
					'Uma aplicação para dispositivos móveis que visa distribuir pdf\'s de livro para pessoas que não possuem acesso de uma forma simples e rápida, bastando apenas um login.' : 'Uma aplicação para dispositivos móveis que visa distribuir pdf\'s de livro para pessoas que não possuem acesso de uma forma simples e rápida, bastando apenas um login.',
					'Coleção de livros favoritos': 'Coleção de livros favoritos',
					'Armazenamento da última página vista': 'Armazenamento da última página vista',
					'Mais uma aplicação para dipositivos móveis, desenvolvido para uma startup de marketing de Salvador-BA, com o objetivo de ser um dashboard do cliente agenciados pela startup. Com ele você pode ver seus anúncios e pontos de anúncios disponíveis, além de um chat com o time de suporte.': 'Mais uma aplicação para dipositivos móveis, desenvolvido para uma startup de marketing de Salvador-BA, com o objetivo de ser umdashboard do cliente agenciado pela startup. Com ele você pode ver seus anúncios e pontos de anúncios disponíveis, além de um chat com o time de suporte.',
					'Mapa com pontos de anúncios disponíveis': 'Mapa com pontos de anúncios disponíveis',
					'Chat com time de suporte': 'Chat com time de suporte',
					'Terceira e última aplicação criada em Ionic, visa prever quanto custaria uma corrida de táxi em Salvador-BA.': 'Terceira e última aplicação criada em Ionic, visa prever quanto custaria uma corrida de táxi em Salvador-BA.',
					'Geolocalização do usuário': 'Geolocalização do usuário',
					'Api de rotas Google': 'Api de rotas Google',
					'Bot utilizando python, api do twitter e api da riot. O bot sempre retwittava um novo tweet de um usuário específico com uma imagem e um comentário. Tudo isso rodando 24/7 num servidor aws.': 'Bot utilizando python, api do twitter e api da riot. O bot sempre retwittava um novo tweet de um usuário específico com uma imagem e um comentário. Tudo isso rodando 24/7 num servidor aws.',
					'Informações de usuário de League of Legends': 'Informações de usuário de League of Legends',
					'Retwittar novos tweets de um usuário específico': 'Retwittar novos tweets de um usuário específico',
					'Habilidades': 'Habilidades',
					'Banco de Dados': 'Banco de Dados',
					'Outras tecnologias': 'Outras tecnologias',
					'Experiência': 'Experiência',
					'FullStack Júnior Developer': 'FullStack Júnior Developer'
        }
      },
			en: {
				translation: {
          'Sobre mim': 'About me',
					'Olá! :D': 'Hi! :D',
					'🖖 Eu sou Lucas Ramos. Um jovem baiano que deseja, através da tecnologia 💻, melhorar a vida de todos ao seu redor. Estou sempre ávido para aprender novas coisas 💡, porém descontente quando tenho que sempre repetir as mesmas atividades dia após dia 📉. Jogar 🎮 e acompanhar as notícias 📰 sobre tecnologia são certamente os meus dois melhores hobbies. 🤩 ' : '🖖 I\'m Lucas Ramos. A young man from Bahia who wants, through technology 💻, to improve the lives of everyone around him. I\'m always eager to learn new things 💡, but unhappy when I have to repeat the same activities day after day 📉. Playing 🎮 and following the news 📰 about technology are certainly my two best hobbies. 🤩',
					'Projetos': 'Projects',
					'Tecnologias': 'Technologies',
					'Uma aplicação para dispositivos móveis que visa distribuir pdf\'s de livro para pessoas que não possuem acesso de uma forma simples e rápida, bastando apenas um login.' : 'An application for mobile devices that aims to distribute book pdf\'s to people who don\'t have access in a simple wa and fast, with just one login.',
					'Coleção de livros favoritos': 'Favorite book collection',
					'Armazenamento da última página vista': 'Last viewed page storage',
					'Mais uma aplicação para dipositivos móveis, desenvolvido para uma startup de marketing de Salvador-BA, com o objetivo de ser um dashboard do cliente agenciado pela startup. Com ele você pode ver seus anúncios e pontos de anúncios disponíveis, além de um chat com o time de suporte.': 'Another application for mobile devices, developed for a marketing startup from Salvador-BA, with the objective of being a customer dashboard managed by the startup. With it you can see your ads and available ad spots, as well as a chat with the support team.',
					'Mapa com pontos de anúncios disponíveis': 'Map with available ad spots',
					'Chat com time de suporte': 'Chat with support team',
					'Terceira e última aplicação criada em Ionic, visa prever quanto custaria uma corrida de táxi em Salvador-BA.': 'Third and last application created in Ionic, it aims to predict how much a taxi ride in Salvador-BA would cost.',
					'Geolocalização do usuário': 'User geolocation',
					'Api de rotas Google': 'Google routes api',
					'Bot utilizando python, api do twitter e api da riot. O bot sempre retwittava um novo tweet de um usuário específico com uma imagem e um comentário. Tudo isso rodando 24/7 num servidor aws.': 'Bot using python, twitter api and riot api. The bot would always retweet a new tweet from a specific user with a image and a comment. All this running 24/7 on an aws server.',
					'Informações de usuário de League of Legends': 'League of Legends user information',
					'Retwittar novos tweets de um usuário específico': 'Retweet new tweets from a specific user',
					'Habilidades': 'Skills',
					'Banco de Dados': 'Database',
					'Outras tecnologias': 'Other Technologies',
					'Experiência': 'Experience',
					'FullStack Júnior Developer': 'FullStack Junior Developer',
					'Presente': 'Present'
        }
			}
    },
    fallbackLng: 'pt-Br',
		detection: {
			order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie']
		},

    interpolation: {
      escapeValue: false
    }
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default MyApp
