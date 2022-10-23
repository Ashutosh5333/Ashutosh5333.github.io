import React from 'react'
import "./github.css"
import GitHubCalendar from 'react-github-calendar';

export const Github = () => {
  return (
    <div className='github'>
      <div>
        <h1 style={{marginTop:"6rem"}}>Github Calender</h1>
         <GitHubCalendar username="Ashutosh5333" style={{color:"white",margin:"auto",marginTop:"2rem"}} />
        </div>  
    </div>
  )
}
