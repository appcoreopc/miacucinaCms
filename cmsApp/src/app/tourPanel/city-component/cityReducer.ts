import { ActionReducer, Action } from '@ngrx/store';

export const CITY_SAVE = 'CITY_SAVE';
export const CITY_CANCEL = 'CITY_CANCEL';
export const CITY_SAVE_SUCCESS = 'CITY_SAVE_SUCCESS';
export const CITY_SAVE_ERR = 'CITY_SAVE_ERR';
export const CITY_CANCEL_OK = 'CITY_CANCEL_OK';
export const CITY_GET = 'CITY_GET';
export const CITY_GET_ERR = 'CITY_GET_ERR';
export const CITY_GET_OK = 'CITY_GET_ERR';

export interface CityAppState {
	status: number;
	name : string, 
	description : string;
	type : string; 
  }

export function cityReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case CITY_SAVE:
		    console.log(CITY_SAVE);
			return state + 1;
		case CITY_CANCEL:
		    console.log(CITY_CANCEL);
			return state - 1;	
		case CITY_SAVE_SUCCESS:
		    console.log(CITY_SAVE_SUCCESS);
			return state - 1;	
		case CITY_SAVE_ERR:
		    console.log(CITY_SAVE_ERR);
			return state - 1;		
		default:
			return state;
	}
}