"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowDown, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function Intro() {
  return (
    <section
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
              src="@public/maxdonnerport.jpg"
              alt="Max Donner Portfolio"
            ></Image>
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {`Hi, I'm Max. I'm a full-stack developer with 2 years of experience. I
        love building sites & webapps. I tend to use React but am open to other
        libraries and frameworks.`}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-150 active:scale-105 transition"
        >
          Contact me{" "}
          <BsArrowDown className="opacity-70 group-hover:translate-y-1 transition" />{" "}
        </Link>
        <a
          href=""
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV{" "}
          <HiDownload
            className="opacity-60 group-hover:translate-y-1 transition"
            href="/CV.pdf download"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/max-donner/"
          target="_blank"
          className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/donnermax"
          target="_blank"
          className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}