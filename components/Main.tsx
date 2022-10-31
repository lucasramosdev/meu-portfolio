import React from 'react'
import About from './About'
import Header from './Header'
import Projects from './projects/Projects'
import Skills from './Skills'

export const Main = () => {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Skills />
		</div>
	)
}
