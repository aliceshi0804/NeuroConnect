import React from 'react'
import { Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import '../index.css'

export default function Home() {
    return (
        //flexbox 
    <div>
        <div class = "homeHeader">
            <Link to = '/'>
                <img src = {Logo}/>
            </Link>
        </div>
    </div>
    )
}