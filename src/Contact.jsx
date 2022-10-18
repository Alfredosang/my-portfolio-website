import React from 'react'

const Contact = () => {
    return (

        <div className='container  mx-auto mb-10' >
            <div className='flex  justify-center px-3 py-2 mt-5 mb-5 '>
                    <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>Contact me</h1>

                </div>
            
            <div className='flex justify-center '>
                <form className=' flex flex-col justify-center  '>
                    <input type='text' placeholder='Name' className='w-[23rem] md:w-[50rem] m-1 p-3 rounded-full outline-none  opacity-90 ' />
                    <input type='email' placeholder='Email' className='w-[23rem] md:w-[50rem] m-1 p-3 rounded-full outline-none opacity-90' />
                    <textarea type='text' placeholder='Message' className='w-[23rem] md:w-[50rem] m-1 p-3 rounded-full outline-none opacity-90' />
                    <button className='w-[23rem] md:w-[50rem] bg-red-800 text-white m-1 px-5 py-4 rounded-full'>Send Message</button>


                </form>
            </div>

    



        </div>

    )
}

export default Contact