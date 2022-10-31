import { Grid, Typography } from '@mui/material'
import { Trans } from 'next-i18next'
import React from 'react'
import { IconContext } from 'react-icons'
import {
	SiTypescript,
	SiReact,
	SiAngular,
	SiVite,
	SiNextdotjs,
	SiBootstrap,
	SiMaterialui,
	SiPython,
	SiNodedotjs,
	SiNestjs,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiAmazonaws,
	SiDocker,
	SiVercel,
	SiFirebase,
	SiGit,
	SiGithub,
} from 'react-icons/si'
import { useMain } from '../context'

const Skills = () => {
	const {state} = useMain()
  const theme = state.theme;

  return (
    <section id='skills' style={{backgroundColor: theme.palette.background.paper, color: theme.palette.primary.main}}>
		 	<Typography variant='h3' textAlign='center' fontWeight='bolder'>
        <Trans i18nKey='habilidades'/>
    	</Typography>
			<Grid container style={{margin: '1rem auto'}}>
			<IconContext.Provider value={{color: theme.palette.primary.main, size: "3rem"}}>
				<Grid item xs={12} lg={6} display='flex' justifyContent='center' margin='1.5rem auto'>
					<div style={{width: '80%', backgroundColor: theme.palette.background.default, padding: '0.5rem', borderRadius: '15px'}}>
						<Typography variant='h4' textAlign='center' fontWeight='bolder' style={{margin: '0.5rem auto'}}>
							<Trans i18nKey='Front-End'/>
						</Typography>
						<div className='container'>
							<SiTypescript />
							<SiReact />
							<SiAngular />
							<SiVite />
							<SiNextdotjs />
							<SiBootstrap />
							<SiMaterialui />
						</div>
					</div>
				</Grid>
				<Grid item xs={12} lg={6} display='flex' justifyContent='center' margin='1.5rem auto'>
					<div style={{width: '80%', backgroundColor: theme.palette.background.default, padding: '0.5rem', borderRadius: '15px'}}>
						<Typography variant='h4' textAlign='center' fontWeight='bolder' style={{margin: '0.5rem auto'}}>
							<Trans i18nKey='Back-End'/>
						</Typography>
						<div className='container'>
							<SiPython />
							<SiNodedotjs />
							<SiNestjs />
						</div>
					</div>
				</Grid>
				<Grid item xs={12} lg={6} display='flex' justifyContent='center' margin='1.5rem auto'>
					<div style={{width: '80%', backgroundColor: theme.palette.background.default, padding: '0.5rem', borderRadius: '15px'}}>
						<Typography variant='h4' textAlign='center' fontWeight='bolder' style={{margin: '0.5rem auto'}}>
							<Trans i18nKey='banco_de_dados'/>
						</Typography>
						<div className='container'>
							<SiMongodb />
							<SiMysql />
							<SiPostgresql />
						</div>
					</div>
				</Grid>
				<Grid item xs={12} lg={6} display='flex' justifyContent='center' margin='1.5rem auto'>
					<div style={{width: '80%', backgroundColor: theme.palette.background.default, padding: '0.5rem', borderRadius: '15px'}}>
						<Typography variant='h4' textAlign='center' fontWeight='bolder' style={{margin: '0.5rem auto'}}>
							<Trans i18nKey='outras_tecnologias'/>
						</Typography>
						<div className='container'>
							<SiFirebase />
							<SiDocker />
							<SiAmazonaws />
							<SiVercel />
							<SiGit />
							<SiGithub />
						</div>
					</div>
				</Grid>
				</IconContext.Provider>
			</Grid>
    </section>
  )
}

export default Skills