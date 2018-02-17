import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';
import { Field, reduxForm } from 'redux-form'; 
import keys from '../keys';
import axios from 'axios'; 



class SearchBar extends Component {

    renderField(field){
        const { meta: { touched , error } } = field; 
        const className= `form-group ${touched && error ? 'has-danger' : ''}`

        //field.meta.error gives access to the returned error obj from validate function
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type ? field.type : 'text'} {...field.input}/>
                <div className="text-danger">{touched ? error: <br/>}</div>
            </div>
        )
    }

 

    onFormSubmit(addresses){
        let address2=''
        let lnglat= '';
        const sendingData={}
        for(let input in addresses){
            if(input === 'address'){
                address2+=addresses[input]+','; 
            }else if(input === 'date'){
                sendingData[input]= addresses[input]; 
            }
            else{
                address2+='+'+ addresses[input] + ','; 
            }
        }
        const editAddress= address2.replace(/\s/g, '+');
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${editAddress}&key=${keys.GEO_API_KEY}`
        
        this.props.reset(); 
        axios.get(URL).then((data)=>{
            lnglat= data.data.results[0].geometry.location;
            sendingData["lnglat"]= lnglat
            this.props.fetchWeather(sendingData); 
        });
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit.bind(this))}>
                <h1 className="text-center">Search Weather Information</h1>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Field name="address" component={this.renderField} label="Street Address" />
                        <Field name="city" component={this.renderField} label="City"/>
                        <Field name="state" component={this.renderField} label="State"/>
                        <Field type="date" name="date" component={this.renderField} label="Select Date"/>
                        <div className="row justify-content-end">
                            <button className="btn btn-outline-success mr-3" type="submit">Search</button>
                            <button onClick={this.props.reset} type="button" className = "btn btn-outline-danger mr-3">Refresh</button>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}
function validate(values){
    const errors={};
    if (!values.address){
        errors.address= "Please enter the address"; 
    }
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


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);

}

export default reduxForm({
    validate,
    form: 'Search Weather'
})(
    connect(null, { fetchWeather })(SearchBar)
); 