import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffade4',
			contrastText: '#58124a',
		},
		secondary: {
			main: '#81dc5c',
			contrastText: '#0e3900',
		},
		background: {
			default: '#1f1a1d',
			paper: '#4b2716',
		},
		error: {
			main: '#ffb4ab',
			contrastText: '#690005',
		}
	}
})