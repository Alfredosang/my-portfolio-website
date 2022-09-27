import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='container mx-auto pb-10'>
                <form className='container flex flex-col justify-center p-5 w-[200px}'>
                    <input type='text' placeholder='Enter your name' className='m-1 p-5 rounded-full outline-none  opacity-90 ' />
                    <input type='email' placeholder='Enter your email' className='m-1 p-5 rounded-full outline-none opacity-90' />
                    <textarea type='text' placeholder='Enter your message' className='m-1 p-5 rounded-full outline-none opacity-90' />

                </form>
                <button className='bg-red-600 text-white px-5 py-3 rounded-full'>Send Message</button>

            </div>
        </div>
    )
}

export default Contact