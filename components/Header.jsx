"use client";
import React from "react"
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header= () => {
    return (
        <header className="text-white sticky top-0 flex mx-8 p-4 item-start justify-between z-10 ">
            <motion.div 
            initial ={{
                x: -500,
                opacity: 0,
                scale:0.5,
            }}
            animate ={{
                x: 0,
                opacity: 1,
                scale:0.8,
            }}
            transition={{
                duration: 0.8,
            }}
            className="flex flex-row item-center hover:">
                {/* Social icons */}
                <SocialIcon url="https://www.linkedin.com/in/shambhav-shandilya-a201431ba/" fgColor="grey" bgColor="transparent" target="blank"  className="my-social-icon hover:scale-125  bg-transparent group-hover:bg-orange-500 border border-[#242424] rounded-full hover:border-[#F7AB0A] border-collapse border-spacing-1 border-b-2"/>

                <SocialIcon url="https://github.com/shambhav15" fgColor="grey" bgColor="transparent" target="blank" className="my-social-icon hover:scale-125 hover:blue-500 bg-transparent"  />

                <SocialIcon url="https://www.instagram.com/shandilya_15/" fgColor="grey" bgColor="transparent" target="blank" className="my-social-icon hover:scale-125 hover:blue-500 bg-transparent"/>
                
                <SocialIcon url="https://twitter.com/Shambhav_15" fgColor="grey" bgColor="transparent" target="blank" className="my-social-icon hover:scale-125 hover:blue-500 bg-transparent"/>

            </motion.div>
            <motion.div 
            initial ={{
                x: 500,
                opacity: 0,
                scale:0.5,
            }}
            animate ={{
                x: 0,
                opacity: 1,
                scale:0.8,
            }}
            transition={{
                duration: 0.8,
            }}
            className="flex flex-row items-center text-white ">
                <SocialIcon
                    className="my-social-icon hover:scale-125 hover:blue-500 bg-transparent"
                    network="email"
                    fgColor="grey"
                    bgColor="transparent"
                    target="blank" 
                    />
                <p className="uppercase hidden md:inline-flex text-sm text-white cursor-pointer" >Get in Touch</p>
            </motion.div>
        </header>
    )
}
export default Header 