import React from 'react'
import './Project.css'
import { NavLink } from 'react-router-dom';

const Project = (props)=>{
    return (
    <li> <NavLink to ={props.props.projectName} style = {{textDecoration : 'none', color : 'white'}}>{props.props.projectName}</NavLink></li>
    )
}

export default Project;