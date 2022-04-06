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
    const codeRef = useRef();
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
                            Verify it's you
                        </Form.Label>
                        <div>
                        <Form.Control className = 'textBox' ref={codeRef} required id="inputEmail" aria-describedby="inputEmail"/>
                    </div>
                    </Form.Group>

                <p style = {{marginTop:'1rem'}}>If the code isn’t working, try re-sending a new email. If you don’t see the email, check your spam and other inboxes. </p>
                <Link to = '/forgotPasswordReset' style={{ textDecoration: 'none' }}>
                <Button color = 'white' name = 'Verify'/>
                </Link>
            </Grid>
        </Grid>
    </div>
    )
}