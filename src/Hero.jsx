import React from 'react'
import brandpic from './Assets/brandpic.png'

const Hero = () => {
    return (
        <div>
            <div className='container flex flex-col pt-24 md:flex-row justify-center items-center space-x-1 px-24 mx-auto'>
                <div >
                    
                    <img src={brandpic} alt='Brand Pic' className='w-[1000px]  hover:scale-105 duration-300 '></img>

                </div>
                <div>
                    <h2 className='text-white font-bold text-3xl md:text-5xl mt-3 mb-3 py-3 md:leading-[55px] hover:scale-105 duration-200'>Hello my name is  Alfred Osang, I'm a Frontend Developer. </h2>

                <p className='text-gray-400 md:text-2xl hover:scale-105 duration-200 '>I develop problem solving web apps, for small and large scale businesses...</p>
                    

                </div>
            </div>

        </div>
    )
}

export default Hero