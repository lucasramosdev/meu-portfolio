import { Theme } from "@mui/material";
import { DarkTheme, LightTheme } from '../../themes';
import { ActionMap } from ".";
import CookieService from "../../services/CookieService";

export enum ThemeTypes {
	Change = 'CHANGE_THEME'
}

type ThemePaylod = {
	[ThemeTypes.Change]: Theme;
}


export type ThemeActions = ActionMap<ThemePaylod>[keyof ActionMap<ThemePaylod>]

export const themeReducer = (state: Theme, action: ThemeActions) =>  {
	switch(action.type) {
		case ThemeTypes.Change:
			let themeChanged: Theme;
			if(action.payload === DarkTheme){
				themeChanged = LightTheme;
				CookieService.set('NEXT_THEME', 'light', {"sameSite": "strict"})
			}
			else{
				themeChanged = DarkTheme
				CookieService.set('NEXT_THEME', 'dark', {"sameSite": "strict"})
			}

			return themeChanged;


		default:
			return state;
	}
}