import React from 'react'
import logo from "../assets/logo1-Copy.svg"
import { Link } from 'react-router'

export default function NavBar() {
  return (

    <nav className=' w-[900px] m-auto flex justify-between items-center px-[40px] py-[10px]'>
      <div>
   
        <Link to="/">
          <img src={logo} className='w-[150px] h-[50px]' />
        </Link>
      </div>
      <ul className='flex justify-between items-center gap-5 text-[14px]' >
        <li><Link to="/"  className='border-b border-gray-30 '>Projects</Link></li>
        <li><Link to="/"className='border-b border-gray-30 ' >Clients</Link></li>
        <li><Link to="/" className='border-b border-gray-30 '>Subscribe</Link></li>
        {/* <li><Link to="/admin" className='border-b border-gray-30 '>Admin</Link></li> */}
        <li><Link to="/" className='text-white text-[16px] bg-orange-500 py-[6px] px-[13px] rounded-[10px] text-center hover:bg-orange-600 transition duration-300 ease-in ' >Contact</Link></li>
      </ul>
    </nav>
    
  )
}
