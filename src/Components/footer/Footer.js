import "./footer.css"
import React from 'react'
import {FaHome ,FaPhone,FaMailBulk, FaGithub,FaLinkedin, } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    
      <hr style={{width:"90%",margin:"auto",marginBottom:"10px"}}></hr>
        <div className="footer-Content">

           <div className="leftSide">
            
            <div className="location-main-div">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} className="location-icon" />
                <div>
                    <p>Jalaun, Utter Pradesh</p>
                    <p>India</p>
                </div>
            </div>

            <div className="mobile-main-div">
              
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} className="mobile-icon"/>
                  <div>
                   <p>+91 7985175333</p>
                   </div>
            
             
            </div>

            <div className="email-main-div">
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} className="email-icon" />
                <div>
                  <p>lakshakarashutosh@gmail.com</p>
                </div>
            </div>

            </div> 

           <div className="rightSide">
              <div className="social">
              <div>
              <a href="https://www.linkedin.com/in/ashutosh-lakshakar-23b478233/" target="_blank"><FaLinkedin className="linkdin"/></a>
              </div>
              <br/>
              <div>
              <a href="https://github.com/Ashutosh5333" target="_blank"><FaGithub  className="github" /></a>
              </div>

              </div>
            </div> 
        </div>

    </div>
  )
}

export default Footer