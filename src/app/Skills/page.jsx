"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../../../components/Skill'

function page() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration:1.5}}
            className='h-screen text-white flex flex-col relative md:text-left md:flex-row max-w-7xl px-10 py-20 my-auto text-center mx-auto justify-evenly items-center scroll-smooth'>

            <h3 className='absolute uppercase top-24 tracking-[15px] text-gray-400 text-2xl '>Skills
            </h3>
            <h3 className='absolute top-36 text-gray-600 tracking-[3px] text-sm uppercase'>Hover over a skill for current profieciency</h3>

            <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            </div>
        </motion.div>
    )
}

export default page
