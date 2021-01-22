import React from 'react'

/* add */
import '.././index.css';

import Finance from '../pages/Finance.jpg'
import SignUp from '../component/SignUp';
import Pice from './../component/Pice';




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Gallray from '../component/Gallary';
import Video from '../component/Video';


export default class Home extends React.Component{

    


    render(){
        return(
            <>
            <div class ="row">
                <div class="col-md-12">
                    
                <Pice name ="https://siamblockchain.com/wp-content/uploads/2020/12/Bitcoin-chart3.jpg" />
                </div>
            </div>

            <div class ="row">
                <div class ='col-md-12 text-center bg-white'>
                    <br></br><br></br>
                    <br></br>
                    
                    /* add */
                    <Link to ="login" class="hide-button">You have an account, right?. Log in here</Link>
                    <br></br><br></br>
                    <br></br><br></br>


                </div>
            </div>

            <Gallray/>
            <Video/>
            </>
        )
    }
}
