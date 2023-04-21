"use client"
import React from 'react'
import {motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
function WorkExperience() {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

        className='text-white h-screen flex flex-col relative md:text-left md:flex-row max-w-7xl px-10 py-20 my-auto text-center mx-auto justify-evenly items-center scroll-smooth xl:flex-row'>

            <h3 className='absolute uppercase top-24 tracking-[15px] text-gray-300 text-2xl'>Experience</h3>

        <div className='w-full flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            {/* Experienced card */}
            {/* Experienced card */}
            {/* Experienced card */}
        </div>

        </motion.div>
    )
}

export default WorkExperience
