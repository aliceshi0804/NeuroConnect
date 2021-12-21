import React from 'react'
import Dashboard from "./components/Dashboard"
import ModuleCard from "./components/ModuleCard"
import ModuleData from "./components/ModuleData"
import { Link} from 'react-router-dom';
export default function(props){
    const modData = props.data
    const modDataList = ModuleData.map(item => 
        <Link to= "/module" style={{ textDecoration: 'none' }}>
            <ModuleCard number = {item.numCourse} title ={item.title} description = {item.description} time = {item.time} topics = {item.numTopics} progress = {item.progress} color = {item.color}/>
        </Link>
        )
    return (
    <div>
        <Dashboard/>
        <h1 style={{marginLeft:'2rem', marginBottom:'2rem'}}>Learn</h1>
        <ul>{modDataList}</ul>
    </div>
    )
}