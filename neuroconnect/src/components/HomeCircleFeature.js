import React from "react"
import '../index.css'
import SampleCircle from '../images/sampleCircle.jpg'

export default function(props){
    
    return(
        <div>
            <img src = {props.image} className = "homeCircle"/>
            <div>
                <h1>{props.title} </h1>
                <p style = {{marginBottom:'2rem'}}>{props.imageCap}</p>
                <p>{props.text} </p>
            </div>
        </div>
    )
}