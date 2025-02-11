import React from 'react'
import one from './Assets/one.png'
import two from './Assets/two.png'
import three from './Assets/three.png'
import four from './Assets/four.png'
import five from './Assets/five.png'
import six from './Assets/six.png'
import seven from './Assets/wordpress.png'

const Tools = () => {
    const tool = [
        {
            name: 'HTML',
            pix: one,
            id: 1

        },
        {
            name: 'CSS',
            pix: two,
            id: 2
        },
        {
            name: 'JAVASCRIPT',
            pix: three,
            id: 3
        },
        {
            name: 'TAILWIND CSS',
            pix: four,
            id: 4
        },
        {
            name: 'REACT',
            pix: five,
            id: 5
        },
        {
            name: 'FIREBASE',
            pix: six,
            id: 6
        },

        {
            name: 'WORDPRESS',
            pix: seven,
            id: 7
        },
        
    ]
    return (
        <div className='container mx-auto flex flex-col items-center mb-16' id='tools'>
            <div className='flex  justify-center px-3 py-2 mt-16 mb-5 '>
                <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>TOOLS</h1>
                

            </div>
            <div ><p className='text-white md:text-xl my-7'>Here are some of the tools I use.</p></div>
            <div className='flex flex-wrap gap-5 md:gap-8 justify-center'>

                {
                    tool.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col justify-center md:px-24 items-center'>
                                <div className='flex flex-col items-center justify-center w-[130px] h-[130px] md:h-[140px] md:w-[140px]   bg-black shadow-md shadow-red-800 rounded-full '>
                                    <img src={item.pix} alt='HTML' className='  rotate-0 hover:rotate-45 duration-300 p-5 w-[130px] h-[130px] md:h-[140px] md:w-[140px]' />


                                </div>
                                <div>
                                    <h2 className='text-white pt-10'>{item.name}</h2>
                                </div>

                            </div>

                        )
                    })
                }


            </div>

        </div>

    )
}

export default Tools