import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';
import './weather.css'; 


class WeatherList extends Component{
    renderWeather(cityData, key){
        // const name = cityData.city.name;
        const temps = cityData.hourly.data.map(weather=>weather.temperature);
        const pressure = cityData.hourly.data.map(weather => weather.pressure);
        const humidity = cityData.hourly.data.map(weather => weather.humidity);
        const {longitude, latitude} = cityData;

        console.log("locations ", longitude, latitude)

        return(
            <tr key={key}>
                <td><GoogleMap lon={longitude} lat={latitude} /></td>
                <td>{cityData.currently.summary}</td>
                <td><Chart data={temps} color="orange" units='K' /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>
                <td><Chart data={humidity} color="yellow" units="%"/></td>
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
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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
    console.log('state', weather)
    console.log('state2', weather[0])
    return {weather, form}
}
// function mapStateToProps(state){
//     return {weather: state.weather}
// }
export default connect(mapStateToProps)(WeatherList); 