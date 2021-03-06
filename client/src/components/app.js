import React, { Component } from 'react';
import SearchBar from './search_bar'; 
import DateSearchBar from './date_search_bar'; 
import Weather from './weather';
import Landing from './landing_page';
import NotFound from './NotFound';

import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');

import './app.css';
import './search_bar.css'; 
import './landing_page.css';
import './search_bar.css'; 
import './weather.css'; 





class App extends Component{
    render(){
        return(
            <div className="container">

                <div className="hero row justify-content-center align-items-center">
                    <div className="video">
                        <iframe src={/Mobi/.test(navigator.userAgent) ? null : "https://www.youtube.com/embed/iGpuQ0ioPrM?controls=0&showinfo=0&playlist=iGpuQ0ioPrM&autoplay=1&loop=1"} frameBorder="0"></iframe>   
                    </div>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/search' component={SearchBar} />
                        <Route path='/search/date' component={DateSearchBar} />
                        <Route path='/404' component={NotFound}/>
                        <Redirect from='*' to='/404' />
                    </Switch>
                </div>
                <br/>
                <br/>
                <Weather />
            </div>
        )
    }
}

export default App;
