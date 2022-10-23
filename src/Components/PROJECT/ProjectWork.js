import "./ProjectCard.css"

import React from 'react'
import ProjectCardData from "./ProjectcardData"
import ProjectCard from "./ProjectCard"

const ProjectWork = () => {
  return (
    <div className="project-container" id="proj">
        <h1 className="project-heading">Project</h1>
        <div className="project-container2">
         {
          ProjectCardData.map((val,index)=>{
            return(
              <ProjectCard 
               
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              tool = {val.tool}
              text={val.text}
              code={val.code}
              source={val.source}

              />
            )
          })
         } 
        </div>

    </div>
  )
}

export default ProjectWork