import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Alert } from 'react-bootstrap'
import Button from "../src/components/Button"
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from './contexts/AuthContext'
import LogoHeader from './components/LogoHeader'
import HomeRectangleFeature from './components/HomeRectangleFeature'
import {Grid} from '@mui/material';
import sampleImage from './images/sampleRectangle.png'

export default function Login() {
    const emailRef = useRef();
    const passwordRef =useRef();

    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
            
        }
        catch (error){
            console.log(error)
            setError(stringify(error.message))
        }
        setLoading(false)
    }
    return (
        <>
        {/* // <Dashboard/> */}
        <LogoHeader/>
        <Grid container spacing = {4}>
            <Grid item spacing = {6}>
                <h2>Welcome!</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className = "textBox" id="email">
                            <Form.Label>
                                email
                            </Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Form.Group className = "textBox" id="password">
                            <Form.Label>
                                password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>

                        <div className = 'homeHeader'>
                    <Link to = '/learn'  style={{ textDecoration: 'none' }}>
                        <Button name = "Log In" color = "white"/>
                    </Link>
                    <Link to = '/signup'  style={{ textDecoration: 'none' }}>
                        <Button name="Sign Up" color = "white"/>
                    </Link>
                        </div>
                    </Form>
            </Grid>

            <Grid item spacing = {2}>
                <HomeRectangleFeature image = {sampleImage} />
            </Grid>
        </Grid>
        <div>
            <Link to="/ForgotPassword">Forgot Password?</Link>
        </div>

        </>  
    )
}

