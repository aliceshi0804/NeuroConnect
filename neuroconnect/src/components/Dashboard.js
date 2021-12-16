import React from 'react'
import { AppBar, Toolbar, Tab  } from '@mui/material';
import { Link } from 'react-router-dom'
import '../index.css'
import Logo from '../images/logo.png'

export default function Dashboard(){
    return(
        <div>
                <AppBar position = "flex" className = 'appBarSize'> 
                    <div class = "homeHeader">
                        <Link to = '/'>
                            <img src = {Logo}/>
                        </Link>
                    </div>

                    <Toolbar>
                        {/* <Tab label = "Home" component = {Link} to = "./"/> */}
                        <Tab label = "learn" component = {Link} to = "./learn"/>
                        <Tab label = "connect" component = {Link} to = "./connect"/>
                        <Tab label = "network" component = {Link} to = "./network"/>
                        <Tab label = "chat" component = {Link} to = "./chat"/>
                    </Toolbar>
                </AppBar>
            <br/>
        </div>
    )
}
