import React from 'react'
import { Card, CardContent} from '@mui/material';
import {Box} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import '../index.css'

//need to take an input for module name and description? picture? color?
export default function ModuleCard(props){
    return(
        <div>
            <Card sx={{ display: 'flex'}} className = "moduleCardFormat" style= {{background: `${props.color}`}} >
                <CardContent>
                <div style = {{display: 'flex'}}>
                    <div style = {{width:'50%'}}>
                        <h2>Course {props.number}</h2>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>

                    <Box sx={{ width:'50%', display: 'flex', marginLeft:'2rem', alignItems: 'center',justifyContent:'center', alignContent:'center'}}>
                        
                        <AccessTimeOutlinedIcon sx = {{fontSize:'4rem'}}/>
                        <p className = 'moduleCardP' style = {{fontSize:'1.5rem'}}>{props.time} </p>

                        <MouseOutlinedIcon sx = {{fontSize:'4rem'}}/>
                        <p className = 'moduleCardP' style = {{fontSize:'1.5rem'}}>{props.topics} </p>

                        {/* <PercentOutlinedIcon sx = {{fontSize:'4rem'}}/>
                        <p className = 'moduleCardP'style = {{fontSize:'1.5rem'}} >finished: {props.progress}</p> */}

                        <ArrowCircleRightOutlinedIcon sx = {{fontSize:'5rem'}}/>
                    </Box>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}