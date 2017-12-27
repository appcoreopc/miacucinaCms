import { ActionReducer, Action } from '@ngrx/store';
import { COUNTRY_GET_OK, CityAppState, COUNTRY_MESSAGE_END, COUNTRY_SAVE, 
	COUNTRY_CANCEL, COUNTRY_SAVE_SUCCESS, COUNTRY_SAVE_ERR, COUNTRY_GET_ERR } from '../shared/sharedObjects';

export function CountryReducer(status: CityAppState, action: Action) {
	switch (action.type) {
		case COUNTRY_GET_OK: 
		  console.log(action);
			return  { status : 100, data : action, type: COUNTRY_GET_OK };
		case COUNTRY_SAVE:
		  console.log(COUNTRY_SAVE);
		  return  { status : 102, type: COUNTRY_MESSAGE_END };	
		case COUNTRY_CANCEL:
			console.log(COUNTRY_CANCEL);
			return  { status : 103, type: COUNTRY_MESSAGE_END };	
		case COUNTRY_SAVE_SUCCESS:
			console.log(COUNTRY_SAVE_SUCCESS);
			return { status : 104, type: COUNTRY_MESSAGE_END }
		case COUNTRY_SAVE_ERR:
			console.log(COUNTRY_SAVE_ERR);
			return  { status : 105, type: COUNTRY_MESSAGE_END };		
		case COUNTRY_GET_ERR: 
		  console.log(action);
		  return  { status : 106, data : action, type: COUNTRY_MESSAGE_END };
		default:
			return status;
						
		}					
	}