import React from 'react'

const Contact = () => {
    return (

        <div className='container  mx-auto mb-10' >
            <div className='flex  justify-center px-3 py-2 mt-5 mb-5 '>
                    <h1 className='text-white font-bold text-2xl border-b-4 border-red-800 '>Contact me</h1>

                </div>
            
            <div className='flex justify-center '>
                <form action='https://getform.io/f/c7f0dcef-a313-4d5c-9284-0e5472fb2e09' method='POST' className=' flex flex-col justify-center  '>
                    <input name='name' type='text' placeholder='Name' className='w-[22rem] md:w-[50rem] m-1 p-3 rounded-md outline-none  opacity-90 ' />
                    <input name='email' type='email' placeholder='Email' className='w-[22rem] md:w-[50rem] m-1 p-3 rounded-md outline-none opacity-90' />
                    <textarea name='message' type='text' placeholder='Message' className='w-[22rem] md:w-[50rem] m-1 p-3 rounded-md outline-none opacity-90' />
                    <button className='w-[22rem] md:w-[50rem] bg-red-800 text-white m-1 px-5 py-4 rounded-md hover:bg-white/70 hover:text-black duration-200'>Send Message</button>


                </form>
            </div>

    



        </div>

    )
}

export default Contact