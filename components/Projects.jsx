"use client"
import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen text-white flex overflow-hidden flex-col relative  md:flex-row max-w-full my-auto text-left mx-auto justify-evenly items-center scroll-smooth z-0'>

            <h3 className='absolute uppercase top-24 tracking-[15px] text-gray-400 text-2xl'>Projects
            </h3>

            <div className='relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>

                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-5 p-20 md:p-44 h-screen'>

                        <motion.img 
                        initial={{y: -300, opacity:0}}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{once: true}}
                        className='py-20' src="https://img.freepik.com/free-photo/web-design-website-coding-concept_53876-64988.jpg?w=900&t=st=1682279659~exp=1682280259~hmac=659cf5754154aab967d27cd2d37978db4026b1b8f53e39919fa08aec9c53cc5a" alt="" width={500} height={400} />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>Project: {i + 1} of {projects.length}</h4>
                            <p className='text-lg md:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus placeat consectetur neque, repellendus quae ad optio, praesentium reiciendis id eligendi non consequuntur. Maiores quia excepturi non ab et illum porro amet ea expedita repellendus ducimus impedit obcaecati ipsa placeat, magnam sapiente ipsum asperiores? Voluptates.</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-orange-400/50 left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
    )
}

export default Projects
