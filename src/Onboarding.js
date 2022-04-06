import React from 'react'
import Dashboard from "./components/Dashboard"
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../src/index.css'
export default function(){
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1rem solid #7E28C1`,
        '&:not(first-child:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          
      }));

      const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
        background:'#7E28C1'
      }));

      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        background:'#7E28C133'
      }));

    return (
    <div>
        <Dashboard/>
        <h1 style={{ marginBottom:'2rem'}}>Onboarding Instructions and Expectations </h1>
        <div className = "textBoxWarning" style = {{marginBottom:'2rem'}} >
            Please review these points carefully for your role! 
        </div>
        <Accordion 
         sx = {{borderRadius: '14px', marginBottom: '2rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' , width: '65.88px', height: '36px'}}/>}
          aria-controls="mentorExpectations"
          id="forMentors "
        >
            <h2 style = {{color:'white'}}>For Mentors</h2>
           
        </AccordionSummary>
       
        <AccordionDetails>
          <h2>Weekly Meetings with Mentees </h2>
          <p>We expect you to meet with your mentor weekly for a total of 5 weeks. Meetings should be around an hour long and can be conducted via Zoom, Facetime, phone, or whatever means of communication works best between you and your mentee. You may use the modules as a guide to work on specific topics with your mentee. All mentees should look through the first module because it is an overview of accommodations for all disabilities. Other modules may be applicable to your mentee depending on the disability type. Please remind your mentee to review and complete the Apply Your Knowledge section of the module if it is applicable to them.</p>
          <h2>Number of Mentors</h2>
          <p>You can mentor a maximum of 3 mentees at a time.</p>
          <h2>Updating your Calendly</h2>
          <p>Under profile settings make sure to include a link to your Calendly that lists several time slots within the week that you are available to meet with mentees. See the video below to see how to sign up and use Calendly. Please update your calendly every month with your schedule and please allot at least 5 hours a week on the Calendly with your availability. </p>
        <h3>Calendly Video</h3>
        </AccordionDetails>
      </Accordion>

      <Accordion 
         sx = {{borderRadius: '14px', marginBottom: '2rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' , width: '65.88px', height: '36px'}}/>}
          aria-controls="mentorExpectations"
          id="forMentors "
        >
            <h2 style = {{color:'white'}}>For Mentees</h2>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Weekly Meetings with Mentors</h2>
          <p>
          We expect you to meet with your mentor weekly for a total of 5 weeks. Meetings should be around an hour long and can be conducted via Zoom, Facetime, phone, or whatever means of communication works best between you and your mentor. You may use the modules as a guide to work on specific topics with your mentor. All mentees should look through the first module because it is an overview of accommodations for all disabilities. Other modules may be applicable to you depending on the disability type. Please review and complete the Apply Your Knowledge section of the module if it is applicable to you.
          </p>

          <h2>1 Mandatory Practice Job Interview</h2>
          <p>As previously mentioned, within the 5-week session you are also required to schedule a time for 1 practice interview with a volunteer.  </p>

          <h2>Contacting a Mentor and Pairing with a Mentor</h2>
          <p>Before you sign up for a time to meet with a mentor on Calendly make sure to discuss with the mentor to see if they have availability for mentees. </p>
        
          <h2>Reviewing Modules</h2>
          <p>If any of the modules are applicable to you please make sure to review the modules and complete the Apply Your Knowledge Section so you can review them with you mentor. </p>
        </AccordionDetails>
      </Accordion>

   <Accordion 
         sx = {{borderRadius: '14px', marginBottom: '2rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' , width: '65.88px', height: '36px'}}/>}
          aria-controls="mentorExpectations"
          id="forMentors "
        >
            <h2 style = {{color:'white'}}>For Interview Volunteers</h2>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Mandatory Quarterly Training</h2>
          <p>As previously mentioned, within the 5-week session you are also required to schedule a time for 1 practice interview with a volunteer.</p>
          <h2>Monthly Team Meetings</h2>
          <p>You will be required to monthly team meetings with other NeuroConnect volunteers.</p>
          <h2>Updating your Calendly</h2>
          <p>Under profile settings make sure to include a link to your Calendly that lists several time slots within the week that you are available to meet with mentees. See the video below to see how to sign up and use Calendly. Please update your calendly every month with your schedule and please provide allot at least 5 hours a week on the Calendly with your availability. </p>
          <h3>Calendly Video</h3>
        </AccordionDetails>
      </Accordion>

   
    </div>
    )
}