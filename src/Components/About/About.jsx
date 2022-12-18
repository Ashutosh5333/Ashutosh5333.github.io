import React from 'react'
import "./about.css"
import {Container ,Row ,Col, } from "reactstrap"


export default function About() {


  return (
   
    <section id="about">
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>About ME</Col>
                <Col lg="4" md="3">
                    <div className='about__btns d-flex flex-column '>
                    <button className='about_btn about_btn-active'>About Me</button>
                    <button className='about_btn'>Project</button>
                    <button className='about_btn'>Skill</button>
                    <button className='about_btn'>Skill</button>
                    </div>
                </Col>
                <Col lg="8" md="9">
                    <div className='about_content_wrapper d=flex gap-5'>
                       <div className='about-img w-25' >
                         <img src='' alt='' className='w-100'/>
                       </div>

                       <div className='about_content w-75'>
                            <h2>I'm Ashutosh Lakshakar</h2>
                            <p>a Fullstack developer, I am a consistent learner who believe in hard work . I am most attracted to solving real customer problems with a business justification, I am having good experience in computer fundamentals and love to do coding.</p>
                       </div>
                       <div className='social_links'>
                            <h5>Connect me</h5>
                            <span><a href='#'><i className='re-facebook-line'></i></a></span>
                            <span><a href='#'><i class="ri-github-fill"></i></a></span>
                            <span><a href='#'><i class="ri-linkedin-fill"></i></a></span>
                            <span><a href='#'><i class="ri-instagram-line"></i></a></span>
                       </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
  )
}
