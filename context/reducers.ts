import { Theme } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
	  ? {
		  type: Key;
		}
	  : {
		  type: Key;
		  payload: M[Key];
		}
  };

export enum ThemeTypes {
	Change = 'CHANGE_THEME'
}

type ThemeType = {
	mode: Theme;
}

type ThemePaylod = {
	[ThemeTypes.Change] : {
		theme: Theme;
	}
}


export type ThemeActions = ActionMap<ThemePaylod>[keyof ActionMap<ThemePaylod>]

export const themeReducer = (state: ThemeType, action: ThemeActions) =>  {
	switch(action.type) {
		case ThemeTypes.Change:
			let themeChanged: Theme;
			if(action.payload.theme === LightTheme){
				themeChanged = LightTheme
			}
			else{
				themeChanged = DarkTheme
			}

			return {
				...state,
				mode: themeChanged
			}


		default:
			return state;
	}
}