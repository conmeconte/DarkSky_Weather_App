import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form'; 
import keys from '../keys';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import moment from 'moment';



class SearchBar extends Component {

    renderField(field){
        const { meta: { touched , error } } = field; 
        const className= `form-group ${touched && error ? 'has-danger' : ''}`
        //field.meta.error gives access to the returned error obj from validate function
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
        this.props.resetWeather();
        document.body.style.cursor="progress"

        for(let input in addresses){
            if(input === 'address'){
                address2+=addresses[input]+','; 
            }
            else{
                address2+='+'+ addresses[input] + ','; 
            }
        }
        const editAddress= address2.replace(/\s/g, '+');
        console.log('edited address', editAddress); 
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${editAddress}&key=${keys.GEO_API_KEY}`
        

        this.props.reset(); 
        //Faster but inconsistent date order
        // axios.get(URL).then(async (data)=>{
        //     for(let i=7; i>=1; i--){
        //         // (()=>{
        //             let pastWeekDay= await moment().subtract(i, 'days')._d;
        //             sendingData['date']= pastWeekDay;
        //             lnglat= data.data.results[0].geometry.location;
        //             sendingData["lnglat"]= lnglat
        //             this.props.fetchWeather(sendingData); 
        //         // })(); 
        //     }

        // });
        axios.get(URL).then(async(data)=>{
            for(var i=7; i>=1; i--){
                var pastWeekDay= moment().subtract(i, 'days')._d;
                sendingData['date']= pastWeekDay;
                lnglat= data.data.results[0].geometry.location;
                sendingData["lnglat"]= lnglat
                await this.props.fetchWeather(sendingData); 
            }

        });
    }

    handleRefreshClick(){
        this.props.reset(); 
        this.props.resetWeather()
    }

    render(){
        return (
            <div className="form_container col-12">

                <form onSubmit={this.props.handleSubmit(this.onFormSubmit.bind(this))}>
                    <h1 className="text-center pt-3">Last Week's Weather Information</h1>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-6">
                            <Field name="address" component={this.renderField} label="Street Address" />
                            <Field name="city" component={this.renderField} label="City"/>
                            <Field name="state" component={this.renderField} label="State"/>
                            <div className="row justify-content-end">
                                <button className="btn btn-outline-success mr-3" type="submit">Search</button>
                                <button onClick={this.handleRefreshClick.bind(this)} type="button" className = "btn btn-outline-danger mr-3">Refresh</button>
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
    return errors; 
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchWeather }, dispatch);

// }

SearchBar=reduxForm({
    validate,
    form: 'Search Weather'
})(SearchBar);
export default connect(null, actions)(SearchBar);


// export default reduxForm({
//     validate,
//     form: 'Search Weather'
// })(
//     connect(null, { fetchWeather })(SearchBar)
// ); 