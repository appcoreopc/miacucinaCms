import { ActionReducer, Action } from '@ngrx/store';
import { LOCATION_GET_OK, CityAppState, LOCATION_MESSAGE_END, LOCATION_SAVE, LOCATION_CANCEL, 
	LOCATION_SAVE_SUCCESS, LOCATION_SAVE_ERR } from '../shared/sharedObjects';

export function LocationReducer(status: CityAppState, action: Action) {
	switch (action.type) {
		case LOCATION_GET_OK: 
		  return  { status : 1, payload : action, type: LOCATION_MESSAGE_END };
		case LOCATION_SAVE:
		  console.log(LOCATION_SAVE);
		  return  { status : 2, type: LOCATION_MESSAGE_END };	
		case LOCATION_CANCEL:
			console.log(LOCATION_CANCEL);
			return  { status : 3, type: LOCATION_MESSAGE_END };	
		case LOCATION_SAVE_SUCCESS:
			console.log(LOCATION_SAVE_SUCCESS);
			return { status : 4, type: LOCATION_MESSAGE_END }
		case LOCATION_SAVE_ERR:
			console.log(LOCATION_SAVE_ERR);
			return  { status : 5, type: LOCATION_MESSAGE_END };		
		case LOCATION_GET_OK: 						
		    console.log(LOCATION_GET_OK);
			return  { status : 6, type: LOCATION_MESSAGE_END };		
		default:
			return status;						
		}					
	}