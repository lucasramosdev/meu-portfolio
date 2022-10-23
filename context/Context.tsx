import { Theme } from "@mui/material";
import { createContext, Dispatch, useContext, useReducer } from "react";
import { DarkTheme, LightTheme } from "../themes";
import {themeReducer} from './reducers'

type ThemeType = {
	mode: Theme;
}

type InitialStateType = {
	theme: ThemeType;
}

const initialState = {
	theme: {
		mode: LightTheme
	}
}

const mainContext = createContext<{
	state: InitialStateType,
	dispatch: Dispatch<any>
}>({
	state: initialState,
	dispatch: () => null
});

const mainReducer = ({theme}: any, action: any) => ({
	theme: themeReducer(theme, action)
});



export const ContextProvider = ({children}: any) => {
	const [state, dispatch] = useReducer(mainReducer, initialState)

	return <mainContext.Provider value={{state, dispatch}} >{children}</mainContext.Provider>
}

export const useMain = () => useContext(mainContext)