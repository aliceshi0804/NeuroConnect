import React , {useRef} from 'react'
// import {Grid} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import sample from '../images/sampleCircle.jpg'
import '../index.css'
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
export default function(){
    return(
        <div>
            <div style={{display: 'flex', background:'#2CC9B680', margin:'2rem', padding:'2rem', justifyContent:'center', alignContent:'center', alignItems: 'center'}}>
                <img src = {sample} className = "circleAvatar"/>
                <h2 style = {{marginLeft:'2rem'}}> First Last Name </h2>
            </div>
         
    <List component="nav" aria-label="information about person" sx = {{fontSize:'2rem',margin:'2rem', alignItems: 'center',justifyContent:'center', alignContent:'center'}}>
      <ListItem>
        <ListItemText classes = 'listItemLabel' primary="Role" />
        <p style={{marginLeft:'2rem'}}>sample text</p>
      </ListItem>
      <Divider light/>
    
    <ListItem>
    <ListItemText primary="Pronouns" />
        <p>sample text</p>
    </ListItem>
    <Divider light />
 
      <ListItem>
        <ListItemText primary="I identify as " />
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
        <ListItemText primary="Career" />
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
        <ListItemText primary="Contact" />
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
        <ListItemText primary="Bio" />
        <p>sample text</p>
      </ListItem>

    </List>
        </div>
       
    )
}