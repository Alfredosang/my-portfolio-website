import React from 'react'
import one from './Assets/one.png'
import two from './Assets/two.png'
import three from './Assets/three.png'
import four from './Assets/four.png'
import five from './Assets/five.png'
import six from './Assets/six.png'

const Tools = () => {
    return (
        <div>
            <div className='conntainer  mt-24 flex flex-col  items-center px-60 mx-auto'>
                <div className='flex  items-center    px-3 py-2  border-b-4  border-red-700 mb-10'>
                    <h1 className='text-white font-bold text-2xl '>Tools</h1>

                </div>
                <div className='container justify-center items-center grid grid-col-1  md:grid-col-4 lg:grid-cols-6 gap-8 mx-auto'>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px]   bg-black shadow-md shadow-orange-600 rounded-full '>
                            <img src={one} alt='HTML' className='  rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>HTML</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px] bg-black shadow-md shadow-blue-500 rounded-full '>
                            <img src={two} alt='CSS' className=' rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>CSS</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px] bg-black shadow-md shadow-yellow-500 rounded-full '>
                            <img src={three} alt='JAVASCRIPT' className=' rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>JAVASCRIPT</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px] bg-black shadow-md shadow-blue-400 rounded-full '>
                            <img src={four} alt='TAILWIND' className=' rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>TAILWIND CSS</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px] bg-black shadow-md shadow-blue-600 rounded-full '>
                            <img src={five} alt='HTML' className=' rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>REACT</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-center justify-center w-[150px] bg-black shadow-md shadow-yellow-600 rounded-full '>
                            <img src={six} alt='FIREBASE' className=' rotate-0 hover:rotate-45 duration-300 p-5' />


                        </div>
                        <div>
                            <h2 className='text-white pt-10'>FIREBASE</h2>
                        </div>

                    </div>

{/* 
                    <div className='flex items-center justify-center w-90 bg-black shadow-md shadow-blue-600 rounded-full '>
                        <img src={two} alt='HTML' className='w-60 rotate-0 hover:rotate-45 duration-300 p-10' />

                    </div>

                    <div className='flex items-center justify-center w-90 bg-black shadow-md shadow-yellow-500 rounded-full '>
                        <img src={three} alt='HTML' className='w-60 rotate-0 hover:rotate-45 duration-300 p-10' />

                    </div>

                    <div className='flex items-center justify-center w-90 bg-black shadow-md shadow-blue-400 rounded-full '>
                        <img src={four} alt='HTML' className='w-60 rotate-0 hover:rotate-45 duration-300 p-10' />

                    </div>

                    <div className='flex items-center justify-center w-90 bg-black shadow-md shadow-blue-200 rounded-full '>
                        <img src={five} alt='HTML' className='w-60 rotate-0 hover:rotate-45 duration-300 p-10' />

                    </div>

                    <div className='flex items-center justify-center w-90 bg-black shadow-md shadow-yellow-600 rounded-full '>
                        <img src={six} alt='HTML' className='w-60 rotate-0 hover:rotate-45 duration-300 p-10' />

                    </div> */}

                </div>


            </div>
        </div>
    )
}

export default Tools