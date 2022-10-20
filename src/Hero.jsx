import React from 'react'
import brandpic from './Assets/brandpic.png'


const Hero = () => {
    return (
        <div className='her pt-16 pb-16 md:pb-60'>
            <div className='container flex flex-col pt-0 md:pt-0 md:flex-row md:justify-center md:items-center  px-7 mx-auto'>
                <div >

                    <img src={brandpic} alt='Brand Pic' className='w-[900px]  hover:scale-105 duration-300 object-cover object-center '></img>

                </div>
                <div>
                    <h2 className='text-white font-bold text-3xl md:text-5xl mt-3 mb-3  md:leading-[55px] hover:scale-105 duration-200'>Hello I'm Alfred Osang, a Frontend Developer. </h2>

                    <p className='text-gray-300 md:text-2xl hover:scale-105 duration-200 '>I develop problem solving web apps, for small and large scale businesses...</p>


                </div>
            </div>

        </div>
    )
}

export default Hero