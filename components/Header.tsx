import { styled, Switch, Typography} from '@mui/material';
import React, { useEffect } from 'react'
import { useMain } from '../context'
import {FaLaptopCode} from 'react-icons/fa'
import Flag from 'react-world-flags';
import { ThemeTypes } from '../context/reducers/theme.reducer';
import { LanguageTypes } from '../context/reducers/language.reducer';
import { useRouter } from 'next/router';

const Header = () => {
	const {state, dispatch} = useMain();

	const theme = state.theme;

	const language = state.language;

	const router = useRouter();

	const changeTheme = async() => {
		await dispatch({
			type: ThemeTypes.Change,
			payload: theme
		})

		const body = document.body;

		const Switch = body.getElementsByClassName('MuiButtonBase-root')[0]

		if(theme.palette.mode === "light"){
			Switch.className = `${Switch.className} Mui-checked toogle-darkmode`
		}
		else {
			Switch.className = `${Switch.className} toogle-lightmode`
		}
	}

	const changeLanguage = async(newLanguage: string) => {
		await dispatch({
			type: LanguageTypes.Change, payload: newLanguage
		})

		const {pathname, asPath, query} = router;
		router.push({pathname, query}, asPath, {locale: newLanguage, scroll: false});
	}



	const MaterialUISwitch = styled(Switch, {})({
		width: "10rem",
		height: "4rem",
		padding: 7,
		'& .MuiSwitch-switchBase': {
			margin: 1,
			padding: 0,
			transform: 'translateX(20%)',
			'&.Mui-checked': {
				color: '#fff',
				transform: 'translateX(210%)',
				'& .MuiSwitch-thumb:before': {
					backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
						`${theme.palette.primary.contrastText}`,
					)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
				},
				'& + .MuiSwitch-track': {
					opacity: 1,
					backgroundColor: theme.palette.background.paper,
				},
			},
		},
		'& .MuiSwitch-thumb': {
			backgroundColor: theme.palette.primary.main,
			width: "3rem",
			height: "3rem",
			'&:before': {
				content: "''",
				position: 'absolute',
				width: '100%',
				height: '100%',
				left: 0,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        `${theme.palette.primary.contrastText}`,
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
			},
		},
		'& .MuiSwitch-track': {
			height: '2.3rem',
			opacity: 1,
			borderRadius: 20 / 2,
			backgroundColor: theme.palette.background.paper,
		},
	});
	return (
		<header>
			<FaLaptopCode size={"15rem"} color={theme.palette.background.paper} className='icon'/>
			<Typography variant='h1' className='name'>
				Lucas Ramos
			</Typography>
			<MaterialUISwitch onChange={changeTheme} className='toogle-theme'/>
			<Typography variant='h2' className='title'>
				FullStack Developer
			</Typography>
			<div className="flags">
				<Flag code="br" className={`flag ${language === 'pt-BR' ? 'flag-selected' : ''}`} onClick={() => changeLanguage('pt-BR')} />
				<Flag code="usa" className={`flag ${language === 'en' ? 'flag-selected' : ''}`} onClick={() => changeLanguage('en')} />
			</div>
		</header>
	)
}

export default Header