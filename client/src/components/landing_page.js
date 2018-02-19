import React from 'react';
import { Link } from 'react-router-dom'; 
import './landing_page.css';

export default ()=>{
    return(
        <div className="landing justify-content-center">
            <div className="video">
                <iframe src={/Mobi/.test(navigator.userAgent) ? null : "https://www.youtube.com/embed/iGpuQ0ioPrM?controls=0&showinfo=0&playlist=iGpuQ0ioPrM&autoplay=1&loop=1"} frameBorder="0"></iframe>   
            </div>
            <div className="landing_content">
                <div className="row justify-content-center">
                    <h1 className="text-center">WELCOME TO YOUR WEATHER SEARCH ENGINE</h1>
                    <p className="px-5 my-5 text-center">This Application Allows You to Select a Location Within United States. Once Loction is Selected it Will Show You the Weather Condition of the Selected  Location on the Past Week or of a Date Depending on Your Selection</p>

                </div>
                <div className="row justify-content-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Start your Search</button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/search/date">By Date</Link>
                            <Link className="dropdown-item" to="/search">Last Week</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}