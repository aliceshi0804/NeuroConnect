import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Alert , Button} from 'react-bootstrap'
import { Link, useHistory, Redirect } from 'react-router-dom';
import {useAuth} from './contexts/AuthContext'
import LogoHeader from './components/LogoHeader'
import HomeRectangleFeature from './components/HomeRectangleFeature'
import {Grid} from '@mui/material';
import maleTablet from './images/maleTablet.png'

export default function Login() {
    const emailRef = useRef();
    const passwordRef =useRef();
    const {login} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const [loggedIn, setLogIn] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log('loading state after setLoading(true)', loading)
            history.push("/");
            console.log("logged in after auth",loggedIn)
        }
        catch (error){
            console.log(error)
            setError(stringify(error.message))
        }
        setLoading(false)
        setLogIn(true)
        history.push("/learn")
    }
    return (
        <>
        {/* // <Dashboard/> */}
        <LogoHeader/>
    <Grid container spacing={6}>
        <Grid item xs = {6}>
            <h2>Welcome!</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>
                            email
                        </Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>
                            password
                        </Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
            <div>
            <Button style={{background:'#2CC9B6', textDecoration:'none',border:'none'}} className = "buttonCircle" disabled={loading} type="submit" >
                    Log In 
            </Button>
            </div>
        </Form>
    </Grid>

    <Grid item>
        <HomeRectangleFeature image = {maleTablet} imageCap = "IMAGE CAPTION: Male mentee on tablet looking for a mentor"/>
    </Grid>
</Grid>

<div>
    <Link to="/ForgotPassword" style={{ color:"#2CC9B6",textDecoration: 'none' }}>Forgot Password?</Link>
</div>

<div>
    <Link to="/SignUp" style={{ color:"#2CC9B6",textDecoration: 'none' }}>Want to Sign Up?</Link>
</div>
        </>  
    )
}

