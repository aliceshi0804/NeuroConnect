import React from "react"
import '../index.css'
import SampleRect from '../images/sampleRectangle.png'

export default function(props){
    return(
        <div>
            <img src = {props.image} className = "homeRect"/>
            <div>
                <h1>{props.title} </h1>
                <p style = {{marginBottom:'2rem', marginLeft:'auto'}}>{props.imageCap}</p>
                <p>{props.text} </p>
            </div>
        </div>
    )
}