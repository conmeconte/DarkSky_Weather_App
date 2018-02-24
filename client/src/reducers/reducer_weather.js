import types from '../actions/types';

const DEFAULT_STATE={
    weather: []
}


export default function(state= DEFAULT_STATE, action){

    switch (action.type){
        case types.FETCH_WEATHER:
            // return [action.payload, ...state]; 
            return { ...state, weather:[...state.weather, action.payload]}; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }

}