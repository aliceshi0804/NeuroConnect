import React , {useRef} from 'react'
// import {Grid} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import sample from '../images/sampleCircle.jpg'
import Typography from '@mui/material/Typography';
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
                <h2 style = {{marginLeft:'2rem'}}> First Last Name </h2>
            </div>
         
    <List component="nav" aria-label="information about person" sx = {{fontSize:'2rem',margin:'2rem', alignItems: 'center',justifyContent:'center', alignContent:'center'}}>
      <ListItem>
        <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            Role
          </Typography>
          </React.Fragment>
        }/>
        <p style={{marginLeft:'2rem'}}>sample text</p>
      </ListItem>
      <Divider light/>
    
    <ListItem>
    <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            Pronouns
          </Typography>
          </React.Fragment>
        }/>
        <p>sample text</p>
    </ListItem>
    <Divider light />
 
      <ListItem>
      <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            I identify as 
          </Typography>
          </React.Fragment>
        }/>
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
      <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            Career
          </Typography>
          </React.Fragment>
        }/>
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
      <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            Contact
          </Typography>
          </React.Fragment>
        }/>
        <p>sample text</p>
      </ListItem>
      <Divider light />

      <ListItem>
      <ListItemText primary={
          <React.Fragment>
          <Typography
            sx={{ fontSize: '3rem' }}
            color="text.primary"
          >
            Biography
          </Typography>
          </React.Fragment>
        }/>
        <p>sample text</p>
      </ListItem>
    </List>
        </div>
       
    )
}