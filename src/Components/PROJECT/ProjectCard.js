import "./ProjectCard.css"

import React from 'react'


const ProjectCard = (props) => {
  return (
    <div className="project-description" id="projects">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <h3 className="project-tool">Tech Stacks </h3>
    
    <h4 className="nav-link-projects">{props.tool}</h4>
    <div className="project-card">
        <p>{props.text}</p>
        <div className="project-btns">
           <a href={ `${props.code}`} target="_blank" rel="noreferrer" className="Btn1">Github</a>  
           <a href={`${props.source}`} target="_blank"  rel="noreferrer" className="Btn1">Netlify</a> 
        </div>
    </div>

</div>
  )
}

export default ProjectCard