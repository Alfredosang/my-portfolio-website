import React from 'react'
import brandpic from './Assets/brandpic.png'

const Hero = () => {
    return (
        <div>
            <div className='container flex sm:flex-col xl:flex-row justify-center items-center space-x-1 px-24 mx-auto'>
                <div >
                    
                    <img src={brandpic} alt='Brand Pic' className='w-5/5  hover:scale-105 duration-300 '></img>

                </div>
                <div>

                <h1 className='text-white text-5xl mt-24 mr-24 font-bold leading-[60px]  hover:scale-105 duration-200 pl-10'>I Develop Problem Solving Web Apps, for Small and Large Scale Businesses</h1>
                    

                </div>
            </div>

        </div>
    )
}

export default Hero