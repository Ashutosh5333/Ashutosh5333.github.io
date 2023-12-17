import React, { Fragment } from 'react'
import { Contact } from './contact/Contact'
import Footer from './footer/Footer'
import { Github } from './Gihub/Github'
import  {Gitstat}  from './Gitstate/Gitstat'
import HeroSection from './herosection/HeroSection'
import { NavBar } from './Nav/Nav'
import ProjectWork from './PROJECT/ProjectWork'
import "./loyout.css"
import { Skills } from './Skills/Skill'
import PersonalAchive from './PersonalAchive/PersonalAchive'

export default function Layout() {

  return (
   <Fragment >
     <div className="Layout"> 
    <NavBar/>
    <HeroSection />
    <Skills/>
    <br/>
    <PersonalAchive/>
     <br/>
    <Gitstat/>
    <br/>
    <Github />
  <ProjectWork />

    <Contact />
    <Footer/>
    </div>
   </Fragment>
  )
}
