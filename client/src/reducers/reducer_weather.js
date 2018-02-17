import types from '../actions/types';

export default function(state=[], action){
    console.log("reducer state :", state); 

    switch (action.type){
        case types.FETCH_WEATHER:
            return [action.payload.data, ...state]; 
        case types.AXIOS_ERROR:
            console.log(action.payload); 
        default: 
            return state; 
    }

}