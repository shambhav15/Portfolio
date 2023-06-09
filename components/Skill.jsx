"use client"
import React from 'react'
import { motion } from 'framer-motion'

let Props = {
    directionLeft: Boolean
};

function skill({ directionLeft }) {
    return (
        <div className='group flex relative cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://img.icons8.com/fluency/48/null/node-js.png" alt=""

                className='object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32   border border-gray-500 rounded-full filter group-hover:grayscale transition duration-300  easy-in-out '
            />
            <div className='absolute opacity-0  transition duration-300 group-hover:opacity-80 group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>

                <div className='flex items-center justify-center h-full'>

                    <p className='text-3xl font-bold text-black opacity-100' >
                        100%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default skill
