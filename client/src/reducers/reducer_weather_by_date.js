import types from '../actions/types';

const DEFAULT_STATE=[]


export default function(state= DEFAULT_STATE, action){

    switch (action.type){
        case types.FETCH_WEATHER_BY_DATE:
            return action.payload; 
        case types.RESET_WEATHER:
            return DEFAULT_STATE; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }

}