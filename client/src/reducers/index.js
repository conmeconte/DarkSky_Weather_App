import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'; 
import { reducer as formReducer } from 'redux-form'; 
import WeatherByDateReducer from './reducer_weather_by_date';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    weatherByDate: WeatherByDateReducer,
    form: formReducer
  });
  

  export default rootReducer;
