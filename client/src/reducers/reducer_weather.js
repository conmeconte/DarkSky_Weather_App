import types from '../actions/types';

const DEFAULT_STATE={
    weather: []
}


export default function(state= DEFAULT_STATE, action){

    switch (action.type){
        case types.FETCH_WEATHER:
            return { ...state, weather:[action.payload, ...state.weather]}; 
        case types.RESET_WEATHER:
            return { ...state, weather:[]}; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }

}