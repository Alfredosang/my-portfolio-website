import React from 'react'

const Contact = () => {
    return (

        <div className='container flex flex-col justify-center px-24 mx-auto' >
            
            <div>
                <form className=' flex flex-col justify-center p-5 w-[500px}'>
                    <input type='text' placeholder='Enter your name' className='m-1 p-5 rounded-full outline-none  opacity-90 ' />
                    <input type='email' placeholder='Enter your email' className='m-1 p-5 rounded-full outline-none opacity-90' />
                    <textarea type='text' placeholder='Enter your message' className='m-1 p-5 rounded-full outline-none opacity-90' />
                    <button className='bg-red-600 text-white m-1 px-5 py-5 rounded-full'>Send Message</button>


                </form>
            </div>

    



        </div>

    )
}

export default Contact