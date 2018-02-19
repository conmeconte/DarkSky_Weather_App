import React, { Component } from 'react';
import SearchBar from './search_bar'; 
import DateSearchBar from './date_search_bar'; 
import Weather from './weather';
import { Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-css';
import 'bootstrap';
require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');
import './app.css';
import Landing from './landing_page';



class App extends Component{
    render(){
        return(
            <div className="container">

                <div className="hero row justify-content-center align-items-center">
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/search' component={SearchBar} />
                    <Route path='/search/date' component={DateSearchBar} />
                </div>
                <br/>
                <br/>
                <Weather />
            </div>
        )
    }
}

export default App;
