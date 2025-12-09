import React from 'react'
import bgimage from "../assets/bgimage.svg"
import ContactForm from './ContactForm'

export default function HeroSection() {
  return (
    <div className='w-full'>
      <div className='m-auto'>
        <img className='relative px-4' src={bgimage} />
      </div>
      <div className='absolute top-[160px] right-[180px] '>

        <ContactForm/>
      </div>
    </div>
  )
}
