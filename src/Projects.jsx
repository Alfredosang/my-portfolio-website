import React from 'react'
import swift from './Assets/swift.png'
import moviez from './Assets/moviez.png'
// import wears from './Assets/jtwears.png'
import deepspace from './Assets/deepspace.png'
import drumshippers from './Assets/drumshippers.png'
// import erilearn from './Assets/erilearnthumb.png'

const Projects = () => {
    const project = [
        
        {
            id: 2,
            pix: swift,
            name: 'Swift Nation',
            src: 'https://swiftnation.netlify.app',
            about: 'Swift Nation is an automobile website dedicated to showcasing a stunning array of exotic vehicles. With a sleek design and intuitive navigation, the platform delivers detailed information and captivating photographs that bring these incredible cars to life.As a frontend developer, I focused on creating an immersive user experience that highlights the beauty and performance of each vehicle. By implementing dynamic layouts and responsive design, Swift Nation invites automotive enthusiasts to explore, and engage with the world of luxury automobiles.'
        },
        {
            id: 3,
            pix: moviez,
            name: 'Movie Zone',
            src: 'https://moviezone11.netlify.app',
            about: 'Movie Zone is an engaging movie web application designed to enhance your cinematic experience. By leveraging an external API, it retrieves comprehensive movie information across various categories, allowing users to explore and discover films with ease. As a frontend developer, I focused on creating a dynamic and user-friendly interface that prioritizes seamless navigation and an immersive browsing experience React js . With sleek design elements and responsive layouts, Movie Zone brings the world of cinema to life.'
        },

        {
            id: 4,
            pix: drumshippers,
            name: 'Drum Shippers',
            src: 'https://drumshippers.com/',
            about: 'Drum Shippers is a cutting-edge logistics company specializing in the efficient and reliable transportation of goods securely packed in plastic drums from the United States to Nigeria. I built the web application on the WordPress platform, and leveraged  powerful plugins and custom functionality to streamline the shipping process, ensuring a seamless user experience with an intuitive interface and  tracking capabilities.'
        },

        {
            id: 5,
            pix: deepspace,
            name: 'Deepspace',
            src: 'https://www.deepspace.africa/',
            about: 'Deepspace, a vibrant makerspace where innovation and creativity flourish! Here, dreamers, creators, and inventors come together to bring their visions to life. I had the privilege of collaborating with a talented team of product managers, designers, and developers to bring this dynamic platform to fruition. Leveraging the power of Next.js and Tailwind CSS, we crafted a sleek and responsive frontend that enhances the user experience and fosters a community of learning and exploration.'
        }

        // {
        //     id: 4,
        //     pix: wears,
        //     name: 'JT Wears',
        //     src: 'https://jtwears.com/',
        //     about: 'This is an e commerce store for a sportwear brand in the US.'
        // },

        // {
        //     id: 5,
        //     pix: erilearn,
        //     name: 'Erilearn',
        //     src: 'https://erilearn.com/',
        //     about: 'Erilearn is an Educational platform that enables tech enthusiasts learn any tech skill they need. I developed the frontend from a figma UI design using React, Tailwind Css and Framer motion.'
        // }
    ]
    return (
        <div className='container mx-auto my-12' id='projects'>
            <div className='flex  justify-center px-3 py-2 mt-16 mb-5 '>
                <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>PROJECTS</h1>

            </div>
            <div className='flex flex-wrap flex-col-reverse gap-4 justify-center md:p-24'>
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
                                        <div className=' bg-white  hover:shadow-inner rounded-md py-1 px-3 md:px-4'><a href={item.src} target='blank' className='text-red-800 text-sm hover:text-red-500 md:text-lg  '>View  project</a></div>
                                    </div>

                                </div>
                                <div className='flex flex-col items-start'>
                                    <p className='text-white md:text-lg px-10 sm:px-16'>{item.about}</p>
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