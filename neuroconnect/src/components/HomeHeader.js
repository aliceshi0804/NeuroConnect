import React from 'react'
import { Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import Button from "./Button"
import '../index.css'

export default function Home() {
    return (
    <div class = "homeHeader">
        <Link to = '/'>
            <img src = {Logo}/>
        </Link>
        <div class = "buttonHeader">
            <Link to = '/Login'  style={{ textDecoration: 'none' }}>
                <Button name = "Log In" color = "white"/>
            </Link>
            <Link to = '/Signup'  style={{ textDecoration: 'none' }}>
                <Button name="Sign Up" color = "teal"/>
            </Link>
        </div>   
    </div>
    )
}