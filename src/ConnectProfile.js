import Dashboard from "./components/Dashboard"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import sample from './images/sampleCircle.jpg'
import ConnectProfileTab from "./components/ConnectProfileTab";
// import Avatar from "@material-ui/core/Avatar";

export default function ConnectProfile(){
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
        <Paper class = 'connectTabPaperSize'  variant="outlined">
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Profile" {...a11yProps(0)} style={{color:'black', fontSize:'1.5rem'}} />    
            </Tabs>
        </Paper>
        
        <Paper class= 'contentPaperSize' variant="outlined" style = {{marginBottom: '2rem'}}>
        <TabPanel value={value} index={0}>
            <ConnectProfileTab/>
        </TabPanel>
        </Paper>
    
        </div>
    </div>
    )
}