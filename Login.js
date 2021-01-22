import React from 'react'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class Login extends React.Component{

    


    render(){
        return(
            <>
            <div class ="container">
                <div class = "card">
                    <div class = "card-title">
                        <div class="container">
                            <div class ="card bg-dark text-light fid">
                                <div class="card-body">

                                    <br></br>
                                    <center><h3 class="card-title"><i>Log In</i></h3></center>
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class = "col-md-4">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" className="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class = "col-md-4">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="text" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br><br></br>
                                    <div class="row">
                                        <div class ="col-md-4"></div>
                                        <div class = "col-md-4">
                                        <a href="http://group7.tpk-learning.site/62107693/Link/way/" target="blank"><button type="submit" className="btn btn-primary btn-lg btn-block">Log In</button></a>
                                        <br></br>
                                        </div>
                                    </div>
                                    
                                    /* add */
                                    <div class="row">
                                        <br></br>
                                        <div class="col-md-4"></div>
                                        <div class ="col-md-4">
                                        <a href="http://group7.tpk-learning.site/62107693/Link/cal/calculate.html" target="blank"><button className="btn btn-primary btn-lg btn-block">Guest login</button></a>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                        </div>    
                    </div>

                </div>
            </div>
            <br></br><br></br><br></br><br></br>
            </>
        )
    }
}
