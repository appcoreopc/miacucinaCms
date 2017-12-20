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

export const COUNTRY_SAVE = 'COUNTRY_SAVE';
export const COUNTRY_CANCEL = 'COUNTRY_CANCEL';
export const COUNTRY_SAVE_SUCCESS = 'COUNTRY_SAVE_SUCCESS';
export const COUNTRY_MESSAGE_END = 'COUNTRY_MESSAGE_END';
export const COUNTRY_SAVE_ERR = 'COUNTRY_SAVE_ERR';
export const COUNTRY_CANCEL_OK = 'COUNTRY_CANCEL_OK';
export const COUNTRY_GET = 'COUNTRY_GET';
export const COUNTRY_GET_ERR = 'COUNTRY_GET_ERR';
export const COUNTRY_GET_OK = 'COUNTRY_GET_OK';

export const LOCATION_SAVE = 'LOCATION_SAVE';
export const LOCATION_CANCEL = 'LOCATION_CANCEL';
export const LOCATION_SAVE_SUCCESS = 'LOCATION_SAVE_SUCCESS';
export const LOCATION_MESSAGE_END = 'LOCATION_MESSAGE_END';
export const LOCATION_SAVE_ERR = 'LOCATION_SAVE_ERR';
export const LOCATION_CANCEL_OK = 'LOCATION_CANCEL_OK';
export const LOCATION_GET = 'LOCATION_GET';
export const LOCATION_GET_ERR = 'LOCATION_GET_ERR';
export const LOCATION_GET_OK = 'LOCATION_GET_OK';

export interface CityAppState {
	status: number;	
	type : string; 
	payload  : CityData; 
	
}
export interface CityData {
	status: number;
	name : string, 
	description : string;
	type : string; 
} 

export interface LocationAppState {
	status: number;	
	type : string; 
	payload  : CountryData; 	
}

export interface CountryData {
	status: number;
	name : string, 
	description : string;
	city : string;
	country : string;
	lon : string; 
	lat : string;
	imageUrl : string;
	type : string; 
} 
	
export interface KeyValueData {
	key: string;
	description : string, 

} 
