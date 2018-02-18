import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';
import './weather.css'; 
import Skycons from 'react-skycons';
import ReactAnimatedWeather from 'react-animated-weather';





class WeatherList extends Component{
    renderWeather(cityData, key){
        // const name = cityData.city.name;
        const temps = cityData.hourly.data.map(weather=>weather.temperature);
        const pressure = cityData.hourly.data.map(weather => weather.pressure);
        const humidity = cityData.hourly.data.map(weather => weather.humidity);
        const {longitude, latitude} = cityData;
        const defaults = {
            icon: 'CLEAR_DAY',
            // color: 'black',
            // size: 150,
            animate: true
          };


        if(cityData.currently.summary){
            switch(cityData.currently.summary){
                case "Partly Cloudy":
                    defaults.icon= "PARTLY_CLOUDY_DAY"
                    break;
                case "Clear":
                    defaults.icon= "CLEAR_DAY"
                    break;
                case "Cloudy":
                    defaults.icon= "CLOUDY"
                    break;
                case "Rain":
                    defaults.icon= "RAIN"
                    break;
                case "Sleet":
                    defaults.icon= "SLEET"
                    break;
                case "Snow":
                    defaults.icon= "SNOW"
                    break;
                case "Wind":
                    defaults.icon= "WIND"
                    break;
                case "Fog":
                    defaults.icon= "FOG"
                    break;
                default: null;
            }
        }

        return(
            <tr key={key}>
                {/* <td><GoogleMap lon={longitude} lat={latitude} /></td> */}
                <td><GoogleMap lon={this.props.weather[0].longitude} lat={this.props.weather[0].latitude} /></td>
                <td>
                    {cityData.currently.summary}
                    <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    />
                </td>
                <td><Chart data={temps} color="orange" units='DegC' /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>
                <td><Chart data={humidity} color="yellow" units="(0-1)"/></td>
            </tr>
        )
    }

    render(){


        return(
            <table className="table table-hover">
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
                    {/* {this.props.weather ? this.props.weather[0].hourly.data.map(this.renderWeather) : null} */}
                    {this.props.weather[0] ? this.renderWeather(this.props.weather[0]) : null}
                </tbody>

            </table>
        )
    }
}

function mapStateToProps({weather, form}){

    return {weather, form}
}
// function mapStateToProps(state){
//     return {weather: state.weather}
// }
export default connect(mapStateToProps)(WeatherList); 