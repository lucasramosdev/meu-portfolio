import { ActionMap } from ".";
import CookieService from "../../services/CookieService";

export enum LanguageTypes {
	Change = 'CHANGE_LANGUAGE'
}

type LanguagePayload = {
	[LanguageTypes.Change]: string;
}

export type LanguageActions = ActionMap<LanguagePayload>[keyof ActionMap<LanguagePayload>]

export const languageReducer = (state: string, action: LanguageActions) => {
	switch(action.type) {
		case LanguageTypes.Change:
      const newLanguage = action.payload;
      const actualLanguage = state;
      if(newLanguage !== actualLanguage) {
        CookieService.set('NEXT_LOCALE', newLanguage, {"sameSite": "strict"})
        return newLanguage
      }
      return newLanguage


		default:
			return state;
	}
}