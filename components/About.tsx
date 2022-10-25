import { Typography } from '@mui/material'
import React from 'react'
import { Trans } from 'next-i18next'
import { useMain } from '../context'

const About = () => {
  const {state} = useMain()
  const theme = state.theme;
  return (
    <section id='about' style={{backgroundColor: theme.palette.background.paper}}>
      <Typography variant='h3' textAlign={"center"}>
        <Trans i18nKey="Sobre mim">
          Sobre mim
        </Trans>
      </Typography>
    </section>
  )
}

export default About