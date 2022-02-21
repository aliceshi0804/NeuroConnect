import React from "react"
import '../index.css'
import sample from '../images/sampleCircle.jpg'
import Button from './Button'

export default function ConnectTile(props){
    const typeButton = props.type
    if(typeButton == "request"){
        return(
            <div className = "connectTile">
                <img src = {sample} className = "circleAvatar"/>
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
                <img src = {sample} className = "circleAvatar"/>
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