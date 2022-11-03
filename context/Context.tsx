import { Theme } from "@mui/material";
import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { DarkTheme, LightTheme } from "../themes";
import {themeReducer} from './reducers'
import { languageReducer } from "./reducers/language.reducer";
import CookieService from "../services/CookieService";
import { useRouter } from "next/router";


type InitialStateType = {
	theme: Theme;
	language: string;
}

const initialState = {
	theme: LightTheme,
	language: 'pt-BR'
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
	
	const router = useRouter();
	
	
	useEffect(() => {
		const actualLanguage = CookieService.get('NEXT_LOCALE');
		if(!actualLanguage) dispatch({type: 'CHANGE_LANGUAGE', payload: 'pt-BR'});
		else if(actualLanguage === 'undefined') dispatch({type: 'CHANGE_LANGUAGE', payload: 'pt-BR'});
		else {
			dispatch({type: 'CHANGE_LANGUAGE', payload: actualLanguage});
			const {pathname, asPath, query} = router;
			router.push({pathname, query}, asPath, {locale: actualLanguage, scroll: false});
		}
		
		const actualTheme = CookieService.get('NEXT_THEME');
		if(!actualTheme) dispatch({type: 'CHANGE_THEME', payload: LightTheme});

		else {
			switch(actualTheme) {
				case 'light':
					dispatch({type: 'CHANGE_THEME', payload: DarkTheme});
					break;
				
				case 'dark':
					dispatch({type: 'CHANGE_THEME', payload: LightTheme});
					break;
			}
		}
	}, [])


	return <mainContext.Provider value={{state, dispatch}} >{children}</mainContext.Provider>
}
