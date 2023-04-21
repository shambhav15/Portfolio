"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
    const [text, count] = useTypewriter({
        words: ["<Hi, This is Shambhav />", "How u doing"],
        loop: true,
        delay: 200,
    });


    return (
        <div className='text-white items-center flex flex-col space-y-8 justify-center h-screen overflow-hidden text-center'>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="i.jpeg" alt="" />
            <div className='z-20'>
                <h2 className='text-gray-500 text-sm uppercase tracking-[3px] pb-2'>Full stack developer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="orange" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href="#Skills">
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href="#Projects">
                        <button className='heroButton'>Projects</button>
                    </Link>

                    <Link href="#WorkExperience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
