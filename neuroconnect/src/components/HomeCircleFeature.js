import React from "react"
import '../index.css'

export default function(props){
    
    return(
        <div>
            <img src = {props.image} className = "homeCircle"/>
            <div>
                <h1>{props.title} </h1>
                <p style = {{marginBottom:'2rem', alignText: 'center', alignContent:'center'}}>{props.imageCap}</p>
                <p>{props.text} </p>
            </div>
        </div>
    )
}