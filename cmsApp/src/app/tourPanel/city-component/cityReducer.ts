import { ActionReducer, Action } from '@ngrx/store';
import {CITY_SAVE, CITY_CANCEL, CITY_SAVE_SUCCESS,
	 CITY_MESSAGE_END, CITY_SAVE_ERR, CITY_CANCEL_OK, CITY_GET, CITY_GET_ERR,
	  CITY_GET_OK, CityAppState, CityData } from '../shared/sharedObjects';

export function cityReducer(status: CityAppState, action: Action) {
	switch (action.type) {
		case CITY_GET_OK: 
		  return  { status : 1, data : action, type: CITY_MESSAGE_END };
		case CITY_SAVE:
		  console.log(CITY_SAVE);
		  return  { status : 2, data : action, type: CITY_MESSAGE_END };	
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