import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#8f437c',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#226d00',
			contrastText: '#ffffff',
		},
		background: {
			default: '#fffbff',
			paper: '#cfcccf',
		},
		error: {
			main: '#226d00',
			contrastText: '#ffffff',
		}
	},
	typography: {
		fontFamily: 'Ubuntu',
	}
})