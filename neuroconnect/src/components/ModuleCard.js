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
            <Card sx={{ display: 'flex' , mr: 10}} className = "moduleCardFormat" style= {{background: `${props.color}`}} >
                <CardContent sx={{ mr: 10}}>
                <div className = 'homeHeader' >
                    <div>
                        <h2>Course {props.number}</h2>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 30}}>
                        <AccessTimeOutlinedIcon fontSize = 'large'/>
                        <p className = 'moduleCardP'>{props.time} min </p>
              

                        <MouseOutlinedIcon fontSize = 'large'/>
                        <p className = 'moduleCardP'>{props.topics} topics </p>

                        <PercentOutlinedIcon fontSize = 'large'/>
                        <p className = 'moduleCardP'>finished: {props.progress}</p>

                        <ArrowCircleRightOutlinedIcon fontSize = 'large'/>
                    </Box>
                    
                </div>
                </CardContent>
            </Card>
        </div>
    )
}