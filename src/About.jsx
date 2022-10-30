import React from 'react'

const About = () => {
    return (
        <div name='About' >
            <div className='flex  justify-center px-3 py-2 mt-16 mb-5 '>
                    <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>About</h1>

                </div>
            <div className=' container flex flex-col justify-center items-center px-10 mx-auto '>
                
                <div>

                    <p className='text-white sm:text-2xl sm:p-16 '>
                    I have a B.Sc. in computer science and am a certified React developer.
                     I create reusable, scalable, and optimized client-side features, structures,
                      and designs for web pages to improve user experience.My background in graphic
                       design and design thinking offers me an advantage
                       as a frontend developer because I can readily interpret
                        UI concepts and transfer them into reusable and scalable code.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default About