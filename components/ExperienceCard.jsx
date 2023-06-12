import React from 'react'
import { motion } from 'framer-motion'

function ExperienceCard() {
    return (
        <article className=' md:my-10 flex flex-col items-center rounded-lg flex-shrink-0 space-y-7 w-[300px] h-[400px] xl:w-[500px] snap-center bg-[#292929] item-center
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration: 1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
             className='w-32 h-32 rounded-full xl:h[200px] sl:w-[200px] object-center object-cover my-10'
             src="h.jpeg" alt="" />

             <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO </h4>
                <p className='font-bold text-2xl mt-1'>unemployed</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-7 w-7 rounded-full' src="https://img.icons8.com/fluency/48/000000/visual-studio-code-2019.png" alt="" />
                    <img className='h-7 w-7 rounded-full' src="https://img.icons8.com/fluency/48/null/javascript.png"/>
                    <img className='h-7 w-7 rounded-full' src="https://img.icons8.com/ultraviolet/40/null/react--v1.png"/>
                    <img className='h-7 w-7 rounded-full' src="https://img.icons8.com/fluency/48/null/node-js.png"/>
                    {/* tech used */}
                    {/* tech used */}
                    {/* tech used */}
                    {/* tech used */}
                </div>
                <p>Started ended</p>
                <ul className='list-disc space-y-4 text-lg ml-5'>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
             </div>
        </article>
    )
}

export default ExperienceCard
