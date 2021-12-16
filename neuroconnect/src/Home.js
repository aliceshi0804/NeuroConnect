import React from 'react'
import HomeHeader from "./components/HomeHeader"
import './index.css'
import {Grid} from '@mui/material';
import webPeople from './images/webPeople.png'
import globePeople from './images/globePeople.png'
import mentor from './images/Mentors.png'
import mentee from './images/Mentees.png'
import volunteer from './images/Volunteers.png'
import { Link} from 'react-router-dom';
import Button from "./components/Button"
import HomeRectangleFeature from './components/HomeRectangleFeature';
import HomeCircleFeature from './components/HomeCircleFeature';

export default function Home() {
    return (
    <div>
        <HomeHeader/>
        <Grid container style={{marginBottom:'2rem', marginLeft:'2rem'}}>
            <Grid item xs = {4}>
                <div className = "serviceStatement">
                    <h2>About NeuroConnect</h2>
                    <h3>
                    Learn. Mentor. Volunteer. Connect.  
                    </h3>
                    <p>
                    NeuroConnect aims to connect neurodivergent students with other neurodivergent mentors who 
                    are already working professionally. NeuroConnect was built
                     because of the disparities in employment for neurodivergent students. 
                     Currently, only 44% of adults with neurodevelopmental disabilities aged 21-64 are in the workforce, 
                     whereas 83% of non-disabled adults are in the workforce.
                    </p>
                </div>
            </Grid>
            
            <Grid item xs = {6}>
                <img src = {webPeople} class = "sideImage"/>
                <p> IMAGE CAPTION: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </Grid>
        </Grid>

        <Grid container style={{marginLeft:'2rem', marginBottom:'2rem'}}>
                <h2>Our Services</h2>
                <HomeRectangleFeature image = {globePeople} imageCap = "IMAGE CAPTION: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." 
                text = "Mentees in the NeuroConnect program will get to chat with potential mentors and meet with a neurodivergent mentor 1:1 of similar professional interests for a total of 5 sessions. NeuroConnect also provides free mock interview sessions for students and interview feedback."/>
        </Grid>

        <h2 style ={{marginLeft:'2rem', marginBottom:'2rem'}}>What To Expect</h2>
        <Grid container spacing = {3} style={{ marginLeft:'1rem',marginBottom:'2rem'}}>
            <Grid item xs = {4}>
                <HomeCircleFeature image = {mentee} imageCap = "IMAGE CAPTION: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." 
                text = "Search for and chat with potential neurodivergent mentors, and then schedule a time to meet."/>
            </Grid>
            <Grid item xs = {4}>
                <HomeCircleFeature image = {mentor} imageCap = "IMAGE CAPTION: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." 
                text = "Learn the materials in the modules and meet neurodivergent mentees.  "/>
            </Grid>
            <Grid item xs = {4}>
                <HomeCircleFeature image = {volunteer} imageCap = "IMAGE CAPTION: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." 
                text = "Volunteer to provide mock interviews for neurodivergent mentees."/>
            </Grid>
        </Grid>
        <h1 style={{ textAlign: 'center'}}> Sign up to be a mentee, mentor, or volunteer today! </h1>
        <div class = "buttonHeader" style = {{marginBottom: '3rem'}}>
                <Link to = '/login'  style={{ textDecoration: 'none' }}>
                    <Button name = "Log In" color = "white"/>
                </Link>
                <Link to = '/signup'  style={{ textDecoration: 'none' }}>
                    <Button name="Sign Up" color = "teal"/>
                </Link>
        </div>
    </div>
    )
}