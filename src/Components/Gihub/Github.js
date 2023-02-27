import React from 'react'
import "./github.css"
import GitHubCalendar from 'react-github-calendar';
import cors from  "cors"

export const Github = () => {
  return (
    <div className='github'>
      <div className='githubcalender'>
        <h2 style={{marginTop:"6rem"}}>Github Calender</h2>
         <div  className="calender">
         <GitHubCalendar username="Ashutosh5333" style={{color:"white",margin:"auto",marginTop:"2rem"}} />
         </div>
        </div>  

    </div>
  )
}
