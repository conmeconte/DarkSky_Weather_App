import KEYS from '../keys';
import axios from 'axios';



export const fetchWeather = (city="37.8267,-122.4233") => async dispatch=> {
    // city should be 'x,y'
    const url = `${KEYS.WEATHER_URL}/${KEYS.API_KEY}/${city}`;
    const request = await axios.get(url); 
    dispatch({
        type: FETCH_WEATHER,
        payload: request
    })
};