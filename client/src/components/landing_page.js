import React from 'react';
import { Link } from 'react-router-dom'; 

export default ()=>{
    return(
        <div className="landing justify-content-center">

            <div className="landing_content">
                <div className="row justify-content-center">
                    <h1 className="text-center px-5">WELCOME TO YOUR WEATHER SEARCH ENGINE</h1>
                    <p className="px-5 my-5 text-center">This Application Allows You to Select a Location Within the United States. Once the Location is Selected, it Will Show You the Detailed Weather Condition of the Selected  Location on the Past Week or of a Specific Date Depending on Your Selection</p>

                </div>
                <div className="row justify-content-center landing_bottons">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Start your Search</button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/search/date">By Date</Link>
                            <Link className="dropdown-item" to="/search">Last Week</Link>
                        </div>
                    </div>
                    <div className="mobile">
                        <Link className="btn btn-outline-info mr-3" to="/search/date">By Date</Link>
                        <Link className="btn btn-outline-info mr-3" to="/search">Last Week</Link>
                    </div>
                </div>
            </div>

        </div>


    )
}