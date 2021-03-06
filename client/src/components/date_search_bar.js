import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form'; 
import keys from '../keys';
import axios from 'axios'; 
import { Link } from 'react-router-dom';



class DateSearchBar extends Component {
    constructor(props){
        super(props);

        this.onFormSubmit= this.onFormSubmit.bind(this); 
    }

    renderField(field){
        const { meta: { touched , error } } = field; 
        const className= `form-group ${touched && error ? 'has-danger' : ''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type ? field.type : 'text'} {...field.input}/>
                <div className="warningNotice">{touched ? error: <br/>}</div>
            </div>
        )
    }
 
 

    onFormSubmit(addresses){
        let address2=''
        let lnglat= '';
        const sendingData={}
        this.props.resetWeather()


        for(let input in addresses){
            if(input === 'address'){
                address2+=addresses[input]+','; 
            }else if(input === 'date'){
                sendingData[input]= new Date(addresses[input]).toUTCString(); 
            }
            else{
                address2+='+'+ addresses[input] + ','; 
            }
        }
        const editAddress= address2.replace(/\s/g, '+');
        console.log('edited address', editAddress); 
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${editAddress}&key=${keys.GEO_API_KEY}`
        
        this.props.reset(); 
        axios.get(URL).then((data)=>{
            lnglat= data.data.results[0].geometry.location;
            sendingData["lnglat"]= lnglat
            this.props.fetchWeatherByDate(sendingData); 
        });
    }

    handleRefreshClick(){
        this.props.reset(); 
        this.props.resetWeather()
    }

    render(){
        return (
            <div className="form_container col-12">

                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                    <h1 className="text-center pt-3">Choose the Location and Date</h1>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-6">
                            <Field name="address" component={this.renderField} label="Street Address" />
                            <Field name="city" component={this.renderField} label="City"/>
                            <Field name="state" component={this.renderField} label="State"/>
                            <Field id="dateSelector" type="date" name="date" component={this.renderField} label="Select Date"/>
                            <div className="row justify-content-end my-2">
                                <button className="btn btn-outline-success mr-3" type="submit">Search</button>
                                <button onClick={this.handleRefreshClick.bind(this)} type="button" className = "mr-3 btn btn-outline-danger">Refresh</button>
                                <Link onClick={this.handleRefreshClick.bind(this)} className="btn btn-outline-info mr-3" to="/">Back to Main</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        )
    }
}
function validate(values){
    const errors={};

    if (!values.city){
        errors.city= "Please enter the City"; 
    }
    if (!values.state){
        errors.state= "Please enter the State"; 
    }
    if (!values.date){
        errors.date= "Please enter a valid Date"; 
    }

    return errors; 
}



DateSearchBar=reduxForm({
    validate,
    form: 'Search Weather by Date'
})(DateSearchBar);

export default connect(null, actions)(DateSearchBar);
