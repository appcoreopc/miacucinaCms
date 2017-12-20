import { ActionReducer, Action } from '@ngrx/store';
import { COUNTRY_GET_OK, CityAppState, COUNTRY_MESSAGE_END, COUNTRY_SAVE, COUNTRY_CANCEL, COUNTRY_SAVE_SUCCESS, COUNTRY_SAVE_ERR } from '../shared/sharedObjects';

export function CountryReducer(status: CityAppState, action: Action) {
	switch (action.type) {
		case COUNTRY_GET_OK: 
		  return  { status : 1, payload : action, type: COUNTRY_MESSAGE_END };
		case COUNTRY_SAVE:
		  console.log(COUNTRY_SAVE);
		  return  { status : 2, type: COUNTRY_MESSAGE_END };	
		case COUNTRY_CANCEL:
			console.log(COUNTRY_CANCEL);
			return  { status : 3, type: COUNTRY_MESSAGE_END };	
		case COUNTRY_SAVE_SUCCESS:
			console.log(COUNTRY_SAVE_SUCCESS);
			return { status : 4, type: COUNTRY_MESSAGE_END }
		case COUNTRY_SAVE_ERR:
			console.log(COUNTRY_SAVE_ERR);
			return  { status : 5, type: COUNTRY_MESSAGE_END };		
		case COUNTRY_GET_OK: 						
		    console.log(COUNTRY_GET_OK);
			return  { status : 6, type: COUNTRY_MESSAGE_END };		
		default:
			return status;
						
		}					
	}