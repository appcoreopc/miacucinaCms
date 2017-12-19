import { ActionReducer, Action } from '@ngrx/store';

export const CITY_SAVE = 'CITY_SAVE';
export const CITY_CANCEL = 'CITY_CANCEL';
export const CITY_SAVE_SUCCESS = 'CITY_SAVE_SUCCESS';
export const CITY_MESSAGE_END = 'CITY_MESSAGE_END';
export const CITY_SAVE_ERR = 'CITY_SAVE_ERR';
export const CITY_CANCEL_OK = 'CITY_CANCEL_OK';
export const CITY_GET = 'CITY_GET';
export const CITY_GET_ERR = 'CITY_GET_ERR';
export const CITY_GET_OK = 'CITY_GET_OK';

export interface CityAppState {
	status: number;
	name : string, 
	description : string;
	type : string; 
	payload  : CityData; 
	length : number;
}

export interface CityData {
	status: number;
	name : string, 
	description : string;
	type : string; 
} 

export function cityReducer(status: CityAppState, action: Action) {
	switch (action.type) {
		case CITY_GET_OK: 
		  return  { status : 1, payload : action, type: CITY_MESSAGE_END };
		case CITY_SAVE:
		  console.log(CITY_SAVE);
		  return  { status : 2, type: CITY_MESSAGE_END };	
		case CITY_CANCEL:
			console.log(CITY_CANCEL);
			return  { status : 3, type: CITY_MESSAGE_END };	
		case CITY_SAVE_SUCCESS:
			console.log(CITY_SAVE_SUCCESS);
			return { status : 4, type: CITY_MESSAGE_END }
		case CITY_SAVE_ERR:
			console.log(CITY_SAVE_ERR);
			return  { status : 5, type: CITY_MESSAGE_END };		
		case CITY_GET_OK: 						
		    console.log(CITY_GET_OK);
			return  { status : 6, type: CITY_MESSAGE_END };		
		default:
			return status;
						
					}					
				}