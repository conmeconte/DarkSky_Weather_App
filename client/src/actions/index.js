import axios from 'axios';
import types from './types'; 
import keys from '../keys';


export function fetchWeather(address){
    return (dispatch) => {
        const request = axios.post('/api/weather/weekago', address).then((resp)=>{

            dispatch({
                type: types.FETCH_WEATHER,
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

export function fetchWeatherByDate(address){
    return (dispatch) => {
        const request = axios.post('/api/weather', address).then((resp)=>{

            dispatch({
                type: types.FETCH_WEATHER,
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