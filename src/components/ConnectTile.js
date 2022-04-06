import React from "react"
import '../index.css'
import Avatar from '@mui/material/Avatar';
import sample from '../images/sampleCircle.jpg'
import Button from './Button'
import { red } from "@mui/material/colors";

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: '5rem', 
        height: '5rem',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'2rem'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }  

export default function ConnectTile(props){
    const typeButton = props.type
    if(typeButton == "request"){
        return(
            <div className = "connectTile">
                <Avatar {...stringAvatar('Tim Neutkens')}/>
                <h3>Name</h3>
                <p>Pronouns  • Mentee </p>
                <p>Neurodivergent  • ADHD </p>
                <div className = 'buttonCircleConnect' style={{background:'#2CC9B6'}}>
                    Accept
                </div>
            </div>
        )
    }
    else{
        return(
            <div className = "connectTile">
                <Avatar {...stringAvatar('Jed Watson')}  />
                <h3>Name</h3>
                <p>Pronouns  • Mentee </p>
                <p>Neurodivergent  • ADHD </p>

                <div className = 'buttonCircleConnect' style={{background:'white'}}>
                    Request
                </div>
            </div>
        )
    }
    
}