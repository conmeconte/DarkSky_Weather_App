import types from '../actions/types';

const DEFAULT_STATE={
    weather: {}
}


export default function(state= DEFAULT_STATE, action){
    // console.log("reducer state :", state); 

    switch (action.type){
        case types.FETCH_WEATHER:
            console.log("reducer action ", action.payload)
            // return [action.payload, ...state]; 
            return { ...state, weather: action.payload}; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }

}