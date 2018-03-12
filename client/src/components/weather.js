import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';
import Skycons from 'react-skycons';
import ReactAnimatedWeather from 'react-animated-weather';
import _ from 'lodash';





class WeatherList extends Component{
    renderWeather(cityData, key){
        const temps = cityData.hourly.data.map(weather=>weather.temperature);
        const pressure = cityData.hourly.data.map(weather => weather.pressure);
        const humidity = cityData.hourly.data.map(weather => weather.humidity);
        const {longitude, latitude} = cityData;
        const defaults = {
            icon: 'CLEAR_DAY',
            color: 'white',
            animate: true
        };

        switch(cityData.currently.icon){
            case "partly-cloudy-day":
                defaults.icon= "PARTLY_CLOUDY_DAY"
                break;
            case "partly-cloudy-night":
                defaults.icon= "PARTLY_CLOUDY_DAY"
                break;
            case "mostly-cloudy":
                defaults.icon= "PARTLY_CLOUDY_DAY"
                break;
            case "clear":
                defaults.icon= "CLEAR_DAY"
                break;
            case "cloudy":
                defaults.icon= "CLOUDY"
                break;
            case "rain":
                defaults.icon= "RAIN"
                break;
            case "sleet":
                defaults.icon= "SLEET"
                break;
            case "snow":
                defaults.icon= "SNOW"
                break;
            case "win":
                defaults.icon= "WIND"
                break;
            case "windy":
                defaults.icon= "WIND"
                break;
            case "fog":
                defaults.icon= "FOG"
                break;
            default: null;
        }
        document.body.style.cursor="default";
        return(
            <tr key={key}>
                <td><GoogleMap lon={cityData.longitude} lat={cityData.latitude} /></td>
                <td>
                    {cityData.currently.summary}
                    <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    />
                    <br/>
                    Date:
                    <br/> 
                    {new Date(cityData.daily.data[0].time * 1000).toLocaleDateString().replace(/\./g, '').replace(/\s/g,'/')}
                </td>
                <td><Chart data={temps} color="orange" units='DegC' /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>
                <td><Chart data={humidity} color="yellow" units="(0-1)"/></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Weather</th>
                        <th>Temperature (DegC)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (0-1)</th>
                    </tr>
                </thead>
                <tbody>
                    {_.isEmpty(this.props.weatherByDate) ? null: this.renderWeather(this.props.weatherByDate) }
                    {_.isEmpty(this.props.weather) ? 
                        null : (this.props.weather.length >= 7) ?
                         this.props.weather.map(this.renderWeather) :
                          <tr>
                            <td id='whileLoadingTd'>
                                <div id='loader'></div>
                            </td>
                          </tr>
                    }
                </tbody>

            </table>
        )
    }
}

function mapStateToProps({weather, weatherByDate}){
    return {
            weather,
            weatherByDate
        }
}

export default connect(mapStateToProps)(WeatherList); 