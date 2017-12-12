import { ActionReducer, Action } from '@ngrx/store';

export const CITY_SAVE = 'CITY_SAVE';
export const CITY_CANCEL = 'CITY_CANCEL';

export function cityReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case CITY_SAVE:
		    console.log(CITY_SAVE);
			return state + 1;
		case CITY_CANCEL:
		    console.log(CITY_CANCEL);
			return state - 1;		
		default:
			return state;
	}
}