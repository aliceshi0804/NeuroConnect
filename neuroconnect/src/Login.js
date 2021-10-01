import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Button,Card,Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from './contexts/AuthContext'


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
        <Card>
            <Card.Body>
                <h2>Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>
                            password
                        </Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                        
                    </Form.Group>
                    <Button disabled={loading} type="submit">
                        Log In
                    </Button>
                </Form>
            </Card.Body>
            
    </Card>
        <div>
            Need an account? <Link to="/signup">Signup</Link>
        </div>
        </>  
        
    )
}
