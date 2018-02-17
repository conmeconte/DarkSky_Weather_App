import React, { Component } from 'react';
import SearchBar from './search_bar'; 
import Weather from './weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-css';


class App extends Component{
    render(){
        return(
            <div className="container">
                <SearchBar />
                <Weather />
            </div>
        )
    }
}

export default App;
