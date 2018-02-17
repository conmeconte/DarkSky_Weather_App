import axios from 'axios';
import types from './types'; 


export function fetchWeather(city="37.8267,-122.4233"){
    // city should be 'x,y'
    return (dispatch)=>{
        const request = axios.get('/api/weather').then((resp)=>{
            console.log(' data obj ', resp);

            dispatch({
                type: types.FETCH_WEATHER,
                payload: resp.data
            });

        }).catch(err=>{
            dispatch({
                type: types.AXIOS_ERROR,
                msg: " Failed axios call "
            });
        });
    }
}