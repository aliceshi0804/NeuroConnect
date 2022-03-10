import React, {useState} from 'react'
import { stringify } from '@firebase/util';
import { AppBar, Toolbar, Tab } from '@mui/material';
import { Link, useHistory } from 'react-router-dom'
import '../index.css'
import Logo from '../images/logo.png'
import {useAuth} from '../contexts/AuthContext'

export default function Dashboard(){
    const [value, setValue] = React.useState(0);
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const {logout} = useAuth()
    async function handleLogOut(e){
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await logout()
            // history.push("/");
        }
        catch (error){
            console.log(error)
            setError(stringify(error.message))
        }
    }

    return(
        <div>
        <Toolbar style={{marginBottom:'1rem'}}>
            <Link to = '/'>
                <img src = {Logo}/>
            </Link>
            <Tab value={value} onChange={handleChange} aria-label="profile" sx={{ fontWeight: 'bold', ml:25, color:'black' }} label = "profile" component = {Link} to = "/profile" />
            <Tab aria-label="onboarding" sx={{ fontWeight: 'bold', color:'black' }} label = "onboarding" component = {Link} to = "/onboarding"/>
            <Tab aria-label="learn" sx={{ fontWeight: 'bold', color:'black' }} label = "learn" component = {Link} to = "/learn"/>
            <Tab aria-label="connect" sx={{ fontWeight: 'bold', color:'black' }} label = "connect" component = {Link} to = "/connect"/>
            {/* <Tab aria-label="resources" sx={{ fontWeight: 'bold', color:'black' }} label = "resources" component = {Link} to = "/resources"/>
            <Tab aria-label="chat" sx={{ fontWeight: 'bold', color:'black' }} label = "chat" component = {Link} to = "/chat"/> */}
            <Tab onClick = {handleLogOut} aria-label="sign out" sx={{ fontWeight: 'bold', color:'black' }} label = "sign out"/>
        </Toolbar>
        </div>
    )
}
