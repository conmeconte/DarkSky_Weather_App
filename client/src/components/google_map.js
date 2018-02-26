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

export default GoogleMap;