import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Button,Alert } from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom';
import LogoHeader from './components/LogoHeader'
import {Grid} from '@mui/material';
import NumberSignUp from './components/NumberSignUp'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const mentorRef = useRef();
    const neurodivergentRef=useRef();
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        let data = {
            Name: nameRef.current.value,
            Mentor: mentorRef.current.value,
            Neuro: neurodivergentRef.current.value
        }
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value,data)
            setLoading(true)
            
        }
        catch (error){
            console.log(error)
            setError(stringify(error.message))
        }

        setLoading(false)
        history.push("/")
    }
    return (
        <>
        <LogoHeader/>
        <NumberSignUp number = '1'/>
        <h2>Let's get you started!</h2>
                <Grid container style={{marginBottom:'2rem', marginLeft:'2rem'}}>
                    <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Grid item xs = {6}>
                        <Form.Group id="name">
                                <Form.Label>
                                    First and Last Name
                                </Form.Label>
                                <Form.Control ref={nameRef} required/>
                        </Form.Group>
                    </Grid>

                    <Grid item xs ={6}>
                    <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                            
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>
                                Password confirmation
                            </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Mentor or Mentee?
                            </Form.Label>
                            <Form.Control ref={mentorRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Neurodivergent?
                            </Form.Label>
                            <Form.Control ref={neurodivergentRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Career Field or Career Interest? 
                            </Form.Label>
                            <Form.Control ref={neurodivergentRef} required/>
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} type="submit">
                            Sign up
                        </Button>
                    </Grid>
                    </Form>
                </Grid>
        <div>
            Have an account? <Link to="/login">Login</Link>
        </div>
        </>  
        
    )
}
