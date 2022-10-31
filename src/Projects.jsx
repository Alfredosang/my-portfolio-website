import React from 'react'
import swift from './Assets/swift.png'
import moviez from './Assets/moviez.png'
import todo from './Assets/todo.png'

const Projects = () => {
    const project = [
        {
            id: 1,
            pix: swift,
            name: 'Swift Nation',
            src: 'https://swiftnation.netlify.app',
            about: 'Swift Nation is a bogus automobile website that provides information and photographs of many exotic vehicles.'
        },
        {
            id: 2,
            pix: moviez,
            name: 'Movie Zone',
            src: 'https://moviezone11.netlify.app',
            about: 'Similar to Net 9ja, Movie Zone is a movie web application. It uses an external API to retrieve movie information based on several categories.'
        },

        {
            id: 3,
            pix: todo,
            name: 'Fredie App',
            src: 'https://dreamy-granita-d592df.netlify.app/',
            about: 'The Fredie app is merely a to-do list that facilitates the recording of your plans.'
        }
    ]
    return (
        <div className='container mx-auto my-12' id='projects'>
            <div className='flex  justify-center px-3 py-2 mt-16 mb-5 '>
                <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>Projects</h1>

            </div>
            <div className='flex flex-wrap gap-4 justify-center md:p-24'>
                {
                    project.map((item) => {
                        return (
                            <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 mb-7'>
                                <div key={item.id} className='flex flex-col items-center '>
                                    <div>
                                        <img src={item.pix} alt='Project graphics' className='object-cover object-center w-[300px] md:w-[500px] hover:scale-105 duration-200' />
                                    </div>
                                    <div className='bg-red-800 w-[300px] md:w-[500px] h-12 md:h-16 flex justify-between p-2 md:p-4'>
                                        <div><h1 className='text-white md:text-xl '>{item.name}</h1></div>
                                        <div className=' bg-white shadow-md shadow-black hover:shadow-inner rounded-md py-1 px-3 md:px-4'><a href={item.src} target='blank' className='text-red-800 text-sm hover:text-red-500 md:text-xl  '>View  project</a></div>
                                    </div>

                                </div>
                                <div className='flex flex-col items-start'>
                                    <p className='text-white md:text-xl px-10 sm:px-16'>{item.about}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Projects