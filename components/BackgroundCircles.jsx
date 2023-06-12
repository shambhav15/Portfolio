import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      inital={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "30%", "50%", "80%", "10%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping" />

      <div className="absolute border  border-[#333333] rounded-full h-[250px] w-[250px] mt-52  flex" />

      <div className="absolute border  border-[#333333] rounded-full h-[350px] w-[350px] mt-52  flex" />

      <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52  flex animate-pulse opacity-20" />

      <div className="absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-52  flex animate-pulse opacity-20" />
    </motion.div>
  );
}

export default BackgroundCircles;
