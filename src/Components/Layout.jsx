import React, { Fragment } from 'react'
import { Contact } from './contact/Contact'
import Footer from './footer/Footer'
import { Github } from './Gihub/Github'
import  {Gitstat}  from './Gitstate/Gitstat'
import HeroSection from './herosection/HeroSection'
import { NavBar } from './Nav/Nav'
import ProjectWork from './PROJECT/ProjectWork'
// import { Projects } from './projte/Projects'
import { Skills } from './Skills/Skill'

export default function Layout() {

  return (
   <Fragment>

    <NavBar/>
    <HeroSection />
    <Skills/>
    <Gitstat/>
    <Github />
  <ProjectWork />

    <Contact />
    <Footer/>
   </Fragment>
  )
}
