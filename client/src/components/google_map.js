import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../assets/mapStyles';




class GoogleMap extends Component{
    componentDidMount(){

        new google.maps.Map(this.refs.map, {
            zoom: 8,
            disableDefaultUI: true,
            center: {
                lat: this.props.lat,
                lng: this. props.lon
            },
            styles

        })
    }
    componentWillReceiveProps(nextProps){
        new google.maps.Map(this.refs.map, {
            zoom: 8,
            disableDefaultUI: true,
            center: {
                lat: nextProps.lat,
                lng: nextProps.lon
            },
            styles
        })
    }
    
    render(){
        return <div ref='map' /> 
    }

}

// function mapStateToProps(state){
//     console.log("mapstate", state); 
//     return {
//         lon: state.weather.weather.longitude,
//         lat: state.weather.weather.latitude
//     }

// }

// export default connect(mapStateToProps)(GoogleMap); 
export default GoogleMap;