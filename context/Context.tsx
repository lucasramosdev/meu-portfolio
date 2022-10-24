import { Theme } from "@mui/material";
import { createContext, Dispatch, useContext, useReducer } from "react";
import { DarkTheme, LightTheme } from "../themes";
import {themeReducer} from './reducers'
import { languageReducer } from "./reducers/language.reducer";


type InitialStateType = {
	theme: Theme;
	language: string;
}

const initialState = {
	theme: LightTheme,
	language: 'pt-Br'
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



export const ContextProvider = ({children}: any) => {
	const [state, dispatch] = useReducer(mainReducer, initialState)

	return <mainContext.Provider value={{state, dispatch}} >{children}</mainContext.Provider>
}

export const useMain = () => useContext(mainContext)