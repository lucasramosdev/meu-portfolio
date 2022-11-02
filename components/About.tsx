import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Trans } from 'next-i18next'
import { useMain } from '../context'
import Image from 'next/image'
import { IconContext } from 'react-icons'
import {DiReact, DiNodejsSmall, DiMongodb} from 'react-icons/di'

const About = () => {
  const {state} = useMain()
  const theme = state.theme;
  return (
    <section id='about' style={{backgroundColor: theme.palette.background.paper, color: theme.palette.primary.main}}>
      <Typography variant='h3' textAlign='center' fontWeight='bolder'>
        <Trans i18nKey='sobre_mim'/>
      </Typography>
			<Grid container spacing={0} alignItems='center' justifyItems='center' margin='2rem auto' >
				<Grid item xs={12} lg={4}>
					<span className='user-photo' style={{backgroundColor: theme.palette.background.default}}>
						<div className='photo'>
							<Image
								alt='Lucas Ramos'
								src='/static/lucasramos.jpg'
								width='100%'
								height='100%'
								layout='responsive'
							/>
						</div>
						<div className='user-tecnologies'>
							<IconContext.Provider value={{color: theme.palette.primary.main, size: '3rem'}}>
								<DiReact/>
								<DiNodejsSmall/>
								<DiMongodb/>
							</IconContext.Provider>
						</div>
					</span>
				</Grid>
				<Grid item  xs={12} lg={8}>
					<div className='card' style={{backgroundColor: theme.palette.background.default}}>
						<div className='card-header' style={{backgroundColor: theme.palette.secondary.main}}>
							<span className='dot' style={{backgroundColor: 'red'}} />
							<span className='dot' style={{backgroundColor: 'yellow'}} />
							<span className='dot' style={{backgroundColor: 'blue'}} />
						</div>
						<div className='card-body'>
              <Typography variant='h4'>
                <Trans i18nKey='ola'/>
              </Typography>
              <Typography variant='body1'>
                <Trans i18nKey='lucas_ramos'/>
              </Typography>
						</div>
					</div>
				</Grid>
			</Grid>
    </section>
  )
}

export default About