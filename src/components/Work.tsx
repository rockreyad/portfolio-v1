"use client";
import { m } from "framer-motion";
import React from "react";
import { FiCodesandbox } from "react-icons/fi";
import Image from "next/image";
import { projects } from "@/utils/data/projects";

const headerVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.5,
      delay: 0.5,
    },
  },
};

const Works = () => {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <div
        id="work"
        className="mt-24 grid gap-8 md:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects &&
          projects.map((project, index) => (
            <m.div
              key={index}
              className="relative rounded-lg overflow-hidden duration-500 transform hover:-translate-y-2 hover:shadow-lg bg-white dark:bg-primaryColor"
              whileHover={{
                scale: 1.05,
                transition: { ease: "easeOut", duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { ease: "easeOut", duration: 0.3 },
              }}
            >
              <Image
                src={project.image}
                width={500}
                height={500}
                className="h-60 w-full object-cover"
                alt=""
              />

              <div className="absolute top-2 right-2">
                <a href={project.url} rel="noreferrer" target={"_blank"}>
                  <FiCodesandbox className="text-xl text-gray-600 hover:text-rose-400" />
                </a>
              </div>

              <div className="px-4 py-5">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-100 mb-4">
                  {project.name}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {project.useTool &&
                    project.useTool.split(",").map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-200 dark:bg-[#8080802d] rounded-lg px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-100"
                      >
                        {item.trim()}
                      </li>
                    ))}
                </ul>
              </div>
            </m.div>
          ))}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="relative">
      <m.h1
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="font-AeroSans text-[#576F72] dark:text-[#CCD6A6] text-3xl lg:text-5xl font-bold tracking-tight"
      >
        Featured Projects
      </m.h1>

      <m.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="mt-6 h-1 w-20 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"
      />
    </div>
  );
};

export default Works;
