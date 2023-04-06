"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} rleative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    ></motion.div>
    <TypingText title="| People on the World" textStyles="text-center" />
    <TitleText
      title={
        <>
          Track friends around you and invite them to play together in the same
          world
        </>
      }
      textStyles="text-center"
    />
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
    >
      <img src="/map.png" alt="map" className="w-full h-full object-cover" />
      <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img src="people-01.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img src="people-02.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img src="people-03.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-[45%] left-[15%] rounded-lg shadow-md overflow-hidden  w-[228px] h-[186px] mt-[-8px] ml-[-8px] blur bg-gradient-to-r from-purple-800 via-pink-800 to-blue-800"></div>
      <div className="absolute top-[45%] left-[15%] rounded-lg shadow-md overflow-hidden w-[212px] h-[170px]">
        <div className="">
          <div className="">
            <p className="absolute bottom-4 left-8 text-white">
              The Upside down
            </p>
          </div>
          <div class="absolute bottom-[50%] left-[10%] flex flex-row-reverse items-center">
            <div className="flex">
              <div class="absolute z-30 h-7 w-7 rounded-full bg-gray-400 bg-[url('/new/Ellipse-01.png')] "></div>
              <div class="absolute z-20 ml-4 h-7 w-7 rounded-full bg-gray-500 bg-[url('/new/Ellipse-02.png')] "></div>
              <div class="absolute z-10 ml-8 h-7 w-7 rounded-full bg-gray-600 bg-[url('/new/Ellipse-03.png')] "></div>
            </div>
          </div>
          <img
            src="new/mask-group-01.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default World;
