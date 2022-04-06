import React , {useRef} from 'react'
import Button from './Button'
import {Form} from 'react-bootstrap'
import {Grid} from '@mui/material';
import '../index.css'
export default function(){
    const updateFirstNameRef = useRef()
    const updateLastNameRef = useRef()
    const updateCalendlyRef = useRef()
    const updateEmailRef = useRef()
    const updateCareerRef = useRef()
    const updateIDRef = useRef()
    const updateRoleRef = useRef()
    const updatePronounRef=useRef()
    const updateBioRef = useRef()
    return(
        // <Paper class= 'contentPaperSize'  variant="outlined">
        <div>
            <Grid container>
                <Grid item xs = {4}  style = {{marginRight:'6rem'}}>
            <h1>First Name</h1>
            <h4>first name</h4>
            <Form.Group id="name" role="form">
                    <Form.Label>
                        Update First Name
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} ref={updateFirstNameRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
            </Form.Group>

            <h1>Email</h1>
            <h4>current email</h4>
            <Form.Group id="email" role="form">
                    <Form.Label>
                        Update Email
                    </Form.Label>
                <div>
                  <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} type = "email"  ref={updateEmailRef} required id="inputEmail" aria-describedby="inputEmail"/>
                </div>
            </Form.Group>

            <h1>Careers</h1>
            <h4>current careers</h4>
            <Form.Group id="career" role="form">
                    <Form.Label>
                        Update Careers
                    </Form.Label>
                <div>
                  <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} ref={updateCareerRef} required id="inputCareer" aria-describedby="inputCareer"/>
                </div>
            </Form.Group>

            <h1>I identify as ... </h1>
            <h4>current identifications</h4>
            <Form.Group id="email" role="form">
                    <Form.Label>
                        Update Identification
                    </Form.Label>
                <div>
                  <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}}  ref={updateIDRef} required id="inputID" aria-describedby="inputID"/>
                </div>
            </Form.Group>
            </Grid>

            <Grid item xs = {5} style = {{marginLeft:'6rem'}}>
            <h1>Last Name</h1>
            <h4>last name</h4>

            <Form.Group id="name" role="form">
                    <Form.Label>
                        Update Last Name
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} ref={updateLastNameRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
            </Form.Group>      

            <h1>Role</h1>
            <h4>current role</h4>
            <Form.Group id="email" role="form">
                    <Form.Label>
                        Update Email
                    </Form.Label>
                <div>
                  <Form.Control className = 'textBox' type = "email" style = {{marginBottom:'1rem'}} ref={updateRoleRef} required id="inputEmail" aria-describedby="inputEmail"/>
                </div>
            </Form.Group>

            <h1>Pronouns</h1>
            <h4>current pronouns</h4>
            <Form.Group id="updatepronouns" role="form">
                    <Form.Label>
                        Update Pronouns
                    </Form.Label>
                <div>
                  <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} ref={updatePronounRef} required id="inputPronouns" aria-describedby="inputPronouns"/>
                </div>
            </Form.Group>

            <h1>Calendly Username</h1>
            <h4>username</h4>
            <Form.Group id="name" role="form">
                    <Form.Label>
                        Update Calendly Username
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' style = {{marginBottom:'1rem'}} ref={updateCalendlyRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
            </Form.Group>
            </Grid>
            </Grid>

            <h1>Bio (add a few sentences about yourself)</h1>
            <h4>current bio</h4>
            <Form.Group id="name" role="form">
                    <Form.Label>
                        Add to your bio!
                    </Form.Label>
                    <div>
                    <Form.Control className = 'bioTextBox' style = {{marginBottom:'1rem'}} ref={updateBioRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
            </Form.Group>

            <Button color = "teal" name = "Update" />
        </div>
       
    )
}