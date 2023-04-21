"use client"
import React from 'react'
import { motion } from 'framer-motion'

let Props = {
    directionLeft: Boolean
};

function skill({ directionLeft }) {
    return (
        <div className='group-relative'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://img.icons8.com/fluency/48/null/node-js.png" alt=""
                className='object-cover w-20 h-20 xl:w-32 xl:h-32 filter item-center easy-in-out'
            />
        </div>
    )
}

export default skill
