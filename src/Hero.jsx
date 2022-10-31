import React from 'react'
import brandpic from './Assets/brandpic.png'


const Hero = () => {
    return (
        <div className='her ' id='home'>
            <div className='container  mx-auto'>
                <div className='flex flex-col pt-10 sm:pb-7 md:pb-16 md:pt-0 md:flex-row md:justify-center items-center  px-7'>
                    <div>

                        <img src={brandpic} alt='Brand Pic' className='w-[700px]  hover:scale-105 duration-300 object-cover object-center '></img>

                    </div>
                    <div className=' sm:w-[450px] md:w-[600px]'>
                        <h2 className='text-white font-bold text-3xl md:text-5xl mt-3 mb-3  md:leading-[55px] hover:scale-105 duration-200'>Hello I'm Alfred Osang, a Frontend Developer. </h2>

                        <p className='text-gray-300 md:text-2xl hover:scale-105 duration-200 '>
                            I'm a creative developer with experience making top-notch user experiences
                            and interfaces.I appreciate collaborating with talented designers and design teams
                            to create premium user experiences....</p>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero