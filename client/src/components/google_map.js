import React, { Component } from 'react';
import { connect } from 'react-redux';



class GoogleMap extends Component{
    componentDidMount(){
        console.log('did mount', this.props)
        new google.maps.Map(this.refs.map, {
            zoom: 6,
            center: {
                lat: this.props.lat,
                lng: this. props.lon
            }
        })
    }
    componentWillReceiveProps(nextProps){
        console.log('will recieve', this.props)
        new google.maps.Map(this.refs.map, {
            zoom: 6,
            center: {
                lat: nextProps.lat,
                lng: nextProps.lon
            }
        })
    }
    
    render(){
            // this.refs.map 
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