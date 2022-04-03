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
            <div style={{display: 'flex', background:'  #2CC9B680', margin:'2rem', padding:'2rem'}}>
                <img src = {sample} className = "circleAvatar"/>
                <h2 style = {{justifyContent:'center', alignContent:'center'}}> First Last Name </h2>
            </div>
            {/* <Grid container>
            <Grid item xs = {4}>
                <h1>Role</h1>
                <h1>Pronouns</h1>
                <h1>I identify as ... </h1>
                <h1>Career </h1>
                <h1>Contact</h1>
                <h1>Bio</h1>
            </Grid>

            <Grid item xs = {4} style = {{justifcyContent:'right', alignItems:'right',textAlign:'right'}}>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            <p>Info</p>
            </Grid>
            </Grid> */}
    <List sx={style} component="nav" aria-label="information about person" style = {{marginLeft:'2rem'}}>
      <ListItem>
        <ListItemText primary="Role" />
        <p>sample text</p>
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