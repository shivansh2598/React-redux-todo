import React from 'react';
import Project from '../../Components/Project/Project'

const ProjectList = ()=>{
    const Projects = [{
        id : 1,
        projectName : "Todo"       
    }, {
        id : 2,
        projectName : "Counter"
    }]

    return (
        <ul>
            {Projects.map(item => <Project props = {item}/>)}
        </ul>
    )
}

export default ProjectList;