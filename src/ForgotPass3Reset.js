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
    const passRef = useRef();
    const passConfirmRef = useRef();
    return (
    <div>
        <LogoHeader/>
     
        <Grid container spacing = {6} style = {{marginTop:'2rem'}}>
            <Grid item xs = {6}>
            <HomeRectangleFeature image = {maleTablet} imageCap = "IMAGE CAPTION: Male mentee on tablet looking for a mentor"/>
            </Grid>

            <Grid item xs = {6}>
                <h1>Now, reset your password!</h1>
                <Form.Group id="password" role="form">
                    <Form.Label>
                        new password
                    </Form.Label>
                <div>
                <Form.Control className = 'textBox'  type = "password" ref={passRef} required id="inputPassword" aria-describedby="inputPassword"/>
                
                </div>
                </Form.Group>

                <Form.Group id="password-confirm" role="form">
                    <Form.Label>
                        confirm new password
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' type = "password" ref={passConfirmRef} required id="confirmPassword" aria-describedby="confirmPassword"/>
                
                    </div>
                </Form.Group>

                <Link to = '/login' style={{ textDecoration: 'none' }}>                
                <Button color = 'white' name = 'Reset '/>
                </Link>
            </Grid>
        </Grid>
    </div>
    )
}