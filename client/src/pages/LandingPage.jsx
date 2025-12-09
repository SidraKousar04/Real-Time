import React from 'react'
import HeroSection from '../components/HeroSection'
import ClientsSection from '../components/ClientsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactForm from '../components/ContactForm'
import NewsLetterForm from '../components/NewsLetterForm'
import NavBar from '../components/NavBar'
import Additional from '../components/Additional'
import LearnMore from '../components/LearnMore'
import FinalCTASection from '../components/FinalCTASection'

export default function LandingPage() {
  return (
    <div className='w-full' >

      <div className='m-auto flex flex-col '>

        <NavBar/>

        <HeroSection/>

        <Additional/>

        <ProjectsSection/>


        <ClientsSection/>

        <LearnMore/>
        <NewsLetterForm/>
        <FinalCTASection/>
      </div>

    </div>
  )
}
