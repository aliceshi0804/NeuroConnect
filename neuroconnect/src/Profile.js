import Dashboard from "./components/Dashboard"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import sample from './images/sampleCircle.jpg'
import PersonalProfileAccountSetting from "./components/PersonalProfileAccountSetting";
import PersonalProfilePassword from "./components/PersonalProfilePassword";
import PersonalProfileCalendar from "./components/PersonalProfileCalendar";
import Avatar from '@mui/material/Avatar';

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
      // marginLeft:'auto',
      // marginRight:'auto',
      // marginTop:'2rem'
      margin:'auto'
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}  

export default function Profile(){
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 4 }}>
                {children}
              </Box>
            )}
          </div>
        );
      }
      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }

const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
        <Dashboard/>
        {/* <h1 style={{marginLeft:'2rem'}}>Profile</h1> */}
        <div style={{display:'flex'}}>
        <Paper class = 'tabPaperSize'  variant="outlined">
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginTop:'1rem'}}>
                {/* <img src = {sample} className = "circleAvatar"/> */}
                {/* <Avatar>S</Avatar> */}
            </div>

            <h2 style={{textAlign:'center'}}>Welcome, John Doe! </h2>
            <Avatar {...stringAvatar('John Doe')}  />
            {/* <p style={{textAlign:'center'}}> Change Profile Picture</p> */}
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Account Settings" {...a11yProps(0)} style={{color:'black', fontSize:'1.5rem'}} />
                <Tab label="Password" {...a11yProps(1)} style={{color:'black', fontSize:'1.5rem'}}/>
            
            </Tabs>
        </Paper>
        
        <Paper class= 'contentPaperSize' style = {{marginBottom: '2rem'}} variant="outlined">
        <TabPanel value={value} index={0}>
            <PersonalProfileAccountSetting/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <PersonalProfilePassword/>
        </TabPanel>
        </Paper>
    
        </div>
    </div>
    )
}