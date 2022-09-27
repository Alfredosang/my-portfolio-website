import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='bg-gradient-to-l from-gray-900 to-black opacity-90 fixed z-10 w-full h-20 py-5 flex flex-row justify-between items-center  mx-auto'>
      <div>
        <h1 className='text-white font-bold pl-10'>Alfred Osang</h1>

      </div>

      <div className=' pr-10 hidden md:flex'>
        <a className='text-white  mr-3 px-5 py-2 border-b-4  border-red-700 hover:border-white  duration-200' href='/home'>Home</a>
        <a className='text-white  mr-3 px-5 py-2 border-b-4  border-red-700 hover:border-white  duration-200' href='/about'>About</a>
        <a className='text-white  mr-3 px-5 py-2 border-b-4  border-red-700 hover:border-white  duration-200' href='/tools'>Tools</a>
        <a className='text-white  mr-3 px-5 py-2 border-b-4  border-red-700 hover:border-white  duration-200' href='/projects'>Project</a>
        <a className='text-white  mr-2 px-5 py-2 bg-red-700  rounded hover:bg-white hover:text-black  duration-200' href='/Contact'>Hire me</a>
      </div>
      <div onClick={() => setNav(!nav)} className=' z-10 m-7 text-white cursor-pointer md:hidden'>
        {nav ? <FaTimes size={35} /> : <FaBars size={35} />}

        {nav && (
          <div className=' flex flex-col items-center justify-center bg-gradient-to-b  from-black to-gray-900 absolute top-0 left-0 w-full h-screen'>
            <a className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' href='/home'>Home</a>
            <a className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' href='/about'>About</a>
            <a className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' href='/tools'>Tools</a>
            <a className='text-white text-4xl m-5  cursor-pointer hover:scale-105 duration-200' href='/projects'>Project</a>
            <a className='text-red-600 text-4xl m-5 font-bold cursor-pointer hover:scale-105 duration-200 ' href='/Contact'>Hire me</a>
          </div>
        )}


      </div>
    </div>
  )
}

export default Nav