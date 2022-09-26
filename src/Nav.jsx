import React from 'react';
// import {FaBars, FaTimes} from 'react-icons/fa';

const Nav = () => {
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
      {/* <div>
        <FaBars size={30}/> 
        <FaTimes size={30}/>
      </div> */}
    </div>
  )
}

export default Nav