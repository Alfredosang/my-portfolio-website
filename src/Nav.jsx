import React from 'react';
// import * as Scroll from 'react-scroll';
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='bg-gradient-to-l from-black to-red-900 md:opacity-70 fixed z-10 w-full h-20 py-5 flex flex-row justify-between items-center  mx-auto'>
      <div>
        <h1 className='text-white font-bold pl-10'>Alfred Osang</h1>

      </div>

      <div className=' pr-10 hidden md:flex'>
        <Link spy={true} smooth={true} offset={-100} duration={500} className='text-white cursor-pointer mr-3 px-5 py-2 border-b-4  border-red-800 hover:border-white  duration-200' to='home'>Home</Link>
        <Link spy={true} smooth={true} offset={-100} duration={500} className='text-white cursor-pointer mr-3 px-5 py-2 border-b-4  border-red-800 hover:border-white  duration-200' to='about'>About</Link>
        <Link spy={true} smooth={true} offset={-100} duration={500} className='text-white cursor-pointer mr-3 px-5 py-2 border-b-4  border-red-800 hover:border-white  duration-200' to='projects'>Projects</Link>
        <Link spy={true} smooth={true} offset={-100} duration={500} className='text-white cursor-pointer mr-3 px-5 py-2 border-b-4  border-red-800 hover:border-white  duration-200' to='tools'>Tools</Link>
        <Link spy={true} smooth={true} offset={-100} duration={500} className='text-white cursor-pointer mr-2 px-5 py-2 bg-red-800  rounded hover:bg-white hover:text-black  duration-200' to='contact'>Hire me</Link>
      </div>
      <div onClick={() => setNav(!nav)} className=' z-50 m-7 text-white cursor-pointer md:hidden'>
      {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}</div>

      {nav && (
        <div  className={`${!nav? 'hidden' :'flex' }  flex-col items-center justify-center bg-black  absolute top-0 left-0 w-full h-screen`}>
         
        <Link onClick={() => setNav(!nav)} spy={true} smooth={true} offset={-100} duration={500} className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' to='home'>Home</Link>
        <Link onClick={() => setNav(!nav)} spy={true} smooth={true} offset={-100} duration={500} className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' to='about'>About</Link>
        <Link onClick={() => setNav(!nav)} spy={true} smooth={true} offset={-100} duration={500} className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' to='projects'>Projects</Link>
        <Link onClick={() => setNav(!nav)} spy={true} smooth={true} offset={-100} duration={500} className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' to='tools'>Tools</Link>
        <Link onClick={() => setNav(!nav)} spy={true} smooth={true} offset={-100} duration={500} className='text-red-800 text-4xl m-5 font-bold cursor-pointer hover:scale-105 duration-200 ' to='contact'>Hire me</Link>
        </div>
      )}



    </div>
  )
}

export default Nav