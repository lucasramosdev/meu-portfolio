import { Modal, Box, Typography, Grid } from '@mui/material';
import { Trans } from 'next-i18next';
import Image from 'next/image';
import React from 'react'
import { IconContext } from 'react-icons';
import Carousel from 'react-multi-carousel';
import { useMain } from '../../context';

const MediaModal = ({props}: any) => {
	const {state} = useMain()
  const theme = state.theme.palette;
	
	const {handleClose} = props;
	const {open, card} = props.modal;

	const style = {
		position: 'absolute',
		top: {
			xs: '0%',
			lg: '5%'
		},
		left: '50%',
		transform: 'translate(-50%, 0%)',
		width: '80%',
		bgcolor: theme.background.default,
		border: '2px solid #000',
		boxShadow: 24,
		p: '1rem',
	};

	const responsive = {
		default: {
			breakpoint: { max: 3000, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	}

	const renderIcon = (icon: any, index: string) => {
    const Icon = icon;
    return (
      <Grid item style={{margin: '1rem'}} xs={4} lg={2}> 
        <Icon key={index} />
      </Grid>
    );
  };
	return (
		<Modal
		open={open}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		sx={{overflowY: 'scroll'}}
		>
			<Box sx={style}>
			<Carousel
				 	autoPlay={card?.images.length > 1 ? true : false}
					autoPlaySpeed={2000}
          infinite={card?.images.length > 1 ? true : false}
          containerClass="first-carousel-container container"
					responsive={responsive}
					deviceType='default'
					showDots={card?.images.length > 1 ? true : false}
        >
					{card?.images.map((image: string, idx: string) => (
						<div style={{display: 'flex', justifyContent: 'center'}} key={idx}>
							<Image
								src={`/static/screenshots/${image}`}
								width='500px'
								height='500px'
							/>
						</div>
					))}
				</Carousel>
				<Grid container margin='2rem auto 0 auto'>
					<Grid item xs={12} lg={6} margin='1rem auto'>
						<Typography variant='h4' textAlign='center' fontWeight='bolder'>
							Features
						</Typography>
						<ul style={{padding: '0 1rem'}}>
						{card?.features.map((feature: string, idx: string) => (
								<li style={{margin: '0.5rem auto', fontSize: '1.2rem'}}>
									<Trans i18nKey={feature} key={idx} />
								</li>
							))}
						</ul>
					</Grid>
					<Grid display='flex' justifyContent='center' sx={{ display: { xs: 'none', lg: 'block'}}}>
						<hr style={{height: '100%', width: '10px', backgroundColor: theme.background.paper}}/>
					</Grid>
					<Grid item xs={12} lg={5} margin='0.5rem auto 0 auto'>
						<Typography variant='h4' textAlign='center' fontWeight='bolder'>
							<Trans i18nKey='tecnologias'/>
							<IconContext.Provider value={{color: 'primary', size: "3rem"}}>
								<Grid container display='flex' justifyContent='center'>
									{card?.tecnologies.map((icon: any, idx: string) => renderIcon(icon, idx))}
								</Grid>
							</IconContext.Provider>
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	)
}

export default MediaModal