import axios from 'axios';
import types from './types'; 
import keys from '../keys';
import moment from 'moment';


export const resetWeather = ()=> dispatch => {
    dispatch({
        type: types.RESET_WEATHER
    })
}

export const fetchWeather = address => async dispatch => {
        const request= await axios.post('/api/weather', address);
        if(!request){
            dispatch({
                type: types.AXIOS_ERROR,
                msg: " Failed axios call ",
                payload: err
            });
        } else{
            dispatch({
                type: types.FETCH_WEATHER,
                payload: request.data
            });
        }

}

export function fetchWeatherByDate(address){
    return (dispatch) => {
        const request = axios.post('/api/weather', address).then((resp)=>{

            dispatch({
                type: types.FETCH_WEATHER_BY_DATE,
                payload: resp.data
            });

        }).catch( err => {
            dispatch({
                type: types.AXIOS_ERROR,
                msg: " Failed axios call ",
                payload: err
            });
        });
    }

}