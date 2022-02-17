import { stringify } from '@firebase/util';
import React, {useRef,useState} from 'react'
import {Form, Button,Alert, ToggleButton, ButtonGroup, ToggleButtonGroup} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom';
import LogoHeader from './components/LogoHeader'
import {Grid} from '@mui/material';
import NumberSignUp from './components/NumberSignUp'
import maleTablet from './images/maleTablet.png'
import HomeRectangleFeature from './components/HomeRectangleFeature'
import CareerInterestData from './components/CareerInterestData'
import './index.css'
import { PersonOutlineRounded } from '@mui/icons-material';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();

    const nameRef = useRef();
    const pronounRef = useRef();
    // const mentorRef = useRef();
    const neurodivergentSpecific = useRef('none');
    const [neurodivergentRef, setNeurodivergentRef]=React.useState(false);

    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const history = useHistory()

    const [stylePos, setStylePos] = useState("buttonCircle");
    const [checked, setChecked] = useState(false);
    const [checkedNeuro, setCheckedNeuro] = React.useState();
    const [radioPosValue, setRadioPosValue] = React.useState(false);
    const [positionValue, setPosValue] = useState('');
    const [careerInterest,setCareerInterest] = React.useState([]);
    
    const handlePosChange = (selectedPosition,selectedValue) => {
      setPosValue(selectedPosition)
      setRadioPosValue(selectedValue)
      setStylePos("buttonCircleChange")
    //   console.log("Position selected:", selectedPosition)
    }

    const handleNeuroChange = (selectedStatus) => {
        // console.log("selected ",selectedStatus)
        setCheckedNeuro(selectedStatus)
        setNeurodivergentRef(selectedStatus)
    }

    const handleCareerInterest = (careerObj) =>{
        // console.log("an option was selected")
        // console.log('option name: ', careerObj.name)
        // console.log("option status before: ", careerObj.selected)
        careerObj.selected = !careerObj.selected
        // console.log("option status after: ", careerObj.selected)

        // select option
        {careerObj.selected && setCareerInterest(careerInterest.concat(careerObj.name))}
        // setCareerInterest(careerInterest.concat(careerObj.name))

        //deselect option 
        {careerObj.selected == false &&  setCareerInterest(careerInterest.filter(option => option != careerObj.name))}
    }

    // console.log("careerInterest Array",careerInterest)
  
    const positions = [
        { name: 'Mentor', value: '1' },
        { name: 'Mentee', value: '2' },
        { name: 'Volunteer', value: '3' },
      ];

      const neuro = [
        { status: 'Yes', value: true },
        { status: 'No', value: false }
      ];

    async function handleSubmit(e){
        
        e.preventDefault()
        let data = {
            Name: nameRef.current.value,
            Neuro: neurodivergentRef,
            NeuroSpecific: neurodivergentSpecific.current,
            Pronouns:pronounRef.current.value,
            Position: positionValue,
            Interest: careerInterest
        }
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            // console.log("Processing")
            // console.log("Person", data)
            await signup(emailRef.current.value, passwordRef.current.value,data)
            history.push("/learn");
        }
        catch (error){
            console.log(error)
            setError(stringify(error.message))
        }

        setLoading(false)
    }

    return (
    <>
    <LogoHeader/>
    <h2 style={{margin:'2rem'}}>Let's get you started!</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Grid container style={{marginBottom:'1rem', marginLeft:'2rem'}}>
            <Grid item xs={6}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '1'/>
                    <h3 style={{marginLeft:'2rem', marginBottom:'2rem'}}>I'll be using Neuroconnect as a </h3>
                </div>

                <div style={{display:'flex', marginLeft:'2rem', marginBottom:'2rem'}}>
                <ButtonGroup>
                    {positions.map((radio, idx) => (
                    <ToggleButton 
                        style={{marginLeft:'2rem', marginRight:'2rem',textAlign: 'center', fontSize:'1.5rem',boxSizing: 'border-box', borderRadius:'2.3rem',border:'3px solid black'}}
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant= "outline-dark"
                     
                        // bsPrefix="buttonCircle"
                        name="radio"
                        value={radio.value}
                        checked={radioPosValue === radio.value}
                        onChange={(e) => handlePosChange(radio.name,radio.value)}
                    >
                    {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
                </div>
            </Grid>

            <Grid item xs={6} pl={'2rem'}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '2'/>
                    <h3 style={{marginLeft:'2rem'}}>Do you identify as neurodivergent?</h3>
                </div>

           
                <Grid container style={{marginBottom:'2rem', marginLeft:'6rem'}} alignItems='center'>
                <ButtonGroup>
                {neuro.map((NeuroStatus, idx) => (
                    <ToggleButton 
                        style={{marginLeft:'7rem', marginRight:'2rem',textAlign: 'center', fontSize:'1.5rem',boxSizing: 'border-box', borderRadius:'2.3rem',border:'3px solid black'}}
                        key={idx}
                        type="radio"
                        variant= "outline-dark"
                     
                        // bsPrefix="buttonCircle"
                        name="radio"
                        value={NeuroStatus.status}
                        checked={checkedNeuro === NeuroStatus.value}
                        onChange={(e) =>  handleNeuroChange(NeuroStatus.value)}
                    >
                    {NeuroStatus.status}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
                {neurodivergentRef && 
                       <div>
                           {/* <h3>If you are comfortable sharing, please share what you identify with (ie: autism, ADHD)</h3> */}
                           <Form.Group id="neuroSpecific" role="form">
                            <Form.Label>
                            If you are comfortable, please share what neurodivergences or other disabilities you identify with:
                            </Form.Label>
                            <div>
                            <Form.Control className = 'textBox' ref={neurodivergentSpecific} required id="inputNeurodivergent" aria-describedby="inputNeurodivergent"/>
                            </div>
                        </Form.Group>
                       </div>
            }

                </Grid>
            </Grid>

            <Grid item xs={12}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '3'/>
                    <h3 style={{marginLeft:'2rem'}}>What career field(s) do you work in, or interest you?</h3>
                </div>
            </Grid>

            {/* <Form.Group id="keyword" style={{marginBottom:'1rem', marginLeft:'9rem'}}>
                    <Form.Label>
                        Search Fields By Keyword
                    </Form.Label>
                    <Form.Control className = 'textBox' required id="inputCareer" aria-describedby="inputCareer"/>
            </Form.Group> */}

            <Grid item xs = {12} style={{textAlign:'center', marginBottom:'2rem'}}>
                <div className = "careerScroll" style = {{overflowY:"scroll"}} aria-describedby="Career Interests">
                    {CareerInterestData && 
                    CareerInterestData.map(
                        (item,idx) => (
                            <div>
                                <Form.Group key = {idx}>
                                <Form.Check style = {{marginTop:'1rem', marginLeft:'7rem', fontSize:'1.5rem'}} type = "checkbox" 
                                    label = {item.name} onChange={()=>{handleCareerInterest(item)}} id={item.name} aria-describedby={item.name}>
                                    {/* <Form.Check style = {{marginTop:'1rem', marginLeft:'7rem', fontSize:'1.5rem'}} 
                                     onChange={()=>{handleCareerInterest(item)}} required id={item.name} aria-describedby={item.name}>
                                        
                                        <Form.Check.Input type = "checkbox" value={item.number}/>
                                        <Form.Check.Label>{item.name}</Form.Check.Label> */}
                                    </Form.Check>
                                </Form.Group>
                            </div>
                        ))}
                </div>
            </Grid>

            <Grid item xs={12}>
                <div style={{display:'flex'}}>
                    <NumberSignUp number = '4'/>
                    <h3 style={{marginLeft:'2rem'}}>Almost done! Add in your personal details and you're good to go!</h3>
                </div>
            </Grid>

            <Grid item xs={6} style={{marginTop:'1rem'}}>
                    <HomeRectangleFeature image = {maleTablet} imageCap = "IMAGE CAPTION: Male mentee on tablet looking for a mentor"/>
            </Grid>

            <Grid item xs={6}>
                <Form.Group id="name" role="form">
                    <Form.Label>
                        First and Last Name
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' ref={nameRef} required id="inputName" aria-describedby="inputName"/>
                    </div>
                </Form.Group>

                <Form.Group id="pronouns" role="form">
                    <Form.Label>
                        Pronouns
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox'  ref={pronounRef} required id="inputPronouns" aria-describedby="inputPronouns"/>
                    </div>
                </Form.Group>

                <Form.Group id="email" role="form">
                    <Form.Label>
                        Email
                    </Form.Label>
                  <div>
                  <Form.Control className = 'textBox' type = "email"  ref={emailRef} required id="inputEmail" aria-describedby="inputEmail"/>
                
                  </div>
                  </Form.Group>

                <Form.Group id="password" role="form">
                    <Form.Label>
                        Input Password
                    </Form.Label>
                <div>
                <Form.Control className = 'textBox'  type = "password" ref={passwordRef} required id="inputPassword" aria-describedby="inputPassword"/>
                
                </div>
                </Form.Group>

                <Form.Group id="password-confirm" role="form">
                    <Form.Label>
                        Confirm Password
                    </Form.Label>
                    <div>
                    <Form.Control className = 'textBox' type = "password" ref={passwordConfirmRef} required id="confirmPassword" aria-describedby="confirmPassword"/>
                
                    </div>
                </Form.Group>
                <div style={{marginLeft:'13rem'}}>
                    <Button className="buttonCircle" disabled={loading} type="submit" >
                        Sign Up
                    </Button>
                </div>
            </Grid>
        </Grid>
    </Form>
        
        <div style={{textAlign:'center'}}>
            <p>Already have an account? <Link to="/login" style={{textDecoration:'none'}}>Login Here!</Link></p>
        </div>
        </>  
        
    )
}
