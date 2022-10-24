import { ActionMap } from ".";

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

			return state;


		default:
			return state;
	}
}