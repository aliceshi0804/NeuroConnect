import React from "react"
import '../index.css'
export default function(props){
    const colorName = props.color
    if(colorName == "white"){
        return(
            <div className = "buttonCircle">
                <h1 className = "buttonText">{props.name}</h1>
            </div>
        )   
    }
    else{
        return(
            <div className = "buttonCircleTeal">
                <h1 className = "buttonText">{props.name}</h1>
            </div>
        )
    }
}