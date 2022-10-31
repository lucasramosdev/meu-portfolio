import { Theme } from "@mui/material";
import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { DarkTheme, LightTheme } from "../themes";
import {themeReducer} from './reducers'
import { languageReducer } from "./reducers/language.reducer";
import CookieService from "../services/CookieService";


type InitialStateType = {
	theme: Theme;
	language: string;
}

const initialState = {
	theme: LightTheme,
	language: ''
}

const mainContext = createContext<{
	state: InitialStateType,
	dispatch: Dispatch<any>
}>({
	state: initialState,
	dispatch: () => null
});

const mainReducer = ({theme, language}: any, action: any) => ({
	theme: themeReducer(theme, action),
	language: languageReducer(language, action)
});

export const useMain = () => useContext(mainContext)


export const ContextProvider = ({children}: any) => {
	const [state, dispatch] = useReducer(mainReducer, initialState)

	useEffect(() => {
		const actualLanguage = CookieService.get('NEXT_LOCALE');
		if(!actualLanguage) dispatch({type: 'CHANGE_LANGUAGE', payload: 'pt-BR'})
		
		dispatch({type: 'CHANGE_LANGUAGE', payload: actualLanguage})
		
		const actualTheme = CookieService.get('NEXT_THEME');
		if(!actualTheme) dispatch({type: 'CHANGE_THEME', payload: LightTheme});

		switch(actualTheme) {
			case 'light':
				dispatch({type: 'CHANGE_THEME', payload: DarkTheme});
				break;
			
			case 'dark':
				dispatch({type: 'CHANGE_THEME', payload: LightTheme});
				break;
		}
	}, [])


	return <mainContext.Provider value={{state, dispatch}} >{children}</mainContext.Provider>
}
