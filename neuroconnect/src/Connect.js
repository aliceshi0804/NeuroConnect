import React from 'react'
import Dashboard from "./components/Dashboard"
import ConnectTile from "./components/ConnectTile"
import {Link} from 'react-router-dom';
export default function(){
    return (
        <div style={{marginBottom:'2rem'}}>
            <Dashboard/>
            <h1>Connect</h1>

            <Link to = '/profile'  style={{ textDecoration: 'none', marginTop:'2rem' }}>
                <div className = "textBoxWarning" >
                Remember to Update Your Calendly in Profile!
                </div>       
            </Link>

            <h3 style={{marginTop:'2rem'}}>Your Requests</h3>
            <ConnectTile type = "request"/>
            {/* style ={{backgroundColor:'#29B4A326'}} */}
         
            <h2 style={{marginTop:'2rem'}}>Recommended for You</h2>
            <ConnectTile/>
            
            {/* <h2>Search By</h2> */}
        </div>
    )
}