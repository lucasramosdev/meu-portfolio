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

	useEffect(() => {
		const actualLanguage = CookieService.get('language');
		if(!actualLanguage) {
			dispatch({type: 'CHANGE_LANGUAGE', payload: 'pt-BR'})
			CookieService.set('language', 'pt-BR', {"sameSite": "strict"})
		}
		else {
			dispatch({type: 'CHANGE_LANGUAGE', payload: actualLanguage})
		}
	}, [])


	return <mainContext.Provider value={{state, dispatch}} >{children}</mainContext.Provider>
}
