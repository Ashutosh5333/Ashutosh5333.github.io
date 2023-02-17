import React ,{useEffect, useRef} from 'react'
import "./herosection.css"
import { Container ,Row ,Col } from 'reactstrap'
import  IMG from "../../assets/IMG.jpeg"

import Ashutosh_lakshakar_Resume from "../../assets/Ashutosh-lakshakar-Resume.pdf"



export default function HeroSection() {

    

   //   https://drive.google.com/file/d/1s_foavv3RocK31YCZI4s0rM3pBb-qgos/view?usp=share_link
  return (
     <section>
        <Container className='sect' id='home'>
           <Row>
            <Col lg="6" md="6">
                 <div className='hero__content mb-4'>
                   {/* <p className='mb-4'>Welcome To My PortFolio</p> */}
                   <h5 className='mb-3'>Hi</h5>
                   <h2 className='hero_title mb-3' >I'm  <span>Ashutosh Lakshakar</span></h2>
                   <p>A passionate programmer with the ability to learn quickly and implement and also versatile enough to learn and work in a new environment Currently looking for an opportunity to work for an organization where I can contribute my skills and manage critical projects that impact the organization, as well as broaden my scope of learning.</p>
                   <div className='mt-4 hero__btns d-flex align-items-center gap-4'>
                       <button className='resumee-btnn'><a target="_blank" href={"https://drive.google.com/file/d/1BzpDODVcwSgxTYpxMolwDeRZAhxlW_T_/view?usp=sharing"} _blank download>Resume</a></button>
                        <button className='Btn'>Contact</button>
                   </div>
                 </div>
            </Col>
            <Col lg="6" md="6">
                     <div className='hero__img'>
                          <img  src={IMG} alt="ashu"  />
                     </div>    
            </Col>
            </Row>
        </Container>
     </section>
  )
}
