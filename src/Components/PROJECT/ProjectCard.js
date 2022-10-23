import "./ProjectCard.css"

import React from 'react'


const ProjectCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <h3 className="project-tool">TECH</h3>
    <h4>{props.tool}</h4>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
           <a href={ `${props.code}`} target="_blank" rel="noreferrer" className="Btn">Github</a>  
           <a href={`${props.source}`} target="_blank"  rel="noreferrer" className="Btn">Netlify</a> 
        </div>
    </div>

</div>
  )
}

export default ProjectCard