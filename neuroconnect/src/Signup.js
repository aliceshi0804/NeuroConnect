import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Button,Alert } from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom';
import LogoHeader from './components/LogoHeader'
import {Grid} from '@mui/material';
import NumberSignUp from './components/NumberSignUp'
import maleTablet from './images/maleTablet.png'
import HomeRectangleFeature from './components/HomeRectangleFeature'
import CareerInterestData from './components/CareerInterestData'
import './index.css'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const pronounRef = useRef();
    const mentorRef = useRef();
    const neurodivergentRef=useRef();
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()
    const Interest = CareerInterestData
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
    <h2 style={{margin:'2rem'}}>Let's get you started!</h2>
    <Form onSubmit={handleSubmit}>
    {error && <Alert variant="danger">{error}</Alert>}
        <Grid container style={{marginBottom:'1rem', marginLeft:'2rem'}}>
            <Grid item xs={6}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '1'/>
                    <h3 style={{marginLeft:'2rem'}}>I'll be using Neuroconnect as a </h3>
                </div>

                <Grid container style={{marginBottom:'1rem', marginLeft:'12rem'}}>
                    <Grid item xs = {3}>
                        <Button  disabled={loading} type="submit">
                            Mentor
                        </Button>
                    </Grid>

                    <Grid item xs = {3}>
                        <Button  disabled={loading} type="submit">
                            Mentee
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '2'/>
                    <h3 style={{marginLeft:'2rem'}}>Do you identify as neurodivergent?</h3>
                </div>

                <Grid container style={{marginBottom:'2rem', marginLeft:'12rem'}}>
                    <Grid item xs = {3}>
                        <Button  disabled={loading} type="submit">
                            Yes
                        </Button>
                    </Grid>

                    <Grid item xs = {3}>
                        <Button  disabled={loading} type="submit">
                            No
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '3'/>
                    <h3 style={{marginLeft:'2rem'}}>What career field(s) do you work in, or interest you?</h3>
                </div>
            </Grid>

            {/* <Grid item xs = {12} style={{marginBottom:'1rem', marginLeft:'2rem'}}>
                <Form.Group id="name">
                    <Form.Label>
                        Search Fields By Keyword
                    </Form.Label>
                    <div>
                        <Form.Control class = 'textBox' required id="inputCareer" aria-describedby="inputCareer"/>
                    </div>
                </Form.Group>
            </Grid> */}

            <Grid item xs = {12} style={{textAlign:'center', marginBottom:'2rem'}}>
                <Form.Group id="name" style={{marginBottom:'1rem'}}>
                    <Form.Label>
                        Search Fields By Keyword
                    </Form.Label>
                    <div>
                        <Form.Control class = 'textBox' required id="inputCareer" aria-describedby="inputCareer"/>
                    </div>
                </Form.Group>
                <select multiple class = "careerScroll">
                    {CareerInterestData && CareerInterestData.map((item) => (<option value={item.number}>{item.name}</option>))}
                </select>
            </Grid>

            <Grid item xs={12}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '4'/>
                    <h3 style={{marginLeft:'2rem'}}>Almost done! Add in your personal details and you're good to go!</h3>
                </div>
            </Grid>

            <Grid item xs={6}>
                    <HomeRectangleFeature image = {maleTablet} imageCap = "IMAGE CAPTION: Male mentee on tablet looking for a mentor"/>
                </Grid>

            <Grid item xs={6}>
                <Form.Group id="name">
                    <Form.Label>
                        First and Last Name
                    </Form.Label>
                    <div>
                        <Form.Control class = 'textBox' ref={nameRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
                </Form.Group>

                <Form.Group id="pronouns">
                    <Form.Label>
                        Pronouns
                    </Form.Label>
                    <div>
                        <Form.Control class = 'textBox' ref={pronounRef} required id="inputPronouns" aria-describedby="inputPronouns"/>
                    </div>
                </Form.Group>

                <Form.Group id="email">
                    <Form.Label>
                        Email
                    </Form.Label>
                    <div >
                        <Form.Control class = 'textBox' ref={emailRef} required id="inputEmail" aria-describedby="inputEmail"/>
                    </div>
                </Form.Group>

                <Form.Group id="password">
                    <Form.Label>
                        Input Password
                    </Form.Label>
                    <div >
                        <Form.Control class = 'textBox' ref={passwordRef} required id="inputPassword" aria-describedby="inputPassword"/>
                    </div>
                </Form.Group>

                <Form.Group id="password-confirm">
                    <Form.Label>
                        Confirm Password
                    </Form.Label>
                    <div >
                        <Form.Control class = 'textBox' ref={passwordConfirmRef} required id="confirmPassword" aria-describedby="confirmPassword"/>
                    </div>
                </Form.Group>
            </Grid>
        </Grid>
    </Form>

        <div style={{margin:'2rem'}}>
            <Button class="buttonCircle" disabled={loading} type="submit">
                Sign Up
            </Button>
        </div>
        
        <div style={{margin:'2rem'}}>
            <h3>Have an account? <Link to="/login" style={{textDecoration:'none'}}>Login!</Link></h3>
        </div>
        </>  
        
    )
}
