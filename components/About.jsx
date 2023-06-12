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
                // src="new.jpg"
                alt='my pic'
                height={400} 
                className=' mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[400px] xl:w-[300px]'
            />
            <div className='space-y-5 px-0 md:px-10 '>
                <h4 className='text-3xl font-semibold py-0'>Here is a <span className='underline decoration-orange-500'>little</span> background</h4>
                <p className='text-sm inline-block'>"Hello there! I'm Shambhav Shandilya, a passionate student and web developer. With a keen interest in creating captivating and functional websites, I've embarked on a journey to master the art of web development. I'm constantly driven by a desire to learn and stay up-to-date with the latest industry trends, ensuring that I can deliver cutting-edge solutions to my clients. Whether it's crafting beautiful user interfaces or writing clean and efficient code, I'm dedicated to creating seamless online experiences. I believe that a website should not only look great but also provide value and accessibility to its users. I strive to achieve this balance in every project I undertake. Join me as we embark on a digital adventure together!"</p>
            </div>
        </motion.div>
    );
}

export default page
