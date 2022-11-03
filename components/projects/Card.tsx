import { CardActionArea, CardMedia, CardContent, Typography, Card } from '@mui/material';
import { Trans } from 'next-i18next';
import React from 'react'

const MediaCard = ({props, handleOpen}: any) => {
	const {image, headline, description} = props;
	const modal = {
		card : {
			...props.modal,
			headline,
		},
		open: true
	}
	return (
		<Card style={{margin: '0 20px'}}>
			<CardActionArea  onClick={() => handleOpen(modal)}>
				<CardMedia image={`/static/screenshots/${image}`} component='img' height='250' style={{objectFit: 'cover', width: '100%'}} />
				<CardContent  className='card-content' style={{minHeight: '15rem'}}>
					<Typography gutterBottom variant='h5' component='h2' textAlign='center'>
            {headline}
          </Typography>
					<Typography component='p'>
						<Trans i18nKey={description} />
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
);
}

export default MediaCard