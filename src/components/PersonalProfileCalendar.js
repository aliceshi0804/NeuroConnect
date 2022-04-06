import React from 'react'
import Paper from '@mui/material/Paper';
import '../index.css'
import Button from './Button'
export default function(){
    return(
        // class="calendly-inline-widget" 
        // <Paper className= 'contentPaperSize'  variant="outlined">
            <div>
            <h1>Calendar Availability</h1>
            <h2>Add your availability in the Calendly. Your availability will be visible to others on the Connect page. </h2>
            {/* <div 
            data-url="https://calendly.com/carolhuynh196/15min">
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div> */}
            {/* <iframe loading="lazy" src = 'https://calendly.com/carolhuynh196/15min' className = 'personalProfileCalendar' title = 'calendly link'/> */}
            <p><a href="https://calendly.com/" target="iframe_a">Calendly Link</a></p>
            

            <Button color = "teal" name = "Update" />
            </div>
           

    )
}