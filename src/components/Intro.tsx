"use client";
import { m } from "framer-motion";
import React from "react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const shortDes = ` I create beautiful & functional websites for small businesses. Below
are a few service i provide.`;

const Intro = () => {
  return (
    <div
      id="home"
      className="w-full md:h-screen flex justify-start items-center font-Hess mt-[18rem] md:mt-0 pb-60 md:pb-0"
    >
      <div className="flex flex-col text-start items-start space-y-5">
        <m.p
          animate={{ x: [0, 100, 0] }}
          className="primaryText text-4xl lg:text-5xl font-bold capitalize"
        >
          Hi, There I&apos;m hasan
        </m.p>

        <p className="text-5xl lg:text-6xl dark:text-white font-bold tracking-wide text-darkPrimaryColor">
          A
          <span className="primaryText capitalize mx-4">Software Engineer</span>
          . I write your <span className="primaryText">ideas</span> in
          <span className="primaryText"> codes</span>
        </p>

        <m.p
          variants={sentence}
          initial="hidden"
          animate="visible"
          className=" text-sm lg:text-base font-MarkPro font-semibold leading-relaxed tracking-widest lg:tracking-[.2rem]"
        >
          {shortDes.split("").map((char, index) => {
            return (
              <m.span
                className="text-[#142853b3] dark:text-gray-400"
                key={char + "-" + index}
                variants={letter}
              >
                {char}
              </m.span>
            );
          })}
        </m.p>
      </div>
    </div>
  );
};

export default Intro;
