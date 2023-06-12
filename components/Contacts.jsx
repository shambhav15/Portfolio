"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

function Contacts() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen text-white flex overflow-hidden flex-col relative  md:flex-row max-w-7xl my-auto text-left mx-auto justify-evenly items-center scroll-smooth z-0'>

            <h3 className='absolute uppercase top-24 tracking-[15px] text-gray-400 text-2xl'>Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what u need. <span className='underline '>Lets Talk</span>
                </h4>

                <div className=''>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-orange-400 h-8 w-8 animate-pulse' />
                        <p className='text-2xl'>+91-8544322377</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center py-2'>
                        <MapPinIcon className='text-orange-400 h-8 w-8 animate-pulse' />
                        <p className='text-2xl'>Kiit college</p>
                    </div>

                    <div className=' cursor-pointer flex items-center space-x-5 justify-center py-2'>
                        <EnvelopeIcon className=' text-orange-400 h-8 w-8 animate-pulse' />
                        <p className='text-2xl'><a href='mailto:shambhavse15@gmail.com' target='blank'>shambhavse15@gmail.com</a></p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 mx-auto w-fit' >
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='contactInput' type="text" />
                        <input placeholder='Email' className='contactInput' type="email"  />
                    </div>
                    <input placeholder='Subject' className='contactInput' type="text" />
                    <textarea placeholder='Message' className='contactInput' name="" ></textarea>
                    <button type='submit' className=' text-black bg-orange-500 rounded-md font-bold py-5 px-10 text-lg hover:bg-orange-700 hover:text-black'>Submit</button>
                </form>

            </div>
        </motion.div>
    )
}

export default Contacts
