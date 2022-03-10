import React , {useRef} from 'react'
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import {Form} from 'react-bootstrap'
import Button from './Button'
import '../index.css'
export default function(){
    const currentPasswordRef =useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();
    return(
        // <Paper class= 'contentPaperSize' variant="outlined">
            <Grid container>
                <Grid item xs = {6} style = {{marginRight:'1rem'}}>
                    <h1>Change Password</h1>
                <Form.Group style = {{marginTop:'2rem'}} id="password" role="form">
                    <Form.Label>
                        Input Current Password
                    </Form.Label>
                    <div>
                        <Form.Control className = 'textBox'  type = "password" ref={currentPasswordRef} required id="inputPassword" aria-describedby="inputPassword"/>
                    </div>
                </Form.Group>

                <Form.Group style = {{marginTop:'2rem'}} id="password" role="form">
                    <Form.Label>
                        Input New Password
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox'  type = "password" ref={passwordRef} required id="inputPassword" aria-describedby="inputPassword"/>
                    </div>
                </Form.Group>

                <Form.Group style = {{marginTop:'2rem'}} id="password-confirm" role="form">
                    <Form.Label>
                        Confirm Password
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' type = "password" ref={passwordConfirmRef} required id="confirmPassword" aria-describedby="confirmPassword"/>
                    </div>
                </Form.Group>
                <Button name = 'Update' color = 'teal'/>
            </Grid>

            <Grid item xs = {4}>
                <h1 style = {{marginLeft:'2rem'}}>Password Requirements</h1>
                <ul style = {{marginLeft:'4rem'}}>
                    <li>
                        1 special character
                    </li>
                    <li>
                        1 numeric
                    </li>
                    <li>
                        1 uppercase letter
                    </li>
                    <li>
                        10 characters long
                    </li>
                </ul>
            </Grid>

        </Grid>
        // </Paper>
    
    )
}