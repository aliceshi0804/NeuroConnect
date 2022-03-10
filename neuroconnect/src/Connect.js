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
            <div style={{ overflowX:"scroll", display:'flex', marginRight:'2rem'}}>
                    <div style = {{marginRight:'2rem'}}>
                    <ConnectTile type = "request"/>
                    </div>

                    <div style = {{marginRight:'2rem'}}>
                    <ConnectTile type = "request"/>
                    </div>

                    <div style = {{marginRight:'2rem'}}>
                    <ConnectTile type = "request"/>
                    </div>

                    <div style = {{marginRight:'2rem'}}>
                    <ConnectTile type = "request"/>
                    </div>

                    <div style = {{marginRight:'2rem'}}>
                    <ConnectTile type = "request"/>
                    </div>
            </div>
            {/* style ={{backgroundColor:'#29B4A326'}} */}
         
            <h2 style={{marginTop:'2rem'}}>Recommended for You</h2>
            <div style={{overflowX:"scroll", display:'flex', marginRight:'2rem'}}>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
                <div style={{marginRight:'2rem'}}>
                    <ConnectTile/>
                </div>
            </div>
            
            {/* <h2 style={{marginTop:'2rem'}}>Search By</h2> */}
        </div>
    )
}