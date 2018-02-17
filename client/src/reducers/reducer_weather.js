import types from '../actions/types';

export default function(state={}, action){
    // console.log("reducer state :", state); 

    switch (action.type){
        case types.FETCH_WEATHER:
            console.log("reducer action ", action.payload)
            return [action.payload, ...state]; 
        case types.AXIOS_ERROR:
            console.log("reducer error ", action.payload); 
        default: 
            return state; 
    }
    console.log("state is ", state); 

}