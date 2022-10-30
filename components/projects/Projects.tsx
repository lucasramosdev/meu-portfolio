import React, { useEffect, useState } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { deviceType } from "mobile-device-detect";
import Card from './Card';
import { Typography } from '@mui/material';
import { Trans } from 'next-i18next';
import Modal from './Modal';

import {
	SiAngular, 
	SiIonic, 
	SiFirebase, 
	SiGooglemaps, 
	SiVite,
	SiMaterialui,
	SiNestjs,
	SiMongodb,
	SiPython,
	SiTwitter,
	SiAmazonaws
} from 'react-icons/si'

const Projects = () => {
	const [items, setItems] = useState(3);
	const [modal, setModal] = useState({
		card: null,
		open: false,
	});
	
	const handleOpen = (modal: any) => setModal(modal);
	const handleClose = () => setModal({
		card: null,
		open: false,
	});

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};

	const cards = [
		{
			image: 'quiz/screenshot_01.png',
			headline: 'Quiz App',
			description:  "quizz_app.descricao",
			modal: {
				images: [
					'quiz/screenshot_01.png',
					'quiz/screenshot_02.png',
					'quiz/screenshot_03.png',
					'quiz/screenshot_04.png',
					'quiz/screenshot_05.png',
				],
				features: [
					'quizz_app.features.0',
					'quizz_app.features.1',
					'quizz_app.features.2',
				],
				tecnologies: [
					SiVite,
					SiMaterialui,
					SiNestjs,
					SiMongodb
				]
			}
		},
		{
			image: 'seenow/screenshot_01.png',
			headline: 'See Now',
			description:  "see_now.descricao",
			modal: {
				images: [
					'seenow/screenshot_01.png',
					'seenow/screenshot_02.png',
					'seenow/screenshot_03.png',
					'seenow/screenshot_04.png',
					'seenow/screenshot_05.png',
					'seenow/screenshot_06.png',
				],
				features: [
					'see_now.features.0',
					'see_now.features.1',
				],
				tecnologies: [
					SiAngular,
					SiIonic,
					SiFirebase,
					SiGooglemaps
				]
			}
		},
		{
			image: 'twitterbot/screenshot_01.png',
			headline: 'Twitter BOT',
			description:  "twitter_bot.descricao",
			modal: {
				images: [
					'twitterbot/screenshot_01.png',
				],
				features: [
					'twitter_bot.features.0',
					'twitter_bot.features.1',
					'twitter_bot.features.2',
				],
				tecnologies: [
					SiPython,
					SiTwitter,
					SiAmazonaws,
				]
			}
		},

	]

	useEffect(() => {
		switch(deviceType){
			case 'mobile':
				setItems(1)
				break
			
			case 'tablet':
				setItems(2)
				break
		}
	}, [])
	return (
		<section id='projects'>
			<Typography variant='h3' textAlign='center' fontWeight='bolder' color='primary'>
        <Trans i18nKey='projetos'/>
      </Typography>
			<Carousel
				 	autoPlay={cards.length > items ? true : false}
					autoPlaySpeed={2000}
          responsive={responsive}
          infinite={cards.length > items ? true : false}
          containerClass="first-carousel-container container"
          deviceType={deviceType === undefined ? 'desktop' : deviceType}
        >
					{cards.map((card, idx) => {
						return <Card props={card} handleOpen={handleOpen} key={idx}/>
					})}
        </Carousel>
				<Modal props={{modal, handleClose}}/>
		</section>
	)
}

export default Projects