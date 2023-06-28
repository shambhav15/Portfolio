"use client";
import { motion } from "framer-motion";
import game  from "../public/game.png";
import Image from "next/image";


function Projects() {
  const data = [game, ]
  const projects = [1, 2];
  const content = ['The Game Hub  is a React-based platform that allows users to explore, sort, filter, and search for various types of games. Leveraging the latest technologies, the website fetches data from a game database to show content about games to the user in order to explore there favorite games. Discover your next favorite game with ease on the Game Hub.', 'project-2']
   

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen text-white flex overflow-hidden flex-col relative  md:flex-row max-w-full my-auto text-left mx-auto justify-evenly items-center scroll-smooth z-0"
    >
      <h3 className="absolute uppercase top-24 tracking-[15px] text-gray-400 text-2xl">
            </h3>

            <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-5 p-20 md:p-44 h-screen">
                        <Image
                            src={data[i]}
                            width={500}
                            height={400}
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                Project: {i + 1} of {content.length}
                            </h4>
                            <p className="text-lg md:text-left text-center">
                                {content[i]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-orange-400/50 left-0 h-[500px] -skew-y-12">

            </div>
    </motion.div>
    </>
  );
}

export default Projects;
