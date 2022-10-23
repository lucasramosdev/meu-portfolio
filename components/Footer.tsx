import { Grid } from '@mui/material'
import React from 'react'
import { IconContext } from 'react-icons'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
	return (
		<Grid container className='footer'>
			<IconContext.Provider value={{color: "white", size: "3rem"}}>
			<Grid item>
						<a href='https://github.com/lucasramosdev' target='_blank' className='col'>
							<AiFillGithub/>
						</a>
					<a href='https://www.linkedin.com/in/lucasramosdev/' target='_blank' className='col'>
						<AiFillLinkedin />
					</a>
					<a href='https://www.youtube.com/channel/UCTmUkQWsL83YX8A-OoVMObA' target='_blank' className='col'>
						<AiFillYoutube/>
					</a>
			</Grid>
			</IconContext.Provider>
			<Grid item>
				<p className='col'>
					Copyright © Lucas Ramos
				</p>
			</Grid>
		</Grid>

	)
}

export default Footer