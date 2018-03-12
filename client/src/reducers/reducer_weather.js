import types from '../actions/types';

const DEFAULT_STATE=[]



export default function(state= DEFAULT_STATE, action){

    switch (action.type){
        case types.FETCH_WEATHER:
            console.log('reducer state', state)
            return [action.payload, ...state]; 
        case types.RESET_WEATHER:
            return DEFAULT_STATE; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }

}