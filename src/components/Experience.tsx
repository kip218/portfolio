"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { listVariants, itemVariants } from "./MotionVariants";

export default function Experience() {
  return (
    <motion.ul
      className="flex flex-col justify-between w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listVariants}
    >
      <p className="p-4 text-xl md:text-3xl font-bold transition-all duration-1000">
        Previously I have worked at
      </p>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/securityscorecard.png"
              width={512}
              height={512}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            SecurityScorecard
          </div>
          <div className="collapse-content dark:bg-zinc-800">
            <p className="pt-4">as a Signal Intelligence Collections Intern</p>
          </div>
        </div>
      </motion.li>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/rokaf.png"
              width={600}
              height={600}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            Republic of Korea Air Force
          </div>
          <div className="collapse-content dark:bg-zinc-800">
            <p className="pt-4">as an Enlisted Aircraft Mechanic</p>
          </div>
        </div>
      </motion.li>
      <motion.li
        className="py-2 md:py-4 transition-all duration-500"
        variants={itemVariants}
      >
        <div className="collapse collapse-arrow border border-gray-600 hover:bg-gray-100 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700 shadow-lg transition-all duration-500 ease-in-out">
          <input type="checkbox" />
          <div className="collapse-title lg:text-lg font-bold">
            <Image
              src="/nyu.png"
              width={450}
              height={450}
              className="w-10 h-10 inline mr-4"
              alt=""
            />
            NYU TRIO Scholars
          </div>
          <div className="collapse-content dark:bg-zinc-800">
            <p className="pt-4">as a Python Tutor</p>
          </div>
        </div>
      </motion.li>
    </motion.ul>
  );
}
