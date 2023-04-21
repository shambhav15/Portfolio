"use client"
import React from 'react'
import { motion } from 'framer-motion'
function page() {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='text-white h-screen flex flex-col relative md:text-left md:flex-row max-w-7xl px-10 py-20 my-auto text-center mx-auto justify-evenly items-center scroll-smooth'>

            <h3 className='absolute uppercase top-24 tracking-[15px] text-gray-400 text-2xl '>About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity:0,

                }}
                transition={{
                    duration:1.2,
                }}
                whileInView={{opacity:1, x: 0 }}
                viewport={{once:true}}
                src="new.jpg"
                height={400} 
                className=' mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[400px] xl:w-[300px]'
            />
            <div className='space-y-5 px-0 md:px-10 '>
                <h4 className='text-3xl font-semibold py-0'>Here is a <span className='underline decoration-orange-500'>little</span> background</h4>
                <p className='text-sm inline-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, voluptatum unde? Reiciendis consequatur sint id, distinctio omnis hic minus animi quos a, impedit iusto saepe inventore fuga quasi tempora rerum alias eaque cum maxime commodi libero exercitationem non laboriosam. Ex aperiam veniam est itaque corrupti voluptatibus illum non, ducimus tempora debitis molestiae natus animi quibusdam possimus ipsam hic beatae. Dolorem.</p>
            </div>
        </motion.div>
    );
}

export default page
