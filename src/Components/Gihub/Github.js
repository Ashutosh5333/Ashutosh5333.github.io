import React, { useEffect } from 'react'
import "./github.css"
import GitHubCalendar from 'react-github-calendar';
import AOS from "aos";
import 'aos/dist/aos.css';

export const Github = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='github'>
      <div className='githubcalender'>
        <h2 style={{marginTop:"6rem"}}>Github Calender</h2>
         <div    data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-offset="100" className="calender">
         <GitHubCalendar username="Ashutosh5333" style={{color:"white",margin:"auto",marginTop:"2rem"}} />
         </div>
        </div>  

    </div>
  )
}
