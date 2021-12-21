import React from 'react'
import { AppBar, Toolbar, Tab } from '@mui/material';
import { Link } from 'react-router-dom'
import '../index.css'
import Logo from '../images/logo.png'

export default function Dashboard(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      //, backgroundColor:'#2CC9B633'
    };

    return(
        <div>
        <Toolbar style={{marginBottom:'1rem'}}>
            <Link to = '/'>
                <img src = {Logo}/>
            </Link>
            <Tab value={value} onChange={handleChange} aria-label="profile" sx={{ fontWeight: 'bold', ml:25, color:'black' }} label = "profile" component = {Link} to = "./profile" />
            <Tab aria-label="learn" sx={{ fontWeight: 'bold', color:'black' }} label = "learn" component = {Link} to = "./learn"/>
            <Tab aria-label="connect" sx={{ fontWeight: 'bold', color:'black' }} label = "connect" component = {Link} to = "./connect"/>
            <Tab aria-label="resources" sx={{ fontWeight: 'bold', color:'black' }} label = "resources" component = {Link} to = "./resources"/>
            <Tab aria-label="chat" sx={{ fontWeight: 'bold', color:'black' }} label = "chat" component = {Link} to = "./chat"/>
            <Tab aria-label="sign out" sx={{ fontWeight: 'bold', color:'black' }} label = "sign out"/>
        </Toolbar>
        </div>
    )
}
