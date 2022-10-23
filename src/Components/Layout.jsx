import React, { Fragment } from 'react'
import { Contact } from './contact/Contact'
import { Github } from './Gihub/Github'
import HeroSection from './herosection/HeroSection'
import { NavBar } from './Nav/Nav'
import ProjectWork from './PROJECT/ProjectWork'
import { Skills } from './Skills/Skill'

export default function Layout() {

  return (
   <Fragment>

    <NavBar/>
    <HeroSection />
    <Skills/>
    <Github />
  <ProjectWork />
    <Contact />
   </Fragment>
  )
}
