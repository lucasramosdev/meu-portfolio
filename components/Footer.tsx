import { Grid } from '@mui/material'
import React from 'react'
import { IconContext } from 'react-icons'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import { useMain } from '../context'

const Footer = () => {
	const {state, dispatch} = useMain();

	const theme = state.theme;
	return (
		<footer style={{backgroundColor: theme.palette.background.default}}>
			<Grid container className="grid-footer">
				<IconContext.Provider value={{color: theme.palette.primary.main, size: "3rem"}}>
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
					<p className='col' style={{color: theme.palette.primary.main}}>
						Copyright © Lucas Ramos
					</p>
				</Grid>
			</Grid>
		</footer>

	)
}

export default Footer