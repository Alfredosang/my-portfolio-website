import React from 'react'
import swift from './Assets/swift.png'
import moviez from './Assets/moviez.png'
import todo from './Assets/todo.png'

const Projects = () => {
    const project = [
        {
            id: 1,
            pix: moviez,
            name: 'Movie Zone',
            src: 'https://moviezone11.netlify.app',
            code: ''
        },
        {
            id: 2,
            pix: swift,
            name: 'Swift Nation',
            src: 'https://swiftnation.netlify.app',
            code: ''
        },
        {
            id: 3,
            pix: todo,
            name: 'Freddie App',
            src: 'https://dreamy-granita-d592df.netlify.app/',
            code: ''
        }
    ]
    return (
        <div className='container mx-auto my-12'>
            <div className='flex  justify-center px-3 py-2 mt-16 mb-5 '>
                <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>Projects</h1>

            </div>
            <div className='flex flex-wrap gap-8 justify-center'>
                {
                    project.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col items-center '>
                                <div>
                                    <img src={item.pix} alt='Project graphics' className='object-cover object-center w-[300px] md:w-[800px] hover:scale-105 duration-200' />
                                </div>
                                <div className='bg-red-800 w-[300px] md:w-[800px] h-10 md:h-16 flex justify-between p-2 md:p-5'>
                                    <div><h1 className='text-white md:text-xl '>{item.name}</h1></div>
                                    <div><a href={item.src} className='text-white md:text-xl '>View Project</a></div>
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