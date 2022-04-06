import React, {useRef} from 'react'
import {Grid} from '@mui/material';
import maleTablet from './images/maleTablet.png'
import HomeRectangleFeature from './components/HomeRectangleFeature'
import {Form, Alert} from 'react-bootstrap'
import { Link, useHistory, Redirect } from 'react-router-dom';
import LogoHeader from "./components/LogoHeader"
import Button from './components/Button'
import {useAuth} from './contexts/AuthContext'

export default function(){
    const emailRef = useRef();
    function handleSubmit(){
        <Redirect to = '/forgotPasswordVerify'></Redirect>
    }
    return (
    <div>
        <LogoHeader/>
     
        <Grid container spacing = {6} style = {{marginTop:'2rem'}}>
            <Grid item xs = {6}>
            <HomeRectangleFeature image = {maleTablet} imageCap = "IMAGE CAPTION: Male mentee on tablet looking for a mentor"/>
            </Grid>

            <Grid item xs = {6}>
                <h1>Forgot Password</h1>
                <Form.Group id="email">
                        <Form.Label>
                            email
                        </Form.Label>
                        <div>
                        <Form.Control className = 'textBox' type = "email" ref={emailRef} required id="inputEmail" aria-describedby="inputEmail"/>
                    </div>
                    </Form.Group>

                <p style = {{marginTop:'1rem'}}>We’ll send you an email with a code (the one you used to set up your account) to reset it. </p>
               <Link to = '/forgotPasswordVerify' style= {{textDecoration:'none'}}>
               <Button color = 'white' name = 'Send Email'/>
               </Link>
            </Grid>
        </Grid>
    </div>
    )
}